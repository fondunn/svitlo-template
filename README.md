## Getting Started

### Setting up the .env file

Create a `.env` file in the root directory of the project with the following content:

```
# PostgreSQL
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=myapp

# Prisma
DATABASE_URL=postgresql://user:password@localhost:5432/myapp

# For Docker
DOCKER_DATABASE_URL=postgresql://user:password@db:5432/myapp
```

### Using Docker (Recommended)

1. Make sure you have Docker and Docker Compose installed on your system.
2. Run the following command to start the application and PostgreSQL database:

```bash
docker-compose up
```

3. The application will be available at http://localhost:3000

### Without Docker

1. Make sure you have PostgreSQL installed and running on your system.
2. Update the `DATABASE_URL` in the `.env` file to match your local PostgreSQL configuration.
3. Install dependencies:

```bash
pnpm install
```

4. Run the development server:

```bash
pnpm run dev
```

5. The application will be available at http://localhost:3000

### Setting up Prisma with PostgreSQL

1. Install Prisma CLI as a development dependency:

```bash
pnpm add -D prisma
```

2. Initialize Prisma in your project:

```bash
npx prisma init
```

3. The `schema.prisma` file will be created in the `prisma` directory. Update it to use PostgreSQL:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Define your models here
```

4. Generate Prisma client:

```bash
npx prisma generate
```

5. Use Prisma in your application:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Use prisma in your application logic
```

Remember to run migrations when you make changes to your schema:

```bash
npx prisma migrate dev
```
