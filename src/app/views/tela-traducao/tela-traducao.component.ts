import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-tela-traducao',
    templateUrl: './tela-traducao.component.html',
    styleUrls: ['./tela-traducao.component.scss']
})
export class TelaTraducaoComponent implements OnInit  {

    constructor(private route: Router) { }

    ngOnInit(): void {
        console.log("oi")
    }

    entrar(){
        this.route.navigate(['tela-inicial']);
    }
}