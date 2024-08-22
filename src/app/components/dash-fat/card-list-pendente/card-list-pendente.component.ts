import { Component, OnInit } from '@angular/core';
import { dashFatService } from '../../../services/dash-fat/dashfat.service';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../../services/config.service';
import { CommonModule } from '@angular/common';
import { globalCoresNome } from '../../../global/global-cores';

@Component({
  selector: 'app-card-list-pendente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list-pendente.component.html',
  styleUrl: './card-list-pendente.component.scss'
})
export class CardListPendenteComponent implements OnInit {
  color = globalCoresNome;
  _list : any[]=[];
  constructor(private dashFat : dashFatService,
              private route: ActivatedRoute,
              private configService: ConfigService
          ){}
  ngOnInit(): void {
    this.configService.getConfig().subscribe(config=>{
      this.getFatListPendente(config.data_corte)
    },error=>{
      console.error('Erro ao carregar configuração',error)
    })
  }

  async getFatListPendente(data_corte : any){
    (await this.dashFat.getFatListPendente(data_corte)).subscribe(dados=>{
      this._list = this._list.concat(dados.body);
    })
  }



}
