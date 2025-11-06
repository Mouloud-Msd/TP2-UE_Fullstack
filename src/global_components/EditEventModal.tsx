
import {useEventStore} from "../store/useEventStore"
import eventsApi from "../http/eventsApi";
import { useEffect, useState } from "react";
import type { EventPayload } from "../models/EventModel";

export default function EditEventModal(){
    const {eventToEdit , closeEditModal} = useEventStore();
    const [label , setLabel] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate , setEndDate] = useState('')

    useEffect( () => {
        if(eventToEdit){
            setLabel(eventToEdit.label);
            setStartDate(eventToEdit.startDate)
            setEndDate(eventToEdit.endDate)
        }
    }, [eventToEdit]  )
    if(!eventToEdit) return null
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedEvent : EventPayload = {
            label,
            startDate,
            endDate
    }
    eventsApi.update(eventToEdit.id,updatedEvent);
    closeEditModal();

    }

    return (
        <dialog className="modal modal-bottom sm:modal-middle" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Modifier l'événement</h3>
    
            <form onSubmit={handleSubmit}>
              <label className="label">Nom</label>
              <input
                type="text"
                value={label}                  
                onChange={(e) => setLabel(e.target.value)}
                className="input input-bordered w-full mb-3"
                required
              />
    
              <label className="label">Date de début</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="input input-bordered w-full mb-3"
                required
              />
    
              <label className="label">Date de fin</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="input input-bordered w-full mb-3"
                required
              />
    
              <div className="modal-action">
                <button type="button" className="btn" onClick={closeEditModal}>
                  Annuler
                </button>
                <button type="submit" className="btn btn-primary">
                  Sauvegarder
                </button>
              </div>
            </form>
          </div>
        </dialog>
      );
}