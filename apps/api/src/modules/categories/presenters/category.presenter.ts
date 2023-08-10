import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export class CategoryPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;

  constructor(category: Category) {
    if (category) {
      this.id = category.id;
      this.name = category.name;
    }
  }
}
