
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Attendance() {
  const { beaconId } = useParams();
  const location = useLocation();
  const { toast } = useToast();
  const [lastAction, setLastAction] = useState<'in' | 'out' | null>(null);
  const beaconName = location.state?.beaconName || "Unknown Location";

  const handleAttendance = (type: 'in' | 'out') => {
    // Simulate recording attendance
    setLastAction(type);
    toast({
      title: `Clocked ${type} successfully`,
      description: `Location: ${beaconName}`,
      duration: 3000,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Attendance - {beaconName}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => handleAttendance('in')}
              disabled={lastAction === 'in'}
              className="w-full"
            >
              <Clock className="mr-2" />
              Clock In
            </Button>
            <Button
              onClick={() => handleAttendance('out')}
              disabled={lastAction === 'out'}
              className="w-full"
              variant="secondary"
            >
              <Check className="mr-2" />
              Clock Out
            </Button>
          </div>

          {lastAction && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              Last action: Clocked {lastAction} at {new Date().toLocaleTimeString()}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
