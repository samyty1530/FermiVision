import React from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "./layout/MainLayout";

const TermsOfService = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          {currentLanguage === "en" ? "Terms of Service" : "使用条款"}
        </h1>

        <div className="prose max-w-none text-gray-700">
          {currentLanguage === "en" ? (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing and using Fermi Vision's website and services, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms of Service. If you do not agree with any
                part of these terms, you may not use our services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. Use of Services
              </h2>
              <p className="mb-4">
                Fermi Vision provides technology solutions and services for
                business purposes. You agree to use these services only for
                their intended purposes and in compliance with all applicable
                laws and regulations.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Intellectual Property
              </h2>
              <p className="mb-4">
                All content on this website, including but not limited to text,
                graphics, logos, images, software, and technology solutions, is
                the property of Fermi Vision and is protected by intellectual
                property laws. You may not reproduce, distribute, modify, or
                create derivative works without our explicit permission.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Limitation of Liability
              </h2>
              <p className="mb-4">
                Fermi Vision shall not be liable for any direct, indirect,
                incidental, special, or consequential damages resulting from the
                use or inability to use our services or for the cost of
                procurement of substitute services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                5. Changes to Terms
              </h2>
              <p className="mb-4">
                Fermi Vision reserves the right to modify these terms at any
                time. Changes will be effective immediately upon posting on our
                website. Your continued use of our services after any changes
                indicates your acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                6. Governing Law
              </h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which Fermi Vision
                operates, without regard to its conflict of law provisions.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. 条款接受</h2>
              <p className="mb-4">
                通过访问和使用费米视觉的网站和服务，您确认已阅读、理解并同意受这些服务条款的约束。如果您不同意这些条款的任何部分，请勿使用我们的服务。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. 服务使用</h2>
              <p className="mb-4">
                费米视觉提供用于商业目的的技术解决方案和服务。您同意仅将这些服务用于其预期目的，并遵守所有适用的法律和法规。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. 知识产权</h2>
              <p className="mb-4">
                本网站上的所有内容，包括但不限于文本、图形、标志、图像、软件和技术解决方案，均为费米视觉的财产，受知识产权法保护。未经我们明确许可，您不得复制、分发、修改或创建衍生作品。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. 责任限制</h2>
              <p className="mb-4">
                费米视觉不对因使用或无法使用我们的服务或替代服务的采购成本而导致的任何直接、间接、偶然、特殊或后果性损害负责。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. 条款变更</h2>
              <p className="mb-4">
                费米视觉保留随时修改这些条款的权利。变更将在我们的网站上发布后立即生效。在任何变更后继续使用我们的服务表示您接受修改后的条款。
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. 适用法律</h2>
              <p className="mb-4">
                这些条款应受费米视觉运营所在司法管辖区的法律管辖并按其解释，不考虑其法律冲突规定。
              </p>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
