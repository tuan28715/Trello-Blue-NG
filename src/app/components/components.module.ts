import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../modules/ui/ui.module';
import {DashBoxItemComponent} from './dash-box-item/dash-box-item.component';
import {DashBoxComponent} from './dash-box/dash-box.component';
import { FormsModule } from '@angular/forms';
import { DashPageComponent } from './dash-page/dash-page.component';

@NgModule({
  declarations: [
    DashBoxComponent,
    DashBoxItemComponent,
    DashPageComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    FormsModule    
  ],
  exports:[
    DashBoxComponent,
    DashBoxItemComponent,
    DashPageComponent
  ]
})
export class ComponentsModule { }
