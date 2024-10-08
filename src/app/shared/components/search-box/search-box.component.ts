import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit , OnDestroy {



  private debouncer : Subject<string> = new Subject<string>();
  private debouncerSubcription? : Subscription;

  @Input ()
  public placeholder: string = '';


  @Output()
  public onValue = new EventEmitter<string>();


  @Output()
  public onDebounce  = new EventEmitter<string>();


  @Input()
  public initialValue: string = '';


  ngOnInit(): void {
    this.debouncerSubcription= this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe (value => {
      this.onDebounce.emit (value);
    })
  }


  ngOnDestroy(): void {
    this.debouncerSubcription?.unsubscribe();
  }

  emitValue (val: string){
    this.onValue.emit(val);
  }


  onKeyPress ( searchTerm: string){
    this.debouncer.next(searchTerm);
  }

}
