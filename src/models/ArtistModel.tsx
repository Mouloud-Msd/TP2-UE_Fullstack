import type { Event } from "./EventModel";

export interface artists {
  id: string;
  label: string;
  events?: Array<Event>;
}
