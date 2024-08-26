import { GuideCardContainer } from "../HelpfulGuides/StyledComponents";
import { Flex, TitleStyle, TopPart } from "../Trips/StyledComponents";

const Mortgages = () => {
    return (
        <GuideCardContainer>
            <TopPart>
                <Flex style={{ justifyContent: "space-between", width: "100%" }}>
                    <TitleStyle>{"Understanding Mortgages"}</TitleStyle>
                </Flex>
            </TopPart>
            <div style={{ marginTop: 24 }}>
                <p style={{ fontSize: 12 }}>Written by: Eli Katz</p>
                <p>Are you looking into buying an investment home? Applying for your first mortgage can seem daunting, but with the right guidance, you can navigate the process smoothly and confidently. Here’s a step-by-step guide to help you get started:</p>

                <h4>1. Choosing the Right Lender</h4>
                <p>Your journey begins with selecting the right lender. Each lender offers different mortgage programs, grants, and terms, so it’s essential to do thorough research. Compare interest rates, loan terms, and available grants to find the best fit for your financial situation. Remember, the lender you choose can significantly impact the cost and structure of your mortgage.</p>

                <h4>2. Getting Pre-Approved</h4>
                <p>Once you’ve selected a lender, the next step is mortgage pre-approval. This process involves evaluating your financial situation, particularly your debt-to-income (DTI) ratio. Most lenders require a DTI ratio between 43% and 50%. Your monthly debt payments, including projected mortgage payments, HOA fees, and property taxes, should not exceed this percentage of your gross monthly income.</p>
                <p>While preparing for pre-approval, be mindful of what you plan to buy, your price range, and the amount you plan to put down as a down payment. Having a clear picture of your budget and goals will help your lender tailor the mortgage options to your needs.</p>

                <h4>3. Managing a High Debt-to-Income Ratio</h4>
                <p>If your DTI ratio exceeds the lender’s threshold, there are still options. One approach is to increase your income by providing updated paystubs over a period of time. Another option is to add a co-borrower to lower your DTI ratio. However, make sure the co-borrower has minimal existing debt to improve your chances of approval.</p>

                <h4>4. Working with a Real Estate Broker</h4>
                <p>Once pre-approved, the next step is finding the right home. A real estate broker can help identify properties that meet your needs, arrange viewings, negotiate on your behalf, and guide you through making an offer. Their expertise will ensure the homebuying process is as smooth as possible.</p>

                <h4>5. Submitting Your Application</h4>
                <p>After finding a home and having your offer accepted, you will submit your contract to the lender along with the necessary documentation. The lender will then review your financial situation and finalize your loan terms.</p>

                <h4>6. The Underwriting Process</h4>
                <p>The underwriting process involves a detailed review of your financial history to assess your creditworthiness. The underwriter may request additional information or ask you to meet specific conditions, such as increasing your down payment.</p>

                <h4>7. The Closing Process</h4>
                <p>Once your mortgage application has passed underwriting, you’ll receive a “clear to close,” signaling that you’re ready to proceed to closing. The closing process involves signing the necessary documents to finalize the purchase and disburse funds.</p>

                <h4>8. Final Thoughts</h4>
                <p>While the mortgage process can be complex, understanding these key steps can help you approach it with confidence.</p>
                <p style={{ fontStyle: 'italic' }}>Eli Katz, Loan Officer at ABC Mortgage Corp. can be reached at elik@abcmortgageny.com</p>

            </div>
        </GuideCardContainer>
    );
};

export default Mortgages;
