# MOCK SMTP SERVER

# External dependencies (optional)

If you want to **build** this application into an **executable** that can be run even on devices without `Node.js` installed.
You can install `pkg` by running the command below and follow the instructions in the `HOW TO` section:

`npm install -g pkg`


# HOW TO

## Build

### Get dependencies

`npm install`

### Make an executable with `pkg`

`pkg .`

# Run

## With Node

`npm start [PORT NUMBER]`

## With `pkg`

`./mock-smtp-server [PORT NUMBER]`

# Test with CLI

- `sendEmail -f yolo@yolo.com -t test@localhost.com -s localhost:2525  -u "my subject" -m "My content"`

NOTE: Other mail transfer agent that you can use: `sendmail`, `mail`