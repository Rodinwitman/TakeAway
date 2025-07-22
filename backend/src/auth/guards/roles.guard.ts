import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ForbiddenError } from "apollo-server-express";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { Role } from '@prisma/client';  // Import correct


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        // 1. Récupère les roles requis depuis les decorateur  
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(), // Méthode du resolver (ex: 'users')
            context.getClass(), // Class du resolver (ex: 'userResolver')
        ]);

        // 2. Si pas de restriction, accès autoriser
        if (!requiredRoles) return true

        // 3. Adapté pour GraphQl
        const ctx = GqlExecutionContext.create(context);
        const user = ctx.getContext().req.user;

        // 4. Vérifié si l'utilisateur a au moins un des Roles requis
        const hasRole = requiredRoles.some((role) => user.role === role);

        if(!hasRole) {
            throw new ForbiddenError(`Accès refusé. Roles requis: ${requiredRoles.join(', ')}`,);
            
        }

        return true;
    }
}