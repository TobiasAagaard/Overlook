import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { Header } from "../../components/Header/Header"
import { HeroSlider } from "../Frontpage/Slider/Slider"
import { HotelList } from "./DestinationsDetails/DestinationsDetails"

export const Destinations = () => {
    return (
        <ContentWrapper title="HOTELLER & DESTINATIONER">
            <Header header="HOTELLER & DESTINATIONER" />
            <HeroSlider />
            <section>
                <HotelList />
            </section>
        </ContentWrapper>
    )
}