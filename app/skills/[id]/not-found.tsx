import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card bg-base-100 shadow-lg max-w-md w-full">
        <div className="card-body">
          <h2 className="card-title">Skill Not Found</h2>
          <p className="text-base-content text-sm opacity-75">
            The skill you are looking for does not exist or has been removed.
          </p>
          <div className="card-actions justify-end mt-4">
            <Link href="/" className="btn btn-primary btn-sm">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
