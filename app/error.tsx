'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card bg-base-100 shadow-lg max-w-md w-full">
        <div className="card-body">
          <h2 className="card-title text-error">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Something went wrong!
          </h2>
          <p className="text-base-content text-sm opacity-75">
            {error.message || 'An unexpected error occurred'}
          </p>
          {error.digest && (
            <p className="text-xs text-base-content opacity-50 font-mono mt-2">
              Error ID: {error.digest}
            </p>
          )}
          <div className="card-actions justify-end mt-4">
            <button
              onClick={() => unstable_retry()}
              className="btn btn-primary btn-sm"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
