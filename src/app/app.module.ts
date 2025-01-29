import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResults } from "./investment-results/investment-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, InvestmentResults],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent]
})

export class AppModule{

}