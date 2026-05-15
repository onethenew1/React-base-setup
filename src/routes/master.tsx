import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/master")({
  component: RouteComponent,
});
function Appleslide() {
  return (
    <div>
      <h1>Appleslide</h1>
      <h2>hello world</h2>
    </div>
  );
}
function RouteComponent() {
  return (
    <div>
      <h1>Get to know iPhone</h1>
      <Appleslide />
      <div className="flex items-center justify-center">
        <div
          onClick={() => console.log("Outer")}
          className="mt-4 rounded-lg border border-blue-300 bg-blue-200 p-4"
        >
          <div
            onClick={() => console.log("Middle")}
            className="mt-4 flex items-center justify-center rounded-md border border-pink-300 bg-pink-200 p-4"
          >
            <button
              onClick={() => console.log("Inner")}
              className="mt-4 rounded-md border border-yellow-300 bg-yellow-200 p-4"
            >
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
