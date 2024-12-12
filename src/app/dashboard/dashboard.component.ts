import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [ChartModule, CommonModule, RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    data: any;
    options: any;
    optionset: any;

    currentYear: number = new Date().getFullYear();
    currentMonthIndex: number = new Date().getMonth();
    months: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    festivals: Record<number, Record<number, Record<number, string>>> = {
        2024: {
            1: { 1: 'New Year', 14: 'Makar Sankranti' },
            2: { 14: "Valentine's Day" },
            3: { 8: 'Holi' },
            4: { 22: 'Earth Day' },
            5: { 1: 'May Day' },
            6: { 21: 'International Yoga Day' },
            7: { 4: 'Independence Day' },
            8: { 15: 'Independence Day (India)' },
            9: { 5: "Teachers' Day" },
            10: { 24: 'Dussehra' },
            11: { 12: 'Diwali', 27: 'Guru Nanak Jayanti' },
            12: { 25: 'Christmas' }
        },
        2025: {
            1: { 1: 'New Year', 14: 'Makar Sankranti' },
            2: { 14: "Valentine's Day" },
            3: { 8: 'Eid' },
            4: { 22: 'Earth Day' },
            5: { 1: 'May Day' },
            6: { 21: 'International Yoga Day' },
            7: { 4: 'Independence Day' },
            8: { 15: 'Independence Day (India)' },
            9: { 5: "Teachers' Day" },
            10: { 24: 'Dussehra' },
            11: { 12: 'Diwali', 27: 'ramzan' },
            12: { 25: 'Christmas' }
        }

    };


    // Include isToday in the type definition
    calendarDays: { date: number | null, festival: string | null, isToday: boolean }[][] = [];

    platformId = inject(PLATFORM_ID);

    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.initChart();
        this.renderCalendar(this.currentYear, this.currentMonthIndex);
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');

            this.data = {
                labels: ['Implemented', 'Partially Implemented', 'Not Implemented'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: ['cyan', 'orange', 'gray'],
                        hoverBackgroundColor: ['lightblue', 'gold', 'darkgray']
                    }
                ]
            };

            this.options = {
                cutout: '60%',
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };

            this.optionset = {
                responsive: true,
                maintainAspectRatio: false,  // Allow custom height
            };
            this.cd.markForCheck()
        }
    }

    renderCalendar(year: number, monthIndex: number): void {
        const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        const today = new Date();

        this.calendarDays = [];
        let date = 1;

        for (let i = 0; i < 6; i++) {
            const week: { date: number | null, festival: string | null, isToday: boolean }[] = [];

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    week.push({ date: null, festival: null, isToday: false });
                } else if (date > daysInMonth) {
                    week.push({ date: null, festival: null, isToday: false });
                } else {
                    const isToday =
                        year === today.getFullYear() &&
                        monthIndex === today.getMonth() &&
                        date === today.getDate();
                    const festival = this.festivals[year]?.[monthIndex + 1]?.[date] || null;
                    week.push({ date, festival, isToday });
                    date++;
                }
            }

            this.calendarDays.push(week);
        }
    }

    goToPreviousMonth(): void {
        this.currentMonthIndex--;
        if (this.currentMonthIndex < 0) {
            this.currentMonthIndex = 11;
            this.currentYear--;
        }
        this.renderCalendar(this.currentYear, this.currentMonthIndex);
    }

    goToNextMonth(): void {
        this.currentMonthIndex++;
        if (this.currentMonthIndex > 11) {
            this.currentMonthIndex = 0;
            this.currentYear++;
        }
        this.renderCalendar(this.currentYear, this.currentMonthIndex);
    }
}


