import React, { useState, useRef, type FormEvent } from 'react';
import '../index.css'; 

const ControlledUncontrolledForm: React.FC = () => {
  const [controlledValue, setControlledValue] = useState<string>('');
  const uncontrolledInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const controlledData = controlledValue;
    const uncontrolledData = uncontrolledInputRef.current?.value || '';

    console.log('Valor Controlado:', controlledData);
    console.log('Valor No Controlado:', uncontrolledData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Formulario Controlado vs No Controlado</h2>

      <div className="form-group">
        <label htmlFor="controlled">Input Controlado (useState):</label>
        <input
          id="controlled"
          type="text"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="uncontrolled">Input No Controlado (useRef):</label>
        <input id="uncontrolled" type="text" ref={uncontrolledInputRef} />
      </div>

      <button className="submit-btn" type="submit">
        Logear
      </button>
    </form>
  );
};

export default ControlledUncontrolledForm;
