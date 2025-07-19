// pages/index.tsx

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.location.hostname === 'dealflowpros.com' &&
      window.location.pathname === '/'
    ) {
      const script = document.createElement('script');
      script.src = 'https://magic.vercel.pub/script.js';
      script.defer = true;
      script.dataset.projectId = 'dfp-homepage-editor';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🚀 DealFlow Pro</h1>
      <p>Edit this homepage using the Magic Editor. Admin-only access is active.</p>
      <ul>
        <li>✅ Lead Tracking</li>
        <li>📊 ROI Heatmaps</li>
        <li>📈 Sales Pace Calculator</li>
        <li>🕰️ Oldest Units in Stock</li>
        <li>🚨 Unsold Alert Vehicles</li>
      </ul>
    </div>
  );
}

