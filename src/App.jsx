import React, { useState } from 'react';
import './index.css';

// Importing exactly matched screens
import Dashboard from './components/Dashboard';
import AIAppLab from './components/AIAppLab';
import PipelineControl from './components/PipelineControl';
import BillingHistory from './components/BillingHistory';
import LeadProfile from './components/LeadProfile';
import LeadScraper from './components/LeadScraper';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [selectedLead, setSelectedLead] = useState(null);
  
  const navigateTo = (screen) => setCurrentScreen(screen);

  const handleSelectLead = (lead) => {
    setSelectedLead(lead);
    setCurrentScreen('profile');
  };

  return (
    <>
      <div className="dev-switcher">
        <button onClick={() => navigateTo('dashboard')}>1. Dashboard</button>
        <button onClick={() => navigateTo('leads')}>2. Lead Engine</button>
        <button onClick={() => navigateTo('lab')}>3. AI Lab</button>
        <button onClick={() => navigateTo('pipeline')}>4. Pipeline</button>
        <button onClick={() => navigateTo('billing')}>5. Billing</button>
      </div>

      {currentScreen === 'dashboard' && <Dashboard onNavigate={navigateTo} />}
      {currentScreen === 'leads' && <LeadScraper onNavigate={navigateTo} onSelectLead={handleSelectLead} />}
      {currentScreen === 'lab' && <AIAppLab onNavigate={navigateTo} lead={selectedLead} />}
      {currentScreen === 'pipeline' && <PipelineControl onNavigate={navigateTo} />}
      {currentScreen === 'billing' && <BillingHistory onNavigate={navigateTo} />}
      {currentScreen === 'profile' && <LeadProfile onNavigate={navigateTo} lead={selectedLead} />}
    </>
  );
}
