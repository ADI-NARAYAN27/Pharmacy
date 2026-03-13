# Pharmacy Ordering Website

Frontend-only pharmacy ordering experience built with React, Vite, TailwindCSS, React Router, and Axios. The app uses mock data by default and keeps backend integration points isolated in [`src/services/api.js`](./src/services/api.js).

## Features

- Multi-page healthcare storefront with responsive navigation
- Landing page with hero search, featured medicines, categories, and health packages
- Medicine listing with search, filters, skeleton loading, and detail views
- Drag-and-drop prescription upload flow with preview and submit placeholder
- Cart, checkout, order success, order history, and loyalty pages
- Toast notifications and local cart state persistence

## Project Structure

```text
src/
  assets/
  components/
  data/
  hooks/
  layouts/
  pages/
  services/
```

## Getting Started

```bash
npm install
npm run dev
```

The development server will usually start on `http://localhost:5173`.

## Mock Data and API Placeholders

- Mock mode is enabled by default through `VITE_USE_MOCK_API=true`.
- Backend placeholders live in [`src/services/api.js`](./src/services/api.js).
- Axios calls already point to placeholder endpoints such as `/api/medicines` and `/api/orders`.

## Connecting a Backend Later

1. Create a `.env` file in the project root.
2. Add the backend base URL:

```bash
VITE_API_BASE_URL=http://localhost:5000
VITE_USE_MOCK_API=false
```

3. Update the endpoint paths in [`src/services/api.js`](./src/services/api.js) if your backend routes differ.
4. Replace or remove the mock fallback branches once the backend is ready.
5. Ensure the backend returns data matching the medicine, order, and checkout shapes used by the pages.

## Suggested Backend Endpoints

- `GET /api/medicines`
- `POST /api/prescriptions/upload`
- `POST /api/orders`
- `GET /api/orders/history`

## Build

```bash
npm run build
```
