import React, { useState, useEffect } from 'react';
import { Search, MapPin, Globe, Filter, CheckCircle2, ChevronRight, Phone, Mail } from 'lucide-react';

export default function LeadScraper({ onNavigate, onSelectLead }) {
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [leads, setLeads] = useState([]);
  const [query, setQuery] = useState('');

  const API_URL = 'http://localhost:5000/api';

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch(`${API_URL}/leads`);
      const data = await res.json();
      if (data.length > 0) {
        setLeads(data);
        setSearched(true);
      }
    } catch (err) {
      console.log('Backend not reachable');
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      await fetch(`${API_URL}/scrape`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query || 'Businesses' })
      });
      await fetchLeads();
      setSearched(true);
    } catch (error) {
      console.error('Failed to trigger scrape', error);
      // Fallback for demo
      setSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F9FAFB' }}>
      <div className="top-bar flex items-center justify-between" style={{ background: '#F9FAFB', zIndex: 10 }}>
        <h1 className="top-bar-title" style={{ fontSize: '18px', fontWeight: 900 }}>Lead Engine</h1>
      </div>

      <div className="scroll-area flex col" style={{ padding: '0 16px 120px 16px' }}>
        <div className="card text-center" style={{ margin: '20px 0', background: '#FFFFFF', border: '2px solid #000', borderRadius: '20px', padding: '20px' }}>
          <div className="flex items-center gap-2 mb-3">
            <Search size={18} color="#9CA3AF" />
            <input 
              type="text" 
              placeholder="e.g. Restaurants in Delhi" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ border: 'none', width: '100%', fontSize: '16px', outline: 'none', fontWeight: 600, background: 'transparent' }}
            />
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm" style={{ flex: 1, padding: '10px', borderRadius: '12px', border: '1px solid #000', background: 'transparent', fontWeight: 700 }}>
              <Filter size={14} /> Source
            </button>
            <button className="btn btn-sm" style={{ flex: 2, padding: '10px', borderRadius: '12px', background: '#FFFF00', border: 'none', fontWeight: 800 }} onClick={handleSearch}>
              {loading ? 'Scraping...' : 'Scrape Now'}
            </button>
          </div>
        </div>

        {searched && (
          <div className="flex justify-between items-center mb-4">
            <h3 style={{ fontSize: '18px', fontWeight: 800 }}>found <span style={{color: '#059669'}}>{leads.length}</span> leads</h3>
            <span style={{ background: '#000', color: '#FFF', padding: '4px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 900 }}>Top 4 shown</span>
          </div>
        )}

        {leads.map(lead => (
          <div 
            key={lead._id || lead.id} 
            className="card animate-slide-up" 
            style={{ 
              margin: '0 0 12px 0', 
              padding: '16px', 
              borderRadius: '20px',
              border: '1px solid #F3F4F6',
              background: '#FFFFFF',
              cursor: 'pointer'
            }}
            onClick={() => onSelectLead(lead)}
          >
            <div className="flex gap-4">
              <div style={{ 
                width: 64, height: 64, borderRadius: '12px', background: '#F9FAFB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: '20px', color: '#D1D5DB', border: '1px solid #F3F4F6'
              }}>
                {lead.img || lead.name.slice(0, 2).toUpperCase()}
              </div>
              
              <div className="flex col justify-between w-full">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#121212' }}>{lead.name}</h3>
                    {lead.verified && <CheckCircle2 size={16} fill="#FFFF00" color="#000" />}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#9CA3AF' }}>{lead.type}</span>
                </div>
                
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1" style={{ fontSize: '11px', fontWeight: 800, color: '#9CA3AF' }}>
                    <MapPin size={12} /> {lead.distance}
                  </div>
                  <div className="flex items-center gap-1" style={{ fontSize: '11px', fontWeight: 800, color: '#FFFF00', textShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
                    <Globe size={12} color="#000" /> {lead.website ? 'Web' : 'No Web'}
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid #F9FAFB', marginTop: '16px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div className="flex gap-2">
                 <div style={{ background: '#F9FAFB', padding: '6px', borderRadius: '50%' }}><Phone size={14} /></div>
                 <div style={{ background: '#F9FAFB', padding: '6px', borderRadius: '50%' }}><Mail size={14} /></div>
               </div>
               <div className="flex items-center gap-2">
                 <span style={{ fontSize: '11px', fontWeight: 800, color: '#121212' }}>AI SCORE: <span style={{ color: lead.score > 90 ? '#059669' : '#121212' }}>{lead.score}/100</span></span>
                 <ChevronRight size={16} color="#9CA3AF" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
