> still editing!

# What is this project?

This is a project that aims to provide developers with an easy-to-use third-party accounts system and provide users with a secure, reliable, and private experiance with full control over their data.

## Planned conditions for websites implimination

1. Developers must use the provided library, without any custom modifications to it in any way.
2. Developers must provide minimal statestics about the user
3. Developers must adhere to using the tracking functions within the provided library
4. Should the user decide to delete their account, all data related to that user must be deleted (per the user's request).
5. Should the user request a copy of their data through this accounts service, the Developer must provide a copy of the user's data within 30 days!

> Note that the user can fully control which data within the website will be collected and which data should not be shared.
**Note to myself: the data should not be transfered out of a server without checking the user's preferences first.**

## Roadmap

- [x] Add a welcome screen
- [ ] Add a sign in page
- [ ] Add a sign up page
- [ ] Add a control panel (Home page)
- [ ] Add an "about" section
- [ ] Add an activity tracking system (Must be completely controlable by the user)
- [ ] Make a library/API for developers
    - [ ] Tracking functions
    - [ ] Login/Logout functions
    - [ ] Data-related requests channels (for account deletion/data copy requests)
- [ ] Add two-steps verification
    - [ ] Add an "authenticator" to the PWA (with an in-app generated code)
    - [ ] Add the option for an authentication promt to the PWA (a y/n screen)
    - [ ] Support external authenticators (Like Google/Microsoft Authenticator)
    - [ ] Support security keys
    - [ ] Add mandatory back-up codes
    > Do NOT allow email or SMS two-steps verification
- [ ] Always require the user to do device authentication on new devices or when the user attempts to change important settings. (https://try-webauthn.appspot.com/)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
