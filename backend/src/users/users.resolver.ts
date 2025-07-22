import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UsersService } from './users.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Resolver(() => User)
@UseGuards(GqlAuthGuard, RolesGuard) // protection globale
export class UsersResolver {
    userServices: any;
    constructor(private readonly usersService: UsersService){}

    // seul l'ADMIN peut lister les utilisateur
    @Query(() => [User])
    @Roles(Role.ADMIN)
    async users() {
        return this.usersService.findAllUsers();
    }

    // Tout utilisateur connecté peut voir son profil
    @Query(() => User)
    async me(@CurrentUser() user: User) {
        return user
    }
    
    // Creation d'utilisateur (public)
    @Mutation(() => User)
    async createUser(@Args('input') input: CreateUserInput) {
        return this.usersService.createUser(input)
    }

    // Seul l'ADMIN peut Modifier/suprimer un autre utilisateur
    @Mutation(() => User)
    @Roles(Role.ADMIN)
    async updateUser(
        @Args('id', { type: () => ID }) id:string,
        @Args('input') input: UpdateUserInput,
    ){
        return this.usersService.updateUser(id, input);
    }
}
