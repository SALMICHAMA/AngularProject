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
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  { path: 'animals', component: AddanimalComponent },
  { path: 'listanimals', component: AnimalstodisplayComponent },
  { path: 'listanimals', component: ListanimalsComponent },
  { path: '', component: WelcomeComponent }
  ];


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
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ListAnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
