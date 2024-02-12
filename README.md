# A shopping store demo application using Next.js 14 (WIP)

This is a simple shopping store demo application using Next.js 14. It is a simple application that allows users to view products, add products to the cart, and process payments. Design and assets based on the official Tesla store website, this application is a simple demonstration of how to use Next.js 14 to build a shopping store application.  

This is part of the series of projects I am building as part of my final internship. I built this by following the Next.js course on [Udemy](<https://www.udemy.com/course/nextjs-fh/>) by Fernando Herrera. I decided to add my own twist by using a different name and a slightly different design but I used the same assets as the course project.

## How to run the application

1. Clone the repository
2. Set up the [environment variables](#setting-up-the-environment-variables)
3. Set up the [database](#setting-up-the-database)
4. Run `pnpm install` to install the dependencies
5. Run `pnpm dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser

## Setting up the environment variables

Create a copy of the `.env.example` file and rename it to `.env`. Then replace the values with your own values.

## Setting up the database

This application uses a PostgreSQL database. You can set up a PostgreSQL database using the docker-compose file included in the repository. To set up the database, run the following command:

```bash
docker-compose up -d
```

Run prisma migrate to create the database schema:

```bash
pnpm prisma migrate dev
```

## Demo

You can view the live demo of the application [here](https://clothes-syntax.vercel.app/)

## TODO

- [ ] Add a backend database to store products
- [ ] Add server-side pagination
- [ ] Finish pages functionality
- [ ] Add authentication
- [ ] Add a backend to handle payments
