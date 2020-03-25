import { Component, OnInit } from '@angular/core';
import { TelaClass } from 'src/app/model/tela/TelaClass';
import { TelaService } from 'src/app/services/tela/tela.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-telas',
  templateUrl: './listar-telas.component.html',
  styleUrls: ['./listar-telas.component.css']
})
export class ListarTelasComponent implements OnInit {

  telas:TelaClass[];

  constructor(
    private service:TelaService
    ) { }

  ngOnInit(): void {
    this.getTelas();
  }

  getTelas(){
    this.service.getTelas().subscribe(
      (data:TelaClass[]) => this.telas = data
    );
  }

  getTelasByQuery(query:String){
    this.service.getTelasByWord(query).subscribe(
      (data:TelaClass[]) => this.telas = data
    );
  }

}
