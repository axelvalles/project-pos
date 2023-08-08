import { UsersService } from '../../services/users/users.service';
import { CreateUserDto, UpdateUserDto } from '../../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../../presenters/user.presenter").UserPresenter[]>;
    findById(id: number): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(payload: CreateUserDto): Promise<import("../../presenters/user.presenter").UserPresenter>;
    update(id: number, payload: UpdateUserDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
