import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsModule } from './maps/maps.module';
import { ConfigModule } from '@nestjs/config';
import { RoutesController } from './routes/routes.controller';
import { RoutesService } from './routes/routes.service';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MapsModule,
    RoutesModule,
  ],
  controllers: [AppController, RoutesController],
  providers: [AppService, RoutesService],
})
export class AppModule {}
