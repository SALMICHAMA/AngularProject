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
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListorgansSpecificAnimalComponent } from './listorgans-specific-animal/listorgans-specific-animal.component';


const appRoutes: Routes = [
  { path: 'newanimal/add', component: AddanimalComponent },
  { path: 'listanimals', component: AnimalstodisplayComponent },
  { path: 'listanimals/:filter', component: AnimalstodisplayComponent },
  { path: 'single_animal/:id/:name', component: SingleAnimalComponent},
  { path: 'listorgans', component: ListorgansComponent },
  { path: 'single_animal/organs/:name/:id', component: ListorgansSpecificAnimalComponent },
  { path: 'oneorgan/:id/:name', component: SingleOrganComponent },
  { path: '', component: WelcomeComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    ListorgansComponent,
    AnimalstodisplayComponent,
    AddanimalComponent,
    SingleAnimalComponent,
    SingleOrganComponent,
    UpdateanimalComponent,
    ListorgansSpecificAnimalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ListAnimalService, OrganService,  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
