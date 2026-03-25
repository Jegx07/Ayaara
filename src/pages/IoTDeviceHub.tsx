import React from 'react';
import { Activity, BatteryMedium, HeartPulse, RefreshCcw, Thermometer, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import StudentPortalLayout from '@/components/StudentPortalLayout';

const devices = [
  { name: 'MotiTrack Wristband', status: 'Connected', battery: 85, sync: '2 min ago', heart: '72 bpm', temp: '98.6F', steps: '8,450' },
  { name: 'Desk Sensor', status: 'Connected', battery: 67, sync: '5 min ago', heart: '-', temp: '72.5F', steps: '-' },
  { name: 'Study Monitor', status: 'Disconnected', battery: 23, sync: '2 hr ago', heart: '-', temp: '-', steps: '-' },
];

export default function IoTDeviceHub() {
  return (
    <StudentPortalLayout
      title="IoT Devices"
      subtitle="Monitor connected hardware, vitals, and sync health in real time"
      actions={<Button className="bg-[#1d7d54] hover:bg-[#145d3f]">Scan Devices</Button>}
    >
      <section className="grid gap-4 lg:grid-cols-3">
        {devices.map((device) => (
          <article key={device.name} className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg font-semibold text-[#18271d]">{device.name}</p>
                <p className="mt-1 text-xs text-[#76877e]">Last sync: {device.sync}</p>
              </div>
              <span className="rounded-md bg-[#f0f4f1] px-2 py-1 text-xs font-semibold text-[#1d7d54]">{device.status}</span>
            </div>
            <div className="mb-3">
              <div className="mb-1 flex items-center justify-between text-xs text-[#76877e]">
                <span className="flex items-center gap-1"><BatteryMedium className="h-4 w-4" /> Battery</span>
                <span>{device.battery}%</span>
              </div>
              <Progress value={device.battery} className="h-2 bg-[#e7ece8]" />
            </div>
            <div className="space-y-2 rounded-xl border border-[#e3e9e5] bg-white p-3 text-sm text-[#425248]">
              <p className="flex items-center justify-between"><span className="flex items-center gap-2"><HeartPulse className="h-4 w-4 text-[#1d7d54]" /> Heart Rate</span><span>{device.heart}</span></p>
              <p className="flex items-center justify-between"><span className="flex items-center gap-2"><Thermometer className="h-4 w-4 text-[#1d7d54]" /> Temperature</span><span>{device.temp}</span></p>
              <p className="flex items-center justify-between"><span className="flex items-center gap-2"><Activity className="h-4 w-4 text-[#1d7d54]" /> Steps</span><span>{device.steps}</span></p>
            </div>
            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-[#1d7d54] px-3 py-2 text-sm font-semibold text-[#1d7d54] hover:bg-[#f0f4f1]">
              <RefreshCcw className="h-4 w-4" /> Sync Now
            </button>
          </article>
        ))}
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-5">
          <p className="font-display text-xl font-semibold text-[#18271d]">Connection Summary</p>
          <div className="mt-3 grid gap-2 text-sm">
            <div className="flex items-center justify-between rounded-lg border border-[#e3e9e5] bg-white px-3 py-2">
              <span className="flex items-center gap-2 text-[#425248]"><Wifi className="h-4 w-4 text-[#1d7d54]" /> Devices online</span>
              <span className="font-semibold text-[#1d7d54]">2 / 3</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-[#e3e9e5] bg-white px-3 py-2">
              <span className="text-[#425248]">Auto-sync mode</span>
              <span className="font-semibold text-[#1d7d54]">Enabled</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-[#e3e9e5] bg-white px-3 py-2">
              <span className="text-[#425248]">Signal reliability</span>
              <span className="font-semibold text-[#1d7d54]">High</span>
            </div>
          </div>
        </article>
      </section>
    </StudentPortalLayout>
  );
}
