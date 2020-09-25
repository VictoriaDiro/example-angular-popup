import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-angular-popup';

  myModal = false;

  mostrarModal() {
    this.myModal = true;
  }

  cerrarModal(event) {
    this.myModal = event;
  }

}
