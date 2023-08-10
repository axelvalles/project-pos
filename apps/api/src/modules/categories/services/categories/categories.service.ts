import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../../dtos/category.dto';
import { CategoryPresenter } from '../../presenters/category.presenter';
import { ExceptionsService } from 'src/modules/common/services/exceptions/exceptions.service';

@Injectable()
export class CategoriesService {
  constructor(
    private prisma: PrismaService,
    private exceptionsService: ExceptionsService,
  ) {}

  public async findById(id: number) {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      throw this.exceptionsService.notFoundException();
    }

    return new CategoryPresenter(category);
  }

  public async findAll() {
    const categories = await this.prisma.category.findMany();
    return categories.map((category) => new CategoryPresenter(category));
  }

  public async create(data: CreateCategoryDto) {
    const category = await this.prisma.category.create({
      data,
    });
    return new CategoryPresenter(category);
  }

  public async update(id: number, data: UpdateCategoryDto) {
    await this.findById(id);

    const category = await this.prisma.category.update({
      data,
      where: {
        id,
      },
    });

    return new CategoryPresenter(category);
  }

  public async delete(id: number) {
    await this.findById(id);

    const category = await this.prisma.category.delete({
      where: {
        id,
      },
    });

    return new CategoryPresenter(category);
  }
}
