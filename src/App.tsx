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
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Notifications />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/portal" element={<PrivateRoute element={<PortalHome />} roles={[1,2,3]} />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/proveedores" element={<PrivateRoute element={<ProveedoresPage />} roles={[1,2]} />} />
          <Route path="/proveedores/register" element={<PrivateRoute element={<ProveedoresRegisterPage />} roles={[1,2]} />}/>
          <Route path="/solicitudes" element={<PrivateRoute element={<SolicitudesPage />} roles={[1,2,3]} />} />
          <Route path="/solicitudes/:id" element={<PrivateRoute element={<SolicitudesPageOne />} roles={[1,2,3]} />}/>
          <Route path="/solicitudes/register" element={<PrivateRoute element={<SolicitudesRegisterPage />} roles={[1,2]} />}/>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App