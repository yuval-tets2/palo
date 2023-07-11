import { Event } from "../event/Event";

export type Customer = {
  createdAt: Date;
  events?: Event | null;
  firstNAme: string | null;
  id: string;
  updatedAt: Date;
};
