import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations, type InferSelectModel } from "drizzle-orm";
import { auditSchema } from "@schema/audit";
import { isAdminOrEditor, isAdminOrUser } from "db/config-helpers";
import type { ApiConfig } from "../routes";
import * as users from "@schema/users";

export const tableName = "work";
export const name = "Work";
export const route = "work";
export const icon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>`;

export const definition = {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  title: text("title").notNull(),
  summary: text("summary"),
  body: text("body").notNull(),
  image: text("image"),
  url: text("url"),
  pageName: text("pageName"),
  createdOn: text("createdOn"),
  updatedOn: text("updatedOn"),
};

/**
 * The work table stores information about the work done by users.
 */
export const table = sqliteTable(
  tableName,
  {
    /**
     * The definition of the work table.
     */
    ...definition,
    /**
     * The audit schema is used to track changes to the work table.
     */
    ...auditSchema,
  },
  (table) => {
    return {
      /**
       * This index is used to quickly look up work by user id.
       */
      // userIdIndex: index("workUserIdIndex").on(table.userId),
    };
  }
);

/**
 * The relation between the work table and the users table.
 */
export const relation = relations(table, ({ one, many }) => ({
  /**
   * The user who created the work.
   */
  user: one(users.table, {
    fields: [table.userId],
    references: [users.table.id],
  }),
}));

/**
 * Access control configuration for the work table.
 */
export const access: ApiConfig["access"] = {
  operation: {
    /**
     * Determines if reading records is allowed.
     */
    read: true,
    /**
     * Determines if creating a new record is allowed.
     */
    create: isAdminOrEditor,
    /**
     * Determines if updating a record is allowed.
     */
    update: isAdminOrUser,
    /**
     * Determines if deleting a record is allowed.
     */
    delete: isAdminOrUser,
  },
  fields: {
    /**
     * Access control for the userId field.
     */
    userId: {
      /**
       * Determines if the userId field can be updated.
       */
      update: false,
    },
    /**
     * Access control for the createdOn field.
     */
    createdOn: {
      /**
       * Determines if the createdOn field can be updated.
       */
      update: false,
    },
    /**
     * Access control for the updatedOn field.
     */
    updatedOn: {
      /**
       * Determines if the updatedOn field can be updated.
       */
      update: false,
    },
  },
};

export const hooks: ApiConfig["hooks"] = {
  resolveInput: {
    create: (ctx, data) => {
      if (ctx.locals.user?.id) {
        data.userId = ctx.locals.user.id;
      }
      return data;
    },
    update: (ctx, id, data) => {
      if (ctx.locals.user?.id) {
        data.userId = ctx.locals.user.id;
      }
      return data;
    },
  },
};

export const fields: ApiConfig["fields"] = {
  id: {
    type: "id",
  },
  title: {
    type: "textField",
  },
  body: {
    type: "textArea",
  },
  summary: {
    type: "textArea",
  },
  image: {
    type: "textField",
  },
};

export type Session = InferSelectModel<typeof table>;
