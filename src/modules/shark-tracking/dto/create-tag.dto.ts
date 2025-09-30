import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateTagDto {
    @IsString()
    tagId: string | undefined;

    @IsOptional()
    @IsString()
    species?: string;

    @IsOptional()
    @IsString()
    sex?: string;

    @IsOptional()
    @IsNumber()
    lengthCm?: number;

    @IsOptional()
    @IsNumber()
    weightKg?: number;

    @IsOptional()
    @IsDateString()
    releaseDate?: string;
}
