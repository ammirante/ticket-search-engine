import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AirlinesModule } from './airlines';

/**
 * App module.
 */
@Module({
  imports: [
    ConfigModule.forRoot(),
    AirlinesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
