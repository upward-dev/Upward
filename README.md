# heroku-next-postgres

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Contributing

### Technologies we use

* Next.js
* Typescript
* [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for css styles - do not write your own custom CSS unless it's absoultely needed. Take a look at bootstrap and the styles they provide.
* [Sass](https://sass-lang.com/)
* [React hook form](https://react-hook-form.com/)
* [Prisma] (https://www.prisma.io/nextjs#nextjs-tabs) - ORM to connect to the database
* [Postgres](https://www.postgresql.org/) - Database language
* Heroku to host our codebase
* Docker

If you want to use another type of package, please check with us on our slack channel

### First, install the project dependencies with `npm`

Install the dependencies for the project with `npm` which is a shortcut for
`npm install`. [npm is a package manager](https://npmjs.com/) that
downloads packages from the [npm Registry](https://www.npmjs.com/) of open
source packages that can help with many development tasks from compiling your React app so that it downloads faster for users to converting time between timezones or replacing words written in English into Spanish, Swahili, or Mandarin.

You'll need to run `npm` (or `npm install`) often to keep up to date with the npm packages other people may be adding to the project or updating to keep the site secure. You can't run `npm` too many times so don't worry about that; once a day is a good habit, and if the app won't start start for some reason running `npm` to make sure your dependencies are up to date is always the first step in troubleshooting to fix things.

### Next, run the database migrations

Create a .env file and add:

DATABASE_URL="postgres://bajeonmlxpbfdq:bbe0a9d989587bb4c4b66aac1c3e4c0af75f8347c0b6128e1bb7d2a8fbc213d7@ec2-3-214-136-47.compute-1.amazonaws.com:5432/d1p1l0ndqdjtj4"

We use [prisma](https://www.prisma.io/nextjs#nextjs-tabs) as an ORM to postgres to connect directly to the database. See example in index.tsx

Download the [prisma studio](https://github.com/prisma/studio/releases) to connect directly to the heroku database:

For development: we use prisma to connect to a heroku database on staging

npx prisma generate 


### Finally, run the development server

Run `npm run dev`, then open [http://localhost:3000](http://localhost:3000)
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

All of these steps can be run in a single command: `npm run ci-at-home` if you
want to know ahead of time if a pull request will pass the checks.

#### Linting Your Code

We use [Prettier](https://prettier.io/) to keep the code uniform and easy to
read following the [StandardJS Styleguide](https://standardjs.com/) . You can
check if your code will pass [our testing
system's](https://github.com/diffalot/heroku-next-postgres/actions) linting
step by running `npm run lint` (which in turn runs `npx prettier .`). If the
code doesn't pass you can fix many linting errors with `npm run format`
(`npx prettier --write`).

On [the Prettier website](https://prettier.io/) you'll find lots of information
about plugins and extensions you can install for your text editor (we recommend
[Visual Studio Code](https://code.visualstudio.com/)) that will automate
styling your code when you save or as you type, and don't forget about
`npm run format`.

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

Node Resources:

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Learn Node.js](https://nodejs.dev/learn)
- [W3Schools Node.js tutorial](https://www.w3schools.com/nodejs/nodejs_intro.asp)

React Resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [W3Schools React Tutorial](https://www.w3schools.com/react/)

## Styles

- [BootStrapp-Sass](https://getbootstrap.com/docs/5.0/customize/sass/)
-
