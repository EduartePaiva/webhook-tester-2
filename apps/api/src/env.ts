import { config } from "dotenv";
import { z } from "zod";

config();

const envScheme = z.object({
    DB_URL: z.string().min(1),
    DB_MIGRATING: z
        .string()
        .refine(s => s === "true" || s === "false")
        .transform(s => s === "true")
        .optional(),
    ACCEPT_NEW_USERS: z.string(),
    ACCESS_TOKEN_SECRET: z.string().min(1),
    EMAIL_TOKEN_SECRET: z.string().min(1),
    RESEND_API_TOKEN: z.string().min(1),
    ALLOW_CORS: z.string().optional(),
    WEBSITE_URL: z.string().min(1),
    WEBHOOK_URL: z.string().min(4),
});

// eslint-disable-next-line node/no-process-env
const parsedEnv = envScheme.safeParse(process.env);
if (!parsedEnv.success) {
    console.error("❌ Invalid env:");
    console.error(parsedEnv.error.flatten().fieldErrors);
    process.exit(1);
}

const env = parsedEnv.data;
export default env;
