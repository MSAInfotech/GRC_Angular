import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [ChartModule, CommonModule, RouterModule ,FormsModule],
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

    yearRange: number[] = [];
    calendarDays: { date: number | null, festival: string | null, isToday: boolean, events: string[] }[][] = [];
    festivals: Record<number, Record<number, Record<number, string>>> = {
        // Add your festivals data
    };

    isModalOpen: boolean = false;
    selectedDate?: Date | null;
    newEvent: string = '';
    platformId = inject(PLATFORM_ID);
    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.initChart();
        this.initializeYearRange();
        this.renderCalendar(this.currentYear, this.currentMonthIndex)
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

    initializeYearRange(): void {
        const startYear = 2000;
        const endYear = 2030;
        this.yearRange = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
    }

    renderCalendar(year: number, monthIndex: number): void {
        const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        const today = new Date();

        this.calendarDays = [];
        let date = 1;

        for (let i = 0; i < 6; i++) {
            const week: { date: number | null, festival: string | null, isToday: boolean, events: string[] }[] = [];

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    week.push({ date: null, festival: null, isToday: false, events: [] });
                } else if (date > daysInMonth) {
                    week.push({ date: null, festival: null, isToday: false, events: [] });
                } else {
                    const isToday =
                        year === today.getFullYear() &&
                        monthIndex === today.getMonth() &&
                        date === today.getDate();
                    const festival = this.festivals[year]?.[monthIndex + 1]?.[date] || null;
                    week.push({ date, festival, isToday, events: [] });
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

    selectMonthAndYear(monthIndex: number): void {
        this.currentMonthIndex = monthIndex;
        this.renderCalendar(this.currentYear, this.currentMonthIndex);
    }

    openEventModal(day: { date: number | null }): void {
        if (!day.date) return;
        this.selectedDate = new Date(this.currentYear, this.currentMonthIndex, day.date);
        this.isModalOpen = true;
        this.newEvent = '';
    }

    closeModal(): void {
        this.isModalOpen = false;
    }

    addEvent(): void {
        if (this.selectedDate && this.newEvent.trim()) {
            const day = this.calendarDays
                .flat()
                .find(d => d.date === this.selectedDate!.getDate());
            day?.events.push(this.newEvent);
            this.closeModal();
        }
    }
}


