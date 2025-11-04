import { useState } from 'react';
import {
  LayoutDashboard,
  Store,
  Map,
  FileText,
  Menu,
  X,
} from 'lucide-react';
import { DashboardPage } from './components/DashboardPage';
import { AvailableShopsPage } from './components/AvailableShopsPage';
import { ShopStatusPage } from './components/ShopStatusPage';
import { BookingFormPage } from './components/BookingFormPage';
import { SuccessPopup } from './components/SuccessPopup';
import { Button } from './components/ui/button';

type PageType = 'dashboard' | 'available' | 'status' | 'booking';

interface NavItem {
  id: PageType;
  label: string;
  icon: any;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'available', label: 'Available Shops', icon: Store },
    { id: 'status', label: 'Shop Status', icon: Map },
    { id: 'booking', label: 'Book a Shop', icon: FileText },
  ];

  const handleBookingSuccess = () => {
    setShowSuccessPopup(true);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'available':
        return <AvailableShopsPage />;
      case 'status':
        return <ShopStatusPage />;
      case 'booking':
        return <BookingFormPage onBookingSuccess={handleBookingSuccess} />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Store className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-green-900">The Premium Royal City</h1>
              <p className="text-xs text-gray-500">Booking Management System</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                className={
                  currentPage === item.id
                    ? 'bg-green-600 hover:bg-green-700'
                    : ''
                }
                onClick={() => setCurrentPage(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? 'default' : 'ghost'}
                  className={
                    currentPage === item.id
                      ? 'bg-green-600 hover:bg-green-700 justify-start'
                      : 'justify-start'
                  }
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="px-4 lg:px-8 py-8 max-w-7xl mx-auto">
        {renderPage()}
      </main>

      {/* Success Popup */}
      <SuccessPopup isOpen={showSuccessPopup} onClose={handleCloseSuccessPopup} />
    </div>
  );
}
