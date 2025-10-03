import React, { useState, useEffect } from "react";
import Step1PersonalInfo from "./Step1PersonalInfo";
import Step2Address from "./Step2Address";
import Step3Preferences from "./Step3Preferences";
import Step4Review from "./Step4Review";
import type { formData } from "../types/formTypes";

const STORAGE_KEY = "multi-step-form";

const StepForm: React.FC = () => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState<formData>({
    name: "",
    age: 0,
    email: "",
    country: "",
    city: "",
    zipCode: "",
    contactMethod: "",
    newsletter: false,
    favoriteCategory: "",
  });

  
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.formData) {
          setFormData(parsed.formData);
        }
        if (typeof parsed.step === "number") {
          setStep(parsed.step);
        }
      } catch {
        console.warn("Error al parsear localStorage");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ formData, step })
    );
  }, [formData, step]);
  

  const next = (data: Partial<formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((s) => Math.min(s + 1, 3));
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = () => {
    alert("Submitted:\n" + JSON.stringify(formData, null, 2));
   
    setStep(0);
  };

  return (
    <div className="step__form__container" >
      {step === 0 && (
        <Step1PersonalInfo onNext={next} defaultValues={formData} />
      )}
      {step === 1 && (
        <Step2Address onNext={next} onBack={back} defaultValues={formData} />
      )}
      {step === 2 && (
        <Step3Preferences onNext={next} onBack={back} defaultValues={formData} />
      )}
      {step === 3 && (
        <Step4Review data={formData} onBack={back} onSubmit={submit} />
      )}
    </div>
  );
};

export default StepForm;
