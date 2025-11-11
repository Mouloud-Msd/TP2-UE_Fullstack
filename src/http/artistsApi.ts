import apiClient from "./apiClient";
import type { EventPayload, PaginatedResponse } from "../models/EventModel";
import type { artists } from "../models/ArtistModel";

const artistsApi = {
  create: (data: { label: string }) => apiClient.post("/artists", data),
  getAll: () => apiClient.get<PaginatedResponse<artists>>("/artists"),

  getById: (id: number) => apiClient.get<artists>(`/artists/${id}`),
  getByPage: (page: number) =>
    apiClient.get<PaginatedResponse<artists>>(`/artists?page=${page}`),

  update: (id: number, data: EventPayload) =>
    apiClient.put<artists>(`/artists/${id}`, data),

  delete: (id: number) => apiClient.delete<void>(`/artists/${id}`),
};
export default artistsApi;
