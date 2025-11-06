# Package Tracking
Website that fetches tracking data from a JSON API and displays it in a table, with support for multiple languages. Made using [React](https://react.dev). View at [kasperab.github.io/package-tracking](https://kasperab.github.io/package-tracking).

## Run it yourself
### Requirements
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org)

### Setup
```bash
$ git clone git@github.com:kasperab/package-tracking.git
$ cd package-tracking
$ npm install
```

### Run locally
```bash
$ npm start
```
Now you can view it at `http://localhost:3000`.

### Deploy to GitHub pages
1. Create a public repository on GitHub
2. Change the value of `homepage` in `package.json` to `https://[USERNAME].github.io/[REPOSITORY NAME]`
3. Run the following commands:
```bash
$ git remote set-url origin https://github.com/[USERNAME]/[REPOSITORY NAME].git
$ git push -u origin main
$ npm run deploy
```
Now you can view it at `https://[USERNAME].github.io/[REPOSITORY NAME]` (it may take a couple of minutes to process).