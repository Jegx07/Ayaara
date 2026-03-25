import React, { useState } from 'react';
import { AppSidebar } from '@/components/AppSidebar';
import { Separator } from '@/components/ui/separator';
import { Settings, User, Bell, Shield, CreditCard, Download, Moon, Sun, LogOut, Lock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@university.edu',
    department: 'Computer Science',
    phone: '+1 (555) 123-4567'
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    weekly_reports: true
  });
  
  const [darkMode, setDarkMode] = useState(false);
  const [isTrialActive, setIsTrialActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { toast } = useToast();

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your account information has been saved successfully.",
    });
  };

  const handleStartTrial = () => {
    setIsTrialActive(true);
    toast({
      title: "Free Trial Started!",
      description: "You now have access to premium features for 14 days.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Export Started",
      description: "Your data export will be ready shortly and sent to your email.",
    });
  };

  return (
    <div className="flex min-h-screen w-full bg-[#edf1fb] text-[#222741]">
      <AppSidebar userRole="student" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300`}>
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-white/70 bg-white/55 backdrop-blur-xl">
          <div className="flex h-16 items-center px-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#ecefff]">
                <Settings className="w-5 h-5 text-[#525ad2]" />
              </div>
              <div>
                <h1 className="text-lg font-bold font-display text-[#222741]">Settings</h1>
                <p className="text-xs text-[#6b75a1]">Manage your account and preferences</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6 space-y-6">
          {/* Premium Section */}
          <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-[#e9ecff] to-[#f4f2ff] p-6 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#5c5fdc]/10">
                  <CreditCard className="w-6 h-6 text-[#525ad2]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#222741] mb-1">Premium Features</h2>
                  <p className="text-sm text-[#6b75a1]">
                    Unlock advanced analytics, AI insights, and premium reporting
                  </p>
                  {isTrialActive && (
                    <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#5c5fdc] text-white text-xs font-semibold">
                      ✓ 14 Days Trial Active
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={handleStartTrial}
                disabled={isTrialActive}
                className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  isTrialActive
                    ? 'bg-[#5c5fdc] text-white opacity-60 cursor-default'
                    : 'bg-[#5c5fdc] text-white hover:bg-[#4a50cf]'
                }`}
              >
                {isTrialActive ? 'Trial Active' : 'Start Free Trial'}
              </button>
            </div>
          </div>

          {/* Main Settings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Settings */}
            <div className="rounded-2xl border border-white/70 bg-white/65 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#ecefff]">
                  <User className="w-5 h-5 text-[#525ad2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#222741]">Profile Information</h3>
                  <p className="text-xs text-[#6b75a1]">Update your personal details</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#222741] block mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-white/80 bg-white/80 text-[#222741] text-sm focus:outline-none focus:border-[#5c5fdc] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#222741] block mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-white/80 bg-white/80 text-[#222741] text-sm focus:outline-none focus:border-[#5c5fdc] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#222741] block mb-2">Department</label>
                  <input
                    type="text"
                    value={profile.department}
                    onChange={(e) => setProfile({...profile, department: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-white/80 bg-white/80 text-[#222741] text-sm focus:outline-none focus:border-[#5c5fdc] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#222741] block mb-2">Phone</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-white/80 bg-white/80 text-[#222741] text-sm focus:outline-none focus:border-[#5c5fdc] focus:bg-white transition-colors"
                  />
                </div>
                <button
                  onClick={handleSaveProfile}
                  className="w-full px-4 py-2 rounded-lg bg-[#5c5fdc] text-white font-semibold text-sm hover:bg-[#4a50cf] transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>

            {/* Notifications Settings */}
            <div className="rounded-2xl border border-white/70 bg-white/65 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#ecefff]">
                  <Bell className="w-5 h-5 text-[#525ad2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#222741]">Notifications</h3>
                  <p className="text-xs text-[#6b75a1]">Manage how you receive updates</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
                  { key: 'push', label: 'Push Notifications', desc: 'Browser notifications' },
                  { key: 'sms', label: 'SMS Alerts', desc: 'Critical alerts via SMS' },
                  { key: 'weekly_reports', label: 'Weekly Reports', desc: 'Summary emails each week' },
                ].map((item, idx) => (
                  <div key={item.key}>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="text-sm font-semibold text-[#222741]">{item.label}</p>
                        <p className="text-xs text-[#6b75a1]">{item.desc}</p>
                      </div>
                      <button
                        onClick={() => setNotifications({...notifications, [item.key]: !notifications[item.key as keyof typeof notifications]})}
                        className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${
                          notifications[item.key as keyof typeof notifications]
                            ? 'bg-[#5c5fdc]'
                            : 'bg-[#d6dbf4]'
                        }`}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                            notifications[item.key as keyof typeof notifications]
                              ? 'translate-x-5'
                              : 'translate-x-0.5'
                          }`}
                        />
                      </button>
                    </div>
                    {idx < 3 && <div className="border-t border-white/70" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Appearance & Security */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Appearance */}
            <div className="rounded-2xl border border-white/70 bg-white/65 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#ecefff]">
                  {darkMode ? (
                    <Moon className="w-5 h-5 text-[#525ad2]" />
                  ) : (
                    <Sun className="w-5 h-5 text-[#525ad2]" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[#222741]">Appearance</h3>
                  <p className="text-xs text-[#6b75a1]">Customize the look and feel</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-white/80 border border-white/80">
                <div>
                  <p className="text-sm font-semibold text-[#222741]">Dark Mode</p>
                  <p className="text-xs text-[#6b75a1]">Toggle dark/light theme</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${
                    darkMode ? 'bg-[#5c5fdc]' : 'bg-[#d6dbf4]'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Security & Privacy */}
            <div className="rounded-2xl border border-white/70 bg-white/65 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#ecefff]">
                  <Lock className="w-5 h-5 text-[#525ad2]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#222741]">Security & Privacy</h3>
                  <p className="text-xs text-[#6b75a1]">Manage your account security</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full px-4 py-2 rounded-lg border border-white/80 text-[#222741] font-semibold text-sm hover:bg-white/80 transition-colors flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  Change Password
                </button>
                <button className="w-full px-4 py-2 rounded-lg border border-white/80 text-[#222741] font-semibold text-sm hover:bg-white/80 transition-colors flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Two-Factor Authentication
                </button>
                <Separator className="bg-white/70" />
                <button
                  onClick={handleExportData}
                  className="w-full px-4 py-2 rounded-lg border border-white/80 text-[#222741] font-semibold text-sm hover:bg-white/80 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export My Data
                </button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-rose-700">Logout</h3>
                <p className="text-sm text-rose-600">Sign out of your account on this device</p>
              </div>
              <button className="px-6 py-2 rounded-lg bg-rose-600 text-white font-semibold text-sm hover:bg-rose-700 transition-colors flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
