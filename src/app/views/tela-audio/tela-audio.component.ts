import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-tela-audio',
    templateUrl: './tela-audio.component.html',
    styleUrls: ['./tela-audio.component.scss']
})
export class TelaAudioComponent implements OnInit  {

    constructor(private route: Router) { }

    ngOnInit(): void {
        console.log("oi")
    }

    entrar(){
        this.route.navigate(['tela-inicial']);
    }
}