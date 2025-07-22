import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import * as bcrypt from 'bcrypt';
import { toUser } from 'src/utiles/trnsform-type';
import { UpdateUserInput } from './dto/update-user.input';
import { Prisma, User } from '@prisma/client';



@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: CreateUserInput) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.user.create({
            data: {
                ...data,
                password: hashedPassword,  //stockage securisé
            },
        });
    }

    async findUserById(id: string) {
        const user = await this.prisma.user.findUnique({ where: {id} });
        if (!user) throw new NotFoundException('User not Found');
        return user ? toUser(user): null;
    }

    async findUserByEmail(email: string) {
        return this.prisma.user.findUnique({ where: {email} })
    }

    async updateUser(
        id: string,
        input: UpdateUserInput
      ): Promise<User> {
        // 1. Préparation des données de mise à jour
        const updateData: Partial<Prisma.UserUpdateInput> = {};
        
        // 2. Hachage du mot de passe si fourni
        if (input.password) {
          updateData.password = await bcrypt.hash(input.password, 10);
        }
      
        // 3. Copie des autres champs
        if (input.name !== undefined) {
          updateData.name = input.name;
        }
      
        // 4. Mise à jour dans la base de données
        return this.prisma.user.update({
          where: { id },
          data: updateData,
          include: {
            // Inclure les relations si nécessaire
          }
        });
      }

    async deleteUser(id: string){
        return this.prisma.user.delete({ where: {id} })
    }

    async findAllUsers() {
        return this.prisma.user.findMany();
    }
}
