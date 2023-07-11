import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type CustomerCreateInput = {
  events?: EventWhereUniqueInput | null;
  firstNAme?: string | null;
};
