import React, { useState } from "react";
import type { FormErrors, Reservation } from "../../Type/Interface";

const Form = () => {
  const [reservation, setReservation] = useState<Reservation>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    person: 1,
    request: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setReservation({
      ...reservation,
      [name]: value,
    });
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};

    if (!reservation.name.trim()) {
      errors.name = "Il nome è obbligatorio";
    }

    if (!reservation.surname.trim()) {
      errors.surname = "Il cognome è obbligatorio";
    }

    if (!reservation.email.trim()) {
      errors.email = "L'email è obbligatoria";
    }

    if (!reservation.phone.trim()) {
      errors.phone = "Il telefono è obbligatorio";
    }

    if (!reservation.date) {
      errors.date = "Seleziona una data";
    }

    if (!reservation.time) {
      errors.time = "Seleziona un orario";
    }

    if (reservation.person < 1) {
      errors.person = "Seleziona il numero di persone";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm();

    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    console.log("Form valido:", reservation);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center py-20"
    >
      <div className="w-150 border-t border-t-gray-200 py-10">
        {/* NOME E COGNOME */}
        <div className="flex gap-6 mb-6">
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">NOME *</span>
            <input
              type="text"
              name="name"
              value={reservation.name}
              onChange={handleChange}
              className="w-full border-b border-b-gray-200 py-2 "
              placeholder="Mario"
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-2">{errors.name}</span>
            )}
          </label>
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">COGNOME *</span>
            <input
              type="text"
              name="surname"
              value={reservation.surname}
              onChange={handleChange}
              className="w-full border-b border-b-gray-200 py-2 "
              placeholder="Rossi"
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-2">{errors.name}</span>
            )}
          </label>
        </div>

        {/* EMAIL E TELEFONO */}
        <div className="flex gap-6 mb-6">
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">EMAIL *</span>
            <input
              type="text"
              name="email"
              value={reservation.email}
              onChange={handleChange}
              className="w-full border-b border-b-gray-200 py-2 "
              placeholder="Mario@email.it"
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-2">{errors.name}</span>
            )}
          </label>
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">TELEFONO *</span>
            <input
              type="number"
              name="phone"
              value={reservation.phone}
              onChange={handleChange}
              className="w-full border-b border-b-gray-200 py-2 "
              placeholder="+39 333 1234567"
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-2">{errors.name}</span>
            )}
          </label>
        </div>

        {/* DAT, ORA E PERSONE */}
        <div className="flex gap-4">
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">DATA *</span>
            <input
              type="date"
              name="date"
              value={reservation.date}
              onChange={handleChange}
              className="w-full border-b border-b-gray-200 py-2 "
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-2">{errors.name}</span>
            )}
          </label>
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">ORA *</span>
            <input
              type="time"
              name="time"
              value={reservation.time}
              onChange={handleChange}
              className="w-full border-b border-b-gray-200 py-2 "
            />
          </label>
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest"> PERSONE *</span>
            <select
              name="peroson"
              className="w-full border-b border-b-gray-200 py-2"
              value={reservation.person}
              onChange={handleChange}
            >
              {Array.from({ length: 12 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}{" "}
                  <span className="tracking-widest text-gray-400">PERSONE</span>
                </option>
              ))}
            </select>
            {errors.name && (
              <span className="text-red-500 text-xs mt-2">{errors.name}</span>
            )}
          </label>
        </div>

        {/* RICHIESTE SPECIALI */}

        <div className="mt-6">
          <label className="flex flex-col">
            <span className="text-lg text-gray-400 tracking-widest">
              Eventuali richieste speciali
            </span>
            <textarea
              name="request"
              value={reservation.request}
              onChange={handleChange}
              className=" mt-5 border-b border-b-gray-200 h-20"
              placeholder="Allergia, intolleranze, occasioni Speciali...."
            ></textarea>
            {errors.name && (
              <span className="text-red-500 text-xs mt-2">{errors.name}</span>
            )}
          </label>
        </div>
        <div className="mt-10">
          <button className=" bg-black text-white px-[30px] py-[15px] tracking-widest font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-matcha-green hover:text-white">
            RICHIEDI PRENOTAZIONI
          </button>
        </div>

        {/*  */}
      </div>
      <div className="flex justify-center items-center my-8">
        <p className="text-xs text-gray-600 text-center">
          Per gruppi superiori a 12 persone o eventi privati, contattaci
          direttamente <br /> al +39 02 1234 5678.
        </p>
      </div>
    </form>
  );
};

export default Form;
