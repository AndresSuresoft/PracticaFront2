import * as Yup from 'yup';

export const Step1Schema = Yup.object({
name: Yup.string().min(5, 'Minimo 5 caracteres').required('Requerdo'),
age: Yup.number().typeError("Debe ser un numero").min(14, "Debes tener al menos 14 años").required('Requerido'),
email: Yup.string().email('Email invalido').required('Requerido'),
});


export const Step2Schema = Yup.object({
    country: Yup.string().required('Requerido'),
    city: Yup.string().required('Requerido'),
    zipCode: Yup.string().matches(/^\d{5}$/, 'Debe ser un codigo postal valido de 5 digitos').required('Requerido'),
})

export const Step3Schema = Yup.object({
    contactMethod: Yup.string()
      .oneOf(["", "Email", "Phone", "WhatsApp"], "Método inválido")
      .required("Requerido"),
    newsletter: Yup.boolean().default(false),
    favoriteCategory: Yup.string()
      .oneOf(["", "Technology", "Health", "Art", "Travel"], "Categoría inválida")
      .required("Requerido"),
  });