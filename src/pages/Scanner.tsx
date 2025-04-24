
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Beacon {
  id: string;
  name: string;
  rssi: number;
}

export default function Scanner() {
  const [scanning, setScanning] = useState(false);
  const [beacons, setBeacons] = useState<Beacon[]>([]);
  const navigate = useNavigate();

  // Simulate beacon scanning
  const startScan = () => {
    setScanning(true);
    // Simulate finding beacons
    setTimeout(() => {
      setBeacons([
        { id: "beacon1", name: "Office Entrance", rssi: -70 },
        { id: "beacon2", name: "Meeting Room", rssi: -85 },
        { id: "beacon3", name: "Cafeteria", rssi: -90 },
      ]);
      setScanning(false);
    }, 2000);
  };

  const selectBeacon = (beacon: Beacon) => {
    navigate(`/attendance/${beacon.id}`, { state: { beaconName: beacon.name } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Scan for Beacons</h1>
      
      <Button 
        onClick={startScan} 
        disabled={scanning}
        className="mb-6"
      >
        <Wifi className="mr-2" />
        {scanning ? "Scanning..." : "Start Scan"}
      </Button>

      <div className="grid gap-4">
        {beacons.map((beacon) => (
          <Card key={beacon.id} className="hover:bg-accent cursor-pointer" onClick={() => selectBeacon(beacon)}>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{beacon.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Signal Strength: {beacon.rssi} dBm
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
