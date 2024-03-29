import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Container maxWidth='lg' disableGutters sx={{ mx: 'auto', my: { xs: '2.5rem', sm: '4rem' } }}>
        <div id='back-to-top-anchor'>
          <ScrollToTop />
        </div>

        <Typography variant='body1' sx={{ fontWeight: 600, fontSize: '1.5rem', mb: '1rem', mt: '3rem' }}>
          Privacy Policy
        </Typography>
        <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          Our Privacy Policy was last updated on 12<sup>th</sup> March. This Privacy Policy describes Our policies and
          procedures on the collection, use and disclosure of Your information when You use the Service and tells You
          about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the
          Service. By using the Service, You agree to the collection and use of information in accordance with this
          Privacy Policy.
        </Typography>

        <Typography variant='body1' sx={{ fontWeight: 600, fontSize: '1.25rem', mt: '1.5rem', mb: '1rem' }}>
          Interpretation and Definitions
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: 600 }}>
          Interpretation
        </Typography>

        <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The
          following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: 600, mt: '0.5rem' }}>
          Definitions
        </Typography>

        <Typography variant='body1' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
          For the purposes of this Privacy Policy:
        </Typography>

        <ul style={{ marginLeft: '1.25rem' }}>
          <li>
            <b>"Account"</b> means a unique account created for You to access our Service or parts of our Service.
          </li>
          <li>
            <b>"Application"</b> means the software program provided by the Company downloaded by You on any electronic
            device, named Unbiasly.
          </li>
          <li>
            <b>"Company"</b> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to
            Triverge Insight Private Limited.
          </li>
          <li>
            <b>"Country"</b> refers to India.
          </li>
          <li>
            <b>"Cookies"</b> are small files that are placed on Your computer, mobile device or any other device by a
            website, containing the details of Your browsing history on that website among its many uses.
          </li>
          <li>
            <b>"Device"</b> means any device that can access the Service such as a computer, a cell phone or a digital
            tablet.
          </li>
          <li>
            <b>"Personal Data"</b> is any information that relates to an identified or identifiable individual.
          </li>
          <li>
            <b>"Service"</b> refers to the App.
          </li>
          <li>
            <b>"Service Provider"</b> " means any natural or legal person who processes the data on behalf of the
            Company. It refers to third-party companies or individuals employed by the Company to facilitate the
            Service, to provide the Service on behalf of the Company, to perform services related to the Service or to
            assist the Company in analyzing how the Service is used.
          </li>
          <li>
            <b>"Usage Data"</b> refers to data collected automatically, either generated by the use of the Service or
            from the Service infrastructure itself.
          </li>
          <li>
            <b>"You"</b> means the individual accessing or using the Service, or the company, or other legal entity on
            behalf of which such individual is accessing or using the Service, as applicable.
          </li>
        </ul>

        <Box>
          <Typography variant='body1' sx={{ fontWeight: 600, mt: '1rem' }}>
            COLLECTION OF PERSONAL INFORMATION
          </Typography>
          <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
            Personal information encompasses data that can be used to identify an individual, including but not limited
            to their name and email address. As far as sensitive personal information is concerned, it will carry the
            same definition and meaning within the applicable law from time to time.
          </Typography>
        </Box>

        <Box>
          <Typography variant='body1' sx={{ fontWeight: 600, mt: '1rem' }}>
            TRAFFIC DATA COLLECTED
          </Typography>
          <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
            In order to enhance and maintain the security and functionality of our service, we automatically track and
            collect the following categories of information, including but not limited to:
          </Typography>
          <Typography variant='body1' align='justify' paragraph sx={{ color: '#7C7C7C' }}>
            <b> Domain servers:</b> Domain server information is collected to help us understand how our service is
            accessed, where traffic is originating, and to optimize the performance and reliability of our service. This
            information is essential for maintaining the integrity and security of our service and improving the overall
            user experience. It is collected with a strong commitment to user privacy and data protection.
          </Typography>

          <Typography variant='body1' align='justify' paragraph sx={{ color: '#7C7C7C' }}>
            <b>
              WE DO NOT SHARE THIS DATA WITH THIRD PARTIES UNLESS REQUIRED BY LAW OR FOR SECURITY PURPOSES, AND WE TAKE
              ALL NECESSARY MEASURES TO SAFEGARD THIS INFORMATION IN ACCORDANCE WITH APPLICABLE DATA PROTECTION LAWS AND
              BEST PRACTICES.
            </b>
          </Typography>
        </Box>

        {/* {/* <> */}
        <Typography variant='body1' sx={{ fontWeight: 600, mt: '1rem' }}>
          PERSONAL INFORMATION
        </Typography>
        <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          We collect various types of personal data to provide and improve our service. The types of personal data we
          may collect include, but are not limited to:
        </Typography>

        <ul style={{ marginLeft: '1.25rem' }}>
          <li>Name</li>
          <li>Email address</li>
        </ul>

        <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          It's important to note that the collection and processing of this personal data are based on legal grounds
          that are compliant with
          <b> Indian data protection laws.</b>
          The legal basis for processing personal information under Indian law is primarily governed by the{' '}
          <b> Personal Data Protection Act</b> and any other applicable Indian data protection laws. We collect and
          process personal data based on one or more legal grounds, including but not limited to the necessity of
          processing for the performance of a contract, compliance with a legal obligation, protection of vital
          interests, consent, the performance of a task carried out in the public interest, or the legitimate interests
          pursued by us or a third party. This ensures that your personal information is processed in accordance with
          the law, while providing transparency and clarity about the legal basis for such processing.
        </Typography>
        <Typography variant='body1' align='justify' paragraph sx={{ color: '#7C7C7C' }}>
          <b>
            Our App may include links to third-party websites or applications. Whether a link is present or not does not
            mean that We endorse the website, its provider, or the information it contains.
          </b>
          You agree and acknowledge that We have no control over the privacy policies of these external websites. We
          cannot vouch for the privacy practices, terms of use, accuracy, integrity, or quality of the content on such
          websites. Once You leave Our servers and use information on these external sites, their privacy policy governs
          how Your data is handled. We advise users to review the privacy policies of each external website,
          understanding that the responsibility for Your data lies with the third party operating the site.
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: 600, mt: '1rem' }}>
          USE OF YOUR PERSONAL DATA
        </Typography>
        <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          The Company may use Personal Data for the following purposes:
        </Typography>

        <ul style={{ marginLeft: '1.25rem' }}>
          <li>
            <b> To provide and maintain Our Service,</b> which includes monitoring how the Service is used.{' '}
          </li>
          <li>
            <b>Managing Your Account:</b> This involves overseeing your registration as a user of the Service. The
            Personal Data You provide allows you to access various features and functionalities available to registered
            users.
          </li>

          <li>
            <b>Performance of a contract:</b> This includes activities related to the creation, fulfillment, and
            management of purchase contracts for services you've bought or any other agreement with us via the Service.
          </li>
          <li>
            <b>Contacting you:</b> We may contact you via email or similar electronic communication methods, like push
            notifications on a mobile app, for updates or informational messages about the features or services you've
            contracted with us. This also encompasses essential security updates when needed or sensible for their
            implementation.
          </li>

          <li>
            <b>Handling your inquiries and requests,</b> making sure we address and manage them efficiently.
          </li>

          <li>
            <b>Business transfers:</b> Your data may be used when assessing or carrying out actions like mergers,
            divestitures, restructures, dissolutions, or the sale or transfer of some or all of our assets, whether as
            part of a business continuation or as part of bankruptcy, liquidation, or similar proceedings. In such
            cases, the Personal Data of our Service users could be part of the assets transferred.
          </li>
          <li>
            <b>Other purposes:</b> We might use your data for various other objectives, such as conducting data
            analysis, recognizing usage patterns, assessing the effectiveness of our promotional campaigns, and
            enhancing our Service, marketing, and your overall user experience.
          </li>
        </ul>

        <Typography variant='body1' sx={{ fontWeight: 600, mt: '2rem' }}>
          SHARING OF YOUR PERSONAL DATA
        </Typography>
        <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          We understand the importance of your privacy, and we are committed to safeguarding your data. While we collect
          personal information for various purposes as outlined in our "Collection of Personal Information" section, we
          want to be transparent about how and when your personal data may be shared. It is pertinent that you review
          this section very carefully.
        </Typography>

        <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          Your personal data may be shared in the following situations:
        </Typography>

        <ul style={{ marginLeft: '1.25rem' }}>
          <li>
            <b> With Service Providers:</b> We may disclose your personal data to trusted service providers who assist
            us in delivering our service. These service providers may include hosting providers, customer support
            services, or analytics providers. We ensure that these service providers adhere to strict data protection
            standards and only process your data for the purposes specified by us.
          </li>
          <li>
            <b>For Business Transfers:</b> In the event of a merger, acquisition, or asset sale, your personal data may
            be transferred as part of the transaction. We will notify you in advance of such a transfer, and your data
            will remain subject to the same level of protection as outlined in this policy.
          </li>
          <li>
            <b>With Affiliates:</b> Your data may be shared with our affiliates, including our parent company and
            subsidiaries, joint venture partners, or entities under our control or common control. We ensure that these
            affiliates maintain the same level of data protection and adhere to this privacy policy.
          </li>
          <li>
            <b> With Business Partners:</b> We may share your information with trusted business partners to provide you
            with specific products, services, or promotional offers. Such sharing will be conducted with your consent or
            as otherwise permitted by applicable data protection laws.
          </li>
          <li>
            <b>With Your Consent:</b> We may disclose your personal information for any other purpose with your explicit
            consent.
          </li>
        </ul>

        <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C', fontWeight: 600 }}>
          WE DO NOT SELL OR RENT YOUR PERSONAL DATA TO THIRD PARTIES, AND WE TAKE ALL NECESSARY PRECAUTIONS TO PROTECT
          YOUR INFORMATION IN ACCORDANCE WITH APPLICABLE DATA PROTECTION LAWS AND INDUSTRY STANDARDS.
        </Typography>
        <Typography variant='body1' align='justify' paragraph sx={{ color: '#7C7C7C' }}>
          By sharing your personal data as described above, we ensure that we can provide you with the best possible
          service and experience. If you have any questions or concerns about how your personal data is shared, please
          don't hesitate to contact us using the information provided in the "Queries and Complaints" section of this
          policy.
        </Typography>
        <Typography variant='body1' align='justify' sx={{ fontWeight: 600, mt: '1.5rem' }}>
          RETENTION OF DATA
        </Typography>
        <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C', fontWeight: 600 }}>
          How long are we going to retain the data?
        </Typography>
        <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
          Our app may send your personal information to our internal servers. The retention of this personal information
          on our servers is subject to the following principles:
        </Typography>
        <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          We will retain your personal data for a maximum of 180 days after you delete the app or cancel your user
          account, unless we have a legitimate need or legal obligation to keep the data for a longer period as required
          by applicable laws.
        </Typography>
        <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
          Beyond the 180-day retention period, we will retain your personal data only as long as it is necessary to
          fulfill the specific purposes outlined in this Privacy Policy. Once the data is no longer needed for these
          purposes, it will be securely and permanently deleted.
        </Typography>
        <Typography variant='body1' align='justify' sx={{ fontWeight: 600, mt: '2rem' }}>
          DISCLOSURE OF YOUR PERSONAL DATA
        </Typography>
        <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          In the following scenarios, we may need to handle your Personal Data:
        </Typography>
        <Typography variant='body1' align='justify' sx={{ fontWeight: 600, mt: '0.5rem', color: '#7C7C7C' }}>
          Business Transactions:
        </Typography>
        <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          If the Company is part of a merger, acquisition, or asset sale, your Personal Data could be transferred. We
          will notify you before such transfer occurs, and it becomes subject to a different Privacy Policy.
        </Typography>

        <Typography variant='body1' align='justify' sx={{ fontWeight: 600, mt: '0.5rem', color: '#7C7C7C' }}>
          Law Enforcement:
        </Typography>
        <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
          In certain situations, the Company might have to disclose your Personal Data as required by law or in response
          to legitimate requests from public authorities, such as a court or government agency.
        </Typography>

        <Typography variant='body1' align='justify' sx={{ fontWeight: 600, my: '0.5rem', color: '#7C7C7C' }}>
          Other Legal Requirements:
        </Typography>
        <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
          The Company may reveal your Personal Data in good faith when it's necessary to:
        </Typography>

        <>
          <Box sx={{ ml: '1.25rem' }}>
            <ul>
              <li>Comply with a legal obligation.</li>
              <li>Safeguard and defend the rights or property of the Company.</li>
              <li>Prevent or investigate potential misconduct related to the Service.</li>
              <li>Ensure the personal safety of Service Users or the general public.</li>
              <li>Safeguard against legal liabilities.</li>
            </ul>
          </Box>

          <Typography variant='body1' align='justify' sx={{ fontWeight: 600, mt: '2rem' }}>
            SECURITY:
          </Typography>
          <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
            We prioritize the security of your personal information and employ a range of security measures to safeguard
            your data from unauthorized access, alteration, disclosure, loss, misuse, or destruction. These measures
            encompass physical, managerial, operational, and technical safeguards, tailored to the type and sensitivity
            of the data we collect.
          </Typography>

          <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
            Are we using same security measures as mentioned hereunder?
          </Typography>

          <Box sx={{ ml: '1.25rem', my: '0.5rem' }}>
            <ul>
              <li>
                <b>Data Encryption:</b> We use industry-standard encryption protocols to protect your data during
                transmission. This ensures that any data transferred between your device and our servers remains
                confidential and secure.
              </li>
              <li>
                <b>Access Control: </b> Access to your personal data is restricted to authorized personnel who require
                access for legitimate business purposes. We implement strict access controls and authentication
                mechanisms to prevent unauthorized access.
              </li>
              <li>
                <b>Regular Security Assessments: </b> We conduct regular security assessments, including vulnerability
                scanning and penetration testing, to identify and address potential security vulnerabilities. This
                proactive approach helps us ensure the ongoing security of our systems.
              </li>
              <li>
                <b>Employee Training:</b> Our employees undergo training on data protection and security best practices.
                They are educated on the importance of safeguarding personal data and are required to adhere to our
                strict security policies.
              </li>
              <li>
                <b>Incident Response: </b>In the event of a security breach or data incident, we have established
                incident response procedures to swiftly address and mitigate any potential harm. We will notify affected
                users as required by law and take necessary actions to rectify the situation.
              </li>
            </ul>
          </Box>
          <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
            While we take diligent efforts to maintain a secure environment for your personal information, it's
            important to recognize that complete security is never absolute. We cannot guarantee that unintended
            disclosures of your personal information will never occur. If we become aware of any such unauthorized
            disclosure, we will make reasonable efforts to promptly inform you about its nature and extent, to the
            extent of our knowledge and as permitted by the law. It's vital that you do not share your contact
            information with any third party.
          </Typography>

          <Typography variant='body1' align='justify' sx={{ fontWeight: 600, mt: '2rem' }}>
            CHANGES TO THIS PRIVACY POLICY:
          </Typography>

          <Box sx={{ ml: '1.25rem', my: '0.5rem' }}>
            <ul>
              <li>
                We reserve the right to periodically update our Privacy Policy. Any modifications will be communicated
                by publishing the revised Privacy Policy on this page.
              </li>
              <li>
                Prior to the changes taking effect, we will provide notification via email and/or a noticeable notice on
                our Service. The "Last updated" date at the top of this Privacy Policy will also be revised accordingly.
              </li>
              <li>
                We encourage you to periodically review this Privacy Policy for any alterations. Changes to this Privacy
                Policy are considered effective once they are posted on this page.
              </li>
            </ul>
          </Box>

          <Typography variant='body1' align='justify' sx={{ fontWeight: 600, mt: '1.5rem' }}>
            LIMITATION OF LIABILITY:
          </Typography>
          <Box sx={{ ml: '1.25rem', my: '0.5rem' }}>
            <ul>
              <li>
                We do not make any claims, promises, or guarantees regarding the accuracy, completeness, or sufficiency
                of the content accessible through the App. We explicitly disclaim any liability for errors and omissions
                in the App's content.
              </li>
              <li>
                We do not provide any warranties of any kind, whether implied, expressed, or statutory. This includes
                but is not limited to warranties of non-infringement of third-party rights, title, merchantability,
                fitness for a particular purpose, and freedom from computer viruses concerning the content available
                through the App or its links to other internet resources.
              </li>
              <li>
                Any references in the App to specific commercial products, processes, services, or the use of trade
                names, company names, or corporation names are provided for public information and convenience. They do
                not imply endorsement, recommendation, or favoritism.
              </li>
            </ul>
          </Box>

          <Typography variant='body1' align='justify' sx={{ fontWeight: 600, mt: '1.5rem' }}>
            YOUR RIGHTS REGARDING YOUR PERSONAL INFORMATION
          </Typography>
          <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C', my: '0.5rem' }}>
            We respect your rights and are committed to ensuring that you have control over your personal information.
            As a user, you have the following rights:
          </Typography>
          <Box sx={{ ml: '1.25rem' }}>
            <ul>
              <li>
                <b>Review and Correction:</b>
                You have the right to review your personal information and request corrections if you discover
                inaccuracies or incomplete data. If you find errors in your personal information held by us, you can
                request corrections. Please contact us at
                <a href='mailto:info@unbiasly.ai'>
                  <i>
                    <b> info@unbiasly.ai </b>
                  </i>
                </a>
                for assistance with data review and correction.
              </li>
              <li>
                <b> Withdraw Consent:</b> You have the right to withdraw your consent for the processing of your
                personal data. If you wish to exercise this right, please contact us at
                <a href='mailto:info@unbiasly.ai'>
                  <i>
                    <b> info@unbiasly.ai. </b>
                  </i>
                </a>
                Please note that in some cases, your information may be necessary for us to provide our services. If you
                choose not to provide certain information or withdraw your consent to process previously provided
                information, we may have to restrict or deny some of our services.
              </li>
            </ul>
          </Box>

          <Typography variant='body1' align='justify' sx={{ fontWeight: 600, mt: '2rem' }}>
            QUERIES AND COMPLAINTS
          </Typography>
          <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C', my: '0.5rem' }}>
            If you have any inquiries or complaints related to the protection of your personal information or privacy
            concerns, we are dedicated to safeguarding your data. For any feedback or concerns, you can get in touch
            with our designated contact person:
          </Typography>
          <Box sx={{ ml: '1.25rem' }}>
            <ul>
              <li>Name: Gagandeep</li>
              <li>Address: C-11, Basement, Green Park Extension, Delhi, India - 110016</li>
              <li>
                Email: <a href='mailto:info@unbiasly.ai'>info@unbiasly.ai.</a>
              </li>
            </ul>
          </Box>
          <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C', my: '0.5rem' }}>
            We appreciate your ongoing support in our efforts to protect your personal information.
          </Typography>
        </>
      </Container>
    </Box>
  )
}
