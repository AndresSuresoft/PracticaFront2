import React from "react";
import type { formData } from "../types/formTypes";

type Step4Props = {
  data: formData;
  onBack: () => void;
  onSubmit: () => void;
};

const Step4Review: React.FC<Step4Props> = ({ data, onBack, onSubmit }) => {
  return (
    <div>
      <h2>Step 4: Review</h2>
      <pre className="review__font">{JSON.stringify(data, null, 2)}</pre>

      <button onClick={onBack}>Back</button>
      <button onClick={onSubmit} className="buttons__space">Submit</button>
    </div>
  );
};

export default Step4Review;
