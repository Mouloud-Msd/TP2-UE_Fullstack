import apiClient from "./apiClient";
import type { Event } from "../models/EventModel";




const artistsApi = {
    create: (data:{label: string}) => apiClient.post("/artists",data),
    getById: (id:string) => apiClient.get<Event>(`/artists/${id}`)
}
export default artistsApi;