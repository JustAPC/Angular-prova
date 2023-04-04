import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { RestaurantComponent } from "./pages/restaurant/restaurant.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "restaurantdetails/:id", component: RestaurantComponent },
  { path: "about", component: AboutComponent },
  { path: "contacts", component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
