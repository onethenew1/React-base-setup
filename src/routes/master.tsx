import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/master")({
  component: RouteComponent,
});
function Appleslide() {
  return (
    <div>
      <h1>Appleslide</h1>
    </div>
  );
}
function RouteComponent() {
  return (
    <div>
      <h1>Get to know iPhone</h1>
      <div>
        <Appleslide />
      </div>
    </div>
  );
}
