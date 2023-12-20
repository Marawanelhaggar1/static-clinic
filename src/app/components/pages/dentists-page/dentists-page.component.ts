import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dentists-page',
    templateUrl: './dentists-page.component.html',
    styleUrls: ['./dentists-page.component.scss'],
})
export class DentistsPageComponent implements OnInit {
    lang?: string;
    doctors = [
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-2.jpg',
            nameEn: 'Ayman El Azony',
            nameAr: 'أيمن الزوني',
            specializationEn: 'Uveitis',
            specializationAr: 'الالتهاب العنبي ',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-4.jpg',
            nameEn: 'Tamer Yehia',
            nameAr: 'تامر يحي',
            specializationEn: 'The blue water',
            specializationAr: 'المياه الزرقاء',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-5.jpg',
            nameEn: 'Muhammed Elmessry',
            nameAr: 'محمد الميسيري',
            specializationEn: 'Eye tumor treatment program',
            specializationAr: ' برنامج علاج أورام العيون ',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-3.jpg',
            nameEn: 'Menna Samir',
            nameAr: 'منة سمير',
            specializationEn: 'Pediatric ophthalmology and strabismus',
            specializationAr: 'طب عيون الأطفال والحوَل',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-1.jpg',
            nameEn: ' Eman Tantawy',
            nameAr: 'ايمان طنطاوى',
            specializationEn: 'Uveitis',
            specializationAr: 'الالتهاب العنبي ',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-7.jpg',
            nameEn: 'Amira Elsaid',
            nameAr: 'أميرة السيد',
            specializationEn: 'The blue water',
            specializationAr: 'المياه الزرقاء',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-8.jpg',
            nameEn: 'Maged El Wakeel',
            nameAr: 'ماجد الوكيل',
            specializationEn: 'Eye tumor treatment program',
            specializationAr: ' برنامج علاج أورام العيون ',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-9.jpg',
            nameEn: 'Sally Mohamed',
            nameAr: 'سالي محمد',
            specializationEn: 'Pediatric ophthalmology and strabismus',
            specializationAr: 'طب عيون الأطفال والحوَل',
        },
    ];
    constructor() {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
    }
}
