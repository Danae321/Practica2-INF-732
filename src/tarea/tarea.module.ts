import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaController } from './tarea.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tarea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarea])],
  providers: [TareaService],
  controllers: [TareaController]
})
export class TareaModule {}