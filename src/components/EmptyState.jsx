import { Link } from 'react-router-dom';

function EmptyState({ title, description, actionLabel = 'Browse Medicines', actionTo = '/medicines' }) {
  return (
    <div className="glass-panel mx-auto max-w-2xl p-10 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-700">Nothing here yet</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      <Link className="button-primary mt-8" to={actionTo}>
        {actionLabel}
      </Link>
    </div>
  );
}

export default EmptyState;
