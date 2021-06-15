# Working On Upward (Locally)

## Setting up the Database

### If you'd like Docker but don't have it yet

I recommend using Docker Desktop as it provides a graphical interface for managing docker, keeping it up-to-date, and configuring it.

[Installing on a Mac](https://docs.docker.com/docker-for-mac/install/)
[Installing on a Windows](https://docs.docker.com/docker-for-windows/install/)

### Once you have Docker

You can create the database for local development using the npm script:

```sh
npm run create-db
```

### If working on schema changes

To test schema changes without generating a migration:

```sh
npm run update-db
```

### If you _don't_ **want** Docker

You could install Postgres directly on your machine and manage the database that way.

#### Mac

Using homebrew you can simply type: `brew install postgresql` 
See https://formulae.brew.sh/formula/postgresql#default for more details.

#### Windows

Certified installer: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

