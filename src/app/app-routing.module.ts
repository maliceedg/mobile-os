import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SequenceEqualOperator } from 'rxjs/internal/operators/sequenceEqual';
import { CalculatorComponent } from './calculator/calculator.component';
import { CameraComponent } from './camera/camera.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';

/* Components */
import { TopBarComponent } from "./top-bar/top-bar.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'camera', component: CameraComponent},
  {path: 'calculator', component: CalculatorComponent},  
  {path: 'gallery', component: GalleryComponent},
  {path: 'main', component: MainComponent},
  {path: 'settings', component: SettingsComponent},  
  {path: 'top-bar', component: TopBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
