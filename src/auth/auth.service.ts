/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService){}

    async validateUser(login: string, senha: string) {
        const user = await this.userService.getUser(login)
        if (user && compare(senha, user.senha)) {
            return user
        }
        return null
    }
}
