import { IsOptional, IsString, IsDateString } from 'class-validator';

export class QuerySharksDto {
    @IsOptional()
    @IsString()
    species?: string;

    @IsOptional()
    @IsDateString()
    from?: string;

    @IsOptional()
    @IsDateString()
    to?: string;
}
