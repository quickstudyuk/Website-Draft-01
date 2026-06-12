import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import path from 'path';

// ensure the path to dev.db is absolute so it works from anywhere
const dbPath = path.join(process.cwd(), 'dev.db');

const adapter = new PrismaLibSql({
  url: `file:${dbPath}`,
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
