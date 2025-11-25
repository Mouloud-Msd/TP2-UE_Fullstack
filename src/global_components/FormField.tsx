import type {FormFieldProps } from "../models/types/formtype"

const FormField : React.FC<FormFieldProps> = ({
    type,
    className,
    name,
    register,
    error,
    validate
}: FormFieldProps)=>(
    <>
    <input
    type = {type}
    className={className}
    {...register(name,{validate})}
    required
    />
     {error && <span className="error-message" > {error.message}</span>} 
    </>
)
export default FormField;