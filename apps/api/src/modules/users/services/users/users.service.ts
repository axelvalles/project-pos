import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { genSalt, hash } from 'bcrypt';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from '../../dtos/user.dto';
import { UserPresenter } from '../../presenters/user.presenter';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  public async findById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async findAll() {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserPresenter(user));
  }

  public async create(data: CreateUserDto) {
    const salt = await genSalt(10);
    const hashPassword: string = await hash(data.password, salt);
    const newUser = await this.prisma.user.create({
      data: {
        ...data,
        password: hashPassword,
      },
    });

    return new UserPresenter(newUser);
  }

  public async update(id: number, data: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  public async delete(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
