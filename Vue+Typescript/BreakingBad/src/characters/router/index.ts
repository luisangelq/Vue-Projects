import type { RouteRecordRaw } from "vue-router";
import CharacterLayout from "../layout/CharacterLayout.vue";

const ROUTE_NAME = "/characters";

const characterRoute: RouteRecordRaw = {
    path: ROUTE_NAME,
    name: "Characters",
    redirect: { name: "CharactersList" },
    component: CharacterLayout,
    children: [
        {
            path: `${ROUTE_NAME}/list`,
            name: "CharactersList",
            props: { title: "List", visible: true},
            component: () => import("../pages/CharacterList.vue"),
        },
        {
            path: `${ROUTE_NAME}/search`,
            name: "CharactersSearch",
            props: { title: "Search", visible: true},
            component: () => import("../pages/CharacterSearch.vue"),
        },
        {
            path: "by/:id",
            name: "CharacterDetails",
            props: { title: "Details", visible: false},
            component: () => import("../pages/CharacterId.vue"),
        },
    ],
}

export default characterRoute;