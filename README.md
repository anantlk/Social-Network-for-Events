# Sappa API

## Directory Structure

- `data` holds static files served directly.
- `schemas` holds structure of JSON objects returned by the API. The interfaces defined there are referenced in `API.md`. They are also used in unit and integration tests.
- `src/bin` holds executables and scripts.
- `src/middleware` holds custom middleware functions, grouped into files.
- `src/routes` holds routers, one per file.
- `src/utilities` holds various functions common to the entire project.
- `test` holds unit and integration tests.

##Add Features

- send email to owner on new device login
- add unique phone number

## Contributing

- Set up `eslint` and `prettier` in vscode
- `ctrl + shift + p` then type `ext install prettier` and `ext install eslint`

## Documentation

- Use JSDoc for functions
- Use apiDoc for Routes

## Tests

- For unit, Run `./node_modules/.bin/mocha test/unit.js`
- For integration, Run `./node_modules/.bin/mocha test/integration.js`
