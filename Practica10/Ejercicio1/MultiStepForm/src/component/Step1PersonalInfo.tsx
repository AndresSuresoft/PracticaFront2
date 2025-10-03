import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Step1Schema } from "../validations/formSchemas";
import type { formData } from "../types/formTypes";
import { useEffect } from "react";

type Step1Props = {
  onNext: (data: Partial<formData>) => void;
  defaultValues?: Partial<formData>;
};

const Step1PersonalInfo: React.FC<Step1Props> = ({ onNext, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Pick<formData, "name" | "age" | "email">>({
    defaultValues,
    resolver: yupResolver(Step1Schema),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  return (
    <form onSubmit={handleSubmit(onNext)}>
      <h2>Step 1: Personal info</h2>
      <label>Name</label>
      <input {...register("name")} />
      <p>{errors.name?.message}</p>

      <label>Age</label>
      <input type="number" {...register("age")} />
      <p>{errors.age?.message}</p>

      <label>Email</label>
      <input type="email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <button type="submit" >Next</button>
    </form>
  );
};

export default Step1PersonalInfo;
