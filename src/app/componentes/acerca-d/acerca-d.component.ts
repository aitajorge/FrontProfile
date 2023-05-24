import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-d',
  templateUrl: './acerca-d.component.html',
  styleUrls: ['./acerca-d.component.css']
})
export class AcercaDComponent {
  miPorfolio: any;
 
  
  constructor(private datosPortfolio: PortfolioService){}
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio = data;
    });
  }
}
