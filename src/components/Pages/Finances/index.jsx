import { Container } from "reactstrap";
import { GuideCardContainer } from "../HelpfulGuides/StyledComponents";
import ParentPage from "../../layout/ParentPage";
import Article from "./Article";
import Mortgages from "./Mortgages";
import WhyInvest from "./WhyInvest";
import { ContentWrap } from "./StyledComponents";
import FrumFinance from "./Frum.Finance";

const Finances = () => {
    return (
        <div>
            <Container>
                <div>
                    <ContentWrap >
                        <FrumFinance />
                        <Article />
                        {/* <WhyInvest /> */}
                        {/* <Mortgages /> */}
                    </ContentWrap>
                </div>
            </Container></div>
    )
}
export default Finances;