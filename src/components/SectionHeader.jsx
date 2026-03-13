function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-700">{eyebrow}</p>
        )}
        <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {description && <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export default SectionHeader;
