import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "firstNAme";

export const CustomerTitle = (record: TCustomer): string => {
  return record.firstNAme || String(record.id);
};
