import type { Event } from "./EventModel";

export interface artists {
  id: string;
  label: string;
  events?: Array<Event>;
  //events: { id: string; label: string; startDate: string; endDate: string }[];
}

export type ArtistPayload = Omit<artists, "id">;
