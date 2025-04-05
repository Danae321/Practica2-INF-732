import { Test, TestingModule } from '@nestjs/testing';
import { TareaController } from './tarea.controller';

describe('TareaController', () => {
  let controller: TareaController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [TareaController],
    }).compile();

    controller = moduleRef.get<TareaController>(TareaController);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});
