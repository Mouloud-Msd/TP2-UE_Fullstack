import type { artists } from "./ArtistModel";
export interface Event {
  id: string;
  label: string;
  startDate: string;
  endDate: string;
  artists?: artists[];
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export type EventPayload = Omit<Event, "id">;
