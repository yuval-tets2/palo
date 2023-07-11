import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  events?: EventWhereUniqueInput;
  firstNAme?: StringNullableFilter;
  id?: StringFilter;
};
