import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  title: string = '';
  token: string = '';

  ngOnInit(): void {
    const eventSource = new EventSource(
      'http://localhost:3000/notification/listener'
    );
    eventSource.addEventListener('message', (event: MessageEvent) => {
      this.title = JSON.parse(event.data);
    });
  }
}
