// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import type { Event } from "../../../models/EventModel";
// import { useNavigate, useParams } from "react-router-dom";
// import eventsApi from "../../../http/eventsApi";
// import { Loader, Loader2 } from "lucide-react";

// const EventDetails = () => {
//   const index = 0;
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [event, setEvent] = useState<Event>();
//   const [loading, setLoading] = useState(true);

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   };

//   useEffect(() => {
//     async function fetchArtist() {
//       try {
//         setLoading(true);
//         const { data } = await eventsApi.getById(id!);
//         if (!data) throw new Error("not found");
//         setEvent(data);
//       } catch {
//         navigate("/404");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchArtist();
//   }, [id, navigate]);

//   if (loading || !event) return <Loader2 />;

//   const isMultiDay = event.startDate !== event.endDate;

//   const getColorFromId = (id: string) => {
//     const colors = [
//       "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400",
//       "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400",
//       "bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-400",
//       "bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400",
//     ];
//     const hash = id
//       .split("")
//       .reduce((acc, char) => acc + char.charCodeAt(0), 0);
//     return colors[hash % colors.length];
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay: index * 0.05 }}
//       className={`p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${getColorFromId(
//         event.id
//       )}`}
//     >
//       <div className="flex flex-col space-y-3">
//         <div className="flex items-center justify-between">
//           <h3 className="text-xl font-bold text-gray-800 tracking-tight">
//             {event.label}
//           </h3>
//           <div className="flex space-x-2">
//             <span className="px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full text-gray-700 border border-white/30">
//               {formatDate(event.startDate)}
//               {isMultiDay && ` - ${formatDate(event.endDate)}`}
//             </span>
//           </div>
//         </div>

//         {event.artists!.length > 0 && (
//           <div className="mt-4">
//             <div className="flex items-center space-x-2 mb-2">
//               <div className="w-1 h-4 bg-current opacity-60 rounded-full"></div>
//               <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Artists
//               </span>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               if event.artists ?{" "}
//               {event.artists!.map((artist) => (
//                 <span
//                   key={artist.id}
//                   className="px-3 py-1.5 text-sm bg-white/70 backdrop-blur-sm rounded-full text-gray-700 border border-white/40 hover:bg-white hover:shadow-sm transition-colors duration-200"
//                 >
//                   {artist.label}
//                 </span>
//               ))}{" "}
//               :{" "}
//               <span className="text-sm text-gray-500">
//                 aucun artiste enregistre pour cet evenement.
//               </span>
//             </div>
//           </div>
//         )}

//         <div className="pt-4 border-t border-white/40">
//           <div className="flex items-center justify-between text-xs text-gray-500">
//             <span className="flex items-center">
//               <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
//               {formatDate(event.startDate)}
//             </span>
//             {isMultiDay && (
//               <>
//                 <div className="flex-1 mx-4">
//                   <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
//                 </div>
//                 <span className="flex items-center">
//                   <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
//                   {formatDate(event.endDate)}
//                 </span>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default EventDetails;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Event } from "../../../models/EventModel";
import { useNavigate, useParams } from "react-router-dom";
import eventsApi from "../../../http/eventsApi";
import { Loader2, Calendar, Users, ArrowLeft } from "lucide-react";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState<Event>();
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    async function fetchEvent() {
      try {
        setLoading(true);
        const { data } = await eventsApi.getById(id!);
        if (!data) throw new Error("not found");
        setEvent(data);
      } catch {
        navigate("/404");
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [id, navigate]);

  if (loading || !event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  const isMultiDay = event.startDate !== event.endDate;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-900 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/events")}
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux événements
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-100 bg-white shadow-lg overflow-hidden"
        >
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-8 py-12">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
              >
                {event.label}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 text-sm font-medium text-white">
                  <Calendar className="w-4 h-4" />
                  {formatDate(event.startDate)}
                </div>
                {isMultiDay && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 text-sm font-medium text-white">
                    <Calendar className="w-4 h-4" />
                    {formatDate(event.endDate)}
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Date Range Visualization */}
            {isMultiDay && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 rounded-xl bg-gradient-to-r from-slate-50 to-indigo-50 p-6 border border-slate-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                      Début
                    </span>
                    <span className="text-lg font-semibold text-slate-900">
                      {formatDate(event.startDate)}
                    </span>
                  </div>

                  <div className="flex-1 mx-6 flex items-center">
                    <div className="h-px w-full bg-gradient-to-r from-slate-300 via-indigo-300 to-slate-300"></div>
                    <div className="shrink-0 w-2 h-2 rounded-full bg-indigo-500 mx-2"></div>
                    <div className="h-px w-full bg-gradient-to-r from-slate-300 via-indigo-300 to-slate-300"></div>
                  </div>

                  <div className="flex flex-col text-right">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                      Fin
                    </span>
                    <span className="text-lg font-semibold text-slate-900">
                      {formatDate(event.endDate)}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Artists Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Artistes
                </h2>
              </div>

              {event.artists && event.artists.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {event.artists.map((artist, index) => (
                    <motion.div
                      key={artist.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-sm font-semibold text-indigo-700 group-hover:scale-110 transition-transform">
                          {artist.label
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                        <div>
                          <div className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {artist.label}
                          </div>
                          <div className="text-xs text-slate-500">Artiste</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
                  <Users className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                  <p className="text-sm text-slate-500">
                    Aucun artiste enregistré pour cet événement
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        >
          <h3 className="text-sm font-semibold text-slate-900 mb-3">
            Informations
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              ID: {event.id}
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              {event.artists?.length || 0} artiste(s)
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              {isMultiDay ? "Multi-jours" : "Jour unique"}
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default EventDetails;
