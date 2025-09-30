import { IsString, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class ObservationDto {
    @IsNumber()
    lat: number;

    @IsNumber()
    lon: number;

    @IsNumber()
    chlorophyll?: number;

    @IsNumber()
    sst?: number;

    @IsNumber()
    eddyStrength?: number;

    @IsString()
    timestamp: string;
}

export class ProcessResultDto {
    @IsString()
    datasetId: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ObservationDto)
    observations: ObservationDto[];
}
