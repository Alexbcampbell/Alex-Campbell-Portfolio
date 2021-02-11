
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "contact" (
firstName VARCHAR(50),
lastName VARCHAR(50),
phoneNumber VARCHAR(50),
email VARCHAR(50),
comments VARCHAR(500)
);