import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from '../../dtos/user.dto';
import { UserPresenter } from '../../presenters/user.presenter';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findByEmail(email: string): Promise<{
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
    findAll(): Promise<UserPresenter[]>;
    create(data: CreateUserDto): Promise<UserPresenter>;
    update(id: number, data: UpdateUserDto): Promise<User>;
    delete(id: number): Promise<User>;
}
