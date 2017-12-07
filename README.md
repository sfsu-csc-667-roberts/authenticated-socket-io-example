### Authentication, Sockets, and Build example

This codebase implements authentication using passport, and allows authenticated users to chat in a shared or private chat room - it's pretty basic, but it's enough to get you started on the term project requirements. I've also used some additional tools to build and package the front end code, lint the javascript, and automatically format the code for me.

### Running the Example

```
git clone git@github.com:sfsu-csc-667-roberts/authenticated-socket-io-example.git
cd authenticated-socket-io-example
npm install
npm run start
```

### Adding features to the example

During development, it is necessary to run an additional process to watch our javascript files for changes, and rebuild the code as files are saved:

```
npm run build:dev
```

#### Precommit hook

Because I have written code that is separated into multiple files (modules) and that is using ES6 import statements and needs to be transpiled, I am using webpack to transpile and bundle the code into a single package for me. During development, I can run `npm run build:dev` to rebuild this code as I make changes. To ensure that the code is rebuilt and ready for deployment to production, I have added a precommit hook to run some scripts, including the build script, **whenever I make a commit**. The precommit hook executes **just before** the commit completes, packaging the code, and running a few other utilities on the code (eslint to lint the code, and prettier to automatically format the code).
