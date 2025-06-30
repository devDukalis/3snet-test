import { type FC } from "react";
import type { FallbackProps } from "react-error-boundary";

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow bg-white border border-gray-200 text-center">
      <h3 className="text-lg font-semibold text-red-600 mb-4">
        Что-то пошло не так!
      </h3>
      <pre className="text-gray-700 text-sm bg-gray-100 rounded p-3 mb-4 max-h-32 overflow-auto">
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 px-6 py-2 rounded bg-indigo-600 text-white font-semibold uppercase tracking-wide hover:bg-indigo-700 transition"
      >
        Попробовать снова
      </button>
    </div>
  );
};

export default ErrorFallback;
