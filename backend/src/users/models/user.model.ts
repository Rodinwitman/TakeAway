import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true }) // Doit correspondre au schéma Prisma
  name?: string | null; // Utilisez ? pour indiquer que c'est optionnel

  @Field(() => Role)
  role: Role;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;
}