# Client Mini-Hack

This is a simple project to introduce clients to Open Source and building a basic website capable of submitting form data and emailing this to a recipient.

## Running the demo project locally

Both the UI and API are managed with NPM, make sure to run `npm install` to ensure dependencies are installed

- UI (run from inside the `ui` folder)  
  `npm start` will start a local web server on [localhost:4200](http://localhost:4200)
  
- API (run from inside the `api` folder)  
  `npm start` starts serverless in local mode on port [localhost:3000](http://localhost:3000)
  
*Note: The API will require valid AWS credentials to send emails via SES on which you may need to validate email addresses*
