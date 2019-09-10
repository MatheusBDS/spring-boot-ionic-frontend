import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import {Camera} from "@ionic-native/camera";

// @ts-ignore
@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  providers: [
    Camera
  ]
})
export class ProfilePageModule {}
