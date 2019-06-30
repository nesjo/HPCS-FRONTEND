import { seguridadDetailsComponent } from '../seguridad-details/seguridad-details.component';
import { Observable } from "rxjs";
import { seguridadService } from "../seguridad.service";
import { seguridad } from "../seguridad";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-seguridad-list",
  templateUrl: "./seguridad-list.component.html",
  styleUrls: ["./seguridad-list.component.css"]
})
export class seguridadListComponent implements OnInit {
  seguridad: Observable<seguridad[]>;

  constructor(private seguridadService: seguridadService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.seguridad = this.seguridadService.getseguridadList();
  }

  deleteseguridad(codigousuario: number) {
    this.seguridadService.deleteseguridad(codigousuario)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  seguridadDetails(codigousuario: number){
    this.router.navigate(['details', codigousuario]);
  }
}