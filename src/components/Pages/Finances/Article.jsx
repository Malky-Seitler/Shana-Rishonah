import { GuideCardContainer } from "../HelpfulGuides/StyledComponents";
import { Flex, TitleStyle, TopPart } from "../Trips/StyledComponents";

const Article = () => {
    return (
        <GuideCardContainer>
            <TopPart>
                <Flex style={{ justifyContent: "space-between", width: "100%" }}>
                    <TitleStyle>{"Advice from a financial advisor"}</TitleStyle>
                </Flex>
            </TopPart>
            <div style={{ marginTop: 24 }}>
                <p style={{ fontSize: 12 }}>Written by: Chaim Schmerhold</p>
                <p>The period of time immediately after getting married is one of tremendous financial transition.</p>
                <p>No longer are your primary expenses the cost of hotel lobby drinks and mini-golf.</p>
                <p>You’re now responsible for another person, and financial responsibility is a big part of that.</p>
                <p>With that in mind, here are some areas to address sooner rather than later:</p>

                <h4>Cash flow management:</h4>
                <ul>
                    <li><strong>Do:</strong> Before thinking about where you want to be in the future, you need to know where you stand now. Get clarity in exactly what your monthly income is (post-tax). Then begin keeping track of EVERY expense you have. Some couples can do this in one sitting, others will need to keep a running score over a month or two. It doesn’t matter how you do it, just that you do it!</li>
                    <li><strong>Don’t:</strong> Try to plan for the future without understanding your present!</li>
                </ul>

                <h4>Budgeting:</h4>
                <ul>
                    <li><strong>Do:</strong> Once you know what your cash flow looks like, make any necessary adjustments. If you’re running a monthly deficit, making immediate changes is essential. If you have a monthly surplus, think about the best use of that extra money.</li>
                    <li><strong>Don’t:</strong> Think that a credit card is your get out of jail free card. If used irresponsibly, it can be quite the opposite!</li>
                </ul>

                <h4>Emergency fund:</h4>
                <ul>
                    <li><strong>Do:</strong> As much as we’d love to see all our assets grow quickly, it’s important to leave some of our savings liquid. The typical recommendation is to have 3 months’ worth of expenses set aside. This amount can be left in a stable account such as a high yield savings account, and should be your buffer for unexpected expenses.</li>
                    <li><strong>Don’t:</strong> Leave all your savings in cash. Even in a high interest rate environment, consider the effects of inflation and taxes on your longer term goals.</li>
                </ul>

                <h4>Invest wisely:</h4>
                <ul>
                    <li><strong>Do:</strong> Consider investing additional assets and income. Responsible investing does not mean trying to get rich quick or making unusually high returns. It means exposing yourself to a portfolio that reflects your personal situation and goals.</li>
                    <li><strong>Don’t:</strong> Think you’re too young to plan for the future. And don’t confuse investing with gambling!</li>
                </ul>

                <h4>Defensive planning:</h4>
                <ul>
                    <li><strong>Do:</strong> No one enjoys paying for insurance. But being properly insured can help protect you from a catastrophic loss. It is important to make sure you have the health, life, disability, car, home/renters insurance that you need.</li>
                    <li><strong>Don’t:</strong> Try to “Wait until you need it.” The hope is that you’ll never need it! But it’s always better to be safe than sorry.</li>
                </ul>

                <p>It goes without saying that much of this is likely unfamiliar territory for many young couples. So remember to always speak to a financial professional with any and all questions you may have!</p>
                <p style={{ fontStyle: 'italic' }}>Chaim Schmerhold is a financial advisor at Northwestern Mutual. He can be reached at chaim.schmerhold@nm.com</p>
            </div>


        </GuideCardContainer>
    )
}
export default Article;