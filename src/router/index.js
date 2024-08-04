import { createRouter, createWebHistory } from 'vue-router';
import ProductComponent from '../components/ProductComponent.vue';
import PackComponent from '../components/PackComponent.vue';
import ClientComponent from '../components/ClientComponent.vue';
import PartnerComponent from '../components/ClientComponent.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/Products', name: 'Product',component: ProductComponent },
  { path: '/Bundle', name: 'Bundle',component: PackComponent },
  { path: '/Clients', name: 'Clients',component: ClientComponent },
  { path: '/Patner',name: 'Patner', component: PartnerComponent },
  { path: '/', name: 'Home',component: HomeView},
  { path: '/about', name: 'About',component: AboutView},
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
