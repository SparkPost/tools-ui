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

This will start the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


*Note:* Visiting `/` will redirect you to sparkpost.com. So, try visiting a path like [`/dkim`](http://localhost:3000/dkim).

Making changes to source will reload the application automatically. 

### Running Tests
```
npm test
```

Launches the test runner in the interactive watch mode. Follow on-screen messages for usages.



## Deployment
### Making Production Build

```
npm run build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. App is ready to be deployed!

See the section about [deployment](#deployment) for more information.

_detail about pushing the build to production to be filled_
