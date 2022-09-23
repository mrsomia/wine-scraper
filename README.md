# Wine Scraper

A web scraper designed to pull prices from various Irish SuperMarkets and notify me when there is a price drop in an item I am tracking.

## How its Made

Tech used: Typescript, Prisma, Next.js, Postgres, Nextauth

I built this to learn Prisma, Typescript and to experiment with new libraries like Fastify at first. I added Pushover to use it to notify me directly when a price changes so I did not have to persistently check it and add libraries, like zod, for data validation.

I wrote webscrapers in cheerio for each of the supermarkets, I then used node schedule to run this at the same time each day. I've recently migrated this to nextjs and vercel so that I can develop a front end too and host it. I'm currently working on adding user authentication with the option to add favourites

## Optimizations

Improve the UI and user experience, then focus on a mobile version

## Lessons Learned:

Migrating database code and types that are coupled with your code can be really hard. I intitally used just a json file as the db and migrating to prisma and using an ORM made it easier to switch databases. I also used this to implement a DAO style design so I can write easier functions for access and modifying the data. This would make it easier to migrate again if I change the Scheme or the ORM
