
--> statement-breakpoint
drop table if exists properties;


--> statement-breakpoint
CREATE TABLE `properties` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`title` text NOT NULL,
	`address` text NOT NULL,
	`summary` text,
	`price` text NOT NULL,
	`priceFrequency` text NOT NULL,
	`propterySize` text NOT NULL,
	`propteryBeds` text NOT NULL,
	`propteryBaths` text NOT NULL,
	`saleType` text,
	`propteryType` text,
	`image` text,
	`url` text,
	`pageName` text,
	`createdOn` integer,
	`updatedOn` integer
);
