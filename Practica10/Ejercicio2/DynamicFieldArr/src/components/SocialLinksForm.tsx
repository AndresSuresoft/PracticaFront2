import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import type { SubmitHandler } from "react-hook-form";
import "../index.css";


type SocialLink = {
  platform: string;
  url: string;
};

type FormValues = {
  links: SocialLink[];
};


const schema = Yup.object({
  links: Yup.array()
    .of(
      Yup.object({
        platform: Yup.string().required("Platform is required"),
        url: Yup.string().url("Must be a valid URL").required("URL is required"),
      })
    )
    .min(1, "At least 1 link is required")
    .max(5, "You can add up to 5 links")
    .required("Must have at least 1 link")
    .default([]),
});

const SocialLinksForm: React.FC = () => {
  const { control, handleSubmit, register, formState: { errors }, reset } = useForm<FormValues>({
    defaultValues: {
      links: [{ platform: "", url: "" }],
    },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset()
  };

  return (
    <div className="form-card">
      <h2 className="form-title">Social Media Links</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id} className="form-group">
            <label>Platform</label>
            <select {...register(`links.${index}.platform` as const)} className="form-input">
              <option value="">Select platform</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
            </select>
            {errors.links?.[index]?.platform && (
              <p className="error">{errors.links[index]?.platform?.message}</p>
            )}

            <label>URL</label>
            <input
              type="text"
              placeholder="https://example.com"
              {...register(`links.${index}.url` as const)}
              className="form-input"
            />
            {errors.links?.[index]?.url && (
              <p className="error">{errors.links[index]?.url?.message}</p>
            )}

            {fields.length > 1 && (
              <button type="button" className="btn btn-danger" onClick={() => remove(index)}>
                ✖ Remove
              </button>
            )}
          </div>
        ))}

        {fields.length < 5 && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => append({ platform: "", url: "" })}
          >
             Add Link
          </button>
        )}

        <button type="submit" className="btn btn-primary">
           Submit
        </button>

        {errors.links?.message && <p className="error">{errors.links.message}</p>}
      </form>
    </div>
  );
};

export default SocialLinksForm;
