/*
note : The Image and tags fields are no being rendered as there is no schema to deal with them in pages/admin/forms, this is used to work 
       so i can only assume this is a work in progress and it will be added back at some point. 
*/

import * as users from "@schema/users";
import * as userSessions from "@schema/userSessions";
import * as cacheRequests from "@schema/cacheRequests";
import * as cacheStats from "@schema/cacheStats";
import * as properties from "@schema/properties";

export const tableSchemas = {
  users,
  userSessions,
  cacheRequests,
  cacheStats,
  properties,
};
