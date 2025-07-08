"use client"
import Image from 'next/image';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* Dynamic Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/5 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(23, 182, 178, 0.04) 1px, transparent 1px),
              radial-gradient(circle, rgba(0, 255, 195, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-float"
            style={{
              backgroundColor: 'var(--primary)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: 0.05 + Math.random() * 0.2
            }}
          />
        ))}
      </div>

      {/* Left side - Branding */}
      <div className="w-full lg:w-3/5 relative flex flex-col justify-center items-center p-8 lg:p-16 overflow-hidden z-10">
        {/* Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#17b6b2]/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#00ffc3]/20 blur-2xl animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-center space-y-10">
          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-20 animate-glow" style={{ backgroundColor: 'var(--primary)' }}></div>
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-full p-5 border border-white/10 shadow-xl inline-block">
              <Image src="/assets/images/logo.png" alt="Company Logo" width={90} height={90} className="drop-shadow-xl" />
            </div>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white/90">Welcome to</h1>
            <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#17b6b2] via-[#00ffc3] to-[#17b6b2] bg-clip-text text-transparent animate-gradient-x mt-2">EurosHub</h1>
            <p className="text-lg lg:text-xl mt-4 text-white/70">
              Revolutionary project management platform powered by next-generation technology
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard icon={<AiIcon />} title="AI-Powered Insights" description="Smart analytics that adapt to your workflow" />
            <FeatureCard icon={<RealTimeIcon />} title="Real-Time Sync" description="Instant collaboration across all devices" />
            <FeatureCard icon={<SecurityIcon />} title="Enterprise Security" description="Bank-grade encryption and compliance" />
            <FeatureCard icon={<IntegrationIcon />} title="Seamless Integration" description="Connect with 500+ tools and services" />
          </div>

          {/* Stats */}
          <div className="flex justify-center flex-wrap gap-6 text-sm text-white/60 mt-4">
            <StatItem text="99.9% Uptime" />
            <StatItem text="10M+ Users" />
            <StatItem text="ISO Certified" />
          </div>
        </div>
      </div>

      {/* Right side - Auth Form (unchanged) */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-6 lg:p-12 relative">
        <div className="absolute inset-0 glassmorphism"></div>
        <div className="w-full max-w-md relative z-10">
          <div className="auth-form-container">
            <div className="relative rounded-3xl p-8 lg:p-10 shadow-2xl border backdrop-blur-xl" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
              <div className="relative z-10">{children}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
          background-size: 200% 200%;
        }
        .animate-glow {
          animation: glow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="group p-5 bg-white/5 hover:bg-[#17b6b2]/10 backdrop-blur rounded-2xl border border-white/10 hover:border-[#00ffc3]/30 transition duration-300 shadow-md">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-[#17b6b2]/10 rounded-lg">{icon}</div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
          <p className="text-white/60 text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}

function StatItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 rounded-full bg-[#17b6b2] animate-pulse"></div>
      <span>{text}</span>
    </div>
  );
}

function AiIcon() {
  return (
    <svg className="w-5 h-5 text-[#17b6b2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function RealTimeIcon() {
  return (
    <svg className="w-5 h-5 text-[#17b6b2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg className="w-5 h-5 text-[#17b6b2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg className="w-5 h-5 text-[#17b6b2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
