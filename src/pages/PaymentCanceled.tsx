import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PaymentCanceled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8 max-w-md">
        <div className="flex justify-center">
          <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-4">
            <XCircle className="h-16 w-16 text-red-600 dark:text-red-400" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Payment Canceled</h1>
        <p className="text-muted-foreground">
          Your payment was canceled. No charges were made.
          Feel free to continue shopping or try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate("/")} size="lg">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCanceled;
