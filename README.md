# Wine Scraper

A web scraper designed to pull prices from various Irish SuperMarkets and notify my when there is a price drop in an item I am tracking. For how to set this up, you can see the [setup.md](./setup.md) file

## How its Made

Tech used: Typescript, Prisma, Fasftify, SQLite

I built this to learn Prisma, Typescript and to experiment with new libraries like Fastify. I added Pushover to use it to notify me directly when a price changes so I did not have to persistently check it and add libraries, like zod, for data validation.

I wrote webscrapers in cheerio for each of the supermarkets, I then used node schedule to run this at the same time each day.

## Optimizations

If I had a more time I would like to add User authentication and even the use of JWTs for session management. I intend to add a frontend with nextjs. I would also like to add web notificatins to this so that I can have the browser notify me too.

## Lessons Learned:

Migrating database code and types that are coupled with your code can be really hard. I intitally used just a json file as the db and migrating to prisma and using an ORM made it easier to switch databases. I also used this to implement a DAO style design so I can write easier functions for access and modifying the data. This would make it easier to migrate again if I change the Scheme or the ORM
