import apiClient from "./apiClient";
import type { EventPayload, PaginatedResponse } from "../models/EventModel";
import type { ArtistPayload, artists } from "../models/ArtistModel";

const artistsApi = {
  create: (data: { label: string }) => apiClient.post("/artists", data),
  getAll: () => apiClient.get<PaginatedResponse<artists>>("/artists"),

  getById: (id: string) => apiClient.get<artists>(`/artists/${id}`),
  getByPage: (page: number) =>
    apiClient.get<PaginatedResponse<artists>>(`/artists?page=${page}`),

  update: (id: string, data: ArtistPayload) =>
    apiClient.put<artists>(`/artists/${id}`, data),

  delete: (id: number) => apiClient.delete<void>(`/artists/${id}`),
  AddEventToArtist: (artistId: string, eventId: string) =>
    apiClient.post(`/events/${eventId}/artists/${artistId}`),
};
export default artistsApi;
