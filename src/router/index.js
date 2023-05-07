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
import ExitView from "@/views/ExitView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Вход",
    },
    component: LoginView,
  },
  {
    path: "/friend",
    name: "friend",
    meta: {
      title: "Друзья",
    },
    component: FriendView,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Вход",
    },
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "Регистрация",
    },
    component: RegisterView,
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      title: "Мой профиль",
    },
    component: ProfileView,
  },
  {
    path: "/profile/:id",
    name: "getProfile",
    meta: {
      title: "Профиль пользователя",
    },
    component: UserProfileView,
  },
  {
    path: "/profile/edit",
    name: "editProfile",
    meta: {
      title: "Настройка",
    },
    component: SettingView,
  },
  {
    path: "/feed",
    name: "feed",
    meta: {
      title: "Лента",
    },
    component: FeedView,
  },
  {
    path: "/mail",
    name: "mail",
    meta: {
      title: "Почта",
    },
    component: MailView,
  },
  {
    path: "/mail/:id",
    name: "selectedMail",
    meta: {
      title: "Диалог",
    },
    component: SelectedMailView,
  },
  {
    path: "/document",
    name: "document",
    meta: {
      title: "Документы",
    },
    component: DocumentsView,
  },
  {
    path: "/group",
    name: "group",
    meta: {
      title: "Группы",
    },
    component: GroupViewVue,
  },
  {
    path: "/group/:id",
    name: "selectedGroup",
    meta: {
      title: "Группа",
    },
    component: GroupProfileVIew,
  },
  {
    path: "/setting",
    name: "setting",
    meta: {
      title: "Настройки",
    },
    component: SettingView,
  },
  {
    path: "/exit",
    name: "exit",
    component: ExitView,
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
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
});

export default router;
