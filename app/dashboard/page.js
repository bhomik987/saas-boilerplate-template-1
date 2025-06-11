'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../libs/supabaseClient';
import Button from '../../components/Button';
import CTA from '../../components/CTA';
import ProgressBarDemo from '../../components/ProgressBarDemo';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 1234,
    activeSubscriptions: 567,
    revenue: '$12,345',
  });

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();

    // In a real app, you would fetch this data from Supabase
    // For now, using dummy data
    // const fetchDashboardData = async () => {
    //   const { data, error } = await supabase.from('dashboard_metrics').select('*').single();
    //   if (data) setDashboardData(data);
    // };
    // fetchDashboardData();

  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>;
  if (!user) return <div style={{ textAlign: 'center', padding: '2rem' }}>Please log in to view the dashboard.</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333' }}>Welcome, {user.email}!</h1>
      
      <section style={{ background: '#fff', color: '#000', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Overview</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>Total Users</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>{dashboardData.totalUsers}</p>
          </div>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>Active Subscriptions</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>{dashboardData.activeSubscriptions}</p>
          </div>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>Total Revenue</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>{dashboardData.revenue}</p>
          </div>
        </div>
      </section>

      {/* Progress Bar Demo Section */}
      <section style={{ marginBottom: '2rem' }}>
        <ProgressBarDemo />
      </section>

      <CTA />

      <button
        onClick={async () => { await supabase.auth.signOut(); window.location.href = '/'; }}
        style={{
          background: '#dc3545', /* Red for sign out */
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '2rem',
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
