/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'login',
            passwordField: 'senha'
        })
    }

    async validate(login: string, senha: string) {
        const user: any = await this.authService.validateUser(login, senha);
        if (!user) { throw new UnauthorizedException('Login user or password does not match.') }
        return user;
    }
}