import artistsApi from "../../../http/artistsApi";
import { type artists } from "../../../models/ArtistModel";
import { useEffect, useState } from "react";
import Pagination from "../../../global_components/Pagination";
import { useArtistStore } from "../../../store/useArtistStore";

export default function Artists() {
  const { openEditModal, modified } = useArtistStore();
  const [artistsList, setArtistsList] = useState<artists[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    artistsApi
      .getByPage(currentPage - 1)
      .then((response) => {
        setArtistsList(response.data.content);
        setTotalPage(response.data.totalPages);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des artistes :", error);
      })
      .finally(() => setLoading(false));
  }, [currentPage, modified]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Artistes
          </h1>
          <p className="mt-2 text-slate-600 text-sm md:text-base">
            Découvrez la liste des artistes et les événements auxquels ils
            participent.
          </p>
        </div>

        {/* CHARGEMENT */}
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-600 border-solid"></div>
          </div>
        ) : artistsList.length === 0 ? (
          <p className="text-center text-slate-500">Aucun artiste trouvé.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {artistsList.map((artist) => (
              <li
                key={artist.id}
                className="group rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
              >
                {/* IMAGE / BANNIÈRE */}
                <div className="relative">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=600"
                    }
                    alt={artist.label}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    onClick={() => openEditModal(artist)}
                    className="absolute top-2 right-2 rounded-full bg-white/80 p-2 hover:bg-white shadow"
                    title="Modifier l'artiste"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-slate-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                </div>

                {/* CONTENU */}
                <div className="flex flex-col flex-grow p-5">
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">
                    {artist.label}
                  </h2>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {artist.events && artist.events.length > 0 ? (
                      artist.events.map((event) => (
                        <span
                          key={event.id}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                        >
                          {event.label}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400">
                        Aucun événement associé
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-xs text-slate-400">
                    Nombre d’événements : {artist.events?.length || 0}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* PAGINATION */}
        <div className="mt-10 flex justify-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </main>
  );
}
