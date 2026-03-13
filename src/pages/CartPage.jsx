import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import QuantitySelector from '../components/QuantitySelector';
import EmptyState from '../components/EmptyState';

function CartPage() {
  const { cartItems, deliveryFee, removeItem, subtotal, total, updateQuantity } = useCart();

  if (!cartItems.length) {
    return (
      <div className="container-shell">
        <EmptyState
          description="Your cart is empty. Add medicines from the catalogue to continue to checkout."
          title="No medicines in cart"
        />
      </div>
    );
  }

  return (
    <div className="container-shell grid gap-8 xl:grid-cols-[1fr_380px]">
      <section className="space-y-5">
        {cartItems.map((item) => (
          <article key={item.id} className="glass-panel p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <img alt={item.name} className="h-28 w-full rounded-3xl object-cover sm:w-32" src={item.image} />
              <div className="flex-1">
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">{item.name}</h2>
                    <p className="mt-2 text-sm text-slate-500">
                      {item.dosage} • {item.packaging}
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">${item.price.toFixed(2)}</p>
                </div>

                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <QuantitySelector
                    onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                    onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                    quantity={item.quantity}
                  />
                  <button
                    className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 font-semibold text-rose-600 transition hover:bg-rose-50"
                    onClick={() => removeItem(item.id)}
                    type="button"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="glass-panel h-fit p-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Cart summary</p>
        <div className="mt-6 space-y-4 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Delivery fee</span>
            <span className="font-semibold text-slate-900">${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-slate-900">Total</span>
              <span className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <Link className="button-primary mt-6 w-full" to="/checkout">
          Proceed to Checkout
        </Link>
      </aside>
    </div>
  );
}

export default CartPage;
