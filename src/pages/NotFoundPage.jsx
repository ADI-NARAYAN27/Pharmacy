import EmptyState from '../components/EmptyState';

function NotFoundPage() {
  return (
    <div className="container-shell">
      <EmptyState
        actionLabel="Go Home"
        actionTo="/"
        description="The page you requested does not exist in this demo frontend."
        title="Page not found"
      />
    </div>
  );
}

export default NotFoundPage;
