import { Link, useParams } from 'react-router-dom';
import { ShieldAlert, ShoppingCart, Star } from 'lucide-react';
import medicines from '../data/medicines.json';
import { useCart } from '../hooks/useCart';
import EmptyState from '../components/EmptyState';

function MedicineDetailsPage() {
  const { medicineId } = useParams();
  const { addItem } = useCart();
  const medicine = medicines.find((item) => item.id === medicineId);

  if (!medicine) {
    return (
      <div className="container-shell">
        <EmptyState
          actionLabel="Back to Medicines"
          actionTo="/medicines"
          description="The requested medicine could not be found in the local demo catalogue."
          title="Medicine not found"
        />
      </div>
    );
  }

  return (
    <div className="container-shell">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel overflow-hidden">
          <div className="bg-gradient-to-br from-brand-50 to-accent-50 p-6">
            <img alt={medicine.name} className="h-[420px] w-full rounded-[2rem] object-cover" src={medicine.image} />
          </div>
        </div>

        <div className="glass-panel p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              {medicine.category}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
              <Star className="h-4 w-4 fill-current" />
              4.8 patient rating
            </span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-semibold text-slate-900">{medicine.name}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{medicine.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Dosage</p>
              <p className="mt-2 font-semibold text-slate-900">{medicine.dosage}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Packaging</p>
              <p className="mt-2 font-semibold text-slate-900">{medicine.packaging}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Price</p>
              <p className="mt-2 font-semibold text-slate-900">${medicine.price.toFixed(2)}</p>
            </div>
          </div>

          <div
            className={`mt-8 rounded-3xl border p-4 ${
              medicine.prescriptionRequired
                ? 'border-amber-200 bg-amber-50 text-amber-800'
                : 'border-accent-200 bg-accent-50 text-accent-800'
            }`}
          >
            <p className="inline-flex items-center gap-2 font-semibold">
              <ShieldAlert className="h-5 w-5" />
              {medicine.prescriptionRequired
                ? 'Prescription required before checkout validation'
                : 'No prescription required for this medicine'}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="button-primary flex-1" onClick={() => addItem(medicine)} type="button">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <Link className="button-secondary flex-1" to="/upload-prescription">
              Upload Prescription
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineDetailsPage;
