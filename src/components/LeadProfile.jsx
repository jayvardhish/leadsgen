import React from 'react';
import { ArrowLeft, Share2, MoreVertical, MapPin, Clock, MessageCircle, Phone, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function LeadProfile({ onNavigate }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F9FAFB' }}>
      
      {/* Top Bar */}
      <div className="top-bar flex items-center justify-between" style={{ background: '#F9FAFB', zIndex: 10 }}>
        <ArrowLeft size={24} color="#121212" onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer' }} />
        <h1 className="top-bar-title" style={{ fontSize: '18px', fontWeight: 900 }}>Lead Profile</h1>
        <div className="flex items-center gap-4">
          <Share2 size={24} color="#121212" />
          <MoreVertical size={24} color="#121212" />
        </div>
      </div>

      <div className="scroll-area flex col" style={{ padding: '0 16px 120px 16px' }}>
        
        {/* Main Image Header */}
        <div style={{ width: '100%', height: '240px', borderRadius: '24px', overflow: 'hidden', position: 'relative', background: '#E5E7EB', marginBottom: '24px' }}>
           {/* Placeholder for actual image: Using gradient and grid lines */}
           <div style={{ width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), #A3A3A3', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: 16, right: 16, background: '#FFFF00', color: '#121212', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '4px' }}>
                VERIFIED
              </div>
              <div className="flex gap-2" style={{ position: 'absolute', bottom: 20, left: 16 }}>
                <div style={{ width: 24, height: 4, background: '#FFFF00', borderRadius: '2px' }}></div>
                <div style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.6)', borderRadius: '2px' }}></div>
                <div style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.6)', borderRadius: '2px' }}></div>
              </div>
           </div>
        </div>

        {/* Lead Info */}
        <div className="flex justify-between items-start" style={{ marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#121212', marginBottom: '4px', lineHeight: 1.2 }}>Fresh Mart Supermarket</h1>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#6B7280' }}>Retail & FMCG Chain</p>
          </div>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#4D7C4F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '12px', fontStyle: 'italic', fontWeight: 600, flexShrink: 0, border: '2px solid #FFF', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            fresh
          </div>
        </div>

        <div className="flex items-center gap-4" style={{ marginBottom: '24px', fontSize: '13px', fontWeight: 600, color: '#4B5563' }}>
          <div className="flex items-center gap-1">
            <MapPin size={16} color="#FFFF00" fill="#FFFF00" /> 2.4km • Bengaluru
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} color="#059669" fill="#059669" /> Active 2h ago
          </div>
        </div>

        {/* Success Probability Card */}
        <div style={{ background: '#FFFDF0', borderRadius: '24px', border: '1px solid #FEF5B3', padding: '24px', marginBottom: '24px' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '8px' }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#4B5563' }}>Success Probability</div>
             <div style={{ background: '#D1FAE5', color: '#059669', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 900, display: 'flex', alignItems: 'center' }}>
               ↗ +5.2%
            </div>
          </div>
          
          <div style={{ fontSize: '42px', fontWeight: 900, color: '#121212', marginBottom: '16px' }}>85%</div>
          
          <div style={{ width: '100%', height: '8px', background: '#E5E7EB', borderRadius: '4px', marginBottom: '20px', display: 'flex' }}>
             <div style={{ width: '85%', height: '100%', background: '#FFFF00', borderRadius: '4px' }}></div>
          </div>

          <p style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500, lineHeight: 1.5 }}>
            Based on 12 interactions and high inventory demand matching your portfolio.
          </p>
        </div>

        {/* Dual Stats */}
        <div className="flex gap-4" style={{ marginBottom: '32px' }}>
          <div style={{ flex: 1, background: '#FFFFFF', borderRadius: '24px', padding: '20px', border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.5px', marginBottom: '8px' }}>LEAD SCORE</div>
            <div className="flex items-baseline gap-1">
              <span style={{ fontSize: '24px', fontWeight: 900, color: '#121212' }}>92</span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#9CA3AF' }}>/100</span>
            </div>
          </div>
          <div style={{ flex: 1, background: '#FFFFFF', borderRadius: '24px', padding: '20px', border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.5px', marginBottom: '8px' }}>POT. VALUE</div>
            <div className="flex items-baseline gap-1">
              <span style={{ fontSize: '24px', fontWeight: 900, color: '#121212' }}>₹50,000</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ fontSize: '12px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.5px', marginBottom: '16px' }}>QUICK ACTIONS</div>
        
        <div className="flex gap-4" style={{ marginBottom: '40px' }}>
          <div className="flex col items-center justify-center gap-3" style={{ flex: 1, background: '#FFFFFF', borderRadius: '24px', padding: '24px 12px', border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', cursor: 'pointer' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={24} color="#16A34A" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#121212' }}>WHATSAPP</span>
          </div>

          <div className="flex col items-center justify-center gap-3" style={{ flex: 1, background: '#FFFFFF', borderRadius: '24px', padding: '24px 12px', border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', cursor: 'pointer' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={24} color="#2563EB" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#121212' }}>CALL</span>
          </div>

          <div className="flex col items-center justify-center gap-3" style={{ flex: 1, background: '#FFFFFF', borderRadius: '24px', padding: '24px 12px', border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', cursor: 'pointer' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={24} color="#9333EA" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#121212' }}>EMAIL</span>
          </div>
        </div>

        {/* Map Area */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', overflow: 'hidden', border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', position: 'relative' }}>
          <div style={{ width: '100%', height: '140px', background: '#E2E8F0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', opacity: 0.6, background: 'repeating-linear-gradient(45deg, #CBD5E1 0, #CBD5E1 2px, transparent 2px, transparent 10px)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFFF00', boxShadow: '0 0 0 2px #121212' }}></div>
               </div>
               <span style={{ fontSize: '20px', fontWeight: 900, color: '#121212', background: 'rgba(255,255,255,0.8)', padding: '4px 8px', borderRadius: '8px', marginTop: '4px' }}>Bengaluru</span>
            </div>
          </div>
          <div className="flex justify-between items-center" style={{ padding: '16px 20px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#121212' }}>12th Main Rd, Indiranagar</div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFFF00', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Directions</div>
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Area */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#FFFFFF', padding: '24px 20px', borderTop: '1px solid #F3F4F6', zIndex: 100, display: 'flex', gap: '16px' }}>
         <button className="flex items-center justify-center" style={{ flex: 1, background: '#F9FAFB', color: '#121212', borderRadius: '100px', fontSize: '16px', fontWeight: 800, border: 'none', cursor: 'pointer' }}>
           Save Draft
         </button>
         <button className="flex items-center justify-center gap-2" style={{ flex: 2, background: '#FFFF00', color: '#121212', borderRadius: '100px', fontSize: '16px', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(255,255,0,0.3)' }}>
           Convert to Lead
           <ChevronRight size={20} />
         </button>
      </div>
    </div>
  );
}
