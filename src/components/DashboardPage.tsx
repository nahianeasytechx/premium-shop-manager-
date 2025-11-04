import { Store, Grid3x3, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { shops } from '../data/mockData';

export function DashboardPage() {
  const totalShops = shops.length;
  const availableShops = shops.filter(s => s.status === 'available').length;
  const bookedShops = shops.filter(s => s.status === 'booked').length;
  const categories = [...new Set(shops.map(s => s.category))].length;

  const stats = [
    {
      title: 'Total Shops',
      value: totalShops,
      icon: Store,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Total Categories',
      value: categories,
      icon: Grid3x3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Available Shops',
      value: availableShops,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Booked Shops',
      value: bookedShops,
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome to your Booking Management System</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className={`${stat.color}`}>{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {shops.slice(0, 5).map((shop) => (
                <div key={shop.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p>{shop.shopNumber}</p>
                    <p className="text-sm text-gray-500">{shop.category} • Floor {shop.floor}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      shop.status === 'available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {shop.status === 'available' ? 'Available' : 'Booked'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Shop Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Retail', 'Food', 'Service'].map((category) => {
                const count = shops.filter(s => s.category === category).length;
                const percentage = (count / totalShops) * 100;
                return (
                  <div key={category}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{category}</span>
                      <span className="text-sm text-gray-500">{count} shops</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
