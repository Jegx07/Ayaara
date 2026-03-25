import React, { useState, useEffect } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Wifi, 
  Activity, 
  Battery, 
  Bluetooth, 
  Zap, 
  Heart, 
  Thermometer, 
  Watch,
  Settings,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Plus
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface IoTDevice {
  id: string;
  name: string;
  type: 'wristband' | 'sensor' | 'monitor';
  status: 'connected' | 'disconnected' | 'error';
  battery: number;
  lastSync: string;
  data: {
    heartRate?: number;
    temperature?: number;
    steps?: number;
    calories?: number;
  };
}

const mockDevices: IoTDevice[] = [
  {
    id: '1',
    name: 'MotiTrack Wristband',
    type: 'wristband',
    status: 'connected',
    battery: 85,
    lastSync: '2 minutes ago',
    data: {
      heartRate: 72,
      temperature: 98.6,
      steps: 8450,
      calories: 324
    }
  },
  {
    id: '2',
    name: 'Desk Sensor',
    type: 'sensor',
    status: 'connected',
    battery: 67,
    lastSync: '5 minutes ago',
    data: {
      temperature: 72.5
    }
  },
  {
    id: '3',
    name: 'Study Monitor',
    type: 'monitor',
    status: 'disconnected',
    battery: 23,
    lastSync: '2 hours ago',
    data: {}
  }
];

export default function IoTDeviceHub() {
  const [devices, setDevices] = useState<IoTDevice[]>(mockDevices);
  const [isScanning, setIsScanning] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  const { toast } = useToast();

  const scanForDevices = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan Complete",
        description: "Found 3 devices in range.",
      });
    }, 3000);
  };

  const syncDevice = (deviceId: string) => {
    setDevices(prev => prev.map(device => 
      device.id === deviceId 
        ? { ...device, lastSync: 'Just now' }
        : device
    ));
    toast({
      title: "Device Synced",
      description: "Data synchronized successfully.",
    });
  };

  const connectDevice = (deviceId: string) => {
    setDevices(prev => prev.map(device => 
      device.id === deviceId 
        ? { ...device, status: 'connected' as const, lastSync: 'Just now' }
        : device
    ));
    toast({
      title: "Device Connected",
      description: "Device is now online and transmitting data.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-success';
      case 'disconnected': return 'text-muted-foreground';
      case 'error': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle2 className="w-4 h-4 text-success" />;
      case 'disconnected': return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
      case 'error': return <AlertCircle className="w-4 h-4 text-destructive" />;
      default: return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'wristband': return <Watch className="w-6 h-6" />;
      case 'sensor': return <Activity className="w-6 h-6" />;
      case 'monitor': return <Zap className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar userRole="student" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 p-6 space-y-6`}>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Wifi className="w-8 h-8" />
            IoT Device Hub
          </h1>
          <p className="text-muted-foreground">Manage and monitor your connected devices</p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={scanForDevices} 
            disabled={isScanning}
            className="bg-gradient-hero"
          >
            {isScanning ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Plus className="w-4 h-4 mr-2" />
            )}
            {isScanning ? 'Scanning...' : 'Scan for Devices'}
          </Button>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="auto-sync"
              checked={autoSync}
              onCheckedChange={setAutoSync}
            />
            <Label htmlFor="auto-sync">Auto Sync</Label>
          </div>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device) => (
            <Card key={device.id} className="relative">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getDeviceIcon(device.type)}
                    {device.name}
                  </div>
                  {getStatusIcon(device.status)}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Badge variant="outline" className="capitalize">
                    {device.type}
                  </Badge>
                  <span className={getStatusColor(device.status)}>
                    {device.status}
                  </span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Battery */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Battery className="w-4 h-4" />
                      Battery
                    </div>
                    <span>{device.battery}%</span>
                  </div>
                  <Progress value={device.battery} className="h-2" />
                </div>

                <Separator />

                {/* Device Data */}
                {Object.keys(device.data).length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Live Data</h4>
                    {device.data.heartRate && (
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4 text-destructive" />
                          Heart Rate
                        </div>
                        <span>{device.data.heartRate} BPM</span>
                      </div>
                    )}
                    {device.data.temperature && (
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Thermometer className="w-4 h-4 text-accent" />
                          Temperature
                        </div>
                        <span>{device.data.temperature}°F</span>
                      </div>
                    )}
                    {device.data.steps && (
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Activity className="w-4 h-4 text-success" />
                          Steps
                        </div>
                        <span>{device.data.steps.toLocaleString()}</span>
                      </div>
                    )}
                    {device.data.calories && (
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Zap className="w-4 h-4 text-primary" />
                          Calories
                        </div>
                        <span>{device.data.calories}</span>
                      </div>
                    )}
                  </div>
                )}

                <Separator />

                {/* Last Sync */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Last sync:</span>
                  <span>{device.lastSync}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {device.status === 'connected' ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => syncDevice(device.id)}
                      className="flex-1"
                    >
                      <RefreshCw className="w-4 h-4 mr-1" />
                      Sync
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      onClick={() => connectDevice(device.id)}
                      className="flex-1"
                    >
                      <Bluetooth className="w-4 h-4 mr-1" />
                      Connect
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add New Device */}
        <Card className="border-dashed border-2 border-muted-foreground/25">
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-center space-y-2">
              <Plus className="w-8 h-8 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Add a new IoT device</p>
              <Button variant="outline" onClick={scanForDevices}>
                Scan for Devices
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
