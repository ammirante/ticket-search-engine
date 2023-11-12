import { ApiProperty } from "@nestjs/swagger";

/**
 * Paginated response DTO.
 */
export class PaginatedResponseDto<T> {
    @ApiProperty({ description: 'Next page' })
    nextPage?: string;

    @ApiProperty({ description: 'Number of rows per page' })
    limit?: number;

    @ApiProperty({ description: 'List of rows' })
    rows: T;
}