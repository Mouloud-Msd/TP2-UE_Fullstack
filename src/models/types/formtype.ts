import type {FieldError, RegisterOptions, UseFormRegister} from "react-hook-form";
// Les données du formulaire
export type FormData = {
    label: string;
    startDate: string
    endDate: string
}
//  Les attributs de chaque input 
export type FormFieldProps = {
type:string
className?: string 
name : validFieldName
register : UseFormRegister<FormData>;
error: FieldError | undefined
validate?:RegisterOptions["validate"]

}

export type validFieldName =
| "label"
| "startDate"
| "endDate"