import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeartPulse, Menu, ShoppingCart, Upload, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const navLinks = [
  { label: 'Medicines', to: '/medicines' },
  { label: 'Upload Rx', to: '/upload-prescription' },
  { label: 'Loyalty', to: '/loyalty-packages' },
  { label: 'Orders', to: '/order-history' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const linkClasses = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-brand-50 text-brand-700'
        : 'text-slate-600 hover:bg-slate-100 hover:text-brand-700'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link className="flex items-center gap-3" to="/">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
            <HeartPulse className="h-6 w-6" />
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-slate-900">PharmaCare</p>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-600">
              Trusted essentials
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} className={linkClasses} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link className="button-secondary !px-4 !py-2.5" to="/upload-prescription">
            <Upload className="mr-2 h-4 w-4" />
            Upload Prescription
          </Link>
          <Link className="relative rounded-2xl bg-slate-900 p-3 text-white" to="/cart">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-accent-500 px-1.5 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link className="relative rounded-2xl bg-slate-900 p-3 text-white" to="/cart">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-accent-500 px-1.5 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-700"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              className="button-secondary mt-2 !justify-center"
              onClick={() => setMenuOpen(false)}
              to="/upload-prescription"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Prescription
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
