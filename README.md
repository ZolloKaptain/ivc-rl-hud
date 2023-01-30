A custom Rocket League Observer HUD for [The Valley](https://thevalley.vercel.app/). This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Sorry for the absolute non-readability. Most components are made off of SVG files, and styles are mostly done in line. Is there a better way to do it? yes. But too rushed to write clean code so sorry for the mess that creates :/

## Dependencies
- Node.js v14.6.0 or above is required for the project to build and run. (https://nodejs.org/en/download/)
- Bakkesmod is needed for this project to work, you can find it [here.](https://bakkesmod.com/)
- SOS plugin is also required (https://gitlab.com/bakkesplugins/sos/sos-plugin)
- SOS Websocket Relay (https://gitlab.com/bakkesplugins/sos/sos-ws-relay). Must be running alongside the web server.

## Getting Started with the SOS/Bakkesmod
1. Install SOS/Bakkesmod using the links above if you haven't already.
2. Launch Bakkesmod and Rocket League.
3. Open a command prompt window, change the directory to the folder in which SOS-WS-Relay was installed, and run:
```bash
npm run relay
```
3. When prompted, just hit enter to set the default values.
SOS should now be running!

## Getting Started with the Web Server
First, set your terminal directory to the correct location and install necessary dependencies:
```bash
npm install
```

Then, build the project:
```bash
npm run build
# or
yarn build
```
NOTE: You only need to build on first run, or whenever the code is changed.

Finally, start the server:
```bash
npm run start
# or
yarn build
```
Open [http://localhost:3000](http://localhost:3000) with your browser or as an OBS browser source to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
