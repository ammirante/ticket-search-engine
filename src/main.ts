import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ResponseContractInterceptor } from './core/interceptors';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    credentials: false,
  });

  app.useGlobalInterceptors(new ResponseContractInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Ticket search engine')
    .setDescription('Search best and chepeast airlines tickets.')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(
    process.env.PORT ?? 3000,
    process.env.ADDRESS ?? 'localhost',
  );
}

bootstrap();
