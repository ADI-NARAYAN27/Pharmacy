function QuantitySelector({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="inline-flex items-center rounded-2xl border border-slate-200 bg-white p-1">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
        onClick={onDecrease}
        type="button"
      >
        -
      </button>
      <span className="w-10 text-center font-semibold text-slate-900">{quantity}</span>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
        onClick={onIncrease}
        type="button"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
