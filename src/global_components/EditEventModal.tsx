
import {useEventStore} from "../store/useEventStore"
import eventsApi from "../http/eventsApi";
import { useEffect} from "react";
import {useForm} from "react-hook-form"
import type { EventPayload } from "../models/EventModel";
import FormField from "../global_components/FormField"
import type {FormData} from "../models/types/formtype"

export default function EditEventModal(){
    const {eventToEdit , closeEditModal , refresh} = useEventStore();
    const {register, handleSubmit, formState: {errors} ,getValues, reset } = useForm<FormData>();

    useEffect( () => {
        if(eventToEdit){
            reset({
              label:eventToEdit.label,
              startDate:eventToEdit.startDate,
              endDate:eventToEdit.endDate,
            })
        }
    }, [eventToEdit, reset]  )
    if(!eventToEdit) return null
    const onSubmit = (data:FormData) => {
        const updatedEvent : EventPayload = {
            label:data.label,
            startDate:data.startDate,
            endDate:data.endDate
    }
    eventsApi.update(eventToEdit.id,updatedEvent);
    refresh();
    closeEditModal();

    }

    return (
        <dialog className="modal modal-bottom sm:modal-middle" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Modifier l'événement</h3>
    
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label">Nom</label>
             
              <FormField 
              type="text"
              name="label"
              className = "input input-bordered w-full mb-3"
              register = {register}
              error = {errors.label}/>
    
              <label className="label">Date de début</label>
              
              <FormField 
               type = "date"
               name="startDate"
               className ="input input-bordered w-full mb-3"
               register = {register}
               error = {errors.startDate}
               validate = {(value)=>{
                const endDate = getValues('endDate')
                if(endDate) return new Date(value) < new Date(endDate) || "la date de debut doit être avant la date de fin"
        
               }}
                 />
             
              <label className="label">Date de fin</label>
              
              <FormField 
              type = "date"
              name="endDate"
              className="input input-bordered w-full mb-3"
              register = {register}
              error = {errors.endDate }
              validate = {(value)=>{
                const start = getValues('startDate')
                return new Date(value) > new Date (start) || "la date de fin doit etre après la date de debut"
              }}
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