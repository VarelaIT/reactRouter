import { createBrowserRouter, Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
import CategoriesComponent from "../components/categories";
import DepartmentsComponent from "../components/departments";

const tabs= [
  {
    title: "Static data",
    uri: "/static"
  },
  {
    title: "Party",
    uri: "/party"
  },
  {
    title: "Rules",
    uri: "/rules"
  },
];

const rootTabs = [
  {
    title: "Categories",
    uri: "/static/categories"
  },
  {
    title: "Departments",
    uri: "/static/departments"
  },
]


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Drawer tabList={tabs} />,
    children: [
      {
        path: "static",
        element: <Drawer tabList={rootTabs} />,
        children: [
          {
            path: "",
            element: <section></section>,
          },
          {
            path: "departments",
            element: <DepartmentsComponent />
          },
          {
            path: "categories",
            element: <CategoriesComponent />
          }
        ]
      },
    ]
  },
  {
    path: "/party", //party
    element: <Drawer tabList={tabs}/>,
    children: [
      {
        path: "",
        element: <h1>Helo from party</h1>
      },
    ],
  },
  {
    path: "/rules",
    element: <Drawer tabList={tabs}/>,
    children: [
      {
        path: "",
        element: <h1>Helo from rules</h1>
      },
    ],
  },
]);

