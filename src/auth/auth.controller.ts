/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User, Auth } from 'src/common/decorators';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { LocalAuthGuard } from './guards';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() loginDto: LoginDto,@User() user,) {
        const data = await this.authService.login(user)
        return {
            message: 'Logado com sucesso',
            data
        };
    }
    @Auth()
    @Get('profile')
    profile(@User() user) {
        return {
            mesagem: 'Esses são seus dados',
            user
        };
    }
    @Auth()
    @Get('refresh')
    refreskToken(@User() user,) {
        const data = this.authService.login(user)
        return {
            message: 'Token renovado com sucesso',
            data
        };
    }
}
