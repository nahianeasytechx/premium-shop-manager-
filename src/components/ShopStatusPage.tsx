import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { shops, floors } from '../data/mockData';

export function ShopStatusPage() {
  const getShopsByFloor = (floor: number) => {
    return shops.filter((shop) => shop.floor === floor);
  };

  const getFloorName = (floor: number) => {
    switch(floor) {
      case 0: return 'Ground Floor';
      case 1: return '1st Floor';
      case 2: return '2nd Floor';
      default: return `Floor ${floor}`;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2">Shop Status</h1>
        <p className="text-gray-600">Visual overview of all shop statuses</p>
      </div>

      <div className="flex gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span className="text-sm">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span className="text-sm">Booked</span>
        </div>
      </div>

      <div className="space-y-6">
        {floors.map((floor) => {
          const floorShops = getShopsByFloor(floor);
          return (
            <Card key={floor} className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>{getFloorName(floor)}</CardTitle> {/* Updated this line */}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {floorShops.map((shop) => (
                    <div
                      key={shop.id}
                      className={`p-6 rounded-lg border-2 flex flex-col items-center justify-center space-y-2 transition-all hover:shadow-lg cursor-pointer ${
                        shop.status === 'available'
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          shop.status === 'available' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      >
                        <span className="text-white">{shop.shopNumber.split('-')[1]}</span>
                      </div>
                      <p className="text-sm">{shop.shopNumber}</p>
                      <Badge
                        variant="outline"
                        className={
                          shop.status === 'available'
                            ? 'border-green-600 text-green-700'
                            : 'border-red-600 text-red-700'
                        }
                      >
                        {shop.status === 'available' ? 'Available' : 'Booked'}
                      </Badge>
                      <p className="text-xs text-gray-500">{shop.sqft}</p> {/* Removed "sqft" since it's already in the string */}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Status Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {floors.map((floor) => {
              const floorShops = getShopsByFloor(floor);
              const available = floorShops.filter((s) => s.status === 'available').length;
              const booked = floorShops.filter((s) => s.status === 'booked').length;
              return (
                <div key={floor} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="mb-3">{getFloorName(floor)}</h3> {/* Updated this line */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Available:</span>
                      <span className="text-green-600">{available}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Booked:</span>
                      <span className="text-red-600">{booked}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total:</span>
                      <span>{floorShops.length}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}