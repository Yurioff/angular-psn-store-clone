import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { CardProfileComponent } from './components/menu-bar/card-profile/card-profile.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { BigCardLabelComponent } from './components/big-card/big-card-label/big-card-label.component';
import { BigCardBtnComponent } from './components/big-card/big-card-btn/big-card-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    CardProfileComponent,
    BigCardComponent,
    BigCardLabelComponent,
    BigCardBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
