import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useCart } from '../hooks/useCart';

function MedicineCard({ medicine }) {
  const { addItem } = useCart();

  return (
    <article className="glass-panel group overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-accent-50">
        <img
          alt={medicine.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          src={medicine.image}
        />
        {medicine.prescriptionRequired && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            Prescription needed
          </span>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
              {medicine.category}
            </span>
            <span className="text-lg font-bold text-slate-900">${medicine.price.toFixed(2)}</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{medicine.name}</h3>
          <p className="text-sm leading-6 text-slate-600">{medicine.shortDescription}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Dosage</p>
            <p className="mt-1 font-semibold text-slate-700">{medicine.dosage}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Packaging</p>
            <p className="mt-1 font-semibold text-slate-700">{medicine.packaging}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            className="button-secondary flex-1 !rounded-2xl !px-4 !py-3"
            onClick={() => addItem(medicine)}
            type="button"
          >
            Add to Cart
          </button>
          <Link
            className="button-primary flex-1 !rounded-2xl !px-4 !py-3"
            to={`/medicines/${medicine.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default MedicineCard;
