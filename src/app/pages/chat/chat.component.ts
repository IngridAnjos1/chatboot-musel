import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowLeftComponent } from "../../icons/arrow-left/arrow-left.component";
import { MuseumComponent } from "../../icons/museum/museum.component";
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SendComponent } from '../../icons/send/send.component';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from "../../components/chat-dialog/chat-dialog.component";
import { MessageService } from '../../services/message.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    MuseumComponent,
    ArrowLeftComponent,
    SendComponent,
    ChatSuggestionsComponent,
    ChatDialogComponent,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
 
})
export class ChatComponent implements AfterViewInit {
  messages: Message[] = [];
  chatForm!: FormGroup;

  constructor(private service: MessageService){
    this.chatForm = new FormGroup({
      message: new FormControl('', [Validators.required])
    });
  }

  ngAfterViewInit(): void {
    this.messages = JSON.parse(localStorage.getItem("messages") ?? "[]")
  }

  updateLocalStorage(){
    localStorage.setItem("messages", JSON.stringify(this.messages))
  }

  submit(){
    this.sendNewMessage(this.chatForm.value.message);
    this.chatForm.reset();
  }

  sendNewMessage(question: string){
    this.messages.push({
      type: 'request',
      message: question
    })

    this.updateLocalStorage()
    this.sendMessage(question)
  }

  sendMessage(message: string){
    this.service.send(message).subscribe({
      next: (body) => {
        this.messages.push({
          type: "response",
          message: body.response
        })
        this.updateLocalStorage()
      }
    })
  }
}