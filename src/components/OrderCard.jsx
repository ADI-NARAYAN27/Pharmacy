function OrderCard({ order, onReorder }) {
  return (
    <article className="glass-panel p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-slate-900">{order.orderId}</h3>
            <span className="rounded-full bg-accent-50 px-3 py-1 text-sm font-semibold text-accent-700">
              {order.status}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            Ordered on {order.date} • {order.items.length} items
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {order.items.map((item) => (
              <span
                key={`${order.orderId}-${item.id}`}
                className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700"
              >
                {item.name} x{item.quantity}
              </span>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Total</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">${order.total.toFixed(2)}</p>
          <button className="button-secondary mt-4" onClick={onReorder} type="button">
            Quick Reorder
          </button>
        </div>
      </div>
    </article>
  );
}

export default OrderCard;
