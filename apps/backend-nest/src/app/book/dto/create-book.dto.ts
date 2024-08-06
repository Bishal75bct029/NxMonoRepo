import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  author: string;

  @IsString()
  genre: string;

  @IsInt()
  availableQuantity: number;
}

export class UpdateBookDto extends CreateBookDto {
  @IsString()
  @IsOptional()
  id: string;
}
