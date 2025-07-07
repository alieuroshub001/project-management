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
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Form Container */}
          <div className="relative group">
            {/* Animated Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-transparent to-transparent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-gradient-xy" style={{
              backgroundImage: `linear-gradient(45deg, var(--primary), transparent, var(--primary), transparent, var(--primary))`
            }}></div>
            
            {/* Main Form Card */}
            <div className="relative rounded-3xl p-8 lg:p-10 shadow-2xl border backdrop-blur-xl" style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)'
            }}>
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-5" style={{
                background: `radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 70%)`
              }}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        
        @keyframes morph-1 {
          0%, 100% { transform: rotate(0deg) scale(1); border-radius: 50%; }
          33% { transform: rotate(120deg) scale(1.1); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          66% { transform: rotate(240deg) scale(0.9); border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }
        
        @keyframes morph-2 {
          0%, 100% { transform: rotate(45deg) scale(1); border-radius: 20%; }
          50% { transform: rotate(225deg) scale(1.2); border-radius: 50%; }
        }
        
        @keyframes morph-3 {
          0%, 100% { transform: scale(1); border-radius: 50%; }
          33% { transform: scale(1.3); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          66% { transform: scale(0.8); border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-morph-1 {
          animation: morph-1 15s ease-in-out infinite;
        }
        
        .animate-morph-2 {
          animation: morph-2 12s ease-in-out infinite;
        }
        
        .animate-morph-3 {
          animation: morph-3 18s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
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
      className="group p-4 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer border border-white/10 hover:border-white/20"
      style={{ 
        animationDelay: delay,
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="flex items-start space-x-3">
        <div className="p-2 rounded-xl group-hover:scale-110 transition-transform duration-300" style={{
          backgroundColor: 'var(--primary)',
          opacity: 0.1
        }}>
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