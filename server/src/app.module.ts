import { Module } from '@nestjs/common';
import { AuthModule } from './modules/authModule/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DbModule } from './dbGateway/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'local'}`,
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_BASE_URL'),
        useNewUrlParser: true,
        retryAttempts: 3,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    DbModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
