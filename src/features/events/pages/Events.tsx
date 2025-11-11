// import axios from 'axios';
import eventsApi from "../../../http/eventsApi";
import { type Event as apiEvent } from "../../../models/EventModel";
import { useEffect, useState } from "react";
import Pagination from "../../../global_components/Pagination";
import { useEventStore } from "../../../store/useEventStore";

// export default function Events() {
//   const {openEditModal , modified} = useEventStore();
//   const [events , setEvents] = useState<apiEvent[]>([])
//   const [currentPage, setCurrentPage] = useState<number>(1)
//   const [totalPages,setTotalPage] = useState<number>(1)
//   useEffect(()=>{
//       eventsApi.getByPage(currentPage-1).then( (response) => {
//           console.log(response.data);
//           setEvents(response.data.content)
//           setTotalPage(response.data.totalPages)

//           console.log(events);
//       } ).catch( (error) => {
//           console.error("Error fetching events:", error);
//       } );

//   },[currentPage,modified])

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <ul className="w-full  list bg-base-100 shadow-md w-2xl m-auto p-6 ">
//         <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
//           Most played songs this week
//         </li>
//         { events.map((event)=>{

//           return (<li className='list-row' >
//           <div>
//             <img
//               className="size-10 rounded-box"
//               src="https://img.daisyui.com/images/profile/demo/1@94.webp"
//             />
//           </div>
//           <div>
//           <div>{event.label}</div>
//           <div className="text-xs uppercase font-semibold opacity-60">
//              Debut {event.startDate} -  Fin {event.endDate}
//           </div>
//           </div>
//           <p className="list-col-wrap text-xs">
//             {event.artists && event.artists.length >0 ? (
//              event.artists.map((artist)=>(
//               <span key={artist.id} className='mr-2'>{artist.label}</span>
//              ))
//             ): "Aucun Artist "}
//             <span> Nombre d'artiste : {event.artists?.length} </span>
//           </p>
//           <button className="btn btn-square btn-ghost tooltip tooltip-bottom" data-tip="Edit Event"
//           onClick={()=>{
//             openEditModal(event);
//           }}
//           >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="size-5"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//               <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//             <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//           </svg>
//           </button>

//         </li>
//         )})}

//       </ul>
//       <Pagination
//       totalPages = {totalPages}
//       currentPage={currentPage}
//       onPageChange={setCurrentPage}
//       />
//     </div>
//   );
// }
export default function Events() {
  const { openEditModal, modified } = useEventStore();
  const [events, setEvents] = useState<apiEvent[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    eventsApi
      .getByPage(currentPage - 1)
      .then((response) => {
        setEvents(response.data.content);
        setTotalPage(response.data.totalPages);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des événements :", error);
      })
      .finally(() => setLoading(false));
  }, [currentPage, modified]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Événements
          </h1>
          <p className="mt-2 text-slate-600 text-sm md:text-base">
            Découvrez la liste des événements disponibles, avec les artistes
            associés.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-600 border-solid"></div>
          </div>
        ) : events.length === 0 ? (
          <p className="text-center text-slate-500">Aucun événement trouvé.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <li
                key={event.id}
                className="group rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=600"
                    }
                    alt={event.label}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    onClick={() => openEditModal(event)}
                    className="absolute top-2 right-2 rounded-full bg-white/80 p-2 hover:bg-white shadow"
                    title="Modifier l'événement"
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

                <div className="flex flex-col flex-grow p-5">
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">
                    {event.label}
                  </h2>
                  <p className="text-sm text-slate-500 mb-3">
                    Début :{" "}
                    <span className="font-medium text-slate-700">
                      {event.startDate}
                    </span>{" "}
                    — Fin :{" "}
                    <span className="font-medium text-slate-700">
                      {event.endDate}
                    </span>
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {event.artists && event.artists.length > 0 ? (
                      event.artists.map((artist) => (
                        <span
                          key={artist.id}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                        >
                          {artist.label}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400">
                        Aucun artiste
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-xs text-slate-400">
                    Nombre d’artistes : {event.artists?.length || 0}
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
