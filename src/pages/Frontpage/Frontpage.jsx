import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { HeroSlider } from "./Slider/Slider.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { NewsCards } from "./News/NewsCards.jsx";

export const Frontpage = () => {
    return (
        <ContentWrapper  title="VELKOMMEN TIL HOTEL OVERLOOK ONLINE">
            <Header header="VELKOMMEN TIL HOTEL OVERLOOK ONLINE" />
            <HeroSlider />
            <NewsCards />
        </ContentWrapper>
    )
}