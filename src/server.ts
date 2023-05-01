import express, { Application, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const app: Application = express();

const prisma = new PrismaClient();


app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    await prisma.user.create({
        data: {
            name: 'Elias Adjetey',
            email: 'eliasonics@gmail.com',
            password: 'sonic'
        }
    })

    const users = await prisma.user.findMany();
    
    console.table(users);
    res.send(users);
})

app.listen(5000, () => console.log('Server is running'));