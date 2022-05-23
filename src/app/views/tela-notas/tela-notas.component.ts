import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-tela-notas',
    templateUrl: './tela-notas.component.html',
    styleUrls: ['./tela-notas.component.scss']
})
export class TelaNotasComponent implements OnInit  {

    constructor(private route: Router) { }

    ngOnInit(): void {
        console.log("oi")
    }

    entrar(){
        this.route.navigate(['tela-inicial']);
    }

    audio(){
        this.route.navigate(['tela-audio']);
    }

    traducao(){
        this.route.navigate(['tela-traducao']);
    }

    galeria(){
        this.route.navigate(['tela-fotos']);
    }
}