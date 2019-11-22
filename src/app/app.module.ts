import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListanimalsComponent } from './listanimals/listanimals.component';
import { ListorgansComponent } from './listorgans/listorgans.component';
import { ListAnimalService } from './service/animal.service';
import { AnimalstodisplayComponent } from './animalstodisplay/animalstodisplay.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddanimalComponent} from './addanimal/addanimal.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListanimalsComponent,
    ListorgansComponent,
    AnimalstodisplayComponent,
    AddanimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ListAnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
