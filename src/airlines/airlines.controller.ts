import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaginatedResponseDto } from 'src/core';
import { AirlineType } from './enums';
import { AirlinesService } from './services';

@ApiTags('Airlines')
@Controller('airlines')
export class AirlinesController {
    /**
     * Airlines constructor.
     * 
     * @param {AirlinesService} airlinesService Airlines service.
     */
    constructor(
        private readonly airlinesService: AirlinesService,
    ) { }

    /**
     * List of airlines.
     * 
     * @returns {Promise<PaginatedResponseDto<AirlineType[]>>} paginated list of managers.
     */
    @Get()
    async listAirlines(): Promise<PaginatedResponseDto<AirlineType[]>> {
        return this.airlinesService.listAirlines();
    }
}
