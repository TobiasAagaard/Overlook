import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { Header } from "../../components/Header/Header"
import { HeroSlider } from "../Frontpage/Slider/Slider"
import { HotelsNav } from "./DestinationsDetails/DestinationsDetails"

export const Destinations = () => {
    return (
        <ContentWrapper title="HOTELLER & DESTINATIONER">
            <Header header="HOTELLER & DESTINATIONER" />
            <HeroSlider />
            <HotelsNav />

        </ContentWrapper>
    )
}