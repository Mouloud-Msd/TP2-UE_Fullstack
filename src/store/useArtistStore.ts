import { create } from "zustand";
import type { artists } from "../models/ArtistModel";

type ArtistStore = {
  artistToEdit: artists | null;
  isEditModalOpen: boolean;
  isCreateModalOpen: boolean;
  modified: boolean;
  openCreateModal: () => void;
  closeCreateModal: () => void;
  openEditModal: (artist: artists) => void;
  closeEditModal: () => void;
  refresh: () => void;
};

// on creer le state
export const useArtistStore = create<ArtistStore>((set) => ({
  artistToEdit: null,
  isEditModalOpen: false,
  modified: false,
  isCreateModalOpen: false,
  openCreateModal: () =>
    set({
      isCreateModalOpen: true,
    }),
  closeCreateModal: () =>
    set({
      isCreateModalOpen: false,
    }),
  openEditModal: (artist) =>
    set({
      artistToEdit: artist,
      isEditModalOpen: true,
    }),
  closeEditModal: () =>
    set({
      artistToEdit: null,
      isEditModalOpen: false,
    }),
  refresh: () =>
    set((state) => ({
      modified: !state.modified,
    })),
}));
