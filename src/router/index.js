import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import ProfileView from "../views/ProfileView";
import FeedView from "../views/FeedView.vue";
import MailView from "../views/MailView";
import FriendView from "../views/FriendView";
import NotFound from "../views/NotFound";
import SelectedMailView from "../views/SelectedMailView";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  },
  {
    path: "/friend",
    name: "friend",
    component: FriendView,
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
    component: ProfileView,
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
    component: FeedView,
  },
  {
    path: "/post/:id",
    name: "selectPost",
    component: LoginView,
  },
  {
    path: "/mail",
    name: "mail",
    component: MailView,
  },
  {
    path: "/mail/:id",
    name: "selectedMail",
    component: SelectedMailView,
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
  {
    path: "/setting",
    name: "setting",
    component: LoginView,
  },
  {
    path: "/exit",
    name: "exit",
    component: LoginView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
