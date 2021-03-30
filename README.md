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

 - Create React App (4.0.3) was used to re-initialize this application on March 26, 2021. ([upgrade guide](https://create-react-app.dev/docs/updating-to-new-releases))
 - Cypress is installed but only for local so far. 

## Security Patches

 - March 29th, 2021 - "is-svg": ">=4.2.2" added as a devDependency to fix "1 is-svg vulnerability found in package-lock.json"

> Vulnerable versions: >= 2.1.0, < 4.2.2
> Patched version: 4.2.2
> The is-svg package 2.1.0 through 4.2.1 for Node.js uses a regular expression that is vulnerable to Regular Expression Denial of Service (ReDoS). 
> If an attacker provides a malicious string, is-svg will get stuck processing the input for a very long time.
