import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListorgansComponent } from './listorgans/listorgans.component';
import { ListAnimalService } from './service/animal.service';
import { AnimalstodisplayComponent } from './animalstodisplay/animalstodisplay.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddanimalComponent} from './addanimal/addanimal.component';
import {RouterModule, Routes} from '@angular/router';
import {OrganService} from './service/organ.service';


const appRoutes: Routes = [
  { path: 'animals', component: AddanimalComponent },
  { path: 'listanimals', component: AnimalstodisplayComponent },
  { path: '', component: WelcomeComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
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
  providers: [ListAnimalService, OrganService],
  bootstrap: [AppComponent]
})
export class AppModule { }
