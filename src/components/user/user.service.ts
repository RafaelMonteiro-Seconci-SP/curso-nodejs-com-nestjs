/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async getMany() {
       return await this.userRepository.find()
    }
    
    async getOne(id) {
        const user =  await this.userRepository.findOne(id)
        if (!user) {
            throw new NotFoundException('User does not exists')
        }
        return user
    }
    
    async createOne(dto) {
        const userExist = await this.userRepository.findOne({login: dto.login})
        if (userExist) { throw new BadRequestException('User already registered with login') }
        const newUser = this.userRepository.create(dto)
        const user: any = await this.userRepository.save(newUser)
        delete user.senha;
        return user
    }
    
    async editOne(id, dto) {
        const user = await this.userRepository.findOne(id)
        if (!user) { throw new NotFoundException('User does not exist!'); }

        const editedUser = Object.assign(user, dto);
        return await this.userRepository.save(editedUser);
    }
    
    async delitetOne(id) {
        const user = await this.getOne(id)
        return await this.userRepository.remove(user)
    }

    async getUser(login) {
        return await this.userRepository.createQueryBuilder('user').where({login}).addSelect('user.senha').getOne()
    }
}
