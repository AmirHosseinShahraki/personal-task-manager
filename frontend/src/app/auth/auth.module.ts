import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUIModule } from '@personal-task-manager/shared-ui';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, SharedUIModule],
})
export class AuthModule {}
