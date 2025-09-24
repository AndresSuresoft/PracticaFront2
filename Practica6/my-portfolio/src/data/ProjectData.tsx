// src/data/projectsData.ts

export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    link?: string;
};
// podemos comentar o eliminar el array para hacer la prueba de proyectos vacios
export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Mini E-commerce plant",
        description:
            "An online store for plants with a cart, filters, and payment gateway",
        image: "./src/assets/EcommercePlants.png",
        link: "https://mini-ecommerce-hhbn-git-master-andres-projects-c3c8d440.vercel.app/",
    },
    {
        id: 2,
        title: "Movie Search Api Page",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "./src/assets/ScreenMovie.png",
        link: "https://react-movie-8e7v.vercel.app/",
    },
    {
        id: 3,
        title: "Todo App With filters",
        description:
            "An interactive to-do list web app with filters, using react ",
        image: "./src/assets/TodoList.png",
        link: "https://react-todo-app-ten-navy.vercel.app/",
    },
];