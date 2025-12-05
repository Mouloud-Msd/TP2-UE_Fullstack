export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-extrabold text-indigo-600 mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 mb-8">
          Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          Retournez à l'accueil pour continuer votre exploration.
        </p>

        <a
          href="/"
          className="inline-block rounded-2xl bg-indigo-600 text-white px-6 py-3 font-semibold shadow hover:bg-indigo-700 transition"
        >
          Retour à l'accueil
        </a>
      </div>

      <div className="mt-12">
        <svg
          className="w-64 h-64 mx-auto opacity-30"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="256" cy="256" r="256" fill="#6366F1" />
          <path
            d="M256 128V256H384"
            stroke="white"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </main>
  );
}
