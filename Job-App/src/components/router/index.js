import {createRouter,createWebHistory} from 'vue-router'
import AddJob from '../AddJob.vue';
import EditJob from '../EditJob.vue';
import JobDetail from '../JobDetails.vue';
import JobList from '../JobList.vue';
import HomeSection from '../HomeSection.vue';



const routes = [
  { path: '/',name:'HomeSection', component: HomeSection },
  { path: '/jobs',name:'JobList', component: JobList },
  { path: '/add', component: AddJob },
  { path: '/edit/:id', component: EditJob },
  { path: '/jobs/:id', component: JobDetail },

];


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;


