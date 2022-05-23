import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-tela-nova-nota',
    templateUrl: './tela-nova-nota.component.html',
    styleUrls: ['./tela-nova-nota.component.scss']
})
export class TelaNovaNotaComponent implements OnInit  {

    constructor(private route: Router) { }

    ngOnInit(): void {
        console.log("oi")
    }

    entrar(){
        this.route.navigate(['tela-inicial']);
    }
}