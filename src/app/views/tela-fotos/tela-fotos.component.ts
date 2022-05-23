import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-tela-fotos',
    templateUrl: './tela-fotos.component.html',
    styleUrls: ['./tela-fotos.component.scss']
})
export class TelaFotosComponent implements OnInit  {

    constructor(private route: Router) { }

    ngOnInit(): void {
        console.log("oi")
    }

    entrar(){
        this.route.navigate(['tela-inicial']);
    }
}