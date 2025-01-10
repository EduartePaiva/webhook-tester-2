import { defineConfig } from "drizzle-kit";

import env from "./src/env";

export default defineConfig({
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: env.DB_URL,
    },
    casing: "snake_case",
});
