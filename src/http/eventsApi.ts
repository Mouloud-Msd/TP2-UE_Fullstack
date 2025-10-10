
import apiClient from "./apiClient";
import type {Event,EventPayload,PaginatedResponse} from "../models/EventModel"

// export interface Event {
//   id: number;
//   label: string;
//   startDate: string;
//   endDate: string;
//   artists? : artists[];
  
// }


// export type EventPayload = Omit<Event, "id">;


const eventsApi = {
  getAll: () => apiClient.get<PaginatedResponse<Event>>("/events"),

  getById: (id: number) => apiClient.get<Event>(`/events/${id}`),

  create: (data: EventPayload) => apiClient.post<Event>("/events", data),

  update: (id: number, data: EventPayload) =>
    apiClient.put<Event>(`/events/${id}`, data),

  delete: (id: number) => apiClient.delete<void>(`/events/${id}`),
};

export default eventsApi;
