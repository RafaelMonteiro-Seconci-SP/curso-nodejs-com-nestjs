import { Module } from '@nestjs/common';
import { RegraFaturamentoService } from './regra-faturamento.service';
import { RegraFaturamentoController } from './regra-faturamento.controller';

@Module({
  providers: [RegraFaturamentoService],
  controllers: [RegraFaturamentoController]
})
export class RegraFaturamentoModule {}
