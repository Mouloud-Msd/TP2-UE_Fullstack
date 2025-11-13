import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import artistsApi from "../../../http/artistsApi";
import { toast } from "react-toastify";
import type { artists } from "../../../models/ArtistModel";
import { useArtistStore } from "../../../store/useArtistStore";

interface ArtistModalProps {
  artist: artists;
  onClose: () => void;
}

export default function ArtistModal({ artist, onClose }: ArtistModalProps) {
  const { refresh } = useArtistStore();
  const [label, setLabel] = useState(artist.label);
  const [events, setEvents] = useState(artist.events || []);
  const [newEvent, setNewEvent] = useState("");
  const [error, setError] = useState("");

  const handleSave = async () => {
    if (label.trim().length < 3)
      return setError("Le nom doit comporter au moins 3 caractères.");
    setError("");
    try {
      await artistsApi.update(artist.id, { label });
      toast.success("Artiste mis à jour !");
      refresh();
      onClose();
    } catch {
      toast.error("Erreur lors de la mise à jour.");
    }
  };

  const handleAddEvent = () => {
    if (!newEvent.trim()) return toast.error("Nom obligatoire");
    setEvents([
      ...events,
      { id: crypto.randomUUID(), label: newEvent, startDate: "", endDate: "" },
    ]);
    setNewEvent("");
    toast.success("Événement ajouté !");
  };

  const handleRemoveEvent = (labelToRemove: string) => {
    setEvents(events.filter((e) => e.label !== labelToRemove));
    toast.success("Événement supprimé !");
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 relative"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>

          <h1 className="text-2xl font-bold mb-6 text-center">
            Détail de l’artiste
          </h1>

          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Nom de l’artiste <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                error ? "border-red-500" : "border-slate-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <button
              onClick={handleSave}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow hover:scale-[1.02] transition-transform"
            >
              Sauvegarder
            </button>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Événements associés</h2>
            {events.length ? (
              <ul className="space-y-2">
                {events.map((event) => (
                  <li
                    key={event.id}
                    className="flex justify-between items-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm hover:shadow transition"
                  >
                    <span className="text-slate-700">{event.label}</span>
                    <button
                      onClick={() => handleRemoveEvent(event.label)}
                      className="text-sm text-red-500 hover:text-red-600 font-medium transition"
                    >
                      Supprimer
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500 italic">
                Aucun événement associé pour le moment.
              </p>
            )}

            <div className="flex mt-5 gap-2">
              <input
                type="text"
                placeholder="Ajouter un nouvel événement"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleAddEvent}
                className="px-5 py-2 rounded-full bg-green-600 text-white font-semibold text-sm shadow hover:scale-[1.02] transition-transform"
              >
                Ajouter
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
