import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule],
    providers: [PrismaService],
    exports: [PrismaService], // important pour l'injection dans d'autre module
})
export class PrismaModule { }
