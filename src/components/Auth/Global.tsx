"use client"
import Image from 'next/image';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(23, 182, 178, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23, 182, 178, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              backgroundColor: 'var(--primary)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: 0.1 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Left side - Branding */}
      <div className="w-full lg:w-3/5 relative flex flex-col justify-center items-center p-8 lg:p-16 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-95" style={{
          background: `
            radial-gradient(ellipse at top left, var(--primary) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, var(--primary) 0%, transparent 50%),
            linear-gradient(135deg, var(--background) 0%, var(--card-bg) 100%)
          `
        }}></div>

        {/* Morphing Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 opacity-20 animate-morph-1" style={{borderColor: 'var(--primary)'}}></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 rotate-45 border-2 opacity-15 animate-morph-2" style={{borderColor: 'var(--primary)'}}></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 rounded-full opacity-10 animate-morph-3" style={{backgroundColor: 'var(--primary)'}}></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 rounded-full opacity-20 animate-pulse" style={{backgroundColor: 'var(--primary)'}}></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-12 relative">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-20 animate-glow" style={{backgroundColor: 'var(--primary)'}}></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <Image 
                src="/assets/images/logo.png" 
                alt="Company Logo" 
                width={100} 
                height={100} 
                className="mx-auto filter drop-shadow-2xl"
              />
            </div>
          </div>
          
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-6xl lg:text-7xl font-black mb-4 leading-tight" style={{color: 'var(--foreground)'}}>
              Welcome to
            </h1>
            <h1 className="text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-current via-current to-current bg-clip-text animate-gradient-x" style={{
              color: 'var(--primary)',
              backgroundImage: `linear-gradient(45deg, var(--primary), var(--primary), var(--accent), var(--primary))`
            }}>
              EurosHub
            </h1>
          </div>
          
          <p className="text-xl lg:text-2xl mb-12 leading-relaxed opacity-80 max-w-lg mx-auto" style={{color: 'var(--foreground)'}}>
            Revolutionary project management platform powered by next-generation technology
          </p>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            <FeatureCard 
              icon={<AiIcon />}
              title="AI-Powered Insights"
              description="Smart analytics that adapt to your workflow"
              delay="0ms"
            />
            <FeatureCard 
              icon={<RealTimeIcon />}
              title="Real-Time Sync"
              description="Instant collaboration across all devices"
              delay="100ms"
            />
            <FeatureCard 
              icon={<SecurityIcon />}
              title="Enterprise Security"
              description="Bank-grade encryption and compliance"
              delay="200ms"
            />
            <FeatureCard 
              icon={<IntegrationIcon />}
              title="Seamless Integration"
              description="Connect with 500+ tools and services"
              delay="300ms"
            />
          </div>
          
          {/* Animated Status Indicators */}
          <div className="flex justify-center items-center space-x-6 text-sm opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: 'var(--primary)'}}></div>
              <span style={{color: 'var(--foreground)'}}>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full animate-pulse animation-delay-500" style={{backgroundColor: 'var(--primary)'}}></div>
              <span style={{color: 'var(--foreground)'}}>10M+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full animate-pulse animation-delay-1000" style={{backgroundColor: 'var(--primary)'}}></div>
              <span style={{color: 'var(--foreground)'}}>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-6 lg:p-12 relative">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 glassmorphism"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Form Container */}
          <div className="auth-form-container">
            {/* Main Form Card */}
            <div className="relative rounded-3xl p-8 lg:p-10 shadow-2xl border backdrop-blur-xl" style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)'
            }}>
              {/* Content */}
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Modern Feature Card Component
function FeatureCard({ icon, title, description, delay }: { 
  icon: ReactNode; 
  title: string; 
  description: string; 
  delay: string; 
}) {
  return (
    <div 
      className="feature-card group p-4 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start space-x-3">
        <div className="feature-icon-container p-2 rounded-xl transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm mb-1 group-hover:text-opacity-100 transition-opacity" style={{color: 'var(--foreground)'}}>
            {title}
          </h3>
          <p className="text-xs opacity-60 group-hover:opacity-80 transition-opacity" style={{color: 'var(--foreground)'}}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Modern Icon Components
function AiIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--primary)'}}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function RealTimeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--primary)'}}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--primary)'}}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--primary)'}}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}