import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltrodataService } from '../filtrodata/filtrodata.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CardLeitosComponent } from './card-leitos/card-leitos.component';
import { CardFaturamentoComponent } from './card-faturamento/card-faturamento.component';
import { CardAtendimentosComponent } from './card-atendimentos/card-atendimentos.component';
import { CardReceitaNaturezaComponent } from './card-receita-natureza/card-receita-natureza.component';
import { CardCompDespesasComponent } from './card-comp-despesas/card-comp-despesas.component';
import { CardPrazoMedRecebMesComponent } from './card-prazo-med-receb-mes/card-prazo-med-receb-mes.component';
import { CardPrazoMedRecebAnoComponent } from './card-prazo-med-receb-ano/card-prazo-med-receb-ano.component';
import { FiltrodataComponent } from '../filtrodata/filtrodata.component';
import { CardLeitosDetalhadoComponent } from "./card-leitos-detalhado/card-leitos-detalhado.component";
import { ConfigService } from '../../services/config.service';
import { globalVars } from '../../global/globals';


@Component({
  selector: 'app-dash',
  standalone: true,
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
  providers: [provideNativeDateAdapter()],
  imports: [
    CardLeitosComponent,
    CardFaturamentoComponent,
    CardAtendimentosComponent,
    CardReceitaNaturezaComponent,
    CardCompDespesasComponent,
    CardPrazoMedRecebMesComponent,
    CardPrazoMedRecebAnoComponent,
    FiltrodataComponent,
    CardLeitosDetalhadoComponent
]
})
export class DashComponent implements OnInit {
  constructor(private rota: Router,
              public filtrodataService: FiltrodataService,
              private route: ActivatedRoute,
              ) {

    filtrodataService.data_de = "";
    filtrodataService.data_ate = "";
   }
  ngOnInit(): void {


  }


}
