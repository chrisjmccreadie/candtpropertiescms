--> statement-breakpoint
drop table if exists work;

--> statement-breakpoint
CREATE TABLE `work` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`body` text NOT NULL,
    `urlimage` text NOT NULL
);

--> statement-breakpoint
drop table if exists services;

--> statement-breakpoint
CREATE TABLE `services` (
	`id` text PRIMARY KEY NOT NULL,
	`service` text NOT NULL,
	`body` text NOT NULL,
    `urlimage` text NOT NULL
);