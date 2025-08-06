// components/SettingsMenu.tsx
'use client';
import Image from "next/image"
import { useState } from 'react';
import Link from 'next/link';

export default function SettingsMenu() {
  const [open, setOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="relative inline-block text-left">
      {/* Settings Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-[#151515]"
        aria-label="Settings"
      >
        
        <Image className="h-[30px] w-full rounded-md hover:cursor-pointer transition-discrete duration-200 ease-in" src = "/icons/settings.png" width = {32} height = {32} alt= "setting" />
    
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-56 bg-white border rounded-md shadow-lg p-4 space-y-4">
          {/* Toggle Notifications */}
          <div className="flex items-center justify-between">
            <span className="text-sm">Enable Notifications</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 relative transition-all duration-200">
                <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 peer-checked:translate-x-5 transition-transform"></div>
              </div>
            </label>
          </div>

          {/* About Us Link */}
          <div>
            <Link
              href="/contact#about-us"
              className="text-sm text-blue-600 hover:underline block"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
