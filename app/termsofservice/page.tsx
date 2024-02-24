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
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p className="mb-4">These Terms of Service ("Terms") govern your access to and use of the Quix website and services ("Quix" or the "Service"). Quix is located at quixedu.com, but its services may extend beyond this specific domain. By accessing or using Quix, you agree to be bound by these Terms of Service. If you do not agree with these Terms of Service, please do not use the Service.</p>


            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Definitions</h2>
                <p>In this section, we define key terms used throughout these Terms of Service to ensure clarity and understanding for all users of Quix. The definitions provided herein establish a common understanding of the terminology used within the context of this agreement.</p>
                <p>Key terms include but are not limited to:</p>
                <ul className="list-disc pl-6">
                    <li><strong>User:</strong> Any individual who accesses or uses the Quix platform, including but not limited to students, educators, administrators, and other authorized personnel.</li>
                    <li><strong>Account:</strong> A unique identifier associated with a user's access to Quix, typically created upon registration or sign-up, containing personal information and settings.</li>
                    <li><strong>Content:</strong> Any information, data, text, images, videos, or other materials uploaded, shared, or accessed by users within the Quix platform.</li>
                    <li><strong>Platform:</strong> The digital environment provided by Quix, including its website, applications, and associated services, accessible via various devices and web browsers.</li>
                    <li><strong>Subscription:</strong> An agreement between Quix and a user, granting access to premium features or services in exchange for recurring payments at specified intervals.</li>
                    <li><strong>Billing Plan:</strong> A predefined package or tier of services offered by Quix, typically associated with specific pricing and features, available for users to subscribe to.</li>
                    <li><strong>Personal Information:</strong> Data that can be used to identify or contact an individual user, including but not limited to name, email address, phone number, and billing information.</li>
                    <li><strong>Cookies:</strong> Small text files stored on a user's device by the Quix platform, used to enhance user experience, track usage patterns, and customize content and advertisements.</li>
                    <li><strong>Intellectual Property:</strong> Creations of the mind, such as inventions, literary and artistic works, designs, symbols, names, and images, protected by copyright, trademark, and patent laws.</li>
                    <li><strong>Termination:</strong> The cessation or discontinuation of a user's access to the Quix platform, either voluntarily or involuntarily, due to violation of terms or other reasons.</li>
                    <li><strong>Jurisdiction:</strong> The geographical area or legal territory within which laws and regulations are applicable, governing the rights and obligations of individuals and organizations.</li>
                </ul>
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
                    <p>Users may have the option to manage or disable cookies through their browser settings; however, please note that certain features of Quix may not function properly without cookies enabled. By continuing to use Quix, users acknowledge and consent to the use of cookies as described herein. For more information on how Quix collects, uses, and protects personal information, please refer to our Privacy Policy.</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">License</h2>
                    <p>The License section outlines the terms under which users are granted permission to access and use the Quix platform. It establishes the scope of the license, the limitations imposed on users, and the conditions governing their use of the Service. This license grants users the right to access and use Quix for personal, non-commercial purposes. Users may view, download, and print content from the platform solely for their own use, subject to the restrictions and limitations imposed by these Terms of Service. It is important to note that this license does not grant users any rights to intellectual property owned by Quix. All rights, title, and interest in and to the platform, including any content, features, and functionality, remain the exclusive property of Quix and its licensors. By accessing or using Quix, users agree to abide by the terms of this license and to refrain from engaging in any activities that would violate or infringe upon the rights of Quix. Failure to comply with these terms may result in the termination of the license and/or other legal consequences.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
                    <p>The User Responsibilities section delineates the obligations and expectations placed upon users when utilizing the Quix platform. Users are required to adhere to certain guidelines and standards of conduct to ensure a safe and respectful environment for all. Users must conduct themselves in a manner consistent with the values and principles of Quix, including honesty, integrity, and respect for others. They are responsible for their actions and interactions within the platform, including the content they create, share, or interact with. Additionally, users must comply with all applicable laws and regulations governing their use of Quix. This includes respecting the intellectual property rights of others, refraining from engaging in illegal activities or harmful behavior, and safeguarding their account credentials and personal information. By accepting these Terms of Service, users acknowledge their responsibility to contribute to a positive and constructive community environment within Quix. Failure to adhere to these responsibilities may result in disciplinary action, including account suspension or termination. It is imperative for users to familiarize themselves with their responsibilities and obligations outlined in this section to ensure a mutually beneficial and harmonious experience for all members of the Quix community.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Prohibited Conduct</h2>
                    <p>The Prohibited Conduct section enumerates behaviors and actions that are strictly prohibited when interacting with Quix. By outlining these prohibitions, we aim to maintain a secure and lawful environment conducive to positive user experiences. Users are prohibited from engaging in any activity that violates the rights of others, infringes upon intellectual property, promotes hate speech or discrimination, or constitutes illegal or harmful behavior. This includes but is not limited to:</p>
                    <ul className="list-disc ml-8">
                      <li>Harassment, bullying, or intimidation of others</li>
                      <li>Spamming, phishing, or other forms of malicious activity</li>
                      <li>Posting or sharing explicit or inappropriate content</li>
                      <li>Attempting to access unauthorized areas of the platform</li>
                      <li>Impersonating others or misrepresenting oneself</li>
                    </ul>
                    <p>Any violation of these prohibitions may result in disciplinary action, including account suspension or termination, and may also be subject to legal consequences. Users are expected to adhere to these guidelines to maintain a positive and respectful community environment within Quix.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
                    <p>The Intellectual Property section outlines the rights and protections afforded to intellectual property owned or licensed by Quix. Users are expected to respect these rights and refrain from infringing upon the intellectual property of others. Quix retains all rights, title, and interest in and to its intellectual property, including but not limited to trademarks, logos, copyrights, and proprietary technology. Users are granted a limited, non-exclusive license to use Quix and its content for personal and non-commercial purposes, subject to the terms of this agreement. Users are prohibited from reproducing, distributing, modifying, or creating derivative works based on Quix's intellectual property without explicit permission. Any unauthorized use or infringement of Quix's intellectual property may result in legal action and the termination of access to the platform. Additionally, users are responsible for respecting the intellectual property rights of others when using Quix. They must obtain appropriate permissions or licenses before using or sharing third-party content and respect any restrictions or conditions imposed by the content owner. By accepting these Terms of Service, users acknowledge and agree to respect the intellectual property rights of Quix and third parties, and to refrain from any unauthorized use or infringement of intellectual property within the platform.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
                    <p>The Limitation of Liability section outlines Quix's disclaimer of liability for damages that may arise from the use of the platform. Quix shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in any way connected with the use or inability to use the Quix platform, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, even if Quix has been advised of the possibility of such damages. Users agree that their use of Quix is at their sole risk. In jurisdictions that do not allow the exclusion or limitation of liability for consequential or incidental damages, Quix's liability shall be limited to the maximum extent permitted by law. This limitation of liability applies to all claims, whether based on warranty, contract, tort, or any other legal theory, arising out of or in connection with the use or performance of Quix or any information or services provided through the platform.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Warranty</h2>
                    <p>The Warranty section disclaims all warranties of any kind, whether express or implied, relating to the Quix platform. Quix makes no representations or warranties about the accuracy, reliability, completeness, or timeliness of the platform or any content therein. Users acknowledge and agree that their use of the platform is at their own risk. Quix expressly disclaims any and all warranties, including but not limited to warranties</p>
                    <ul className="list-disc ml-8">
                      <li>Of merchantability</li>
                      <li>Of fitness for a particular purpose</li>
                      <li>Of non-infringement</li>
                      <li>Of title</li>
                      <li>Of uninterrupted use or availability</li>
                      <li>Of accuracy or completeness of content</li>
                      <li>Of security or reliability of the platform</li>
                      <li>Against viruses or malware</li>
                      <li>Against unauthorized access or use</li>
                      <li>Against errors or defects in the service</li>
                      <li>Against loss of data or damage to devices</li>
                    </ul>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Indemnity</h2>
                    <p>The Indemnity section outlines users' obligations to indemnify and hold Quix harmless from any claims, damages, losses, liabilities, and expenses arising out of or in connection with their use of the service. Users agree to indemnify, defend, and hold harmless Quix, its affiliates, partners, officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, demands, actions, losses, liabilities, damages, costs, and expenses, including attorneys' fees, arising out of or in connection with their use of the service, violation of these Terms of Service, or infringement of any third-party rights. This indemnity obligation shall survive the termination or expiration of these Terms of Service and users' use of the service. Quix reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by users. In such cases, users agree to cooperate with Quix in asserting any available defenses. Users acknowledge that Quix has no obligation to monitor the content uploaded, posted, or transmitted through the service, but reserves the right to do so. Quix may remove or refuse to publish any content that violates these Terms of Service or is otherwise objectionable, in its sole discretion.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Reporting Inappropriate Content</h2>
                    <p>The Reporting Inappropriate Content section outlines the process for users to report objectionable material found within Quix. Quix strives to provide a safe and respectful environment for all users. If you encounter content on the platform that you believe is inappropriate, offensive, or violates our community guidelines, we encourage you to report it to us. Users can report inappropriate content by contacting us at <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwdTZzNQPDKVNNJHlGPQXSjBwssqHVtKnbLdjCCzRkTJPDsQbNmcsRWLFRxzDHLGKMhVV" className="text-blue-400">community.quix@gmail.com</a>. Please provide detailed information about the content in question, including its location within the platform and the reason for your concern. We take all reports seriously and may review them; additionally, please note that Quix reserves the right to investigate and take appropriate action, including removing or restricting access to the reported content, at our sole discretion. However, we are not obligated to respond to or act upon every report received. By reporting inappropriate content, users help us maintain a positive and welcoming community environment within Quix. We appreciate your cooperation and commitment to upholding our community standards.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Termination</h2>
                    <p>The Termination section outlines the circumstances under which Quix may terminate or suspend a user's access to the platform. Users are provided with insight into the reasons for termination and the associated consequences. Quix reserves the right to suspend or terminate a user's access to the platform at any time, without prior notice or liability, for any reason deemed appropriate by Quix. This includes but is not limited to:</p>
                    <ul className="list-disc ml-8">
                    <li>Violation of these Terms of Service</li>
                    <li>Engaging in prohibited conduct or illegal activity</li>
                    <li>Breaching the terms of the license agreement</li>
                    <li>Failure to comply with user responsibilities or community guidelines</li>
                    </ul>
                    <p>Upon termination, users will lose access to all features and content within Quix, and any outstanding subscriptions or payments will be forfeited. Users may also be subject to legal action or other consequences for any violations of the Terms of Service. Users are encouraged to review these terms regularly to ensure compliance and avoid any actions that may lead to termination or suspension of their account.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Modifications</h2>
                    <p>The Modifications section outlines Quix's right to modify or update these Terms of Service at any time. Users are notified of their responsibility to review these terms regularly for any changes or updates. Quix reserves the right to modify or revise these Terms of Service at any time, without prior notice or liability, to reflect changes in the platform, legal requirements, or business operations. It is the user's responsibility to review these terms regularly for any updates or modifications. By continuing to access or use Quix after any revisions to these Terms of Service, users acknowledge and agree to be bound by the updated terms. If users do not agree with the modifications, they must discontinue their use of Quix and terminate their account. Quix may provide notice of significant changes to these terms through email or by posting a prominent notice on the platform. However, it is ultimately the user's responsibility to stay informed about any updates or modifications to the Terms of Service.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
                    <p>The Governing Law section specifies the laws and regulations that govern the interpretation and enforcement of these Terms of Service. It provides clarity on the legal framework within which disputes or conflicts regarding Quix are resolved. These Terms of Service are governed by and construed in accordance with the laws of California, without regard to its conflict of law provisions. Any dispute arising out of or relating to these terms or the use of Quix shall be resolved exclusively by the courts of California. Users agree to submit to the personal jurisdiction of the courts located within California for the purpose of resolving any such dispute and waive any objection to the venue or convenience of such courts. The provisions of the United Nations Convention on Contracts for the International Sale of Goods do not apply to these Terms of Service.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                    <p>If you have any questions or concerns about these Terms of Service, please contact us at <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwdTZzNQPDKVNNJHlGPQXSjBwssqHVtKnbLdjCCzRkTJPDsQbNmcsRWLFRxzDHLGKMhVV" className="text-blue-400">community.quix@gmail.com</a>. We value your feedback and strive to address any inquiries or issues promptly and effectively. Your input helps us improve the Quix platform and provide a better experience for all users.</p>
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