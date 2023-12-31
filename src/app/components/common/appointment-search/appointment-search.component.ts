import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'app-appointment-search',
    templateUrl: './appointment-search.component.html',
    styleUrls: ['./appointment-search.component.scss'],
})
export class AppointmentSearchComponent {
    searchForm!: FormGroup;
    lang?: string;
    showCustomList: boolean = false;
    showCustomListDoctors: boolean = false;
    doctors?: string[];
    specialties?: string[];

    constructor(private _formBuilder: FormBuilder) {
        this.searchForm = _formBuilder.group({
            specialty: ['', [Validators.required]],
            doctor: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        if (this.lang == 'rtl') {
            this.doctors = [
                'محمد الميسيري',
                'أميرة السيد',
                'سالي محمد',
                'ماجد الوكيل',
            ];

            this.specialties = [
                ' الالتهاب العنبي ',
                ' المياه الزرقاء ',
                ' برنامج علاج أورام العيون ',
                ' طب عيون الأطفال والحوَل ',
            ];
        } else {
            this.doctors = [
                'Muhammed Elmessry',
                'Amira Elsaid',
                'Sally Mohamed',
                'Maged El Wakeel',
            ];
            this.specialties = [
                'Uveitis',
                'The blue water',
                'Eye tumor treatment program',
                'Pediatric ophthalmology and strabismus',
            ];
        }
        console.log(this.doctors);
    }
}
