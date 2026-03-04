import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/tools')({
  component: ToolsLayout,
});

function ToolsLayout() {
  return <Outlet />;
}
