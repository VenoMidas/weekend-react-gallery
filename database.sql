-- database name `react_gallery`

CREATE TABLE "gallery" (
	"id" serial PRIMARY KEY,
	"title" varchar(50),
	"description" varchar(255),
	"path" varchar(255),
	"likes" integer DEFAULT 0
);

INSERT INTO "gallery" ("title", "description", "path", "likes")
VALUES ('fooFighters', 'Foo Fighters - Concrete and Gold concert!', '/images/fooFighters.jpeg', 44),
('gnr', 'Guns and Roses at US Bank Stadium - Slash is incredible!', '/images/gnr.jpeg', 32),
('guiter', 'Me playing guitar.', '/images/guitar.jpeg', 12),
('guitarandamp2', 'My guitar - Jackson Soloist SLSMG, My amp - Orange Dual Terror, and my cab - 2X12 Celestion Vintage 30 and Celestion Creamback 75', '/images/guitarandamp2.jpeg', 63),
('starWarsSymphony', 'The Minnesota Orchestra performing Return of the Jedi', '/images/starWarsSymphony.jpeg', 37),
('cheesecake', 'Cheesecake is one of my favorite treats to cook!', '/images/cheesecake.jpeg', 24),
('cremeBrule', 'I make Crème brûlée for special occasions like birthdays!', '/images/cremeBrule.jpeg', 87),
('traegerTurkeys', 'I love cooking, smoking, grilling, etc. These turkeys made for a delicious Thanksgiving!', '/images/traegerTurkeys.jpeg', 67),
('customPCbuild1', 'I used to do many boutique style PC builds. This was my first hardline water cooling build', '/images/customPCbuild1.jpeg', 12),
('customPCbuild2', 'My most recent client build, made a last minute change on the fans still waiting on part. Almost complete', '/images/customPCbuild2.jpeg', 77),
('halloween', 'My partener Emily and I love being goofy for Halloween!', '/images/halloween.jpeg', 21),
('halloween2', 'Another goofy Halloween with my partner Emily and I!', '/images/halloween2.jpeg', 31),
('mastermind', 'Mastermind and coffee on a porch in Hawaii. Love to play cards and board games. Anything that requires strategy and logic!', '/images/mastermind.jpeg', 65),
('polarPlunge', 'My first Polar Plunge!', '/images/polarPlunge.jpeg', 98),
('R2D2Lego', 'I love legos! I like anything that involves building!', 'images/R2D2Lego.jpeg', 107),
('mr2Spyder', 'Driving a 2001 MR2 Spyder back from Florida to Minnesota. I have had many MR2s over the years, I like to fix them up, do some fun engine swaps, and then return them back to the community.', '/images/mr2Spyder.jpeg', 68),
('subaruAndBike', 'A couple more fun toys i have had over the years.', '/images/subaruAndBike.jpeg', 42),
('twinsBaseball', 'Enjoying a baseball game.', '/images/twinsBaseball.jpeg', 14),
('vikings', 'My dad and I going to a Vikings game', '/images/vikings.jpeg', 25),
('livZoo', 'My daughter, Olivia, playing with a penguin at the MN zoo!', '/images/livZoo.jpeg', 110),
('newborn', 'My daughter, Olivia, when she was born!', '/images/newborn.jpeg', 143),
('oliviaVikings', 'Olivia in her Vikings gear!', '/images/oliviaVikings.jpeg', 132),
('wedding', 'Collage of photos from my wedding!', 'images/wedding.jpeg', 137),
('duluthHike', 'Adventuring through some trails in Duluth, MN', '/images/duluthHike.jpeg', 98),
('familyAdventure', 'Even with a young child we still love to adventure. This is somethere outside of Breckenridge, CO.', '/images/familyAdventure.jpeg', 76),
('fishyFun', 'Salmon fishing in Alaska, having some fun with the photo.', '/images/fishyFun.jpeg', 45),
('hockeyGame', 'My partner and I at a Wild hockey game against the Avalanche in Colorado', '/images/hockeyGame.jpeg', 33),
('mountRushmore', 'Visiting Mount Rushmore on our way to Yellowstone.', '/images/mountRushmore.jpeg', 31),
('snowshoeing', 'Snow shoeing through Rocky Mountain National Park', '/images/snowshoeing.jpeg', 55),
('grandTeton', 'Visiting the Grand Tetons', '/images/grandTeton.jpeg', 62),
('yellowstone', 'My favorite photo that I took during my trip to Yellowstone!', '/images/yellowstone.jpeg', 99),
('yellowstoneBuffalo', 'Stuck in trafic for hours outside Yellowstone due to a herd crossing the road!', '/images/yellowstoneBuffalo.jpeg', 103);