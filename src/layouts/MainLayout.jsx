import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pb-12 pt-6 sm:pt-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
