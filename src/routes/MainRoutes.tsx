import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Services from "@/pages/services/Services";
import SmartParkingService from "@/pages/services/SmartParkingService";
import MobilityManagementService from "@/pages/services/MobilityManagementService";
import MainLayout from "../layout/MainLayout.tsx";
import React from "react";
import BlogPage from "@/pages/blogs/Blog.tsx";
import BlogDetailPage from "@/pages/blogs/BlogDetail.tsx";
import { Contact } from "@/pages/contact/Contact";
import * as ReviewModule from "@/pages/review/Review.tsx";
import Career from "@/pages/career/Career.tsx";
import RoleRouter from "@/pages/jobOpenings/RoleRouter.tsx";
import { Team } from "@/pages/team/Team.tsx";
import { NotFound } from "@/components/NotFound.tsx";
import AdditionalParkingService from "@/pages/services/AdditionalParkingService.tsx";
import ValetParkingService from "@/pages/services/ValetParkingService.tsx";


export const Routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        index: true,
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      { 
        path: "/smart-parking-service",
        element: <SmartParkingService /> 
      },
      {
          path: "/additional-parking-service",
        element: <AdditionalParkingService /> 
      },
      {
           path: "/valet-parking-service",
        element: <ValetParkingService/> 
      },
      {
          path: "/mobility-management-service",
        element: <MobilityManagementService />
      },

      {
        path: "reviews",
        element: React.createElement(
          ReviewModule.default as React.ComponentType
        ),
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
      {
        path: "blogs/:slug",
        element: <BlogDetailPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "career/:id",
        element: <RoleRouter />,
      },

      {
        path:"*",
        element:<NotFound/>
      }
    
    ],
  },
];
