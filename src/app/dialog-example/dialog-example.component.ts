import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from '../edit-course/edit-course.component';

export interface DialogData {
  course: string;
  name: string;
}

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent {

  course: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditCourseComponent, {
      width: '250px',
      data: {name: this.name, course: this.course}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.course = result;
    });
  }
}

