import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-md">
          <p className="font-display text-2xl font-semibold text-slate-900">PharmaCare</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A modern pharmacy ordering experience for daily wellness, chronic care, and faster
            prescription management.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link to="/medicines">Medicines</Link>
            <Link to="/loyalty-packages">Health Packages</Link>
            <Link to="/order-history">Order History</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Support</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link to="/upload-prescription">Upload Prescription</Link>
            <Link to="/checkout">Checkout</Link>
            <p>support@pharmacare.demo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
