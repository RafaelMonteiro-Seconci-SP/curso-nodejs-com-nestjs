/* eslint-disable prettier/prettier */
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@User() user,) {
        return user;
    }

    @Get('profile')
    profile(){
        return 'Esses são seus dados';
    }
}
