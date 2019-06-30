import { seguridad } from '../seguridad';
import { Component, OnInit, Input } from '@angular/core';
import { seguridadService } from '../seguridad.service';
import { seguridadListComponent} from '../seguridad-list/seguridad-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seguridad-details',
  templateUrl: './seguridad-details.component.html',
  styleUrls: ['./seguridad-details.component.css']
})
export class seguridadDetailsComponent implements OnInit {

  id: number;
  seguridad: seguridad;

  constructor(private route: ActivatedRoute,private router: Router,
    private seguridadService: seguridadService) { }

  ngOnInit() {
    this.seguridad = new seguridad();
    this.id = this.route.snapshot.params['id'];
    
    this.seguridadService.getseguridad(this.id)
      .subscribe(data => {
        console.log(data)
        this.seguridad = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['seguridad']);
  }
}