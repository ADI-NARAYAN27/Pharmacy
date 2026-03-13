import { CheckCircle2 } from 'lucide-react';

function PackageCard({ item }) {
  return (
    <article className="glass-panel group p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-700">{item.tag}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900">{item.name}</h3>
        </div>
        <div className="rounded-2xl bg-accent-50 px-4 py-3 text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-700">Price</p>
          <p className="mt-1 text-2xl font-bold text-accent-800">${item.price}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.includes.map((feature) => (
          <span
            key={feature}
            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700"
          >
            <CheckCircle2 className="h-4 w-4 text-accent-600" />
            {feature}
          </span>
        ))}
      </div>
      <button className="button-primary mt-6 w-full" type="button">
        Explore Package
      </button>
    </article>
  );
}

export default PackageCard;
