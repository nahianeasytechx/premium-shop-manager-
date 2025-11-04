import { CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <DialogTitle className="text-center text-green-900">
            Booking Successful!
          </DialogTitle>
          <DialogDescription className="text-center">
            Your shop has been booked successfully. You will receive a confirmation email shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-center text-green-800">
              Booking Reference: <span className="font-semibold">BK-{Date.now().toString().slice(-6)}</span>
            </p>
          </div>
          <Button
            onClick={onClose}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Go Back to Dashboard
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
