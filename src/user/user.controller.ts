import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UserService} from "./user.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.entity";
import {JwtAuthGuard} from "../auth/jwt_auth.guard";
import {ValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Users')
@Controller('api')
export class UserController {

    constructor(private userService: UserService) {}

    @ApiOperation({summary: 'Users creation'})
    @ApiResponse({status: 201, type: User})
    @UsePipes(ValidationPipe)
    @Post('/users')
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: User})
    @UseGuards(JwtAuthGuard)
    @Get('/users')
    getAll() {
        return this.userService.getAllUsers();
    }


}
