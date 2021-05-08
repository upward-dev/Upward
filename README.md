# heroku-next-postgres

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Contributing

### First, install the project dependencies with `yarn`

Install the dependencies for the project with `yarn` which is a shortcut for
`yarn install`. [Yarn is a package manager](https://yarnpkg.com/) that
downloads packages from the [NPM Registry](https://www.npmjs.com/) of open
source packages that can help with many development tasks from compiling your
React app so that it downloads faster for users to converting time between
timezones or replacing words written in English into Spanish, Swahili, or
Mandarin.

You'll need to run `yarn` (or `yarn install`) often to keep up to date with the
npm packages other people may be adding to the project or updating to keep the
site secure. You can't run `yarn` too many times so don't worry about that;
once a day is a good habit, and if the app won't start start for some reason
running `yarn` to make sure your dependencies are up to date is always the
first step in troubleshooting to fix things.

### Next, run the database migrations

TK We use sequelize to store our database configurations as migrations that we
use both locally in development (in an SQLite file) and on Heroku (on a
Postgres database).

### Finally, run the development server

Run `yarn run dev`, then open [http://localhost:3000](http://localhost:3000)
with your browser to see the result.

### Where things are in the app

You can start editing the home page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction)
instead of React pages.

### Preparing for a Pull Request

TK note about mentors helping every step of the way as requested, invitation to
ask lots of questions in Slack, read other people's code in code reviews,
etc.....

All of these steps can be run in a single command: `yarn run ci-at-home` if you
want to know ahead of time if a pull request will pass the checks.

#### Linting Your Code

We use [Prettier](https://prettier.io/) to keep the code uniform and easy to
read following the [StandardJS Styleguide](https://standardjs.com/) . You can
check if your code will pass [our testing
system's](https://github.com/diffalot/heroku-next-postgres/actions) linting
step by running `yarn run lint` (which in turn runs `npx prettier .`). If the
code doesn't pass you can fix many linting errors with `yarn run format`
(`npx prettier --write`).

On [the Prettier website](https://prettier.io/) you'll find lots of information
about plugins and extensions you can install for your text editor (we recommend
[Visual Studio Code](https://code.visualstudio.com/)) that will automate
styling your code when you save or as you type, and don't forget about
`yarn run format`.

#### Creating a Pull Request on GitHub

### Advanced Features

#### Typescript

[Types Provided By
NextJS](https://nextjs.org/learn/excel/typescript/nextjs-types)

> Alice: It's really difficult to use typescript half way.... I'm gonna have to
> think
> about this one

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
- features and API. [Learn Next.js](https://nextjs.org/learn) - an interactive
- Next.js tutorial.

You can check out [the Next.js GitHub
repository](https://github.com/vercel/next.js/) - your feedback and
contributions are welcome!
