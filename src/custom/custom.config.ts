/*
note: for some reason this custom section does not seem to be working maybe it has not been finished yet for now my custom code
      is in the db/schema directory and not in the custom folder until it is fixed. 

*/
import * as posts from "@custom/db/schema/posts";
import * as comments from "@custom/db/schema/comments";
import * as categories from "@custom/db/schema/categories";
import * as categoriesToPosts from "@custom/db/schema/categoriesToPosts";

export const tableSchemas = {
  posts,
  comments,
  categories,
  categoriesToPosts,
};
