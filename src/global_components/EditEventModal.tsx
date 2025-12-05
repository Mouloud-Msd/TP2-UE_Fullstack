import { useEventStore } from "../store/useEventStore";
import eventsApi from "../http/eventsApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { EventPayload } from "../models/EventModel";
import FormField from "../global_components/FormField";
import type { FormData } from "../models/types/formtype";
import { motion, AnimatePresence } from "framer-motion";

export default function EditEventModal() {
  const {
    eventToEdit,
    closeEditModal,
    closeCreateModal,
    refresh,
    isCreateModalOpen,
  } = useEventStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    if (eventToEdit) {
      reset({
        label: eventToEdit.label,
        startDate: eventToEdit.startDate,
        endDate: eventToEdit.endDate,
      });
    }
  }, [eventToEdit, reset]);
  if (!eventToEdit && !isCreateModalOpen) return null;
  const onSubmit = (data: FormData) => {
    const updatedEvent: EventPayload = {
      label: data.label,
      startDate: data.startDate,
      endDate: data.endDate,
    };
    if (isCreateModalOpen) {
      console.log("creating event");
      eventsApi.create(updatedEvent);
      refresh();
      closeCreateModal();
    }
    if (eventToEdit) {
      console.log("updating event " + eventToEdit.id);
      eventsApi.update(eventToEdit.id, updatedEvent);
      refresh();
      closeEditModal();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 relative"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => {
              closeCreateModal();
            }}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-4">
            {isCreateModalOpen ? "Create a new event" : "update event"}
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">Nom</label>

            <FormField
              type="text"
              name="label"
              className="input input-bordered bg-white border border-slate-200 w-full mb-3"
              register={register}
              error={errors.label}
            />

            <label className="label">Date de début</label>

            <FormField
              type="date"
              name="startDate"
              className="input input-bordered bg-white border border-slate-200 w-full mb-3"
              register={register}
              error={errors.startDate}
              validate={(value) => {
                const endDate = getValues("endDate");
                if (endDate)
                  return (
                    new Date(value) < new Date(endDate) ||
                    "la date de debut doit être avant la date de fin"
                  );
              }}
            />

            <label className="label">Date de fin</label>

            <FormField
              type="date"
              name="endDate"
              className="input input-bordered bg-white border border-slate-200 w-full mb-3"
              register={register}
              error={errors.endDate}
              validate={(value) => {
                const start = getValues("startDate");
                return (
                  new Date(value) > new Date(start) ||
                  "la date de fin doit etre après la date de debut"
                );
              }}
            />

            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={isCreateModalOpen ? closeCreateModal : closeEditModal}
              >
                Annuler
              </button>
              <button type="submit" className="btn btn-primary">
                Sauvegarder
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
