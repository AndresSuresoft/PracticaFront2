import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Step2Schema } from "../validations/formSchemas";
import type { formData } from "../types/formTypes";

type Step2Props = {
  onNext: (data: Partial<formData>) => void;
  onBack: () => void;
  defaultValues?: Partial<formData>;
};

const Step2Address: React.FC<Step2Props> = ({ onNext, onBack, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset,
  } = useForm<Pick<formData, "country" | "city" | "zipCode">>({
    defaultValues,
    resolver: yupResolver(Step2Schema),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <h2>Step 2: Address</h2>

      <label>Country</label>
      <input {...register("country")} />
      <p>{errors.country?.message}</p>

      <label>City</label>
      <input {...register("city")} />
      <p>{errors.city?.message}</p>

      <label>Zip Code</label>
      <input {...register("zipCode")} />
      <p>{errors.zipCode?.message}</p>

      <button type="button" onClick={onBack}>Back</button>
      <button type="submit" className="buttons__space">Next</button>
    </form>
  );
};

export default Step2Address;
