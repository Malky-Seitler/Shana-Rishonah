import { GuideCardContainer, PictureWrap } from "../HelpfulGuides/StyledComponents"
import { Flex, TitleStyle, TopPart } from "../Trips/StyledComponents"
import frumfinance from '../../ads/frumfinance.png';
const FrumFinance = () => {
    return (
        <GuideCardContainer>
            <div style={{ display: 'flex' }}
            >
                <div>
                    <TopPart>

                        <Flex style={{ justifyContent: "space-between", width: "100%" }}>
                            <TitleStyle>       Frum.Finance - FREE financial planning</TitleStyle>
                        </Flex>
                    </TopPart>
                    <div style={{ marginTop: 24 }}>
                        Figuring out Shana Rishonah is tough as it is.
                        Take one thing off your head with our <strong style={{ fontSize: 18, textDecoration: 'underline' }}><em>free</em></strong> ongoing financial plan design. All services are 100% free of charge. Book a consultation with financial and budget planners and set yourself up for success!
                        <br />   <a target="_blank" href='https://frum.finance/start' rel='noreferrer' style={{ marginTop: 12 }}>Get started at frum.finance/start</a>
                    </div>
                </div>
                <img height={'25%'} src={frumfinance}></img>

            </div>
        </GuideCardContainer>
    )
}
export default FrumFinance