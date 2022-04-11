# Wine Scraper

A web scraper designed to pull prices from various Irish SuperMarkets and notify my when there is a price drop in an item I am tracking

To configure clone the repo and create a file named `.env` in the root of the directory. The file will need to follow the following format:

```
PUSHOVER_APP_KEY=y87fd6g6tb7tb78s6b87ygb7d8by87
PUSHOVER_USER_KEY=vf8sv7f8vdf87vb98sdf7b97fb97b8
```

These are not real keys.

The run the following:

```
npm i
npm i -g ts-node
```

After this you can start the server when required using:

```
npm start
```

To track new items, simply add an object in the `lib/db.json` file, with the same format.
