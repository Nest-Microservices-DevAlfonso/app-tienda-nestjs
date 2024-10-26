import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function Seeder() {
  const logger = new Logger('Bogeda-ms | Ingredients Seeder');

  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // }

  const promisesArray = [];

  promisesArray.push([
    prisma.ingredient.upsert({
      where: {
        name: 'tomato',
      },
      update: {
        name: 'tomato',
        quantity: 5,
      },
      create: {
        name: 'tomato',
        quantity: 5,
      },
    }),
    prisma.ingredient.upsert({
      where: {
        name: 'potato',
      },
      update: {
        name: 'potato',
        quantity: 5,
      },
      create: {
        name: 'potato',
        quantity: 5,
      },
    }),
    prisma.ingredient.upsert({
      where: {
        name: 'lemon',
      },
      update: {
        name: 'lemon',
        quantity: 5,
      },
      create: {
        name: 'lemon',
        quantity: 5,
      },
    }),
    prisma.ingredient.upsert({
      where: {
        name: 'rice',
      },
      update: {
        name: 'rice',
        quantity: 5,
      },
      create: {
        name: 'rice',
        quantity: 5,
      },
    }),
    prisma.ingredient.upsert({
      where: {
        name: 'ketchup',
      },
      update: {
        name: 'ketchup',
        quantity: 5,
      },
      create: {
        name: 'ketchup',
        quantity: 5,
      },
    }),
    prisma.ingredient.upsert({
      where: {
        name: 'lettuce',
      },
      update: {
        name: 'lettuce',
        quantity: 5,
      },
      create: {
        name: 'lettuce',
        quantity: 5,
      },
    }),
    prisma.ingredient.upsert({
      where: {
        name: 'onion',
      },
      update: {
        name: 'onion',
        quantity: 5,
      },
      create: {
        name: 'onion',
        quantity: 5,
      },
    }),
    prisma.ingredient.upsert({
      where: {
        name: 'cheese',
      },
      update: {
        name: 'cheese',
        quantity: 5,
      },
      create: {
        name: 'cheese',
        quantity: 5,
      },
    }),
    prisma.ingredient.upsert({
      where: {
        name: 'meat',
      },
      update: {
        name: 'meat',
        quantity: 5,
      },
      create: {
        name: 'meat',
        quantity: 5,
      },
    }),
    prisma.ingredient.upsert({
      where: {
        name: 'chicken',
      },
      update: {
        name: 'chicken',
        quantity: 5,
      },
      create: {
        name: 'chicken',
        quantity: 5,
      },
    }),

  ])

  const result = await Promise.all(promisesArray[0])
  console.log(result);
  logger.log("seed se completo correctamente!")
}
Seeder()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
