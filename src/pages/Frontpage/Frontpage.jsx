import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { HeroSlider } from "./Slider/Slider.jsx";
import { Header } from "../../components/Header/Header.jsx";

export const Frontpage = () => {
    return (
        <ContentWrapper  title="Forside | VELKOMMEN TIL HOTEL OVERLOOK ONLINE">
            <Header header="VELKOMMEN TIL HOTEL OVERLOOK ONLINE" />
            <HeroSlider />
        </ContentWrapper>
    )
}