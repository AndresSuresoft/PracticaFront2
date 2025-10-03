import React from "react";

type StarRatingProps = {
  field: any;
  form: any;
  max?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ field, form, max = 5 }) => {
  const currentValue = field.value || 0;

  const handleClick = (value: number) => {
    form.setFieldValue(field.name, value);
  };

  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      {[...Array(max)].map((_, index) => {
        const value = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleClick(value)}
            style={{
              cursor: "pointer",
              fontSize: "28px",
              color: value <= currentValue ? "#FFD700" : "#ccc", 
              transition: "color 0.2s ease-in-out"
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
