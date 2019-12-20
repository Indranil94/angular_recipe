import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent {

    // @Output() choosePage = new EventEmitter<{choice: boolean}>()

    collapsed: boolean = true;

    // onChoosePage(choice: boolean){
    //     this.choosePage.emit({
    //         choice: choice
    //     })
    // }
}