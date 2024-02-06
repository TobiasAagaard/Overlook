import { Link } from "react-router-dom";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";

export const PageNotFound = () => {
    <>
        <ContentWrapper title="404 Page Not Found">
            <h1>404 Page Not Found</h1>
            <p>
                <Link to="/">Gå til forsiden her</Link>
            </p>
        </ContentWrapper>
    </>
}