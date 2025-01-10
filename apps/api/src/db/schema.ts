import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid().notNull().defaultRandom().primaryKey(),
    userName: text().notNull(),
    email: text().notNull(),
    password: text().notNull(),
    createdAt: timestamp().defaultNow().notNull(),
});

export const resetPassword = pgTable("reset_password", {
    id: uuid().notNull().defaultRandom().primaryKey(),
    userId: uuid()
        .notNull()
        .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
    expireAt: timestamp().notNull(),
});
