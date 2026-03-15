import React from 'react';
import { ArrowLeft, MoreHorizontal, RefreshCw, Copy, Send, Home, Sparkles, Clock, User } from 'lucide-react';

export default function AIAppLab({ onNavigate }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F9F9FA' }}>
      {/* Top Bar */}
      <div className="top-bar" style={{ background: '#F9F9FA', zIndex: 10 }}>
        <ArrowLeft size={24} color="#121212" onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer' }} />
        <h1 className="top-bar-title" style={{ fontSize: '18px' }}>AI Message Lab</h1>
        <MoreHorizontal size={24} color="#121212" />
      </div>

      <div className="scroll-area flex col" style={{ padding: '0 20px 200px 20px' }}>
        
        {/* Context Input */}
        <div style={{ marginTop: '20px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#4B5563', marginBottom: '12px' }}>What's the context?</h2>
          <div style={{ 
            background: '#FFFFFF', 
            borderRadius: '20px', 
            border: '1px solid #E5E7EB',
            padding: '16px',
            minHeight: '120px'
          }}>
            <textarea 
              placeholder="e.g., Asking my boss for a deadline extension because the client data is delayed..."
              style={{
                width: '100%',
                height: '80px',
                border: 'none',
                outline: 'none',
                resize: 'none',
                fontSize: '15px',
                color: '#9CA3AF',
                fontFamily: 'inherit',
                lineHeight: 1.5,
                fontWeight: 500
              }}
            />
            <div className="flex justify-end" style={{ opacity: 0.3 }}>
              {/* resize indicator icon */}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L1 9" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 5L5 9" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Tone Selection */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#4B5563', marginBottom: '12px' }}>Select Tone</h2>
          <div className="flex" style={{ gap: '10px', flexWrap: 'wrap' }}>
            {['Professional', 'Friendly', 'Witty', 'Urgent', 'Empathetic'].map((tone, i) => (
              <div key={tone} style={{
                background: i === 0 ? '#FFFF00' : '#FFFFFF',
                color: i === 0 ? '#121212' : '#6B7280',
                border: i === 0 ? 'none' : '1px solid #E5E7EB',
                padding: '10px 18px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: i === 0 ? 800 : 600,
                cursor: 'pointer'
              }}>
                {tone}
              </div>
            ))}
          </div>
        </div>

        {/* Creativity Slider */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E5E7EB', padding: '20px 24px' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#4B5563' }}>Creativity Level</h2>
              <div style={{ background: '#FEF08A', color: '#121212', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 900 }}>75%</div>
            </div>
            {/* Slider track */}
            <div style={{ width: '100%', height: '8px', background: '#F3F4F6', borderRadius: '4px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '75%', background: '#FFFF00', borderRadius: '4px' }}></div>
              <div style={{ position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px', background: '#FFFF00', border: '4px solid #FFFFFF', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}></div>
            </div>
          </div>
        </div>

        {/* Preview Draft */}
        <div>
          <div className="flex justify-between items-center" style={{ marginBottom: '12px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#4B5563' }}>Preview Draft</h2>
            <div className="flex items-center gap-1" style={{ color: '#6B7280', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
              <RefreshCw size={14} /> Regenerate
            </div>
          </div>
          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '24px', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ position: 'absolute', top: 16, right: 16, background: '#F3F4F6', padding: '6px', borderRadius: '8px', color: '#9CA3AF' }}>
              <Copy size={16} />
            </div>
            <p style={{ fontSize: '15px', color: '#1F2937', lineHeight: 1.6, fontWeight: 500 }}>
              Hi [Name], I'm reaching out regarding the current project deadline. Unfortunately, we've encountered a slight delay in receiving the necessary client data. Would it be possible to extend the submission date to Friday? I want to ensure the final output is as accurate as possible. Thanks for understanding!
            </p>
          </div>
        </div>

      </div>

      {/* Floating Action Button inside Bottom Nav area container */}
      <div style={{ position: 'absolute', bottom: 84, left: 20, right: 20, zIndex: 200 }}>
        <button className="btn w-full flex justify-between items-center" style={{ background: '#FFFF00', padding: '18px 24px', borderRadius: '24px', boxShadow: '0 8px 30px rgba(255,255,0,0.3)', width: '100%' }}>
          <div className="flex items-center gap-3">
             <div style={{ background: '#121212', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Send size={14} color="#FFFF00" fill="#FFFF00" />
             </div>
             <span style={{ fontSize: '16px', fontWeight: 900, color: '#121212' }}>Send to WhatsApp</span>
          </div>
          <ChevronRight size={20} color="#121212" />
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav flex" style={{ paddingBottom: '32px' }}>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Home size={22} color="#9CA3AF" fill="#9CA3AF" />
          </div>
          HOME
        </div>
        <div className="nav-item active">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Sparkles size={22} color="#FFFF00" fill="#FFFF00" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.2))' }} />
          </div>
          LAB
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Clock size={22} color="#9CA3AF" />
          </div>
          HISTORY
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <User size={22} color="#9CA3AF" fill="#9CA3AF" />
          </div>
          PROFILE
        </div>
      </div>

    </div>
  );
}
