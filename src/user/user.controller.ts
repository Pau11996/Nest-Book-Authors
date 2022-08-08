import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UserService} from "./user.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.entity";

@ApiTags('Users')
@Controller('api')
export class UserController {

    constructor(private userService: UserService) {}

    @ApiOperation({summary: 'Users creation'})
    @ApiResponse({status: 201, type: User})
    @Post('/users')
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: User})
    @Get('/users')
    getAll() {
        return this.userService.getAllUsers();
    }


}
