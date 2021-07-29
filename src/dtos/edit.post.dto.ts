/* eslint-disable prettier/prettier */
import { CreatePostDto } from "./crate.post.dto";
import { PartialType, OmitType } from "@nestjs/mapped-types";

// Não permite a edição do campo que foi especificado
export class EditPostDto extends PartialType(OmitType(CreatePostDto, ['slug'] as const)) {

}
// calsse sem bloquieo de edição
// export class EditPostDto extends PartialType(CreatePostDto) {}