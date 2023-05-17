import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {
    console.log('constructor Triggered');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy Triggered');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges Triggered');
  }
  ngOnInit(): void {
    console.log('OnInit triggered');
  }
  @Input()
  postImg = '';
  @Output()
  imgSelected = new EventEmitter<string>();
}
