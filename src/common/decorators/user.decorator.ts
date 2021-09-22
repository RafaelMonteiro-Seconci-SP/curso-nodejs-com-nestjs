/* eslint-disable prettier/prettier */
import { applyDecorators, createParamDecorator, ExecutionContext, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards";


export const User = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user;

        return data ? user && user[data] : user;
    },
)

export function Auth() {
    return applyDecorators(
        UseGuards(JwtAuthGuard),
        ApiBearerAuth()
    )
}