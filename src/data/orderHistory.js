const orderHistory = [
  {
    orderId: 'ORD-903421',
    date: 'March 07, 2026',
    status: 'Delivered',
    total: 58.47,
    items: [
      { id: 'paracetamol-650', name: 'Paracetamol 650mg', quantity: 1 },
      { id: 'omega-3-softgels', name: 'Omega-3 Softgels', quantity: 2 },
    ],
  },
  {
    orderId: 'ORD-903198',
    date: 'February 24, 2026',
    status: 'Delivered',
    total: 93.85,
    items: [
      { id: 'metformin-500', name: 'Metformin 500mg', quantity: 1 },
      { id: 'vitamin-d3', name: 'Vitamin D3', quantity: 1 },
      { id: 'coq10-capsules', name: 'CoQ10 Capsules', quantity: 1 },
    ],
  },
  {
    orderId: 'ORD-902844',
    date: 'February 05, 2026',
    status: 'Delivered',
    total: 34.48,
    items: [
      { id: 'cetirizine-10', name: 'Cetirizine 10mg', quantity: 1 },
      { id: 'zinc-plus', name: 'Zinc Plus', quantity: 1 },
    ],
  },
];

export default orderHistory;
