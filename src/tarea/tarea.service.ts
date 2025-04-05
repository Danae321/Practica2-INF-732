import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from './tarea.entity';
import { CreateTareaDto } from './dto/create-tarea.dto';

@Injectable()
export class TareaService {
  constructor(
    @InjectRepository(Tarea)
    private readonly tareaRepository: Repository<Tarea>,
  ) {}

  async create(createTareaDto: CreateTareaDto): Promise<Tarea> {
    const tarea = this.tareaRepository.create(createTareaDto);
    return await this.tareaRepository.save(tarea);
  }

  async findAll(): Promise<Tarea[]> {
    return await this.tareaRepository.find();
  }

  async findOne(id: number): Promise<Tarea> {
    const tarea = await this.tareaRepository.findOneBy({ id });

    if (!tarea) {
      throw new Error(`Tarea con ID ${id} no encontrada`);
    }

    return tarea;
  }

  async update(id: number, updateTareaDto: Partial<Tarea>): Promise<Tarea> {
    await this.tareaRepository.update(id, updateTareaDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const { affected } = await this.tareaRepository.delete(id);

    if (affected === 0) {
      throw new Error(`Tarea con ID ${id} no encontrada`);
    }
  }
}
