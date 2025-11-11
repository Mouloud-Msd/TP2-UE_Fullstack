import {create } from 'zustand'
import type {Event} from "../models/EventModel"

type EventStore ={
    eventToEdit: Event | null;
    isEditModalOpen: boolean;
    modified: boolean;
    openEditModal : (event:Event) => void
    closeEditModal : () => void
    refresh : () => void
};

// on creer le state
export const useEventStore = create<EventStore>((set)=>({
    eventToEdit:null,
    isEditModalOpen:false,
    modified:false,
    openEditModal: (event) => set({
        eventToEdit:event,
        isEditModalOpen:true
    }),
    closeEditModal: () => set({
        eventToEdit:null,
        isEditModalOpen:false
    }),
    refresh: () => set((state) =>({
        modified:!state.modified}))
})
);