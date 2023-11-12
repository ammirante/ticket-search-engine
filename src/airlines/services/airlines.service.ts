import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PaginatedResponseDto } from 'src/core';
import { airlinesConfig } from '../config';
import { AirlineType } from '../enums';

/**
 * Airlines service.
 */
@Injectable()
export class AirlinesService {
    /**
     * Airlines constructor.
     * 
     * @param {ConfigType<typeof airlinesConfig>} config Airlines configuration.
     */
    constructor(
        @Inject(airlinesConfig.KEY)
        private readonly config: ConfigType<typeof airlinesConfig>,
    ) { }

    /**
     * List of airlines.
     * 
     * @returns {PaginatedResponseDto<AirlineType[]>} paginated list of airlines.
     */
    public listAirlines(): PaginatedResponseDto<AirlineType[]> {
        const rows = Object.values(AirlineType).sort();

        return { rows } as PaginatedResponseDto<AirlineType[]>;
    }
}
