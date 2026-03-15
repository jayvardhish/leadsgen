import React from 'react';
import { Search, Zap, User, ChevronRight, Mail, UserPlus, Bot, Home, Users, BarChart2, Bell, Settings } from 'lucide-react';

export default function Dashboard({ onNavigate }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="scroll-area flex col" style={{ paddingBottom: '90px', background: '#FFFFFF' }}>
        
        {/* Top Header - Yellow Section */}
        <div style={{ background: '#FFFF00', padding: '24px 20px 20px 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div style={{ background: '#0B0B0B', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={14} color="#FFFF00" fill="#FFFF00" />
              </div>
              <div className="flex col gap-0">
                <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: '#121212', letterSpacing: '0px' }}>DELIVERING LEADS IN</span>
                <span className="flex items-center" style={{ fontSize: '14px', fontWeight: 900, color: '#0B0B0B' }}>
                  8 Minutes <span style={{fontSize: 10, marginLeft: 4}}>▼</span>
                </span>
              </div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#0B0B0B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={18} color="#FFFFFF" />
            </div>
          </div>

          {/* Search bar */}
          <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Search size={18} color="#6B7280" />
            <input 
              type="text" 
              placeholder="Search for 'Real Estate Leads' or 'AI Agents'"
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '13px', color: '#6B7280', fontWeight: 500 }}
            />
          </div>
        </div>

        {/* Campaign Performance */}
        <div style={{ padding: '24px 20px' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#121212' }}>Campaign Performance</h2>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#6B7280', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              SEE ALL <ChevronRight size={14} />
            </span>
          </div>

          <div className="flex justify-between" style={{ marginBottom: '24px' }}>
            <div className="flex col items-center gap-2">
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#F0F6FF', color: '#2563EB', fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #DCE6FF' }}>1.2k</div>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#4B5563' }}>Leads Scraped</span>
            </div>
            <div className="flex col items-center gap-2">
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ECFDF5', color: '#059669', fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #D1FAE5' }}>856</div>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#4B5563' }}>AI Messages</span>
            </div>
            <div className="flex col items-center gap-2">
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#F5F3FF', color: '#8B5CF6', fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #EDE9FE' }}>432</div>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#4B5563' }}>Outreach Sent</span>
            </div>
            <div className="flex col items-center gap-2">
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#FFF7ED', color: '#EA580C', fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #FFEDD5' }}>98</div>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#4B5563' }}>Replies</span>
            </div>
          </div>

          {/* Conversion Rate Card */}
          <div style={{ background: '#FFFF00', borderRadius: '20px', padding: '20px', position: 'relative', boxShadow: '0 8px 16px rgba(255,255,0,0.1)' }}>
            <div style={{ position: 'absolute', top: 20, right: 20, background: '#FFF580', padding: '6px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 800, color: '#121212' }}>
              Top 5%
            </div>
            <div style={{ fontSize: '14px', fontWeight: 900, color: '#121212' }}>CONVERSION RATE</div>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#121212', opacity: 0.8, marginTop: '2px', textTransform: 'uppercase' }}>CURRENT PERFORMANCE</div>
            
            <div className="flex items-center gap-3" style={{ marginTop: '16px', marginBottom: '8px' }}>
              <div style={{ flex: 1, height: '12px', background: '#FFF580', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: '#121212', borderRadius: '6px' }}></div>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#121212' }}>12.5%</div>
            </div>
            
            <div className="flex justify-between items-center" style={{ marginTop: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#121212' }}>Goal: 15%</span>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#121212' }}>↗ +2.1% this week</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ padding: '0 20px 24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#121212', marginBottom: '16px' }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ position: 'relative', height: 100, borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', background: 'linear-gradient(rgba(40,50,60,0.6), rgba(30,40,50,0.9)), #4A5A6A' }} onClick={() => onNavigate('pipeline')}>
               {/* Decorative chart lines */}
               <div style={{ position: 'absolute', bottom: 16, left: 16, color: '#FFF', fontSize: '14px', fontWeight: 800 }}>New Campaign</div>
            </div>
            <div style={{ position: 'relative', height: 100, borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', background: 'linear-gradient(rgba(50,80,90,0.5), rgba(40,70,80,0.8)), #5C8A9A' }} onClick={() => onNavigate('pipeline')}>
               <div style={{ position: 'absolute', bottom: 16, left: 16, color: '#FFF', fontSize: '14px', fontWeight: 800 }}>View Analytics</div>
            </div>
            <div style={{ position: 'relative', height: 100, borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', background: 'linear-gradient(rgba(60,60,60,0.4), rgba(40,40,40,0.9)), #707070' }} onClick={() => onNavigate('profile')}>
               <div style={{ position: 'absolute', bottom: 16, left: 16, color: '#FFF', fontSize: '14px', fontWeight: 800 }}>Lead Scraper</div>
            </div>
            <div style={{ position: 'relative', height: 100, borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', background: 'linear-gradient(rgba(30,30,40,0.6), rgba(20,20,30,0.9)), #2D3748' }} onClick={() => onNavigate('lab')}>
               <div style={{ position: 'absolute', bottom: 16, left: 16, color: '#FFF', fontSize: '14px', fontWeight: 800 }}>AI Training</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{ padding: '0 20px 20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#121212', marginBottom: '16px' }}>Recent Activity</h2>
          
          <div className="flex gap-4" style={{ marginBottom: '24px' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Mail size={20} color="#121212" />
            </div>
            <div style={{ flex: 1 }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#121212' }}>New Reply Received</span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF' }}>2M AGO</span>
              </div>
              <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500, lineHeight: 1.4 }}>"Hey, I'm interested in the property you mentioned..."</span>
            </div>
          </div>
          
          <div className="flex gap-4" style={{ marginBottom: '24px' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <UserPlus size={20} color="#059669" />
            </div>
            <div style={{ flex: 1 }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#121212' }}>24 New Leads Added</span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF' }}>45M AGO</span>
              </div>
              <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500, lineHeight: 1.4 }}>Real Estate Campaign: South Jersey Area</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Bot size={20} color="#2563EB" />
            </div>
            <div style={{ flex: 1 }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#121212' }}>AI Response Sent</span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF' }}>1H AGO</span>
              </div>
              <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500, lineHeight: 1.4 }}>Personalized follow-up sent to Mark Henderson.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav flex">
        <div className="nav-item active">
          <div className="icon-wrapper" style={{ padding: '8px', background: '#FFFF00', borderRadius: '50%' }}>
            <Home size={22} color="#0B0B0B" />
          </div>
          HOME
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Users size={22} color="#9CA3AF" />
          </div>
          LEADS
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <BarChart2 size={22} color="#9CA3AF" />
          </div>
          STATS
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 6, right: 6, width: 8, height: 8, background: '#EF4444', borderRadius: '50%' }}></div>
            <Bell size={22} color="#9CA3AF" />
          </div>
          ALERTS
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Settings size={22} color="#9CA3AF" />
          </div>
          CONFIG
        </div>
      </div>
    </div>
  );
}
