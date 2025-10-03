export type ContactMethod =  "" | "Email" | "Phone" | "WhatsApp";
export type Category = "" | "Technology" | "Health" | "Art" | "Travel";


export type formData = {
    //Step 1
  name: string;
  age: number;    // 👈 ya no acepta ""
  email: string;

    //Step 2
    country: string;
    city: string;
    zipCode: string;

    //Step 3
    contactMethod: ContactMethod;
    newsletter: boolean;
    favoriteCategory: Category;
}



