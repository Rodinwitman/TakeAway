import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/users/models/user.model";

@ObjectType()
export class AuthPayload {
    @Field()
    access_token: string;

    @Field()
    user: User;
}