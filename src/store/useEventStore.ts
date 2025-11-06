import {create } from 'zustand'
import type {Event} from "../models/EventModel"

type EventStore ={
    eventToEdit: Event | null;
    isEditModalOpen: boolean;
    openEditModal : (event:Event) => void
    closeEditModal : () => void
};

// on creer le state
export const useEventStore = create<EventStore>((set)=>({
    eventToEdit:null,
    isEditModalOpen:false,
    openEditModal: (event) => set({
        eventToEdit:event,
        isEditModalOpen:true
    }),
    closeEditModal: () => set({
        eventToEdit:null,
        isEditModalOpen:false
    }),
})
);