import { FieldErrors, UseFormRegister } from "react-hook-form"
import { TaskFormData } from "@/types/index";
import ErrorMessage from "../ErrorMessage";

type TaskFormProps = {
    errors: FieldErrors<TaskFormData>
    register: UseFormRegister<TaskFormData>
}

export default function TaskForm({errors, register} : TaskFormProps) {          
    return (
        <>
            <div className="flex flex-col gap-5">
                <label
                    className="font-normal text-2xl"
                    htmlFor="name"
                >Nombre de la tarea</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nombre de la tarea"
                    className="w-full p-3  border-gray-300 border"
                    {...register("name", {
                        required: "El nombre de la tarea es obligatorio",
                    })}
                />
                {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
            </div>

            <div className="flex flex-col gap-5">
                <label
                    className="font-normal text-2xl"
                    htmlFor="description"
                >Descripción de la tarea</label>
                <textarea
                    id="description"
                    placeholder="Descripción de la tarea"
                    className="w-full p-3  border-gray-300 border"
                    {...register("description", {
                        required: "La descripción de la tarea es obligatoria"
                    })}
                />
                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>

            {/** Recien agregado */}
            <div className="flex flex-col gap-5">
                <label
                    className="font-normal text-2xl"
                    htmlFor="date"
                >Fecha limite de la tarea</label>
                <input
                    id="date"
                    placeholder="Fecha limite de la tarea"
                    className="w-full p-3  border-gray-300 border"
                    {...register("date", {
                        required: "La fecha limite de la tarea es obligatioria"
                    })}
                />
                {errors.date && (
                    <ErrorMessage>{errors.date.message}</ErrorMessage>
                )}
            </div>
        </>
    )
}