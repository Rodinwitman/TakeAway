import { SetMetadata } from "@nestjs/common";
import { Role } from '@prisma/client';

export const ROLES_KEY = 'roles'; // clé pour les métadonnées
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles)