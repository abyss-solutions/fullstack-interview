# Full Stack Interview

## Challenge Instructions

The instructions for the code challenge can be found in the [CHALLENGE.md](CHALLENGE.md) file.

## Setup

To set up this project you need to install dependencies in the root, the server and the client directories.

a convenience script has been set up to do this for you.

```
sh bin/install
```

## Start the development server and client

After installing the dependencies, you can run the web server and the client using the following script

```
yarn start
```

If you want to run the server and client independently you can run the following scripts.

```
yarn server # launch the server
yarn client # launch the web client
```

There are also debugger instances configured for those that use vscode.

To debug the web client application, launch the web server by running `yarn start` or `yarn client`, then run the debugger.

To debug the server application, you need to launch the server via the debugger. This means you will need to shut down any running server applications, and to run this together with the web client application you will need to launch the web client independently using `yarn client`.