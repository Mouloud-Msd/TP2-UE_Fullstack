import {create } from 'zustand'
import type {Event} from "../models/EventModel"

type EventStore ={
    eventToEdit: Event | null;
    isEditModalOpen: boolean;
    isCreateModalOpen?: boolean;
    modified: boolean;
    openEditModal : (event:Event) => void
    openCreateModal : () => void
    closeEditModal : () => void
    closeCreateModal : () => void
    refresh : () => void
};

// on creer le state
export const useEventStore = create<EventStore>((set)=>({
    eventToEdit:null,
    isEditModalOpen:false,
    modified:false,
    isCreateModalOpen:false,
    openCreateModal: () => set({
        isCreateModalOpen:true
    }),
    closeCreateModal: () => set({
        isCreateModalOpen:false
    }),
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