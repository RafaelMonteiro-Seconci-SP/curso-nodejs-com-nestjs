import { Test, TestingModule } from '@nestjs/testing';
import { RegraFaturamentoService } from './regra-faturamento.service';

describe('RegraFaturamentoService', () => {
  let service: RegraFaturamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegraFaturamentoService],
    }).compile();

    service = module.get<RegraFaturamentoService>(RegraFaturamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
