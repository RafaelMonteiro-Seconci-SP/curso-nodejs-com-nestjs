/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/components/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}

    async validateUser(login: string, senha: string) {
        const user = await this.userService.getUser(login)
        if (user && compare(senha, user.senha)) {
            const { senha, ...rest } = user
            return rest
        }
        return null
    }

    async login(user) {
        const {id, ...rest } = user;
        const payload = { sub: id };
        return {
            user,
            accessToken: this.jwtService.sign(payload)
        }
    }
}
