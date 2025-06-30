import { type FC } from "react";

interface Props {
  message?: string;
}

const ErrorMessage: FC<Props> = ({ message = "Что-то пошло не так!" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 px-4">
      <div
        className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md max-w-md shadow-md"
        role="alert"
      >
        <svg
          className="w-6 h-6 mr-3 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fillRule="evenodd"
            d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-3a1 1 0 112 0v4a1 1 0 11-2 0V7zm1 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            clipRule="evenodd"
          />
        </svg>
        <span className="block">{message}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
