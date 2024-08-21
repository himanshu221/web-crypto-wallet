import  { PrismaClient } from '@prisma/client'


declare global {
    var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();


// we are doing this bec nextjs hot reloads in dev will create multiple prisma client
// this way we create a single prisma client and add it to global scope, 
// since global scope is not affected by hot reload
if(process.env.NODE_ENV !== "production") globalThis.prisma = db; 