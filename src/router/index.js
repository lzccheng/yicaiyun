export const indexChild = [
  {
    path: "",
    redirect: "home"
  },
  {
    path: "home",
    name: "home",
    component: () => import("@/views/home")
  },
  {
    path: "hall",
    name: "hall",
    component: () => import("@/views/hall")
  },
  {
    path: "interaction",
    name: "interaction",
    component: () => import("@/views/interaction")
  },
  {
    path: "discover",
    name: "discover",
    component: () => import("@/views/discover")
  },
  {
    path: "my",
    name: "my",
    component: () => import("@/views/my")
  }
];
