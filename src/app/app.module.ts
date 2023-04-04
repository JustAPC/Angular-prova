import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { CardComponent } from "./components/card/card.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RestaurantComponent } from "./pages/restaurant/restaurant.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    RestaurantComponent,
    HomepageComponent,
    AboutComponent,
    ContactsComponent,
  ],
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    HttpClientModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
