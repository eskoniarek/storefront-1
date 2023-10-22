import React from 'react';
import { Metadata } from 'next';
import Nav from '@modules/layout/templates/nav';
import Footer from '@modules/layout/templates/footer';

export const metadata: Metadata = {
    title: 'Terms and Conditions of Sale',
};

const TermsAndConditions = () => {
    return (
        <>
            <Nav />
            <main className="bg-gray-100 py-12">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6 prose prose-blue">
                    <h1 className="text-3xl font-bold mb-6 border-b pb-3 text-center text-slate-800">TERMS AND CONDITIONS OF SALE</h1>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">1. BACKGROUND</h2>
                        <p>1.1 These general terms and conditions (the “General Conditions”) apply when you as a consumer (the “Customer”) place an order via www.printinc.shop and related pages, (the “Website”). The agreement is concluded between you and Company, company reg. no.xxxxx. Detailed contact information and other information about Printinc are set forth on the Website. The General Conditions are only applicable for Customers that are consumers.</p>
                        <p>1.2 The Customer must be minimum 18 years old to order via the Website. Printinc does not, in accordance with Latvian law, accept any credit purchases to persons below 18 years of age. Printinc reserves the right to deny or change a Customer’s order (e.g. if the Customer has provided incorrect personal data and/or has any record for non-payment of debt).</p>
                        <p>1.3 Printinc shall have no liability in case products are sold out, nor for image or typographical errors on the Website, e.g. errors in the product description or technical specification, inaccurate prices and price adjustments (such as changed prices from suppliers, change in currencies) or incorrect information with regards to whether a product is in stock. Printinc is entitled to rectify any such errors and, at any time, to change or update the information. If an inaccurate price has been stated for a product ordered by the Customer, Printinc will naturally notify the Customer accordingly and await the Customer’s approval of the amended price prior to Printinc continuing with the order process. All images on the Website shall be considered solely as illustrations. Such illustrations do not guarantee to reproduce the exact appearance, function or origin of the product.</p>
                        <p>1.4 The Website and all its content is owned by Printinc. The information is protected by intellectual property and marketing legislation. This means that trademarks, company names, product names, images and graphics, design, layout and information about products, services and other content may not be copied or used without the prior written consent of Printinc.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">2. CONTRACTS AND ORDERS</h2>
                        <p>2.1 In order to place an order through the Website, the Customer must accept the General Conditions. By accepting the General Conditions, the Customer undertakes to comply with the General Conditions in its entirety and acknowledges that he/she has read the information on personal data and cookies and consents to the use according to Printinc’s Privacy Policy set forth here.</p>
                        <p>2.2 A purchase agreement is concluded when Printinc has confirmed the Customer’s order and the Customer has received an order confirmation from Printinc via email. Printinc encourages the Customer to save the order confirmation for any future contacts with Printinc’s customer service regarding the order. The Customer is entitled to cancel its order up until it has been confirmed by Printinc.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">3. CUSTOMER INFORMATION ETC.</h2>
                        <p>3.1 When the Customer registers its user account and/or places an order, the Customer will be requested to provide some personal data. The Customer confirms that the information provided is correct and complete and is responsible for any errors in the information provided. Information about Printinc’s processing of personal data is set forth in Printinc’s Privacy Policy, which constitutes an integral part of these General Conditions.</p>
                        <p>3.2 The Customer undertakes to ensure that no one, except the Customer, uses the Customer’s log-in details. The Customer may not disclose its username or password to any person and shall ensure that any documentation with information about username and password is kept in such a way that unauthorised persons may not access the information. The Customer shall notify Printinc without delay if it may be suspected that any unauthorised person has obtained access to the Customer’s password. The Customer is responsible for all purchases made with the Customers log-in details if the Customer has not provided such notification.</p>
                        <p>3.3 If Printinc suspects that the Customer abuses its user account or its log-in details or otherwise violates the General Conditions, Printinc is entitled to block the Customer’s access to its user account. Printinc is furthermore entitled to assign new log-in details to the Customer.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">4. PRICES, FEES AND PAYMENT</h2>
                        <p>The prices stated on the Website apply to orders placed on the Website. All prices are presented in € and do not include payment, which are given separately. 25% VAT is not included in the product price for the EU countries.</p>
                        <p>The Customer can pay for its purchase in the manner specified on the Website. Printinc is entitled to charge the Customer already in connection with the order. Printinc reserves the right not to offer all payment methods at all times, alternatively change payment method if the payment method the Customer has selected does not work, for whichever reasons, at the time of fulfilment of the order. Please note that limitations of available payment methods are set forth on the Website.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">8. DELIVERY AND SHIPPING</h2>
                        <p>Since we offer digital products only, items in stock are normally delivered within the 1 working day set forth on the Website (Usually in a few minutes). If you haven not received your order within the delivery time advertised, please contact our Customer Service no longer than 30 working days after the order was placed.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">9. RIGHT OF WITHDRAWAL</h2>
                        <p>By accepting the General Conditions, the Customer acknowledges and agrees that the right of withdrawal is not valid for any digital content delivered.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">10. FORCE MAJEURE</h2>
                        <p>Printinc is not liable for any delays caused by circumstances beyond Printinc’s control, e.g. technical problems, defects in power- /tele-/computer communications or other communication and defects or delays in the service due to circumstances set forth above. Such circumstances shall result in relief from damages and other measures. If any such situation should arise, Printinc shall inform the Customer accordingly both at the beginning and the end of the period for the current situation.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">13. CHANGES TO THE GENERAL CONDITIONS</h2>
                        <p>Printinc reserves the right to change these General Conditions at all times. Any changes to these General Conditions will be posted on the Website. Changes will become valid once the Customer has accepted the General Conditions (in connection with a new purchase or while browsing the Website), alternatively 30 days after Printinc has informed the Customer of the changes. However, Printinc recommends that the Customer regularly remains updated on the Website in order to become aware of any changes to the General Conditions.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">14. SEVERABILITY</h2>
                        <p>If any provision of this Agreement is held to be invalid or unenforceable by any competent court, authority or arbitral tribunal, the remainder of that provision and all other provisions will remain valid and enforceable to the fullest extent permitted by applicable law. Any provisions determined invalid or unenforceable will be substituted by relevant legal guidance and advice.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">15. APPLICABLE LAW AND DISPUTE RESOLUTIONS</h2>
                        <p>Printinc shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in this Agreement, in the event that printinc.shop are deemed liable to you for breach of this Agreement, you agree that printinc.shop liability is limited to the amount actually paid by you for your services, which amount calculated in reliance upon this clause. You hereby release Printinc from any and all obligations, liabilities and claims in excess of this limitation.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
