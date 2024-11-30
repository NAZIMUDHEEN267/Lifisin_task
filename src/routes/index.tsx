import { Route, Routes } from "react-router-dom";

import DashBoard from "@/Screens/DashBoard";
import Layout from "./Layout";
import NotFound from "@/Screens/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<DashBoard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
