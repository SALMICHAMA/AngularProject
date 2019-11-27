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
import { SingleAnimalComponent } from './single-animal/single-animal.component';
import { SingleOrganComponent } from './single-organ/single-organ.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateanimalComponent } from './updateanimal/updateanimal.component';



const appRoutes: Routes = [
  { path: 'newanimal/add', component: AddanimalComponent },
  { path: 'listanimals', component: AnimalstodisplayComponent },
  { path: 'listanimals/:filter', component: AnimalstodisplayComponent },
  { path: 'oneanimal/:id/:name', component: SingleAnimalComponent},
  { path: 'listorgans', component: ListorgansComponent },
  { path: 'oneanimal/:name/organs', component: ListorgansComponent },
  { path: 'oneorgan/:id/:name', component: SingleOrganComponent },
  { path: '', component: WelcomeComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListorgansComponent,
    AnimalstodisplayComponent,
    AddanimalComponent,
    SingleAnimalComponent,
    SingleOrganComponent,
    UpdateanimalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ListAnimalService, OrganService],
  bootstrap: [AppComponent]
})
export class AppModule { }
