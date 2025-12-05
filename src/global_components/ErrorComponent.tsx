import type { ErrorProps } from "../models/types/ErrorType";
export function ErrorComponent({ status, message }: ErrorProps) {
  let title = "An error occurred";
  let description = message || "Something went wrong.";

  switch (status) {
    case 400:
      title = "Bad Request";
      description =
        message ||
        "The server could not understand the request due to invalid syntax.";
      break;
    case 404:
      title = "page introuvable";
      description = message || "The requested resource could not be found.";
      break;
    case 500:
      title = "Internal Server Error";
      description =
        message ||
        "The server has encountered a situation it doesn't know how to handle.";
      break;

    default:
      title = `Error ${status}`;
      break;
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      <h1 className="text-7xl font-extrabold text-gray-800">{status}</h1>

      <h2 className="text-3xl mt-4 font-semibold text-gray-700">{title}</h2>

      <p className="text-gray-500 mt-2 max-w-md">{description}</p>

      <a
        href="/"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Retour à l’accueil
      </a>
    </div>
  );
}
