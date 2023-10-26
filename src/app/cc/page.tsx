import React from 'react';
import { Metadata } from 'next';
import Nav from '@modules/layout/templates/nav';
import Footer from '@modules/layout/templates/footer';

export const metadata: Metadata = {
    title: 'Cookies Policy',
};

const Cookies = () => {
    return (
        <>
            <Nav />
            <main className="bg-gray-100 py-12">
                <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6 prose prose-blue">
                    <h1 className="text-3xl font-bold mb-6 border-b pb-3 text-center text-slate-800">COOKIES</h1>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">WHAT IS A COOKIE?</h2>
                        <p>A cookie is a small text file that is saved on your computer when visiting a website. Print Inc uses the information for statistical purposes, to track visitor activity on the page, and to improve and personalise the website user experience. There are two types of cookies – persistent and session cookies.</p>
                        <ol>
                            <li>Persistent cookies remain on visitors computer for a set amount of time.</li>
                            <li>A session cookie is stored on visitors computer for the duration of time they browse a website. As soon as the web browser is closed, the session cookie is deleted.</li>
                        </ol>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">HOW ARE COOKIES USED?</h2>
                        <p>Printinc uses cookies to improve and tailor the website for optimal user experience. Examples of functions affected by cookies include: order fulfillment, login, and your shopping cart. Cookies also save certain information that helps us target your preferences, in order to provide you with the most relevant ads and offers.</p>
                        <p>We use Google Analytics and it may associate the visitation information that it collects with Google information from accounts of signed-in users (on Google) who have consented to this association for the purpose of ads personalisation. This Google information may include end user location, search history, YouTube history and data from sites that partner with Google – and is used to provide us with aggregated and anonymised insights about users' cross device behaviours. When using our site and accepting our tracking and cookie handling you acknowledge such association. You can access and/or delete such information via Google's My Activity.</p>
                        <p>Persistent cookies are used to e.g. save potential personal settings that you have chosen when browsing printinc.shop, so that you can skip this step on consecutive visits. Session cookies are used to collect statistics on website usage.</p>
                        <p>By using Printinc website and/or agreeing to our Privacy and Confidentiality Policy and cookie information, you consent to our use of cookies. Please note that if you choose not to accept cookies by blocking/disabling them, you will not be able to purchase items from printinc.shop. Additional site functionality may also be limited.</p>
                        <p>If you choose to not accept cookies, you may turn off cookies under the security settings on your browser. Also note that you can manually delete cookies from your hard drive at any time.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">HOW DO I REMOVE COOKIES?</h2>
                        <p>If you do not wish to use cookies, these can be turned off under the Settings tab on your web browser (see browser’s Help pages for more information). Cookies from other sites can also be deleted from your browser.</p>
                        <p>Remove cookies, PC: use keyboard shortcut [CTRL]+[SHIFT]+[Delete].</p>
                        <p>Remove cookies, MAC:</p>
                        <ul>
                            <li>Google Chrome</li>
                            <li>Internet Explorer</li>
                            <li>Safari</li>
                            <li>Mozilla Firefox</li>
                            <li>Opera</li>
                            <li>Flash cookies</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">WHAT COOKIES ARE USED AT printinc.shop?</h2>
                        <h3>BASIC FUNCTIONALITY:</h3>
                        <p>Printinc’s e-commerce platform set cookies in order for basic functionality of the site to work- check out, shopping cart etc.</p>
                        <h3>ADVERTISING & MARKETING:</h3>
                        <ul>
                            <li>Commision Junction ads - a cookie is set and a pixel is used to track your journey and experience on our websites in order to personalise the content of Commision Junction's advertising programme.</li>
                            <li>Google Adwords - a cookie is set, and a pixel is used to track your journey and experience on our websites in order to customise the content of Google Adwords' program and to optimize the advertising on the Google Ads platform.</li>
                            <li>Facebook ads - a cookie is set, and a pixel is used to track your journey and experience on our websites in order to customise the content of Facebook’s ad program and to optimize the advertising on Facebook's platforms.</li>
                            <li>Google Dynamic Remarketing- used for remarketing.</li>
                            <li>SendGrid – a cookie is set, and a pixel is used to track your journey and experience on our websites in order to optimise the email notifications.</li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Cookies;
