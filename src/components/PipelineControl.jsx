import React from 'react';
import { ArrowLeft, MoreVertical, Search, Brain, Sparkles, Send, LayoutGrid, Layout, Clock, Settings, Activity } from 'lucide-react';

export default function PipelineControl({ onNavigate }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FFFFFF', position: 'relative' }}>
      
      {/* Background Soft Glow */}
      <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'radial-gradient(circle, rgba(255,255,0,0.15) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }}></div>

      {/* Top Bar */}
      <div className="top-bar flex justify-between items-center" style={{ background: 'transparent', zIndex: 10, padding: '24px 20px' }}>
        <ArrowLeft size={24} color="#121212" onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer' }} />
        <h1 className="top-bar-title" style={{ fontSize: '18px', fontWeight: 900 }}>Pipeline Control</h1>
        <MoreVertical size={24} color="#121212" />
      </div>

      <div className="scroll-area flex col" style={{ padding: '0 20px 100px 20px', zIndex: 1 }}>
        
        {/* Total Processed Card */}
        <div style={{ background: '#FFFF00', borderRadius: '24px', padding: '24px', marginBottom: '16px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#121212', letterSpacing: '1px', opacity: 0.8, marginBottom: '8px' }}>TOTAL PROCESSED</div>
          <div className="flex items-end gap-3">
            <div style={{ fontSize: '48px', fontWeight: 900, color: '#121212', lineHeight: 1 }}>12.4k</div>
            <div style={{ background: '#FFE600', padding: '6px 12px', borderRadius: '16px', fontSize: '14px', fontWeight: 900, color: '#121212', marginBottom: '6px' }}>
              +12%
            </div>
          </div>
        </div>

        {/* Small Stats Row */}
        <div className="flex gap-4" style={{ marginBottom: '32px' }}>
          <div style={{ flex: 1, background: '#FAFAFB', border: '1px solid #F3F4F6', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#6B7280', marginBottom: '8px' }}>Success Rate</div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#121212', marginBottom: '12px' }}>98.2%</div>
            <div style={{ width: '100%', height: '4px', background: '#E5E7EB', borderRadius: '2px', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 0, left: 0, width: '98%', height: '100%', background: '#FFFF00', borderRadius: '2px' }}></div>
            </div>
          </div>
          
          <div style={{ flex: 1, background: '#FAFAFB', border: '1px solid #F3F4F6', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#6B7280', marginBottom: '8px' }}>Active Leads</div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#121212', marginBottom: '12px' }}>42</div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', display: 'flex', alignItems: 'center' }}>
               ↘ 2%
            </div>
          </div>
        </div>

        {/* Workflow Stream Title */}
        <div className="flex justify-between items-center" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#121212' }}>Workflow Stream</h2>
          <div style={{ background: '#D1FAE5', color: '#059669', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
             <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#059669' }}></div>
             Live
          </div>
        </div>

        {/* Vertical Timeline */}
        <div style={{ position: 'relative', marginLeft: '8px' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', top: 24, bottom: 24, left: 24, width: '2px', background: '#F3F4F6', zIndex: 0 }}></div>

          {/* Step 1 */}
          <div className="flex gap-4" style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #FFFFFF' }}>
              <Search size={22} color="#3B82F6" strokeWidth={2.5} />
            </div>
            <div style={{ flex: 1, paddingTop: '4px' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#121212' }}>Data Scraping</h3>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.5px' }}>STEP 01</span>
              </div>
              <p style={{ fontSize: '14px', color: '#6B7280', fontWeight: 500, marginBottom: '12px' }}>Targeting 5 high-intent sources</p>
              {/* Progress dashes */}
              <div className="flex gap-1" style={{ width: '120px' }}>
                <div style={{ height: '4px', flex: 1, background: '#3B82F6', borderRadius: '2px' }}></div>
                <div style={{ height: '4px', flex: 1, background: '#3B82F6', borderRadius: '2px' }}></div>
                <div style={{ height: '4px', flex: 1, background: '#DBEAFE', borderRadius: '2px' }}></div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4" style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#FFFF00', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #FFFFFF', boxShadow: '0 4px 10px rgba(255,255,0,0.3)' }}>
              <Brain size={22} color="#121212" strokeWidth={2.5} />
            </div>
            <div style={{ flex: 1, paddingTop: '4px' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#121212' }}>AI Analysis</h3>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.5px' }}>STEP 02</span>
              </div>
              <p style={{ fontSize: '14px', color: '#6B7280', fontWeight: 500, marginBottom: '12px' }}>Processing Sentiment & Intent</p>
              <div style={{ background: '#F9FAFB', border: '1px solid #F3F4F6', borderRadius: '16px', padding: '12px 16px', display: 'inline-block', width: '100%' }}>
                <span style={{ fontSize: '13px', color: '#9CA3AF', fontStyle: 'italic', fontWeight: 500 }}>"Analyzing user behavior patterns..."</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4" style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #FFFFFF' }}>
              <Sparkles size={22} color="#A855F7" strokeWidth={2.5} />
            </div>
            <div style={{ flex: 1, paddingTop: '4px' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#121212' }}>Content Engine</h3>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.5px' }}>STEP 03</span>
              </div>
              <p style={{ fontSize: '14px', color: '#6B7280', fontWeight: 500 }}>GPT-4 Optimized messages</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #FFFFFF' }}>
              <Send size={22} color="#EA580C" strokeWidth={2.5} style={{ transform: 'translateX(2px)' }} />
            </div>
            <div style={{ flex: 1, paddingTop: '4px' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#121212' }}>Auto Delivery</h3>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.5px' }}>STEP 04</span>
              </div>
              <p style={{ fontSize: '14px', color: '#6B7280', fontWeight: 500 }}>Smart scheduling enabled</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav flex">
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <LayoutGrid size={22} color="#9CA3AF" />
          </div>
          Home
        </div>
        <div className="nav-item active">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="8" height="8" rx="2" fill="#121212" />
              <rect x="13" y="13" width="8" height="8" rx="2" fill="#121212" />
              <rect x="13" y="3" width="8" height="8" rx="2" fill="#121212" />
            </svg>
          </div>
          Pipeline
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Clock size={22} color="#9CA3AF" />
          </div>
          Logs
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Settings size={22} color="#9CA3AF" />
          </div>
          Settings
        </div>
      </div>
    </div>
  );
}
