import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, MailCheck } from 'lucide-react';

function OrderSuccessPage() {
  const location = useLocation();
  const orderId = location.state?.orderId || 'ORD-PLACEHOLDER';

  return (
    <div className="container-shell">
      <div className="glass-panel mx-auto max-w-3xl p-8 text-center sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-50 text-accent-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-brand-700">Order confirmed</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-slate-900">
          Your pharmacy order is being prepared
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          A confirmation email placeholder has been triggered for this demo flow. Order updates can
          be shown here once the backend is connected.
        </p>

        <div className="mt-8 rounded-3xl bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Order ID</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{orderId}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700">
            <MailCheck className="h-4 w-4" />
            Email confirmation placeholder
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link className="button-primary" to="/order-history">
            View Order History
          </Link>
          <Link className="button-secondary" to="/medicines">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
