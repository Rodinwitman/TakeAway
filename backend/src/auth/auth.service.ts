import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/models/user.model';
import { UsersService } from 'src/users/users.service';
import { RegisterInput } from './dto/register.input';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    validateUserById(sub: any) {
        throw new Error("Method not implemented.");
    }
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<User | null> {
        // 1. Trouver l'utilisateur
        const user = await this.usersService.findUserByEmail(email);
        if (!user) return null; // Garde-fou explicite
    
        // 2. Vérifier le mot de passe
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;
    
        // 3. Retourner l'utilisateur avec conversion des types
        return {
            id: user.id,
            email: user.email,
            name: user.name ?? undefined, // Conversion null → undefined
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
    }

    async login(user: User) {
        const payload = {email: user.email, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

    async register(input: RegisterInput) {
        const existingUser = await this.usersService.findUserByEmail(input.email);
        if (existingUser) {
          throw new UnauthorizedException("Email already used");
        }
      
        const hashedPassword = await bcrypt.hash(input.password, 10);
      
        const user = await this.usersService.createUser({
          email: input.email,
          password: hashedPassword,
          name: input.name ?? undefined, // ici, safe
         
        });
      
        return this.login(user);
      }
      
      

    async validatorUserById(userId: string): Promise<User | null> {
        return this.usersService.findUserById(userId)
    }

}
