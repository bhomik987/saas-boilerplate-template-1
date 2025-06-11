import Header from '../../components/header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/footer';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f8f8' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flexGrow: 1, padding: '2rem' }}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
