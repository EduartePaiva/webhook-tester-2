import { config } from "dotenv";
import { z } from "zod";

config();

const envScheme = z.object({
    DB_URL: z.string().min(1),
    ACCEPT_NEW_USERS: z.string(),
    ACCESS_TOKEN_SECRET: z.string().min(1),
    EMAIL_TOKEN_SECRET: z.string().min(1),
    RESEND_API_TOKEN: z.string().min(1),
    ALLOW_CORS: z.string().optional(),
    WEBSITE_URL: z.string().min(1),
    WEBHOOK_URL: z.string().min(4),
});

export type envSchemaType = z.infer<typeof envScheme>;

// eslint-disable-next-line node/no-process-env
const parsedEnv = envScheme.safeParse(process.env);

if (!parsedEnv.success) {
    console.error(`❌ invalid env variables\n\n${parsedEnv.error.flatten()}`);
    process.exit(1);
}

const env = parsedEnv.data;
export default env;
