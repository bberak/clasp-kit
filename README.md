# Clasp Kit

This repo provides a template for building web apps on the Google App Script platform via the Clasp deployment tool. Clasp Kit apps have a backend component and a frontend component.

The backend component hosts the HTML, CSS and JS files as well as providing a crude middleware for accessing data from a DB. The DB in this case is any Google Spreadsheet you choose - but this could be swapped out for a ODBC connection if required (not included as part of the kit).

The frontend is written in React, bundled with [BlueprintJS](https://blueprintjs.com/) and compiled/transpiled using webpack. The project contains NPM scripts for building and deploying the project (both backend and frontend) to Google Apps Script.

## Prerequisites

- NodeJS (12.13.0)
- NPM (6.12.0+)
- Clasp (2.3.0+)
- [Enable Google App Script API](https://script.google.com/home/usersettings)

> Clasp is installed automatically as part of the `postinstall` script of the project. You can install it manually with `npm install -g @google/clasp`.

## Getting Started

1. `git clone ...`