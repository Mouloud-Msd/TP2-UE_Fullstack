import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import artistsApi from "../../../http/artistsApi";
import eventsApi from "../../../http/eventsApi";
import { toast } from "react-toastify";
import type { artists } from "../../../models/ArtistModel";
import { useArtistStore } from "../../../store/useArtistStore";
import { type Event as apiEvent } from "../../../models/EventModel";

// import { set } from "react-hook-form";

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
  const [EventsList, setEventsList] = useState<apiEvent[]>([]);
  const [mode , setMode] = useState<"select" | "create">("select");
  const [newId, setNewId] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

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
  const getAllEvents = async () => { eventsApi.getAll().then((response) => {
    setEventsList(response.data.content);
  });};


  const handleAddEvent = async () => {
    if (!newEvent.trim()) { toast.error("Nom obligatoire"); return; }
    let createdEventId = newId;
    if (mode === "create" ) {
      console.log("Creating new event:", newEvent, startDate, endDate);
     const response  = await eventsApi.create({ label: newEvent, startDate: startDate, endDate: endDate });
       createdEventId = response.data.id;
      setNewId(createdEventId);
      
      
  }
    const newEventObj = { id: newId, label: newEvent, startDate: startDate, endDate: endDate };
    const updatedEvents = [
      ...events,
      newEventObj,
    ];
    setEvents(updatedEvents);
    try {
      await artistsApi.AddEventToArtist(artist.id, createdEventId);
      setNewEvent("");
      toast.success("Événement ajouté !");
      
    } catch {
      toast.error("Erreur lors de l'ajout de l'événement.");
    }
  };


  const handleRemoveEvent = (labelToRemove: string) => {
    setEvents(events.filter((e) => e.label !== labelToRemove));
    toast.success("Événement supprimé !");
  };
  useEffect(() => {
    getAllEvents();
  }, [mode]);

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

            <div className=" mt-5 gap-2">
              {mode === "create" && ( 
                <div className="flex flex-col" >
                  <input
                    type="text"
                    placeholder="Ajouter un nouvel événement"
                    value={newEvent}
                    onChange={(e) => {setNewEvent(e.target.value); }}
                    className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  
                  <input
                    type="date"
                    placeholder="Date de début"
                    onChange= {(e) => setStartDate(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="date"
                    placeholder="Date de fin"
                    onChange= {(e) => setEndDate(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              )}
              { 
                mode === "select" && (
                  <select
                  className="flex-1 px-4 py-2 w-md rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onChange={(e) => 
                    {
                      if(e.target.value === "__create_new__"){
                        setMode("create");
                        setNewEvent("");
                      } else {
                        setMode("select");
                      setNewEvent(e.target.value);
                      }
                       setNewId(e.target.selectedOptions[0].getAttribute("data-id") || "");
                    }}
                  value = {newEvent}
                >
                  <option value="">Sélectionner un événement</option>
                  {EventsList.map((event) => (
                    <option key={event.id} value={event.label} data-id={event.id}>
                      {event.label}
                    </option>
                  ))}
                  <option value= "__create_new__" >Créer un nouvel événement</option>
                </select>
                )
              }
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              <button
                onClick={handleAddEvent}
                className="px-5 py-2 my-5 mx-4  rounded-full bg-green-600 text-white font-semibold text-sm shadow hover:scale-[1.02] transition-transform"
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
