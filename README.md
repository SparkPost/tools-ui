# Tools UI
This repo contains the [Messaging Tools UI](https://tools.sparkpost.com). API is located [here](https://github.com/SparkPost/messaging-tools/).

## Development

### Installing Dependencies

```
npm install
```

### Starting Service

In the project directory, you can run:

```
npm start
```
Note: If you get `node-sass` related error try `npm rebuild node-sass`.

This will start the app in the development mode. Open [http://localhost:3000/dkim](http://localhost:3000/dkim) to view it in the browser.

Making changes to source will reload the application automatically. 

### Running Tests
```
npm test
```

Launches the test runner in the interactive watch mode. Follow on-screen messages for usages.

```
npm run serve
```
Requires: 
https://www.npmjs.com/package/pushstate-server

`npm install -g pushstate-server`

`npm run serve`

Note: I did not install pushstate-server as a dev dependency because it would have upgraded a number of versions in the package lock and I didn't want to add unnecessary risk.

## Deployment
### Staging

To deploy to staging, just merge the branch to `master`. [Travis](https://travis-ci.org/SparkPost/tools-ui/) will take care of the rest.

### Production

For releasing to production, other than merging to `master`, you need to tag it. Run following commands while you're in `master`.

- `npm version <major|minor|patch>`. Use appropriate option among `major|minor|patch`. A new tag will be created.
- `git push && git push --tags`
