import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CaseModule } from './case/case.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CaseModule,
    ConfigModule.forRoot({
      envFilePath:['.env.development'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'back-csaas',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
