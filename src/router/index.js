import { createRouter, createWebHistory } from 'vue-router';
import ProductComponent from '../components/ProductComponent.vue';
import PackComponent from '../components/PackComponent.vue';
import ClientComponent from '../components/ClientComponent.vue';
import PartnerComponent from '../components/ClientComponent.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/MobileView.vue';

const routes = [
  { path: '/products', name: 'Product',component: ProductComponent },
  { path: '/bundle', name: 'Bundle',component: PackComponent },
  { path: '/clients', name: 'Clients',component: ClientComponent },
  { path: '/partner',name: 'Partner', component: PartnerComponent },
  { path: '/', name: 'Home',component: HomeView},
  { path: '/about', name: 'About',component: AboutView},
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
