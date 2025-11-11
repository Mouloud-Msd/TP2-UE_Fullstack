export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-900 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              TP2_UE_FS — Interface de gestion d'événements & artistes
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Projet frontend relié à une API existante. L'objectif : construire
              une interface ergonomique, responsive et robuste pour parcourir,
              créer et gérer événements et artistes (relation many-to-many).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/events"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:scale-[1.02] transition-transform"
                aria-label="Voir les événements"
              >
                Voir les événements
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="/artists"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition"
              >
                Voir les artistes
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Contexte : API volontairement minimaliste / erreurs serveur mal
              gérées — tu dois prendre ça en compte côté frontend.
            </p>
          </div>

          {/* Illustration simple */}
          <div className="order-first md:order-last flex justify-center md:justify-end">
            <svg
              width="320"
              height="220"
              viewBox="0 0 320 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Illustration gestion d'événements"
              className="w-full max-w-md"
            >
              <rect
                x="0"
                y="0"
                width="320"
                height="220"
                rx="16"
                fill="url(#g)"
              />
              <g opacity="0.95" transform="translate(28,28)">
                <rect x="0" y="0" width="200" height="36" rx="6" fill="white" />
                <rect
                  x="0"
                  y="56"
                  width="140"
                  height="24"
                  rx="6"
                  fill="white"
                />
                <rect
                  x="0"
                  y="92"
                  width="180"
                  height="24"
                  rx="6"
                  fill="white"
                />
                <circle cx="160" cy="68" r="20" fill="white" />
                <rect
                  x="0"
                  y="128"
                  width="120"
                  height="20"
                  rx="6"
                  fill="white"
                  opacity="0.85"
                />
              </g>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#eef2ff" />
                  <stop offset="1" stopColor="#f0fdf4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        {/* FEATURES / CONTRAINTES */}
        <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "4 vues principales",
              desc: "Liste événements, détail événement, liste artistes, formulaire de création/édition.",
              accent: "Indigo",
            },
            {
              title: "Validations",
              desc: "Validation côté client : champs requis, formats (dates, emails), retours utilisateur clairs.",
              accent: "Green",
            },
            {
              title: "Gestion d'erreurs",
              desc: "Gérer 400/401/404/500, affichage d'alertes toast et comportements de récupération.",
              accent: "Rose",
            },
            {
              title: "Pagination & Perf",
              desc: "Pagination côté UI, chargements incrémentaux, bons indicateurs d'état (skeletons).",
              accent: "Amber",
            },
          ].map((f, i) => (
            <article
              key={i}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50`}
                  aria-hidden
                >
                  <span className="text-sm font-semibold text-slate-600">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-500">{f.desc}</p>
            </article>
          ))}
        </section>

        {/* TECH STACK & APPROCHE */}
        <section className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Approche</h4>
            <p className="mt-2 text-sm text-slate-600">
              Construire une UI robuste face à une API imparfaite : validations
              préventives, messages d'erreur explicites, retries/gestion offline
              légère, et attention portée à l'UX (transitions, skeletons,
              accessibilité).
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full border px-3 py-1 text-xs font-medium bg-slate-50">
                Formulaires
              </span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium bg-slate-50">
                Pagination
              </span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium bg-slate-50">
                Toasts / Alerts
              </span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium bg-slate-50">
                Skeletons
              </span>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h5 className="text-sm font-semibold">Tech stack</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• React / Next.js</li>
              <li>• TailwindCSS</li>
              <li>• fetch / axios</li>
              <li>• Formik or React Hook Form</li>
              <li>• Optional: shadcn/ui + lucide-react</li>
            </ul>
          </aside>
        </section>

        {/* TEAM */}
        <section className="mt-12 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h4 className="text-lg font-semibold">Équipe</h4>
          <p className="mt-2 text-sm text-slate-600">
            Projet : TP2_UE_FS — équipe à titre d'exemple. Remplacez les entrées
            par vos vrais noms/avatars.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Mouloud MESSAD", role: "Dév Front" },
              { name: "Yanis SADOUN", role: "Dév Front" },
            ].map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <div className="h-10 w-10 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium text-slate-700">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{m.name}</div>
                  <div className="text-xs text-slate-500">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
