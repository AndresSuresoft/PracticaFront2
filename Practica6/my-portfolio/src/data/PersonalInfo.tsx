// src/data/PersonalInfo.ts
// (Asumiendo que también incluyes los datos del Header)

export const PERSONAL_INFO = {
  // ... datos del Header ...
  isStudent: true,
  name: "Andres Gaona",
  title: "Frontend Developer in training...",
  
  // ⬅️ Nuevos datos consolidados del Footer
  footerText: "Thanks for visiting my portfolio!.",
  footerLinks: [
      { name: "GitHub", url: "https://github.com/denisgaona" },
      { name: "LinkedIn", url: "https://linkedin.com/in/denisgaona" },
      { name: "Email", url: "mailto:denis@correo.com" },
  ],
};