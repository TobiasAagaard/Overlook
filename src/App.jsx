import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Frontpage } from "./pages/Frontpage/Frontpage";
import { Destinations } from "./pages/Destinations/Destinations";
import { Resevation } from "./pages/Resevation/Resevation";
import { Rooms } from "./pages/Rooms/Rooms";
import { Login } from "./pages/Login/Login";
import { PageNotFound } from "./pages/NotFound/PageNotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />} />
            <Route path="/Destinations" element={<Destinations />} />
            <Route path="/Resevation" element={<Resevation />} />
            <Route path="/Rooms" element={<Rooms />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
