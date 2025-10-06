
import apiClient from "./apiClient";


export interface Event {
  id: number;
  title: string;
  description?: string;
  date: string;
  location?: string;
  
}


export type EventPayload = Omit<Event, "id">;


const eventsApi = {
  getAll: () => apiClient.get<Event[]>("/events"),

  getById: (id: number) => apiClient.get<Event>(`/events/${id}`),

  create: (data: EventPayload) => apiClient.post<Event>("/events", data),

  update: (id: number, data: EventPayload) =>
    apiClient.put<Event>(`/events/${id}`, data),

  delete: (id: number) => apiClient.delete<void>(`/events/${id}`),
};

export default eventsApi;
