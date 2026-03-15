import React from 'react';
import { ArrowLeft, Sparkles, Calendar, Receipt, Download, Hourglass, Eye, Home, Activity, Check, Settings, Circle } from 'lucide-react';

export default function BillingHistory({ onNavigate }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F8F9FA' }}>
      
      {/* Top Bar */}
      <div className="top-bar flex items-center justify-between" style={{ background: '#F8F9FA', zIndex: 10 }}>
        <ArrowLeft size={24} color="#121212" onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer' }} />
        <h1 className="top-bar-title" style={{ fontSize: '18px', fontWeight: 900, flex: 1, textAlign: 'center', marginLeft: '-24px' }}>Billing History</h1>
      </div>

      <div className="scroll-area flex col" style={{ padding: '0 20px 100px 20px' }}>
        
        {/* Plan Card */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', marginBottom: '24px' }}>
          
          {/* Top Yellow Dotted Area */}
          <div style={{ background: '#FFFFE0', height: '100px', width: '100%', position: 'relative' }}>
             {/* Simple dotted background pattern effect */}
             <div style={{ width: '100%', height: '100%', backgroundImage: 'radial-gradient(#FFE600 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.3 }}></div>
             
             {/* Floating Icon */}
             <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#FFFF00', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 8px 16px rgba(255,255,0,0.3)' }}>
               <Sparkles size={28} color="#121212" fill="#121212" />
             </div>
          </div>

          <div style={{ padding: '24px' }}>
            <div className="flex justify-between items-start" style={{ marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#6B7280', letterSpacing: '0.5px', marginBottom: '6px' }}>CURRENT PLAN</div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#121212' }}>Growth Pro AI</div>
              </div>
              <div style={{ background: '#FFFF00', padding: '6px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 900, color: '#121212' }}>ACTIVE</div>
            </div>

            <div className="flex items-baseline gap-1" style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '32px', fontWeight: 900, color: '#121212' }}>$49.00</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#6B7280' }}>/month</span>
            </div>

            <div className="flex items-center gap-2" style={{ color: '#6B7280', fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
              <Calendar size={16} /> Next renewal: Oct 12, 2023
            </div>

            <button className="btn" style={{ width: '100%', background: '#FFFF00', color: '#121212', borderRadius: '16px' }}>
              Manage Subscription
            </button>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#121212' }}>Recent Transactions</h2>
          <span style={{ fontSize: '14px', fontWeight: 800, color: '#E6E600', cursor: 'pointer' }}>View All</span>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E5E7EB', padding: '0 20px', marginBottom: '24px' }}>
          {/* Item 1 */}
          <div className="flex justify-between items-center" style={{ padding: '20px 0', borderBottom: '1px solid #F3F4F6' }}>
            <div className="flex items-center gap-4">
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#FFFFE0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Receipt size={20} color="#121212" />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#121212', marginBottom: '4px' }}>Sep 12, 2023</div>
                <div className="flex items-center gap-1" style={{ fontSize: '12px', fontWeight: 700, color: '#059669' }}>
                  <Circle size={8} fill="#059669" color="#059669" /> Paid
                </div>
              </div>
            </div>
            <div className="flex col items-end">
              <div style={{ fontSize: '15px', fontWeight: 900, color: '#121212', marginBottom: '4px' }}>$49.00</div>
              <div className="flex items-center gap-1" style={{ fontSize: '12px', fontWeight: 700, color: '#9CA3AF' }}>
                <Download size={12} /> PDF
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex justify-between items-center" style={{ padding: '20px 0', borderBottom: '1px solid #F3F4F6' }}>
            <div className="flex items-center gap-4">
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#FFFFE0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Receipt size={20} color="#121212" />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#121212', marginBottom: '4px' }}>Aug 12, 2023</div>
                <div className="flex items-center gap-1" style={{ fontSize: '12px', fontWeight: 700, color: '#059669' }}>
                  <Circle size={8} fill="#059669" color="#059669" /> Paid
                </div>
              </div>
            </div>
            <div className="flex col items-end">
              <div style={{ fontSize: '15px', fontWeight: 900, color: '#121212', marginBottom: '4px' }}>$49.00</div>
              <div className="flex items-center gap-1" style={{ fontSize: '12px', fontWeight: 700, color: '#9CA3AF' }}>
                <Download size={12} /> PDF
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex justify-between items-center" style={{ padding: '20px 0', borderBottom: '1px solid #F3F4F6' }}>
            <div className="flex items-center gap-4">
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#FFF3CD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Hourglass size={20} color="#EA580C" />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#121212', marginBottom: '4px' }}>Jul 12, 2023</div>
                <div className="flex items-center gap-1" style={{ fontSize: '12px', fontWeight: 700, color: '#EA580C' }}>
                  <MoreHorizontal size={12} /> Processing
                </div>
              </div>
            </div>
            <div className="flex col items-end">
              <div style={{ fontSize: '15px', fontWeight: 900, color: '#9CA3AF', marginBottom: '4px' }}>$49.00</div>
              <div className="flex items-center gap-1" style={{ fontSize: '12px', fontWeight: 700, color: '#9CA3AF' }}>
                <Eye size={12} /> View
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex justify-between items-center" style={{ padding: '20px 0' }}>
            <div className="flex items-center gap-4">
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#FFFFE0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Receipt size={20} color="#121212" />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#121212', marginBottom: '4px' }}>Jun 12, 2023</div>
                <div className="flex items-center gap-1" style={{ fontSize: '12px', fontWeight: 700, color: '#059669' }}>
                  <Circle size={8} fill="#059669" color="#059669" /> Paid
                </div>
              </div>
            </div>
            <div className="flex col items-end">
              <div style={{ fontSize: '15px', fontWeight: 900, color: '#121212', marginBottom: '4px' }}>$49.00</div>
              <div className="flex items-center gap-1" style={{ fontSize: '12px', fontWeight: 700, color: '#9CA3AF' }}>
                <Download size={12} /> PDF
              </div>
            </div>
          </div>
        </div>

        {/* Support Card */}
        <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '24px', border: '1px dashed #CBD5E1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <div>
             <div style={{ fontSize: '14px', fontWeight: 800, color: '#121212', marginBottom: '4px' }}>Have questions?</div>
             <div style={{ fontSize: '12px', fontWeight: 500, color: '#64748B' }}>Contact our billing support team</div>
           </div>
           <button style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '16px', fontSize: '13px', fontWeight: 800, color: '#121212' }}>Get Help</button>
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav flex">
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Home size={22} color="#9CA3AF" fill="#9CA3AF" />
          </div>
          HOME
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Activity size={22} color="#9CA3AF" />
          </div>
          USAGE
        </div>
        <div className="nav-item active">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
             {/* Wallet icon placeholder */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" fill="#121212"/>
              <path d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z" fill="#FFFF00"/>
            </svg>
          </div>
          BILLING
        </div>
        <div className="nav-item">
          <div className="icon-wrapper" style={{ padding: '8px' }}>
            <Settings size={22} color="#9CA3AF" />
          </div>
          SETTINGS
        </div>
      </div>
    </div>
  );
}
