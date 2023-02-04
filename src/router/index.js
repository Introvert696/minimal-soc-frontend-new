import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/profile",
    name: "profile",
    component: LoginView,
  },
  {
    path: "/profile/:id",
    name: "getProfile",
    component: LoginView,
  },
  {
    path: "/profile/edit",
    name: "editProfile",
    component: LoginView,
  },
  {
    path: "/feed",
    name: "feed",
    component: LoginView,
  },
  {
    path: "/post/:id",
    name: "selectPost",
    component: LoginView,
  },
  {
    path: "/mail",
    name: "mail",
    component: LoginView,
  },
  {
    path: "/mail/:id",
    name: "selectedMail",
    component: LoginView,
  },
  {
    path: "/document",
    name: "document",
    component: LoginView,
  },
  {
    path: "/group",
    name: "group",
    component: LoginView,
  },
  {
    path: "/group/:id",
    name: "selectedGroup",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
