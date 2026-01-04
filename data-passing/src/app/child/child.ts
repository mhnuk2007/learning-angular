import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() user: string|undefined;
  @Input() selectedUser: string|undefined;

  @Output() select = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();


  onSelect(){
    this.select.emit(this.user);
  }
  onDelete(){
    this.delete.emit(this.user);
  }


}
