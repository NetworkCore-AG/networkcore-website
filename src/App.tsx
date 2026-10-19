import { BrowserRouter } from "react-router-dom";
import AppProviders from "./AppProviders";
import AppRoutes from "./AppRoutes";
import SiteSectionMotion from "./components/motion/SiteSectionMotion";

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <SiteSectionMotion />
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
