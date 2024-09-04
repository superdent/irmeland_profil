import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import About from '@/views/About.vue';
import Contact from '../views/Contact.vue';
import Projects from '../views/Projects.vue';
import Download from '../views/Download.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/projects', component: Projects },
  { path: '/download', component: Download },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
