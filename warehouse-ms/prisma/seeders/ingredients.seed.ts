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
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'tomato',
      },
      update: {
        ingredientName: 'tomato',
        quantity: 5,
      },
      create: {
        ingredientName: 'tomato',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'potato',
      },
      update: {
        ingredientName: 'potato',
        quantity: 5,
      },
      create: {
        ingredientName: 'potato',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'lemon',
      },
      update: {
        ingredientName: 'lemon',
        quantity: 5,
      },
      create: {
        ingredientName: 'lemon',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'rice',
      },
      update: {
        ingredientName: 'rice',
        quantity: 5,
      },
      create: {
        ingredientName: 'rice',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'ketchup',
      },
      update: {
        ingredientName: 'ketchup',
        quantity: 5,
      },
      create: {
        ingredientName: 'ketchup',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'lettuce',
      },
      update: {
        ingredientName: 'lettuce',
        quantity: 5,
      },
      create: {
        ingredientName: 'lettuce',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'onion',
      },
      update: {
        ingredientName: 'onion',
        quantity: 5,
      },
      create: {
        ingredientName: 'onion',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'cheese',
      },
      update: {
        ingredientName: 'cheese',
        quantity: 5,
      },
      create: {
        ingredientName: 'cheese',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'meat',
      },
      update: {
        ingredientName: 'meat',
        quantity: 5,
      },
      create: {
        ingredientName: 'meat',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        ingredientName: 'chicken',
      },
      update: {
        ingredientName: 'chicken',
        quantity: 5,
      },
      create: {
        ingredientName: 'chicken',
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
