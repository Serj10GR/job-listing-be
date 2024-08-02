import { Controller, Get, Post } from '@nestjs/common';

@Controller('jobs')
export class JobsController {
  @Post()
  create(): string {
    return 'This action adds a new job';
  }

  @Get()
  findAll(): string {
    return 'This actions should return all jobs';
  }
}
