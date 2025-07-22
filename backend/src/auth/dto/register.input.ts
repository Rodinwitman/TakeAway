import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RegisterInput {
    @Field(() => String)
    email: string;

    @Field(() => String)
    password: string;

    @Field(() => String, { nullable: true })
    name?: string | null;
}