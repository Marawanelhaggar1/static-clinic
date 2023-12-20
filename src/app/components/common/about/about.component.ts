import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    lang?: string;
    services = [
        {
            en: 'Radiology Center',
            ar: 'مركز الأشعة',
        },
        {
            en: 'Operations Department',
            ar: ' قسم العمليات ',
        },
        {
            en: 'Eye Emergency Department',
            ar: ' قسم طوارئ العيون',
        },
        {
            en: 'Intensive Care Unit',
            ar: ' الرعاية المركزة ',
        },
        {
            en: 'Outpatient clinics',
            ar: 'العيادات الخارجية',
        },
        {
            en: 'Accommodation',
            ar: 'الإقامات',
        },
        {
            en: 'Diagnostic Testing Center',
            ar: 'مركز الاختبارات التشخيصية',
        },
        {
            en: ' Cataract and Primary Eye Care Service',
            ar: 'خدمة إعتام عدسة العين والرعاية الأولية للعيون',
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
