import React from "react";
import { Navigate, useParams } from "react-router-dom";
import DigitalMarketingManager from "./DigitalMarketingManager";
import SalesIntern from "./SalesIntern";
import FinanceIntern from "./FinanceIntern";
import BackendIntern from "./BackendIntern";
import BackendDeveloper from "./BackendDeveloper";
import FrontendIntern from "./FrontendIntern";
import FrontendDeveloper from "./FrontendDeveloper";

const RoleRouter: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  switch (id) {
    case "digital-marketing-manager":
      return <DigitalMarketingManager />;
    case "sales-intern":
      return <SalesIntern />;
    case "finance-intern":
      return <FinanceIntern />;
    case "backend-intern":
      return <BackendIntern />;
    case "backend-developer":
      return <BackendDeveloper />;
    case "frontend-intern":
      return <FrontendIntern />;
    case "frontend-developer":
      return <FrontendDeveloper />;
    default:
      return <Navigate to="/career" replace />;
  }
};

export default RoleRouter;

