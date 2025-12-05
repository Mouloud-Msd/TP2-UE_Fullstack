import type {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
// Les données du formulaire
export type FormData = {
  label: string;
  startDate: string;
  endDate: string;
};
export type ArtistFormData = {
  firstName: string;
  lastName: string;
};
//  Les attributs de chaque input
export type FormFieldProps = {
  type: string;
  className?: string;
  name: validFieldName;
  // ===================================================== excusez nous, on a plus le temps:(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  validate?: RegisterOptions["validate"];
};

export type validFieldName =
  | "label"
  | "startDate"
  | "endDate"
  | "firstName"
  | "lastName";
