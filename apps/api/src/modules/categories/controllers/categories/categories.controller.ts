import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CategoriesService } from '../../services/categories/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../../dtos/category.dto';

@Controller('categories')
@ApiTags('Categories')
@UseGuards(JwtAuthGuard)
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Find category by id' })
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findById(id);
  }

  @Get()
  @ApiOperation({ summary: 'List of categories' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create category' })
  create(@Body() payload: CreateCategoryDto) {
    return this.categoryService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update category info' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete category' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.delete(id);
  }
}
