import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import medicines from '../data/medicines.json';
import OrderCard from '../components/OrderCard';
import SectionHeader from '../components/SectionHeader';
import EmptyState from '../components/EmptyState';
import { useCart } from '../hooks/useCart';
import { getOrderHistory } from '../services/api';

function OrderHistoryPage() {
  const { addItem } = useCart();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      setLoading(true);
      const data = await getOrderHistory();
      setOrders(data);
      setLoading(false);
    }

    loadOrders();
  }, []);

  const handleReorder = (order) => {
    order.items.forEach((orderItem) => {
      const medicine = medicines.find((item) => item.id === orderItem.id);
      if (medicine) {
        addItem(medicine, orderItem.quantity);
      }
    });

    toast.success(`${order.orderId} added back to cart`);
  };

  if (!loading && !orders.length) {
    return (
      <div className="container-shell">
        <EmptyState
          description="Past orders will appear here once customers start purchasing medicines."
          title="No past orders"
        />
      </div>
    );
  }

  return (
    <div className="container-shell">
      <SectionHeader
        description="Review previous pharmacy purchases and quickly add the same products back to the cart."
        eyebrow="Order history"
        title="Your recent orders"
      />

      <div className="space-y-5">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="glass-panel animate-pulse p-6">
                <div className="h-5 w-40 rounded-full bg-slate-200" />
                <div className="mt-4 h-4 w-56 rounded-full bg-slate-200" />
                <div className="mt-6 h-12 rounded-2xl bg-slate-200" />
              </div>
            ))
          : orders.map((order) => (
              <OrderCard key={order.orderId} onReorder={() => handleReorder(order)} order={order} />
            ))}
      </div>
    </div>
  );
}

export default OrderHistoryPage;
