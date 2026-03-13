function CategoryPill({ active = false, children, onClick }) {
  return (
    <button
      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
        active
          ? 'border-brand-500 bg-brand-500 text-white shadow-soft'
          : 'border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-700'
      }`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default CategoryPill;
