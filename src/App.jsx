import React, { useState } from 'react';
import './index.css';

// Importing exactly matched screens
import Dashboard from './components/Dashboard';
import AIAppLab from './components/AIAppLab';
import PipelineControl from './components/PipelineControl';
import BillingHistory from './components/BillingHistory';
import LeadProfile from './components/LeadProfile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  
  // Custom navigation structure since bottom nav changes per screen in the provided image designs
  const navigateTo = (screen) => setCurrentScreen(screen);

  return (
    <>
      {/* Dev Switcher to easily jump between exact matched screens */}
      <div className="dev-switcher">
        <button onClick={() => navigateTo('dashboard')}>1. Dashboard</button>
        <button onClick={() => navigateTo('lab')}>2. AI Lab</button>
        <button onClick={() => navigateTo('pipeline')}>3. Pipeline</button>
        <button onClick={() => navigateTo('billing')}>4. Billing</button>
        <button onClick={() => navigateTo('profile')}>5. Lead Profile</button>
      </div>

      {currentScreen === 'dashboard' && <Dashboard onNavigate={navigateTo} />}
      {currentScreen === 'lab' && <AIAppLab onNavigate={navigateTo} />}
      {currentScreen === 'pipeline' && <PipelineControl onNavigate={navigateTo} />}
      {currentScreen === 'billing' && <BillingHistory onNavigate={navigateTo} />}
      {currentScreen === 'profile' && <LeadProfile onNavigate={navigateTo} />}
    </>
  );
}
