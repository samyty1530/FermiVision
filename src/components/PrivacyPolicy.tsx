import React from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "./layout/MainLayout";
import Breadcrumbs from "./layout/Breadcrumbs";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <MainLayout>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: currentLanguage === "en" ? "Privacy Policy" : "隐私政策" },
        ]}
      />

      <div className="container mx-auto pt-[180px] pb-12 px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-12 text-gray-900">
          {currentLanguage === "en" ? "Privacy Policy" : "隐私政策"}
        </h1>

        <div className="prose max-w-none text-gray-700">
          {currentLanguage === "en" ? (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Information Collection
              </h2>
              <p className="mb-4">
                Fermi Vision collects information that you provide directly to
                us, such as when you create an account, contact us for customer
                support, or fill out forms on our website. This may include your
                name, email address, phone number, company information, and any
                other information you choose to provide.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. Use of Information
              </h2>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you about products,
                services, and events, and to respond to your inquiries and
                requests. We may also use the information for research and
                analytical purposes to better understand how users interact with
                our services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Information Sharing
              </h2>
              <p className="mb-4">
                Fermi Vision does not sell or rent your personal information to
                third parties. We may share your information with service
                providers who perform services on our behalf, such as hosting
                our website or processing payments. We may also disclose your
                information if required by law or to protect our rights and the
                safety of our users.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures
                to protect the security of your personal information. However,
                no method of transmission over the Internet or electronic
                storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                5. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information, such as the right to
                access, correct, or delete your data. To exercise these rights,
                please contact us using the information provided at the end of
                this policy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                6. Changes to Privacy Policy
              </h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on our
                website. Your continued use of our services after such
                modifications will constitute your acknowledgment of the
                modified policy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                7. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our data
                practices, please contact us at info@fermivision.com.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. 信息收集</h2>
              <p className="mb-4">
                费米视觉收集您直接提供给我们的信息，例如当您创建账户、联系我们获取客户支持或填写我们网站上的表格时。这可能包括您的姓名、电子邮件地址、电话号码、公司信息以及您选择提供的任何其他信息。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. 信息使用</h2>
              <p className="mb-4">
                我们使用收集的信息来提供、维护和改进我们的服务，与您沟通有关产品、服务和活动的信息，并回应您的询问和请求。我们还可能将这些信息用于研究和分析目的，以更好地了解用户如何与我们的服务互动。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. 信息共享</h2>
              <p className="mb-4">
                费米视觉不会向第三方出售或出租您的个人信息。我们可能会与代表我们执行服务的服务提供商共享您的信息，例如托管我们的网站或处理付款。如果法律要求或为了保护我们的权利和用户的安全，我们也可能会披露您的信息。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. 数据安全</h2>
              <p className="mb-4">
                我们实施适当的技术和组织措施来保护您个人信息的安全。然而，通过互联网传输或电子存储的方法都不是100%安全的，我们不能保证绝对的安全性。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. 您的权利</h2>
              <p className="mb-4">
                根据您的位置，您可能对您的个人信息拥有某些权利，例如访问、更正或删除您的数据的权利。要行使这些权利，请使用本政策末尾提供的信息联系我们。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                6. 隐私政策变更
              </h2>
              <p className="mb-4">
                我们可能会不时更新此隐私政策。我们将通过在我们的网站上发布新政策来通知您任何变更。在此类修改后继续使用我们的服务将构成您对修改后政策的确认。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. 联系我们</h2>
              <p className="mb-4">
                如果您对此隐私政策或我们的数据实践有任何疑问，请通过info@fermivision.com联系我们。
              </p>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
