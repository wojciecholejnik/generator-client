import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddOpenComponent } from './add-open/add-open.component';
import { AddSingleComponent } from './add-single/add-single.component';
import { AddMultiComponent } from './add-multi/add-multi.component';
import { GenerateComponent } from './generate/generate.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddOpenComponent,
    AddSingleComponent,
    AddMultiComponent,
    GenerateComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
