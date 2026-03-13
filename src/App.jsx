import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import MedicineListingPage from './pages/MedicineListingPage';
import MedicineDetailsPage from './pages/MedicineDetailsPage';
import UploadPrescriptionPage from './pages/UploadPrescriptionPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import LoyaltyPackagesPage from './pages/LoyaltyPackagesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/medicines" element={<MedicineListingPage />} />
        <Route path="/medicines/:medicineId" element={<MedicineDetailsPage />} />
        <Route path="/upload-prescription" element={<UploadPrescriptionPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/loyalty-packages" element={<LoyaltyPackagesPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
