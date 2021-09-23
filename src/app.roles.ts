/* eslint-disable prettier/prettier */
import { RolesBuilder } from "nest-access-control";

export enum AppRoles {
    AUTHOR = 'AUTHOR',
    ADMIN = 'ADIMIN'
}

export enum AppResouces {
    USER = 'USER',
    POST = 'POST'
}

export const roles: RolesBuilder = new RolesBuilder();

roles
    .grant(AppRoles.AUTHOR)
    .updateOwn([AppResouces.USER])
    .deleteOwn([AppResouces.USER])
    .createOwn([AppResouces.POST])
    .updateOwn([AppResouces.POST])
    .deleteOwn([AppResouces.POST])
    .grant(AppRoles.ADMIN)
    .extend(AppRoles.ADMIN)
    .createAny([AppResouces.USER])
    .updateAny([AppResouces.POST, AppResouces.USER])
    .deleteAny([AppResouces.POST, AppResouces.USER])