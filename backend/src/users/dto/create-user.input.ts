import { Field, InputType } from "@nestjs/graphql";
import { Role } from "@prisma/client";



@InputType()
export class CreateUserInput {
    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    name?: string;

    @Field()
    role?: Role; //par defaut role.CUSTOMER dans le service
}