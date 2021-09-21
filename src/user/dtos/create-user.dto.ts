/* eslint-disable prettier/prettier */

import { IsEmail, IsOptional, IsString, MaxLength, MinLength, IsEnum, } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { UserCategory } from "../enums";


export class CreateUserDto {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    nmUsuario: string

    @IsOptional()
    @IsString()
    @MaxLength(255)
    login: string

    @IsEmail()
    email: string

    @IsString()
    @MinLength(6)
    @MaxLength(128)
    senha: string

    @IsEnum(UserCategory, {
        message: `Opção Inválida. As opções Validas São ${EnumToString(UserCategory)}`
    })
    situacao: UserCategory;
}
