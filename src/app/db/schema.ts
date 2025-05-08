import {  SQL, sql } from "drizzle-orm";

import {
  pgEnum,
  pgTable,
  uniqueIndex,
  text,
  
  timestamp,
  
  index,
  
  AnyPgColumn,
} from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["Admin", "Member"]);

export const userTable = pgTable(  "user",
  {
    id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password"),    
    createdAt: timestamp("createdAt").defaultNow(),
    role: rolesEnum("role").default("Member").notNull(),
  },
  (table) => {
    return {
      nameUserIdx: index("nameUser_idx").on(table.name),
      emailIdx: uniqueIndex("email_idx").on(lower(table.email)),    
    }
  });
  

export function lower(email: AnyPgColumn): SQL {
  return sql`lower(${email})`;
}


export const schema = {
  user: userTable,
  
  
};
