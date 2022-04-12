# Wine Scraper

A web scraper designed to pull prices from various Irish SuperMarkets and notify my when there is a price drop in an item I am tracking

## Setup/installation

To configure clone the repo and create a file named `.env` in the root of the directory. The file will need to follow the following format:

```
PUSHOVER_APP_KEY=y87fd6g6tb7tb78s6b87ygb7d8by87
PUSHOVER_USER_KEY=vf8sv7f8vdf87vb98sdf7b97fb97b8
```

These are not real keys.

Then run the following to install all the npm packages required:

```
npm i
```

## Running the server

After this you can start the server when required, using:

```
npm start
```

If you are running this remotely and wish to leave it running, you can enter CTRL-Z to suspend the process, followed by the `bg` command, to let it run in the background. Finally if you are using SSH you can run `disown -h` to ensure it runs when you are logged out

## Adding new items

To track new items, simply add an object in the `lib/db.json` file, to the items array with the below format and restart the server

```
{
  "name": "19 Crimes, The Banished Dark Red Wine",
  "URLs": {
    "tesco": "https://www.tesco.ie/groceries/en-IE/products/299531340",
    "dunnes": "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/19-crimes-red-wine-750ml-100873366",
    "supervalu": "https://shop.supervalu.ie/shopping/product/1531948000"
  },
  "recordedPrices": [
  ]
}
```
