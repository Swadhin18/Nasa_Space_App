// import { Controller, Post, Body } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';

// @Controller('users')
// export class UsersController {
//     constructor(private usersService: UsersService) { }

//     @Post('signup')
//     async signup(@Body() dto: CreateUserDto) {
//         const user = await this.usersService.createUser(dto.email, dto.password, dto.role);
//         return { success: true, user };
//     }
// }


import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, Role } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post('signup')
    async signup(@Body() dto: CreateUserDto) {
        // role যদি undefined হয়, তাহলে default 'PUBLIC' set করা হচ্ছে
        const user = await this.usersService.createUser(
            dto.email,
            dto.password,
            dto.role || Role.PUBLIC
        );
        return { success: true, user };
    }
}

