import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { artists } from "../../../models/ArtistModel";
import type { Event } from "../../../models/EventModel";
import artistsApi from "../../../http/artistsApi";

// Material UI icons
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function ArtistDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artist, setArtist] = useState<artists | null>(null);
  const [loading, setLoading] = useState(true);

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
      <div className="mx-auto max-w-3xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
        >
          <h1 className="text-3xl font-extrabold mb-6 text-center flex items-center justify-center gap-2">
            <PersonIcon className="text-indigo-600" /> Détail de l’artiste
          </h1>

          {/* Nom et réseaux sociaux */}
          <div className="mb-8 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-slate-700">
              <PersonIcon />
              <p className="text-lg font-semibold">{artist.label}</p>
            </div>

            {/* Réseaux sociaux (exemple fictif) */}
            <div className="flex gap-3">
              <a
                href={`https://facebook.com/${artist.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className="text-blue-600 hover:scale-110 transition-transform" />
              </a>
              <a
                href={`https://instagram.com/${artist.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="text-pink-500 hover:scale-110 transition-transform" />
              </a>
              <a
                href={`https://twitter.com/${artist.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon className="text-blue-400 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Événements */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <EventIcon className="text-green-600" /> Événements associés
            </h2>

            {artist.events?.length ? (
              <ul className="space-y-3">
                {artist.events.map((event: Event) => (
                  <motion.li
                    key={event.id}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div>
                      <p className="text-slate-700 font-medium">
                        {event.label}
                      </p>
                      <p className="text-slate-500 text-sm flex items-center gap-1">
                        <EventIcon fontSize="small" /> {event.startDate || "??"}{" "}
                        — {event.endDate || "??"}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500 italic">
                Aucun événement associé pour le moment.
              </p>
            )}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
