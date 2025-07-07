"use client"
import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isCollapsed={false} onToggle={function (): void {
              throw new Error('Function not implemented.');
          } } />
      
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto pt-2 pb-6 md:pt-6 md:pl-6 md:ml-64 lg:ml-72" style={{ backgroundColor: 'var(--background)' }}>
          {children}
        </main>
      </div>
    </div>
  );
}