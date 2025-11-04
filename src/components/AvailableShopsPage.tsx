import { useState } from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { shops, categories, floors } from '../data/mockData';

export function AvailableShopsPage() {
  const [selectedFloor, setSelectedFloor] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSqft, setSelectedSqft] = useState<string>('all');

  const filteredShops = shops.filter((shop) => {
    if (selectedFloor !== 'all' && shop.floor !== parseInt(selectedFloor, 10)) {
      return false;
    }
    if (selectedCategory !== 'all' && shop.category !== selectedCategory) {
      return false;
    }
    if (selectedSqft !== 'all') {
      const sqftRange = selectedSqft.split('-');
      const min = parseInt(sqftRange[0], 10);
      const max = parseInt(sqftRange[1], 10);

      // Ensure shop.sqft is treated as a number (handles strings like "400" or "400 sqft")
      const shopSqft =
        typeof shop.sqft === 'string'
          ? parseInt(shop.sqft.replace(/\D/g, ''), 10)
          : shop.sqft;

      if (isNaN(shopSqft) || isNaN(min) || isNaN(max)) {
        return false;
      }

      if (shopSqft < min || shopSqft > max) {
        return false;
      }
    }
    return true;
  });

  const handleReset = () => {
    setSelectedFloor('all');
    setSelectedCategory('all');
    setSelectedSqft('all');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2">Available Shops</h1>
        <p className="text-gray-600">Browse and filter available shops</p>
      </div>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Filter Shops</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Floor No.</label>
              <Select value={selectedFloor} onValueChange={setSelectedFloor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select floor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Floors</SelectItem>
                  {floors.map((floor) => (
                    <SelectItem key={floor} value={floor.toString()}>
                      Floor {floor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Shop Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Square Feet (Sqft)</label>
              <Select value={selectedSqft} onValueChange={setSelectedSqft}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="0-400">0 - 400 sqft</SelectItem>
                  <SelectItem value="401-500">401 - 500 sqft</SelectItem>
                  <SelectItem value="501-600">501 - 600 sqft</SelectItem>
                  <SelectItem value="601-1000">601+ sqft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600 opacity-0">Actions</label>
              <div className="flex gap-2">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
                <Button variant="outline" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>
            Shop Listings ({filteredShops.length} {filteredShops.length === 1 ? 'shop' : 'shops'})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shop Number</TableHead>
                <TableHead>Floor</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Square Feet</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredShops.map((shop) => (
                <TableRow key={shop.id}>
                  <TableCell>{shop.shopNumber}</TableCell>
                  <TableCell>Floor {shop.floor}</TableCell>
                  <TableCell>{shop.category}</TableCell>
                  <TableCell>{shop.sqft} sqft</TableCell>
                  <TableCell>${shop.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        shop.status === 'available'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {shop.status === 'available' ? 'Available' : 'Booked'}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
