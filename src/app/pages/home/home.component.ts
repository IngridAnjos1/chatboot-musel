import { Component } from '@angular/core';
import { ArrowRigthComponent } from '../../icons/arrow-rigth/arrow-rigth.component';
import { SparkleComponent } from '../../icons/sparkle/sparkle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArrowRigthComponent,
    SparkleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
