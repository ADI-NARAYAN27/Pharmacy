import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCart } from '../hooks/useCart';
import EmptyState from '../components/EmptyState';
import { placeOrder } from '../services/api';

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  zipCode: '',
};

function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, clearCart, deliveryFee, subtotal, total } = useCart();
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  if (!cartItems.length) {
    return (
      <div className="container-shell">
        <EmptyState
          actionLabel="Go to Cart"
          actionTo="/cart"
          description="Add medicines to the cart before moving to checkout."
          title="Checkout is empty"
        />
      </div>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.fullName || !form.phone || !form.address || !form.city || !form.zipCode) {
      toast.error('Complete the delivery details before placing the order');
      return;
    }

    setSubmitting(true);
    const result = await placeOrder({
      customer: form,
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
    });
    clearCart();
    setSubmitting(false);
    navigate('/order-success', { state: { orderId: result.orderId } });
  };

  return (
    <div className="container-shell grid gap-8 xl:grid-cols-[1fr_380px]">
      <form className="glass-panel p-6 sm:p-8" onSubmit={handleSubmit}>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Checkout</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-slate-900">Delivery details</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Complete the delivery address below. Payment and validation are placeholders in this
          frontend demo.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <input className="input-field" name="fullName" onChange={handleChange} placeholder="Full name" value={form.fullName} />
          <input className="input-field" name="phone" onChange={handleChange} placeholder="Phone number" value={form.phone} />
          <input className="input-field sm:col-span-2" name="email" onChange={handleChange} placeholder="Email address" value={form.email} />
          <input className="input-field sm:col-span-2" name="address" onChange={handleChange} placeholder="Street address" value={form.address} />
          <input className="input-field" name="city" onChange={handleChange} placeholder="City" value={form.city} />
          <input className="input-field" name="zipCode" onChange={handleChange} placeholder="ZIP / Postal code" value={form.zipCode} />
        </div>

        <div className="mt-8 space-y-4">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-800">
            Prescription validation notice: prescription-only medicines require backend-side review
            before final fulfillment. This demo shows the notice only.
          </div>
          <div className="rounded-3xl border border-brand-100 bg-brand-50 p-4 text-sm leading-7 text-brand-800">
            Payment placeholder: integrate your payment gateway or COD logic here once backend
            order creation is available.
          </div>
        </div>

        <button className="button-primary mt-8" disabled={submitting} type="submit">
          {submitting ? 'Placing order...' : 'Place Order'}
        </button>
      </form>

      <aside className="glass-panel h-fit p-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Order summary</p>
        <div className="mt-6 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start justify-between gap-4 text-sm">
              <div>
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="mt-1 text-slate-500">
                  Qty {item.quantity} • {item.dosage}
                </p>
              </div>
              <p className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Delivery</span>
            <span className="font-semibold text-slate-900">${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-base">
            <span className="font-semibold text-slate-900">Total</span>
            <span className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default CheckoutPage;
