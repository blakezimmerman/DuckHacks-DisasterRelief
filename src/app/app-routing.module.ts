import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { HubComponent } from "./components/hub/hub.component";

// Declare all routes
const routes: Routes = [
    { path: "admin", component: AdminComponent },
    { path: "", component: HubComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }