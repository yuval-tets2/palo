import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type CustomerUpdateInput = {
  events?: EventWhereUniqueInput | null;
  firstNAme?: string | null;
};
