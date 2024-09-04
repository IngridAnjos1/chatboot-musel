import { Component } from '@angular/core';
import { ArrowLeftComponent } from "../../icons/arrow-left/arrow-left.component";
import { MuseumComponent } from "../../icons/museum/museum.component";
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ArrowLeftComponent, 
    MuseumComponent,
    ChatSuggestionsComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
 
}
