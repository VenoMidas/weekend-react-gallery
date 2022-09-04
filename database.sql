-- database name `react_gallery`

CREATE TABLE "gallery" (
	"id" serial PRIMARY KEY,
	"title" varchar(50),
	"description" varchar(255),
	"path" varchar(255),
	"likes" integer
);

INSERT INTO "gallery" ("title", "description", "path", "likes")
VALUES ('universe', 'Our whole universe was in a hot, dense state', '/images/universe.png', 11),
('earth', 'The earth began to cool', '/images/earth.png', 12),
('autotroph', 'the autotrophs began to drool', '/images/autotroph.png', 13),
('neanderthals tools', 'Neanderthals developed tools', '/images/neanderthals_tools.png', 14),
('great wall', 'We built a wall', '/images/great_wall.png', 15),
('pyramids', 'We built the pyramids', '/images/pyramids.png', 16),
('mystery', 'unraveling the mysteries', '/images/mystery.png', 17),
('big bang', 'That all started with the big bang', '/images/big_bang.png', 18);