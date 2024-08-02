import { Module } from '@nestjs/common';
import { JobsController } from './jobs/jobs.controller';

@Module({
  imports: [],
  controllers: [JobsController],
})
export class AppModule {}
