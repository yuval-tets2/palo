import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { EventTitle } from "../event/EventTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="events.id" reference="Event" label="Events">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <TextInput label="First NAme" source="firstNAme" />
      </SimpleForm>
    </Create>
  );
};
