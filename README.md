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
    - [ ] Support two-steps verification using an email address
    > Do NOT allow SMS two-steps verification
- [ ] Force the user to set up security questions (3 minimum)
- [ ] Always require the user to do device authentication on new devices or when the user attempts to change important settings. (https://try-webauthn.appspot.com/)

> The sign up process:
>
> 1. User must fill in the personal first and last names
> 2. User must choose a username
> 3. User must choose a password
> 4. User must enter their date of birth and gender
> 5. User must choose their security quesitons
> 6. User will be prompted with the option to attach an email address to their account
> 7. User will be promted to authenticate their device (system fingerprint/face-ID/password prompt) for quick verification when the settings are changed
> 8. User must choose their prefered quick settings (NOTE: check for changes in device auth method)
> 9. User will be promted to read the privacy policy and terms of service, and agree to them
> 10. User will be promted to set up two-factor authentication, or go to the home page
>
> The sign in process (trusted device):
>
> 1. User must enter username
> 2. User must enter password
>
> The sign in process (new/untrusted device):
>
> 1. User must enter username
> 2. User must enter password
> 3. User must complete the two factor authentication process (if it's set up)
> 4. User will be promted to authenticate the device for settings modification as a trusted device (If the user doesn't choose to mark the device as trusted, they will be unable to change their settings on that device without password confirmation)
>
> New service access/signup prompt (trusted devices):
>
> 1. User will be asked to authenticate their device
> 2. User will be prompted with the list of permissions that the service requested (button must say "Allow access as {PP}{username}")
>
> New service access/signup prompt (untrusted devices):
>
> 1. User will be asked to type in their password
> 2. User will be prompted with the list of permissions that the service requested (button must say "Allow access as {PP}{username}")
>
> Service login prompt (trusted/untrusted device):
>
> 1. User will be promted to continue to the website (button must say "Continue as {PP}{username}"), or sign out and sign in with another account
>
> Settings change confirmation prompt (trusted device):
>
> 1. User will be asked to authenticate their device
>
> Settings change confirmation prompt (untrusted device):
>
> 1. User will be asked to enter their password
>
> The password reset process:
>
> 1. The user must use their email to verify ownership (in case the user chose to not attach an email address to their account, they can use a trusted device to verify ownership)
> 2. The user must answer the security questions correctly
>
> Account recovry process: (In case the user can't access their email)
>
> 1. Must file the request through a trusted device
> 2. Must enter their date of birth and gender
> 3. Must answer all the security questions correctly


> Note 1: Add option to save auth codes for other services, passwords and emails, and important data (like bank info, hashes, etc)

> Note 2: Disable screenshots

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
