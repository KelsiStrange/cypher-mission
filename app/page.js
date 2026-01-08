'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Floating particles component
function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 10 + Math.random() * 20,
          size: 1 + Math.random() * 2,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyber-blue/30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Glitch text effect component
function GlitchText({ text, className }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute top-0 left-0 z-0 text-cyan-400 opacity-80"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)',
          transform: 'translateX(-2px)',
          animation: 'flicker 3s infinite',
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 z-0 text-red-400 opacity-50"
        style={{
          clipPath: 'polygon(0 65%, 100% 65%, 100% 100%, 0 100%)',
          transform: 'translateX(2px)',
          animation: 'flicker 2.5s infinite reverse',
        }}
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}

// Countdown timer removed per user request

// Email form component
function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    
    // Simulate form submission (placeholder)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full max-w-md mx-auto px-4">
      <div className="relative group">
        {/* Animated border gradient */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue/50 via-cyan-400/30 to-cyber-blue/50 rounded-xl opacity-75 group-hover:opacity-100 transition duration-500 blur-sm animate-pulse-glow"></div>
        
        <div className="relative flex flex-col sm:flex-row gap-3 bg-cyber-darker p-2 rounded-xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 focus:bg-cyber-dark transition-all duration-300 input-glow"
            disabled={status === 'submitting' || status === 'success'}
            data-testid="email-input"
          />
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyan-400 text-cyber-darker font-semibold rounded-lg btn-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap font-cyber tracking-wide"
            data-testid="notify-btn"
          >
            {status === 'submitting' && (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                PROCESSING...
              </span>
            )}
            {status === 'success' && (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                JOINED!
              </span>
            )}
            {(status === 'idle' || status === 'error') && 'NOTIFY ME'}
          </button>
        </div>
      </div>
      
      {status === 'success' && (
        <p className="text-cyber-blue text-sm mt-3 text-center animate-pulse">
          ✓ You&apos;re on the list! We&apos;ll notify you when we launch.
        </p>
      )}
      
      <p className="text-gray-500 text-xs mt-4 text-center">
        Join the mission. No spam, just launch updates.
      </p>
    </form>
  );
}

// Social links component
function SocialLinks() {
  const links = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex justify-center gap-4 mt-12">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="p-3 rounded-lg border border-cyber-blue/20 text-gray-400 hover:text-cyber-blue hover:border-cyber-blue/50 hover:bg-cyber-blue/5 transition-all duration-300 btn-glow"
          aria-label={link.name}
          data-testid={`social-${link.name.toLowerCase()}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

// Hexagon decoration component
function HexagonDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left hexagon */}
      <svg
        className="absolute -top-20 -left-20 w-64 h-64 text-cyber-blue/5 animate-spin"
        style={{ animationDuration: '60s' }}
        viewBox="0 0 100 100"
      >
        <polygon
          points="50 1 95 25 95 75 50 99 5 75 5 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
      
      {/* Bottom right hexagon */}
      <svg
        className="absolute -bottom-32 -right-32 w-96 h-96 text-cyber-blue/5 animate-spin"
        style={{ animationDuration: '90s', animationDirection: 'reverse' }}
        viewBox="0 0 100 100"
      >
        <polygon
          points="50 1 95 25 95 75 50 99 5 75 5 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
        />
      </svg>
      
      {/* Center decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-cyber-blue/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyber-blue/5"></div>
    </div>
  );
}

// Main page component
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="cyber-bg" />
      <div className="scan-line" />
      <div className="noise-overlay" />
      <Particles />
      <HexagonDecoration />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyber-blue/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
        {/* Logo */}
        <div className="animate-float mb-8 sm:mb-12" data-testid="logo-container">
          <Image
            src="/logo.png"
            alt="CypherMission Logo"
            width={400}
            height={100}
            className="mx-auto w-64 sm:w-80 md:w-96 h-auto drop-shadow-[0_0_25px_rgba(79,195,247,0.3)]"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cyber font-bold mb-4 sm:mb-6 tracking-tight">
          <GlitchText 
            text="LAUNCHING SOON" 
            className="text-white glow-text"
          />
        </h1>

        {/* Subtext */}
        <div className="cyber-underline inline-block mb-8">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Prepare to enter the next generation of 
            <span className="text-cyber-blue font-medium"> cyber innovation</span>.
            <br className="hidden sm:block" />
            <span className="text-gray-400">The mission begins soon.</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Email Form */}
        <EmailForm />

        {/* Social Links */}
        <SocialLinks />

        {/* Bottom tagline */}
        <div className="mt-16 sm:mt-20">
          <p className="text-xs sm:text-sm text-gray-600 tracking-[0.3em] uppercase font-cyber">
            /// CLASSIFIED /// PENDING LAUNCH ///
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent pointer-events-none" />
    </main>
  );
}
