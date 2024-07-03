import { createBrowserRouter, Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
import CategoriesComponent from "../components/categories";
import DepartmentsComponent from "../components/departments";

const tabs= [
  {
    title: "Static data",
    uri: "/"
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
    uri: "/"
  },
  {
    title: "Departments",
    uri: "/departments"
  },
]


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Drawer tabList={tabs}><Outlet/></Drawer>,
    children: [
      {
        path: "",
        element: <Drawer tabList={rootTabs}><Outlet/></Drawer>,
        children: [
          {
            path: "",
            element: <CategoriesComponent/>
          }
        ]
      },
      {
        path: "departments",
        element: <Drawer tabList={rootTabs}><Outlet/></Drawer>,
        children: [
          {
            path: "",
            element: <DepartmentsComponent/>
          }
        ]
      },
    ],
  },
  {
    path: "/party",
    element: <Drawer tabList={tabs}><Outlet/></Drawer>,
    children: [
      {
        path: "",
        element: <Drawer tabList={rootTabs}><Outlet/></Drawer>
      },
    ],
  },
  {
    path: "/rules",
    element: <Drawer tabList={tabs}><Outlet/></Drawer>,
    children: [
      {
      },
    ],
  },
]);

