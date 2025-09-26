import React, { useRef, useState } from 'react';
import '../index.css'
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FormValidation: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  const validate = () => {
    const newErrors = { name: '', email: '', password: '' };
    let firstInvalidField: keyof typeof refs | null = null;

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
      firstInvalidField = firstInvalidField || 'name';
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
      firstInvalidField = firstInvalidField || 'email';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
      firstInvalidField = firstInvalidField || 'password';
    }

    setErrors(newErrors);

    if (firstInvalidField) {
      refs[firstInvalidField]?.current?.focus();
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Formulario enviado correctamente ✅');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Nombre: </label>
        <input
          ref={refs.name}
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email: </label>
        <input
          ref={refs.email}
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label>Contraseña: </label>
        <input
          ref={refs.password}
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormValidation;
