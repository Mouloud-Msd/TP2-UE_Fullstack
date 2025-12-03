import apiClient from "./apiClient";
import type {  PaginatedResponse } from "../models/EventModel";
import type { ArtistPayload, artists } from "../models/ArtistModel";

const artistsApi = {
  create: (data: { label: string }) => apiClient.post("/artists", data),
  getAll: () => apiClient.get<PaginatedResponse<artists>>("/artists"),

  getById: (id: string) => apiClient.get<artists>(`/artists/${id}`),
  getByPage: (page: number, size : number) =>
    apiClient.get<PaginatedResponse<artists>>(`/artists?page=${page}&size=${size}`),

  update: (id: string, data: ArtistPayload) =>
    apiClient.put<artists>(`/artists/${id}`, data),

  delete: (id: number) => apiClient.delete<void>(`/artists/${id}`),
  AddEventToArtist: (artistId: string, eventId: string) =>
    apiClient.post(`/events/${eventId}/artists/${artistId}`),
};
export default artistsApi;
