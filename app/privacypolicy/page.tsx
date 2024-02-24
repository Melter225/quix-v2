import Image from "next/image";


export default function Terms() {
  return (
    <main>
      <div>
        <header className="text-gray-200 bg-navy mt-0 font-poppins fixed w-screen z-50">
            <div className="container mx-auto flex-wrap p-5 flex-col md:flex-row items-center hidden md:flex">
                <p className="flex font-medium items-center text-gray-200 mb-4 md:mb-0">
                    <Image src="/QuixLogo.png" alt="Logo" width={32} height={29}></Image>
                    <a className="ml-3 text-xl text-gray-300 cursor-pointer" href="/">Quix</a>
                </p>
                
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-200 flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/features">Features</a>
                    <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/about">About</a>
                    <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/billing">Billing</a>
                </nav>
                <a className="inline-flex items-center border-2 border-gray-200 hover:bg-gray-400 hover:text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-4 mr-8 md:mt-0 cursor-pointer transition-colors duration-500" href="/signin">Login</a>
                <a className="inline-flex items-center border-2 border-gray-200 bg-gray-400 text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-4 mr-8 md:mt-0 cursor-pointer transition-colors duration-300" href="/signup">Signup</a>
            </div>

            <div id="container" className="flex-wrap py-5 flex-row items-center md:hidden w-screen bg-primary">
                <div className="flex items-center w-full text-gray-300">
                    <Image src="/QuixLogo.png" alt="Logo" className="ml-8" width={32} height={29}></Image>
                    <a className="ml-3 text-xl text-gray-300 cursor-pointer" href="/">Quix</a>
                    <div className="ml-auto mr-8">
                      <a className="inline-flex items-center border-2 border-gray-200 hover:bg-gray-400 hover:text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-0 md:mt-0 cursor-pointer transition-colors duration-500 mr-8" href="/signin">Login</a>
                      <a className="inline-flex items-center border-2 border-gray-200 bg-gray-400 text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-0 md:mt-0 cursor-pointer transition-colors duration-300 mr-2" href="/signup">Signup</a>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col text-gray-200">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4">At Quix, your privacy is important to us. This Privacy Policy governs the manner in which Quix collects, uses, maintains, and discloses information collected from users (each, a "User") of the Quix platform ("Quix" or the "Service"). This privacy policy applies to the Service and all products and services offered by Quix.  By accessing or using the Service in any manner, including, but not limited to, visiting or browsing the Service or contributing content or other materials to the Service, you agree to be bound by this Privacy Policy. If you do not agree to this Privacy Policy, please do not use the Service.</p>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
                    <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, respond to a survey, and in connection with other activities, services, features, or resources we make available on our Service. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information. Users may, however, visit our Service anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Service-related activities. We may also collect non-personal identification information about Users whenever they interact with our Service. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Service, such as the operating system and the Internet service providers utilized and other similar information.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
                    <p>The Cookies section outlines Quix's use of cookies and similar technologies to enhance user experience, analyze usage patterns, and personalize content and advertisements. By accessing or using Quix, users consent to the use of cookies in accordance with this policy. Cookies are small text files stored on a user's device when they interact with the Quix platform. These files contain information such as session identifiers, preferences, and browsing history, which are utilized to facilitate various functions and features. Quix uses cookies for several purposes, including but not limited to:</p>
                    <ul className="list-disc pl-6">
                        <li>Improving website functionality and performance</li>
                        <li>Customizing content and advertisements based on user preferences</li>
                        <li>Tracking user interactions and behavior within the platform</li>
                        <li>Providing targeted marketing and promotional campaigns</li>
                    </ul>
                    <p>Users may have the option to manage or disable cookies through their browser settings; however, please note that certain features of Quix may not function properly without cookies enabled. By continuing to use Quix, users acknowledge and consent to the use of cookies as described herein. Quix additionally endeavors to keep the information stored in cookies secure to the best of our ability.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
                    <p>Quix collects and processes your personal information to ensure the best possible experience for you on our platform through methods such as providing and improving our services, personalizing your experience, and ensuring the security and integrity of our platform. Quix employs your information in a variety of ways, including but not limited to:</p>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Personalization:</strong> We tailor your experience by using your information to provide personalized content, recommendations, and features.
                      </li>
                      <li>
                        <strong>Communication:</strong> We may use your contact information to communicate with you about updates, announcements, and relevant offers or promotions.
                      </li>
                      <li>
                        <strong>Improvement:</strong> Your feedback and usage data help us improve our services and develop new features to better meet your needs.
                      </li>
                      <li>
                        <strong>Security:</strong> We employ your information to safeguard our platform and your account, detecting and preventing fraud, abuse, or security incidents.
                      </li>
                      <li>
                        <strong>Analytics:</strong> We analyze your interactions with our platform to understand usage patterns, trends, and areas for improvement.
                      </li>
                    </ul>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Information Sharing</h2>
                    <p>Quix values your privacy and does not sell, trade, or rent Users personal identification information to others. However, there are instances where we may need to share your information for specific purposes, including but not limited to:</p>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Service Providers:</strong> We engage trusted third-party service providers to assist us in delivering our services, such as hosting, analytics, and customer support. These providers are contractually bound to use your information only for the intended purposes and to maintain its confidentiality.
                      </li>
                      <li>
                        <strong>Legal Obligations:</strong> We may disclose your information to comply with applicable laws, regulations, legal processes, or governmental requests, or to protect the rights, property, or safety of Quix, its users, or others.
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will ensure appropriate safeguards are in place to protect your information during such transfers.
                      </li>
                      <li>
                        <strong>With Your Consent:</strong> We may share your information with third parties for other purposes not described in this Privacy Policy with your consent or as otherwise required or permitted by law.
                      </li>
                    </ul>
                    <p>
                      Additionally, we may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers to better understand our audience and improve our services.
                    </p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
                    <p>As a user of Quix, you have certain rights regarding your personal information, including the right to:</p>
                    <ul className="list-disc ml-8">
                      <li><strong>Access:</strong> You have the right to access and obtain a copy of your personal information that we hold.</li>
                      <li><strong>Rectification:</strong> You can request the correction of any inaccuracies in your personal data.</li>
                      <li><strong>Erasure:</strong> You have the right to request the deletion of your personal information under certain circumstances.</li>
                      <li><strong>Restriction of Processing:</strong> You can request that we restrict the processing of your personal data.</li>
                      <li><strong>Object to Processing:</strong> You have the right to object to the processing of your personal information.</li>
                      <li><strong>Data Portability:</strong> You can request a copy of your personal data in a structured, commonly used, and machine-readable format.</li>
                      <li><strong>Withdraw Consent:</strong> If we rely on your consent to process your personal information, you have the right to withdraw that consent at any time.</li>
                    </ul>
                    <p>If you wish to exercise any of these rights or have any questions about how we handle your personal information, please contact us using the information provided in the "Contact Us" section below.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
                    <p>Quix retains your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. When determining the appropriate retention period for personal data, we consider various factors, including the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process the data, and whether we can achieve those purposes through other means.  In general, we will retain your personal information for as long as your account is active or as needed to provide you with our services. Once your personal information is no longer required for the purposes for which it was collected, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Children's Privacy</h2>
                    <p>Quix is committed to protecting the privacy of children who use our platform. We do not knowingly collect personal information from children under the age of 13, excluding instances in which it is necessary for the operation of our service. Parents or guardians play a crucial role in safeguarding their children's online privacy, and we encourage parents or guardians to actively monitor and supervise their children's online activities to ensure a safe and secure browsing experience. We may collect personal information from children as is necessary for the operation of our platform, such as account creation, authentication, and purchasing a billing plan. We do not, however, collect sensitive information from children, such as their home address.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Modifications</h2>
                    <p>The Modifications section outlines Quix's right to modify or update this Privacy Policy at any time. Users are notified of their responsibility to review this policy regularly for any changes or updates. Quix reserves the right to modify or revise this Privacy Policy at any time, without prior notice or liability, to reflect changes in the platform, legal requirements, or business operations. It is the user's responsibility to review this policy regularly for any updates or modifications. By continuing to access or use Quix after any revisions to this Privacy Policy, users acknowledge and agree to be bound by the updated terms. If users do not agree with the modifications, they must discontinue their use of Quix and terminate their account. Quix may provide notice of significant changes to this policy through email or by posting a prominent notice on the platform. However, it is ultimately the user's responsibility to stay informed about any updates or modifications to the Privacy Policy.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwdTZzNQPDKVNNJHlGPQXSjBwssqHVtKnbLdjCCzRkTJPDsQbNmcsRWLFRxzDHLGKMhVV" className="text-blue-400">community.quix@gmail.com</a>. We value your feedback and strive to address any inquiries or issues promptly and effectively. Your input helps us improve the Quix platform and provide a better experience for all users.</p>
                </div>
            </div>
        </section>
        <footer className="bg-navy mb-0 text-gray-200 font-poppins">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <p className="flex font-medium items-center md:justify-start justify-center text-gray-200">
                <Image src="/QuixLogo.png" alt="Logo" width={32} height={29}></Image>
                <a className="ml-3 text-xl cursor-pointer" href="/">Quix</a>
              </p>
              <p className="mt-4 text-base w-full text-gray-200">Pioneering Tomorrow's Education</p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-300 tracking-widest text-sm mb-3">QUIX</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/about">About</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/billing">Billing</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/contact">Contact</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-300 tracking-widest text-sm mb-3">LEGAL</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/termsofservice">Terms of Service</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/privacypolicy">Privacy Policy</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-300 tracking-widest text-sm mb-3">FEATURES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/personalization">Personalization</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/interactivity">Interactivity</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/performance">Performance Insights</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/partnerships">Partnerships</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/ai">Quix AI</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-navydark">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-200 text-sm text-center sm:text-left">© 2024 Quix —
                <a href="https://twitter.com/melter225" rel="noopener noreferrer" className="text-gray-200 ml-1 hover:text-gray-300 cursor-pointer" target="_blank">@melter225</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-200">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-200">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-200">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-200">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}