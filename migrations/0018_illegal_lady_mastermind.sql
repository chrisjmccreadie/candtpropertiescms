--> statement-breakpoint
drop table if exists posts;
--> statement-breakpoint
CREATE TABLE  IF NOT EXISTS `posts` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`body` text NOT NULL,
	`userId` text NOT NULL,
	`image` text,
	`images` text,
	`tags` text,
	`createdOn` integer,
	`updatedOn` integer
);
