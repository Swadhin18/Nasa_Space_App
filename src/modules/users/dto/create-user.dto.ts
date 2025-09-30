// import { IsEmail, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

// export enum Role {
//     ADMIN = 'ADMIN',
//     SCIENTIST = 'SCIENTIST',
//     PUBLIC = 'PUBLIC',
// }

// export class CreateUserDto {
//     @IsEmail()
//     email: string | undefined;

//     @IsNotEmpty()
//     password: string | undefined;

//     @IsOptional()
//     @IsEnum(Role)
//     role?: Role;
// }

import { IsEmail, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export enum Role {
    ADMIN = 'ADMIN',
    SCIENTIST = 'SCIENCE',
    PUBLIC = 'PUBLIC',
}

export class CreateUserDto {
    @IsEmail()
    email!: string; // non-null assertion

    @IsNotEmpty()
    password!: string; // non-null assertion

    @IsOptional()
    @IsEnum(Role)
    role?: Role; // optional
}
