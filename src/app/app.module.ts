import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopReposComponent } from './top-repos/top-repos.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule }   from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: TopReposComponent },
  // { path: 'user', loadChildren: './user/user.module#UserModule' },
  // { path: 'repo', loadChildren: './repo/repo.module#RepoModule' },
  // { path: 'about', loadChildren: './about/about.module#AboutModule' },
];


@NgModule({
  declarations: [
    AppComponent,
    TopReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
