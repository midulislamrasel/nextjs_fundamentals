## How to set up a Next.js project
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Automatic installation
We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:
```angular2html
npx create-next-app@latest
```
### Manual installation
To manually create a new Next.js app, install the required packages:

```angular2html
npm install next@latest react@latest react-dom@latest
```
### Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## Prisma Setup
### Install Prisma and Set Up the Database
```angular2html
npm install prisma --save-dev
npm install @prisma/client
```
### Initialize Prisma
Run the following command to initialize Prisma in your project. This will create a prisma directory with a schema.prisma file.

```angular2html
npx prisma init
```
### Configure the Database in .env
In the .env file, configure your database connection URL. Replace DATABASE_URL with the URL of your database:
```angular2html
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
```
You can use other databases like MySQL, SQLite, or MongoDB with their respective URLs.

### Define Your Data Model in schema.prisma
Open prisma/schema.prisma and define your data models. For example:
```object
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
}
```
###  Migrate the Database
Run the following commands to create the database tables based on your Prisma schema:
```angular2html
npx prisma migrate dev --name init
```
### Generate the Prisma Client
Prisma Client is a type-safe database client that you’ll use in your Next.js app. Run:
```angular2html
npx prisma generate
```

###  Use Prisma in Your Next.js Application
Create a prisma directory in your Next.js project (if not already created) and add a client.js file for connecting to Prisma:

### Clean Up Prisma Instances in Development
root fille ser/
In development, Next.js may create multiple instances of the Prisma Client. To prevent this, add the following code in your prisma/client.js:


```object
// root fille ser/prisma/client.js
import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
```
## Supabase Database 
    0. - New Project Create
    1. - connect
    2. - selate ORMs

Copy url and pas .env
```angular2html
DATABASE_URL="postgresql://postgres.rsilipoeaohqbiutpqwm:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres"
```



### Zod install 
Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object.

Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.
```object
npm install zod       # npm
yarn add zod          # yarn
bun add zod           # bun
pnpm add zod          # pnpm
```






