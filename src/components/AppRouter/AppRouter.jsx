import { Routes, Route } from "react-router-dom"
import { Frontpage } from "../../pages/Frontpage/Frontpage"
import { Destinations } from "../../pages/Destinations/Destinations"
import { Rooms } from "../../pages/Rooms/Rooms"
import { Resevation } from "../../pages/Resevation/Resevation"


export const AppRouter = () => {
    return (
            <Routes>
                <Route index element={<Frontpage />} />
                <Route path="/forside" element={<Frontpage />} />
                <Route path="Hoteller&Destinationer" element={<Destinations />}/>
                <Route path="Værelser" element={<Rooms />} />
                <Route path="Reservation" element={<Resevation />} />
                <Route path="Login" element={<Login />} />
            </Routes>
    )
}