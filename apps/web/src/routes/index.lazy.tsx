import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return <p className="text-xl">Reldo web app scaffold is ready.</p>;
}
