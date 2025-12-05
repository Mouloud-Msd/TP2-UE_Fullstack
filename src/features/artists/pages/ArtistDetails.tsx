import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { artists } from "../../../models/ArtistModel";
import {
  Calendar,
  ArrowLeft,
  Facebook,
  Instagram,
  Twitter,
  Music,
} from "lucide-react";
import artistsApi from "../../../http/artistsApi";

export default function ArtistDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artist, setArtist] = useState<artists | null>(null);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    async function fetchArtist() {
      try {
        setLoading(true);
        const { data } = await artistsApi.getById(id!);
        if (!data) throw new Error("not found");
        setArtist(data);
      } catch {
        navigate("/404");
      } finally {
        setLoading(false);
      }
    }
    fetchArtist();
  }, [id, navigate]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-400">
        Chargement...
      </div>
    );

  if (!artist) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-900 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <button className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour aux artistes
        </button>

        <div className="rounded-2xl border border-slate-100 shadow-lg overflow-hidden">
          <div className="relative h-full w-full bg-blue-500/30 rounded-md bg-clip-padding backdrop-blur-lg bg-opacity-10 border border-gray-100 px-8 py-12">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 text-xs font-medium text-white mb-3">
                  <Music className="w-3 h-3" />
                  Artiste
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                  {artist.label}
                </h1>

                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href={`https://facebook.com/${artist.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://instagram.com/${artist.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-pink-500 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://twitter.com/${artist.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-400 transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Événements associés
                </h2>
              </div>

              {artist.events && artist.events.length > 0 ? (
                <div className="space-y-3">
                  {artist.events.map((event) => {
                    const isMultiDay = event.startDate !== event.endDate;
                    return (
                      <div
                        key={event.id}
                        className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                              {event.label}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                              <div className="inline-flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(event.startDate)}</span>
                              </div>
                              {isMultiDay && (
                                <>
                                  <span className="text-slate-300">→</span>
                                  <div className="inline-flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDate(event.endDate)}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                              {isMultiDay ? "Multi-jours" : "Jour unique"}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
                  <Calendar className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                  <p className="text-sm text-slate-500">
                    Aucun événement associé pour le moment
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">
            Statistiques
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-4 border border-purple-100">
              <div className="text-2xl font-bold text-purple-600">
                {artist.events?.length || 0}
              </div>
              <div className="text-xs text-slate-600 mt-1">Événements</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">
                {artist.events?.filter(
                  (e) => new Date(e.startDate) > new Date()
                ).length || 0}
              </div>
              <div className="text-xs text-slate-600 mt-1">À venir</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4 border border-emerald-100 col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-emerald-600">
                {artist.events?.filter((e) => new Date(e.endDate) < new Date())
                  .length || 0}
              </div>
              <div className="text-xs text-slate-600 mt-1">Passés</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
