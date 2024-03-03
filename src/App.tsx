import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { PortalHome } from "./pages/PortalHome";
import { LoginPage } from "./pages/LoginPage";
import { ProveedoresPage } from "./pages/ProveedoresPage";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/portal" element={<PortalHome/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/proveedores" element={<ProveedoresPage/>}/>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App