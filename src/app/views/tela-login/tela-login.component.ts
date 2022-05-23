import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-tela-login',
    templateUrl: './tela-login.component.html',
    styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit  {

    constructor(
        private route: Router,
    ) { }

    ngOnInit(): void {
        console.log("oi")
    }

    entrar(){
        this.route.navigate(['tela-inicial']);
    }
}