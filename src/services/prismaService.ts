import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
process.on('exit', prismaClient.$disconnect);

export default prismaClient;
