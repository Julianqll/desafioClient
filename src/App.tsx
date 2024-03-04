import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { PortalHome } from "./pages/PortalHome";
import { LoginPage } from "./pages/LoginPage";
import { ProveedoresPage } from "./pages/ProveedoresPage";
import { ProveedoresRegisterPage } from "./pages/ProveedoresRegisterPage";
import { SolicitudesPage } from "./pages/SolicitudesPage";
import { SolicitudesPageOne } from "./pages/SolicitudesPagOne";
import { SolicitudesRegisterPage } from "./pages/SolicitudesRegisterPage";
import { Notifications } from '@mantine/notifications';

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Notifications />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/portal" element={<PortalHome/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/proveedores" element={<ProveedoresPage/>}/>
          <Route path="/proveedores/register" element={<ProveedoresRegisterPage/>}/>
          <Route path="/solicitudes" element={<SolicitudesPage/>}/>
          <Route path="/solicitudes/:id" element={<SolicitudesPageOne/>}/>
          <Route path="/solicitudes/register" element={<SolicitudesRegisterPage/>}/>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App