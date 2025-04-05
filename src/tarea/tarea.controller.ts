import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
  } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { Tarea } from './tarea.entity';
import { CreateTareaDto } from './dto/create-tarea.dto';

@Controller('tarea')
export class TareaController {
    constructor(private readonly tareaService: TareaService) {}

    @Post()
    async create(@Body() createTareaDto: CreateTareaDto): Promise<Tarea> {
        return this.tareaService.create(createTareaDto);
    }
    
    @Get()
    async findAll(): Promise<Tarea[]> {
        return this.tareaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Tarea> {
        return this.tareaService.findOne(+id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTareaDto: CreateTareaDto): Promise<Tarea> {
        return this.tareaService.update(+id, updateTareaDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.tareaService.remove(+id);
    }
}