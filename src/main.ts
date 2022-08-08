import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('Books and Authors')
      .setDescription('REST API documentation')
      .setVersion('1.0.0')
      .addTag('Books and authors')
      .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)
  await app.listen(PORT);
}
bootstrap();