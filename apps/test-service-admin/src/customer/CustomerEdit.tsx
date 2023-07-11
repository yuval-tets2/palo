import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { EventTitle } from "../event/EventTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="events.id" reference="Event" label="Events">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <TextInput label="First NAme" source="firstNAme" />
      </SimpleForm>
    </Edit>
  );
};
