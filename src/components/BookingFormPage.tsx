import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { shops } from '../data/mockData';

interface BookingFormPageProps {
  onBookingSuccess: () => void;
}

export function BookingFormPage({ onBookingSuccess }: BookingFormPageProps) {
  const [formData, setFormData] = useState({
    shopId: '',
    name: '',
    profession: '',
    mobile: '',
    address: '',
    bookingMoney: '',
  });

  const availableShops = shops.filter((shop) => shop.status === 'available');

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    console.log('Booking submitted:', formData);
    onBookingSuccess();
    // Reset form
    setFormData({
      shopId: '',
      name: '',
      profession: '',
      mobile: '',
      address: '',
      bookingMoney: '',
    });
  };

  const isFormValid = () => {
    return (
      formData.shopId &&
      formData.name &&
      formData.profession &&
      formData.mobile &&
      formData.address &&
      formData.bookingMoney
    );
  };

  return (
    <div className="container mx-auto space-y-6">
      <div className='text-center'>
        <h1 className="mb-2">Book a Shop</h1>
        <p className="text-gray-600">Fill in the details to complete your booking Using this google form</p>
     
     <div className="max-w-2xl mx-auto mt-4">
     <div className="ml-2">
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScIafrFk73laV93JSF42gvNVV7V9AIWbvXH8jFYFkoummIeiw/viewform?embedded=true" width="100%" height="1094" frameBorder="0">
       Loading…
       </iframe>
     </div>
     </div>
      </div>
      {/* <div className="max-w-2xl mx-auto">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Booking Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="shopId">Select Shop *</Label>
                <Select value={formData.shopId} onValueChange={(value: string) => handleChange('shopId', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a shop" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableShops.map((shop) => (
                      <SelectItem key={shop.id} value={shop.id.toString()}>
                        {shop.shopNumber} - Floor {shop.floor} - {shop.sqft} sqft - ${shop.price.toLocaleString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profession">Profession *</Label>
                <Input
                  id="profession"
                  type="text"
                  placeholder="Enter your profession"
                  value={formData.profession}
                  onChange={(e) => handleChange('profession', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={formData.mobile}
                  onChange={(e) => handleChange('mobile', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bookingMoney">Booking Money ($) *</Label>
                <Input
                  id="bookingMoney"
                  type="number"
                  placeholder="Enter booking amount"
                  value={formData.bookingMoney}
                  onChange={(e) => handleChange('bookingMoney', e.target.value)}
                  required
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!isFormValid()}
                >
                  Submit Booking
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md mt-6 bg-blue-50">
          <CardContent className="pt-6">
            <h3 className="mb-2 text-blue-900">Important Information</h3>
            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li>All fields marked with * are mandatory</li>
              <li>Booking money is non-refundable</li>
              <li>You will receive a confirmation email after booking</li>
              <li>Please keep your booking reference number safe</li>
            </ul>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}
