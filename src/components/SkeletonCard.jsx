function SkeletonCard() {
  return (
    <div className="glass-panel animate-pulse overflow-hidden">
      <div className="h-44 bg-slate-200" />
      <div className="space-y-3 p-5">
        <div className="h-3 w-24 rounded-full bg-slate-200" />
        <div className="h-6 w-3/4 rounded-full bg-slate-200" />
        <div className="h-4 w-full rounded-full bg-slate-200" />
        <div className="h-4 w-2/3 rounded-full bg-slate-200" />
        <div className="flex gap-3 pt-2">
          <div className="h-10 flex-1 rounded-2xl bg-slate-200" />
          <div className="h-10 w-24 rounded-2xl bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
