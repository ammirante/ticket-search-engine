import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AirlinesController } from './airlines.controller';
import { airlinesConfig } from './config';
import { AirlinesService } from './services';

@Module({
    imports: [
        ConfigModule.forFeature(airlinesConfig),
    ],
    providers: [
        AirlinesService,
    ],
    controllers: [
        AirlinesController,
    ]
})
export class AirlinesModule { }