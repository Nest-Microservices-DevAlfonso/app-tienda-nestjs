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
        IngredientName: 'tomato',
      },
      update: {
        IngredientName: 'tomato',
        quantity: 5,
      },
      create: {
        IngredientName: 'tomato',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        IngredientName: 'potato',
      },
      update: {
        IngredientName: 'potato',
        quantity: 5,
      },
      create: {
        IngredientName: 'potato',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        IngredientName: 'lemon',
      },
      update: {
        IngredientName: 'lemon',
        quantity: 5,
      },
      create: {
        IngredientName: 'lemon',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        IngredientName: 'rice',
      },
      update: {
        IngredientName: 'rice',
        quantity: 5,
      },
      create: {
        IngredientName: 'rice',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        IngredientName: 'ketchup',
      },
      update: {
        IngredientName: 'ketchup',
        quantity: 5,
      },
      create: {
        IngredientName: 'ketchup',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        IngredientName: 'lettuce',
      },
      update: {
        IngredientName: 'lettuce',
        quantity: 5,
      },
      create: {
        IngredientName: 'lettuce',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        IngredientName: 'onion',
      },
      update: {
        IngredientName: 'onion',
        quantity: 5,
      },
      create: {
        IngredientName: 'onion',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        IngredientName: 'cheese',
      },
      update: {
        IngredientName: 'cheese',
        quantity: 5,
      },
      create: {
        IngredientName: 'cheese',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        IngredientName: 'meat',
      },
      update: {
        IngredientName: 'meat',
        quantity: 5,
      },
      create: {
        IngredientName: 'meat',
        quantity: 5,
      },
    }),
    prisma.warehouse.upsert({
      where: {
        IngredientName: 'chicken',
      },
      update: {
        IngredientName: 'chicken',
        quantity: 5,
      },
      create: {
        IngredientName: 'chicken',
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
