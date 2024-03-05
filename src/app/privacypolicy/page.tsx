import Image from "next/image";


export default function Terms() {
  return (
    <main className="font-poppins">
      <div>
        <section className="font-poppins">
            <div className="container mx-auto flex px-5 pt-12 pb-24 items-center justify-center flex-col text-gray-200">
              <div className="mx-auto max-w-2xl text-center mt-0 mb-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-3">Privacy Policy</h2>
              </div>
                {/* <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4">At Quix, your privacy is important to us. This Privacy Policy governs the manner in which Quix collects, uses, maintains, and discloses information collected from users (each, a &quot;User&quot;) of the Quix platform (&quot;Quix&quot; or the &quot;Service&quot;). This privacy policy applies to the Service and all products and services offered by Quix.  By accessing or using the Service in any manner, including, but not limited to, visiting or browsing the Service or contributing content or other materials to the Service, you agree to be bound by this Privacy Policy. If you do not agree to this Privacy Policy, please do not use the Service.</p> */}


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
                    <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, respond to a survey, and in connection with other activities, services, features, or resources we make available on our Service. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information. Users may, however, visit our Service anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Service-related activities. We may also collect non-personal identification information about Users whenever they interact with our Service. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Service, such as the operating system and the Internet service providers utilized and other similar information.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
                    <p>The Cookies section outlines Quix&apos;s use of cookies and similar technologies to enhance user experience, analyze usage patterns, and personalize content and advertisements. By accessing or using Quix, users consent to the use of cookies in accordance with this policy. Cookies are small text files stored on a user&apos;s device when they interact with the Quix platform. These files contain information such as session identifiers, preferences, and browsing history, which are utilized to facilitate various functions and features. Quix uses cookies for several purposes, including but not limited to:</p>
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
                    <p>If you wish to exercise any of these rights or have any questions about how we handle your personal information, please contact us using the information provided in the &quot;Contact Us&quot; section below.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
                    <p>Quix retains your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. When determining the appropriate retention period for personal data, we consider various factors, including the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process the data, and whether we can achieve those purposes through other means.  In general, we will retain your personal information for as long as your account is active or as needed to provide you with our services. Once your personal information is no longer required for the purposes for which it was collected, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Children&apos;s Privacy</h2>
                    <p>Quix is committed to protecting the privacy of children who use our platform. We do not knowingly collect personal information from children under the age of 13, excluding instances in which it is necessary for the operation of our service. Parents or guardians play a crucial role in safeguarding their children&apos;s online privacy, and we encourage parents or guardians to actively monitor and supervise their children&apos;s online activities to ensure a safe and secure browsing experience. We may collect personal information from children as is necessary for the operation of our platform, such as account creation, authentication, and purchasing a billing plan. We do not, however, collect sensitive information from children, such as their home address.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Modifications</h2>
                    <p>The Modifications section outlines Quix&apos;s right to modify or update this Privacy Policy at any time. Users are notified of their responsibility to review this policy regularly for any changes or updates. Quix reserves the right to modify or revise this Privacy Policy at any time, without prior notice or liability, to reflect changes in the platform, legal requirements, or business operations. It is the user&apos;s responsibility to review this policy regularly for any updates or modifications. By continuing to access or use Quix after any revisions to this Privacy Policy, users acknowledge and agree to be bound by the updated terms. If users do not agree with the modifications, they must discontinue their use of Quix and terminate their account. Quix may provide notice of significant changes to this policy through email or by posting a prominent notice on the platform. However, it is ultimately the user&apos;s responsibility to stay informed about any updates or modifications to the Privacy Policy.</p>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwdTZzNQPDKVNNJHlGPQXSjBwssqHVtKnbLdjCCzRkTJPDsQbNmcsRWLFRxzDHLGKMhVV" className="text-blue-400">community.quix@gmail.com</a>. We value your feedback and strive to address any inquiries or issues promptly and effectively. Your input helps us improve the Quix platform and provide a better experience for all users.</p>
                </div>
            </div>
        </section>
      </div>
    </main>
  );
}