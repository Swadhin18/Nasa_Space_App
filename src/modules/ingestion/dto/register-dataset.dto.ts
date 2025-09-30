import { IsEnum, IsString, IsUrl } from 'class-validator';

export class RegisterDatasetDto {
    @IsEnum(['PACE', 'MODIS', 'SWOT'])
    source: 'PACE' | 'MODIS' | 'SWOT';

    @IsString()
    type: string;

    @IsUrl()
    fileUrl: string;
}
