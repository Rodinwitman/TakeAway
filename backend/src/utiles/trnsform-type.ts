import { User as PrismaUser } from '@prisma/client';
import { User } from '../users/models/user.model';

export function toUser(user: PrismaUser): User {
  return {
    ...user,
    name: user.name ?? undefined // Convertit null en undefined
  };
}