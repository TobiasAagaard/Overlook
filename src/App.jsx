import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"
import { MainLayout } from "./Layout/MainLayout";
import { Frontpage } from "./pages/Frontpage/Frontpage";
import { Destinations } from "./pages/Destinations/Destinations";
import { Resevation } from "./pages/Resevation/Resevation";
import { Rooms } from "./pages/Rooms/Rooms";
import { Login } from "./pages/Login/Login";
import { PageNotFound } from "./pages/NotFound/PageNotFound";
import { HotelList } from "./pages/Destinations/DestinationsDetails/DestinationsDetails";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />} />
            <Route path="/Destination" element={<Destinations />} >
            <Route path="/Destination/:slug" element={<HotelList />}>
            </Route>
            </Route>
            <Route path="/Resevation" element={<Resevation />} />
            <Route path="/Værelser" element={<Rooms />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
