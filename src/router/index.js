import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import ProfileView from "../views/ProfileView";
import FeedView from "../views/FeedView.vue";
import MailView from "../views/MailView";
import FriendView from "../views/FriendView";
import NotFound from "../views/NotFound";
import SelectedMailView from "../views/SelectedMailView";
import DocumentsView from "@/views/DocumentsView.vue";
import GroupProfileVIew from "@/views/GroupProfileView.vue";
import GroupViewVue from "@/views/GroupView.vue";
import SettingView from "@/views/SettingView.vue";
import UserProfileView from "@/views/UserProfileView.vue";

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
    component: UserProfileView,
  },
  {
    path: "/profile/edit",
    name: "editProfile",
    component: SettingView,
  },
  {
    path: "/feed",
    name: "feed",
    component: FeedView,
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
    component: DocumentsView,
  },
  {
    path: "/group",
    name: "group",
    component: GroupViewVue,
  },
  {
    path: "/group/:id",
    name: "selectedGroup",
    component: GroupProfileVIew,
  },
  {
    path: "/setting",
    name: "setting",
    component: SettingView,
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
