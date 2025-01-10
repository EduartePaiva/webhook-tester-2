import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import env from "@/api/env";

// for query purposes
const queryClient = postgres(env.DB_URL, { max: env.DB_MIGRATING ? 1 : undefined });
export const db = drizzle(queryClient, {casing: "snake_case"});
