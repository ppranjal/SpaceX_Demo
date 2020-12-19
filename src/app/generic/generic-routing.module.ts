import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [{
            path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
        },
    {
        path:'space-detail',loadChildren:()=>import('../space-detail/space-detail.module').then(m=>m.SpaceDetailModule)
    },
    {
        path:'space-launch',loadChildren:()=>import('../space-launch/space-launch.module').then(m=>m.SpaceLaunchModule)
    },
    {
        path:'space-landing',loadChildren:()=>import('../space-landing/space-landing.module').then(m=>m.SpaceLandingModule)
    }
    ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GenericRoutingModule { }
