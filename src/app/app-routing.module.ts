import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from "./countries/countries.component";
import {AppComponent} from "./app.component";
import {CountryComponent} from "./country/country.component";

const routes: Routes = [
  {path: "", redirectTo: 'countries',pathMatch:'full'},
  {path: "countries", component: CountriesComponent},
  {path: ":id", component: CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
