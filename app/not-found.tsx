import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-pad py-20">
      <div className="card p-8">
        <h1 className="text-2xl font-extrabold">Page not found</h1>
        <p className="muted mt-2">That page doesn’t exist.</p>
        <div className="mt-6">
          <Link className="btn-solid" href="/">Go home</Link>
        </div>
      </div>
    </div>
  );
}
