import {
  default as lucia_drizzle,
  default as lucia_prisma,
} from "../../assets/project.webp";

const slides = [
  {
    url: "https://github.com/emil-devel/sveltekit-lucia-drizzle",
    link: "sveltekit-lucia-drizzle code on github",
    src: lucia_drizzle,
    title: "Sveltekit-Lucia-Drizzle",
    content: `
    <p>User management with Lucia-Auth authentication and Roles (User, Redacteur, Admin).</p>
    <p>Realized with: Sveltekit, Skeleton UI, SuperForms, Valibot, Drizzle.</p>
    <p>Postgres Database.</p>
    `,
  },
  {
    url: "https://github.com/emil-devel/sveltekit-lucia-prisma",
    src: lucia_prisma,
    link: "sveltekit-lucia-prisma code on github",
    title: "Sveltekit-Lucia-Prisma",
    content: `
    <p>User management with Lucia-Auth authentication and Roles (User, Redacteur, Admin).</p>
    <p>Realized with: Sveltekit, Skeleton UI, SuperForms, Valibot, Prisma.</p>
    <p>Postgres Database.</p>
    `,
  },
];

export default slides;
