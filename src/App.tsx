import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App