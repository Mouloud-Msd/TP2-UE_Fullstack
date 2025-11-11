// import axios from 'axios';
 import eventsApi from '../../../http/eventsApi';
 import { type Event as apiEvent } from '../../../models/EventModel'
 import { useEffect,useState } from 'react';
 import Pagination from '../../../global_components/Pagination';
import { useEventStore } from '../../../store/useEventStore';

export default function Events() {
  const {openEditModal , modified} = useEventStore();
  const [events , setEvents] = useState<apiEvent[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages,setTotalPage] = useState<number>(1)
  useEffect(()=>{
      eventsApi.getByPage(currentPage-1).then( (response) => {
          console.log(response.data);
          setEvents(response.data.content)
          setTotalPage(response.data.totalPages)

          console.log(events);
      } ).catch( (error) => {
          console.error("Error fetching events:", error);
      } );

  },[currentPage,modified])
 
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="w-full  list bg-base-100 shadow-md w-2xl m-auto p-6 ">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Most played songs this week
        </li>
        { events.map((event)=>{
          
          return (<li className='list-row' > 
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
          <div>{event.label}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
             Debut {event.startDate} -  Fin {event.endDate}
          </div>
          </div>
          <p className="list-col-wrap text-xs">
            {event.artists && event.artists.length >0 ? (
             event.artists.map((artist)=>(
              <span key={artist.id} className='mr-2'>{artist.label}</span>
             )) 
            ): "Aucun Artist "}
            <span> Nombre d'artiste : {event.artists?.length} </span>
          </p>
          <button className="btn btn-square btn-ghost tooltip tooltip-bottom" data-tip="Edit Event"
          onClick={()=>{
            openEditModal(event);
          }}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"           
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          </button>
          
        </li>
        )})}
        
      </ul>
      <Pagination 
      totalPages = {totalPages}
      currentPage={currentPage}
      onPageChange={setCurrentPage} 
      />
    </div>
  );
}
