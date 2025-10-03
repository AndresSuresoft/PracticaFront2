import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Step3Schema } from "../validations/formSchemas";
import type { formData } from "../types/formTypes";

type Step3Props = {
  onNext: (data: Partial<formData>) => void;
  onBack: () => void;
  defaultValues?: Partial<formData>;
};

const Step3Preferences: React.FC<Step3Props> = ({ onNext, onBack, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset,
  } = useForm<Pick<formData, "contactMethod" | "newsletter" | "favoriteCategory">>({
    defaultValues,
    resolver: yupResolver(Step3Schema),
  });
 
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <h2>Step 3: Preferences</h2>

      <label>Preferred Contact Method</label>
      <div>
        <label><input type="radio" value="Email" {...register("contactMethod")} /> Email</label>
        <label><input type="radio" value="Phone" {...register("contactMethod")} /> Phone</label>
        <label><input type="radio" value="WhatsApp" {...register("contactMethod")} /> WhatsApp</label>
      </div>
      <p>{errors.contactMethod?.message}</p>

      <label>
        <input type="checkbox" {...register("newsletter")} /> Subscribe to Newsletter
      </label>

      <label>Favorite Category</label>
      <select {...register("favoriteCategory")}>
        <option value="">Select...</option>
        <option value="Technology">Technology</option>
        <option value="Health">Health</option>
        <option value="Art">Art</option>
        <option value="Travel">Travel</option>
      </select>
      <p>{errors.favoriteCategory?.message}</p>

      <button type="button" onClick={onBack}>Back</button>
      <button type="submit" className="buttons__space">Next</button>
    </form>
  );
};

export default Step3Preferences;
