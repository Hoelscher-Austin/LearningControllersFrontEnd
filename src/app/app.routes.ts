import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { StudentsComponent } from './components/students/students.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'master',
        pathMatch: 'full'
    },
    {
        path: 'master',
        component: MasterComponent,
        children: [
            {
                path: 'students',
                component: StudentsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
    


];
