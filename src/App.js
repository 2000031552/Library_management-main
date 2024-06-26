import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";
import ChangePassword from "./pages/changePassword";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Profile from './pages/profile'; 
import FAQ from "./pages/faq";
import AddBook from "./pages/addbook";
import BookDetails from './pages/bookdetails';
import Bookstatus from "./pages/bookstatus";
 
const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/bookstatus" element={<Bookstatus />} />
                <Route path="/bookdetails/:id" element={<BookDetails />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                {/* <Route path="/user/dashboard" element={<SDashboard />} /> */}
               
                
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
