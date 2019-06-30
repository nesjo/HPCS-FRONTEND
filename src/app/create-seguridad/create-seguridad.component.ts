import { seguridadService } from '../seguridad.service';
import { seguridad } from '../seguridad';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-seguridad',
  templateUrl: './create-seguridad.component.html',
  styleUrls: ['./create-seguridad.component.css']
})
export class CreateseguridadComponent implements OnInit {

  seguridad: seguridad = new seguridad();
  submitted = false;

  constructor(private seguridadService: seguridadService,
    private router: Router) { }

  ngOnInit() {
  }

  newseguridad(): void {
    this.submitted = false;
    this.seguridad = new seguridad();
  }

  save() {
    this.seguridadService.createseguridad(this.seguridad)
      .subscribe(data => console.log(data), error => console.log(error));
      this.seguridad = new seguridad();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/seguridad']);
  }
}
