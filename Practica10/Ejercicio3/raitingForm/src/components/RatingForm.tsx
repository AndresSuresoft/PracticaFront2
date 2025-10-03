import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import StarRating from "../components/StartRating"; // 👈 importamos el nuevo componente
import "../index.css";

type FormValues = {
  name: string;
  rating: number;
  feedback: string;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  rating: Yup.number().min(1, "Please give at least 1 star").max(5).required("Rating is required"),
  feedback: Yup.string().when("rating", {
    is: (val: number) => val < 3,
    then: (schema) => schema.required("Feedback is required if rating < 3"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

const initialValues: FormValues = {
  name: "",
  rating: 0,
  feedback: "",
};

const RatingForm: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const onSubmit = (values: FormValues) => {
    setSubmittedData(values);
  };

  return (
    <div className="form-container">
      <div className="card">
        <h2>Rating</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="form">
            <label>Name</label>
            <Field name="name" className="input" />
            <ErrorMessage name="name" component="div" className="error" />

            <label>Rating</label>
            <Field name="rating" component={StarRating} />
            <ErrorMessage name="rating" component="div" className="error" />

            <label>Feedback</label>
            <Field as="textarea" name="feedback" className="textarea" />
            <ErrorMessage name="feedback" component="div" className="error" />

            <button type="submit" className="button">
              Submit
            </button>
          </Form>
        </Formik>
      </div>

      {submittedData && (
        <div className="result">
          <h3>Submitted Data</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RatingForm;
