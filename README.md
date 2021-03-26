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

Note: If you get `node-sass` related error try `npm rebuild node-sass`. (changing node versions can cause this)

This will start the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running Tests

```
npm test
```

Launches the test runner in the interactive watch mode. Follow on-screen messages for usages.

## Deployment

### Staging

To deploy to staging, just merge the branch to `master`. [Travis](https://travis-ci.org/SparkPost/tools-ui/) will take care of the rest.

### Production

For releasing to production, other than merging to `master`, you need to tag it. Run following commands while you're in `master`.

- `npm version <major|minor|patch>`. Use appropriate option among `major|minor|patch`. A new tag will be created.
- `git push && git push --tags`

Note: If you add the following to your `.gitconfig` file, you can just push and tags will always be pushed too.

```
[push]
	followTags = true
```

## Notes

Cypress is installed but only for local so far. CI command could look something like:
`"cy-ci": "cross-env NODE_ENV=test npm run serve & wait-on cypress run --config-file cypress.ci.json"`
