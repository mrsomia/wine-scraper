## Setup/installation

To configure clone the repo then run the following to install all the npm packages required and set up the folder structure:

```
npm run setup
```

Edit the new .env file with your pushover keys, in this format:

```
PUSHOVER_APP_KEY=y87fd6g6tb7tb78s6b87ygb7d8by87
PUSHOVER_USER_KEY=vf8sv7f8vdf87vb98sdf7b97fb97b8
```

These are not real keys.

## Running the server

After this you can start the server when required, using:

```
npm start
```

If you are running this remotely and wish to leave it running, you can enter CTRL-Z to suspend the process, followed by the `bg` command, to let it run in the background. Finally if you are using SSH you can run `disown -h` to ensure it runs when you are logged out
