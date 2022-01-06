import { Test, TestingModule } from '@nestjs/testing';
import { RegraFaturamentoController } from './regra-faturamento.controller';

describe('RegraFaturamentoController', () => {
  let controller: RegraFaturamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegraFaturamentoController],
    }).compile();

    controller = module.get<RegraFaturamentoController>(RegraFaturamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
