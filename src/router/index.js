import { createRouter, createWebHistory } from "vue-router";
//Landing and Home
import Landing from "@/views/Landing.vue";
import Home from "@/views/Home.vue";
//Account matters
import LogIn from "@/views/LogIn.vue";
import LogOut from "@/views/LogOut.vue";
import Registration from "@/views/Registration.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
// Tips Page
import Tips from "@/views/Tips.vue";
import StorageGuide from "@/views/StorageGuide.vue";
import Recipes from "@/views/Recipes.vue";
// Shopping List Page
import ShoppingList from "@/views/ShoppingList.vue";

// testing
import modal1 from "@/views/modal1.vue";
import AddModal from "@/views/AddModal.vue";
import ExpiringList from "@/views/ExpiringList.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/LogIn",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/LogOut",
    name: "LogOut",
    component: LogOut,
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/ForgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/Tips",
    name: "Tips",
    component: Tips,
  },
  {
    path: "/StorageGuide",
    name: "StorageGuide",
    component: StorageGuide,
  },
  {
    path: "/Recipes",
    name: "Recipes",
    component: Recipes,
  },
  {
    path: "/ShoppingList",
    name: "ShoppingList",
    component: ShoppingList,
  },
  {
    path: "/modal1" /* view - test*/,
    name: "modal1",
    component: modal1,
  },
  {
    path: "/AddModal" /* view */,
    name: "AddModal",
    components: AddModal,
  },
  {
    path: "/ExpiringList" /* view */,
    name: "ExpiringList",
    components: ExpiringList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
