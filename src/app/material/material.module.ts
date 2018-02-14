import { NgModule } from '@angular/core';


import {PlatformModule} from '@angular/cdk/platform';


import {ObserversModule} from '@angular/cdk/observers';



import {CdkTableModule} from '@angular/cdk/table';


import 'hammerjs';



import {


  MatAutocompleteModule,




MatButtonModule,




MatButtonToggleModule,




MatCardModule,




MatCheckboxModule,




MatChipsModule,




MatDatepickerModule,




MatDialogModule,




MatExpansionModule,




MatGridListModule,




MatIconModule,




MatInputModule,




MatListModule,




MatMenuModule,




MatNativeDateModule,




MatPaginatorModule,




MatProgressBarModule,




MatProgressSpinnerModule,




MatRadioModule,




MatRippleModule,




MatSelectModule,




MatSidenavModule,




MatSliderModule,




MatSlideToggleModule,




MatSnackBarModule,




MatSortModule,




MatTableModule,




MatTabsModule,




MatToolbarModule,




MatTooltipModule,




MatStepperModule


} from '@angular/material';





const materialModule =  [




CdkTableModule,




MatAutocompleteModule,




MatButtonModule,




MatButtonToggleModule,




MatCardModule,




MatCheckboxModule,




MatChipsModule,




MatStepperModule,




MatDatepickerModule,




MatDialogModule,




MatExpansionModule,




MatGridListModule,




MatIconModule,




MatInputModule,




MatListModule,




MatMenuModule,




MatNativeDateModule,




MatPaginatorModule,




MatProgressBarModule,




MatProgressSpinnerModule,




MatRadioModule,




MatRippleModule,




MatSelectModule,




MatSidenavModule,




MatSliderModule,




MatSlideToggleModule,




MatSnackBarModule,




MatSortModule,




MatTableModule,




MatTabsModule,




MatToolbarModule,




MatTooltipModule,




];





@NgModule({


  exports: [


    // export material modul




     materialModule,



    ObserversModule,


    PlatformModule


  ]


})
export class MaterialModule { }
