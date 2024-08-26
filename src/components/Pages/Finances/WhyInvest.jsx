import { GuideCardContainer } from "../HelpfulGuides/StyledComponents";
import { Flex, TitleStyle, TopPart } from "../Trips/StyledComponents";

const WhyInvest = () => {
    return (
        <GuideCardContainer>
            <TopPart>
                <Flex style={{ justifyContent: "space-between", width: "100%" }}>
                    <TitleStyle>{"Building a Brighter Future: The Advantages of Young Couples Investing in Real Estate"}</TitleStyle>
                </Flex>
            </TopPart>
            <div style={{ marginTop: 24 }}>
                <p style={{ fontSize: 12 }}>Written by: Shoshana Klugmann</p>
                <p> As a young couple, making smart financial decisions can set you up for long-term success and stability. One often overlooked opportunity is investing in real estate, specifically buying an investment home. This strategic move can bring numerous benefits, from generating passive income to building wealth and securing your future. Here are some advantages of buying an investment home.</p>

                <h4>1. Passive Income</h4>
                <p>Renting out an investment property can provide a steady stream of passive income, helping to offset mortgage payments and living expenses.
                </p>


                <h4>2. Wealth Building</h4>
                <p>Real estate values tend to appreciate over time, making owning an investment property a potentially lucrative long-term investment.</p>

                <h4>3. Tax Benefits</h4>
                <p>Homeownership comes with tax deductions on mortgage interest, property taxes, and operating expenses, reducing your taxable income.</p>

                <h4>4. Forced Savings</h4>
                <p>Making mortgage payments forces you to save money, building equity in your property.</p>

                <h4>5. Diversified Portfolio</h4>
                <p>Adding real estate to your investment portfolio diversifies your assets, reducing reliance on stocks or other volatile investments.</p>

                <h4>6. Retirement Planning</h4>
                <p>An investment property can provide a steady income stream in retirement, supplementing other sources of income. By that time you most likely will not have a mortgage payment anymore, so the cash flow from the property will be significantly higher.</p>

                <h4>7. Learning Opportunity</h4>
                <p> Managing an investment property teaches valuable skills, such as property maintenance, budgeting, and tenant management</p>

                <h4>8. Save for the future</h4>
                <p>As the value increases, you’ll be able to use the property to provide funding for large expenses that come up, such as wedding etc.</p>
                <br />
                <p>Factors to consider:</p>
                <h4>Financial readiness</h4>
                <p>Ensure you have a stable income, manageable debt, and sufficient savings</p>
                <h4>Location</h4>
                <p>Choose a location with high rental demand and growth potential.</p>
                <h4>Property type</h4>
                <p>Select a low-maintenance property, like a condo or single-family home.</p>
                <h4>Financing</h4>
                <p>Explore mortgage options and consider working with a financial advisor. </p>
                <p> In conclusion, buying an investment home can be a savvy move for young couples, offering a range of financial benefits and skills. Make sure that you have a mortgage broker/banker that will have your interest in mind and will provide you with good rates and low closing costs  By carefully considering your decision and planning for the responsibilities that come with ownership, you can set yourselves up for long-term financial success. </p>
                <p style={{ fontStyle: 'italic' }}>Looking for an investment home? Shoshana is a real estate broker at Crossroads Realty and can be reached at shoshanak@crnj.com</p>

            </div>
        </GuideCardContainer>
    );
};

export default WhyInvest;
