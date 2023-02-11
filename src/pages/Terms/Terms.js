import styles from "./Terms.module.scss";

const Terms = function () {
  const { terms, terms__Heading, terms__Content } = styles;
  return (
    <div className={terms}>
      <div className={terms__Heading}>
        <h6>Legal terms</h6>
        <h1>Terms & Services</h1>
      </div>

      <div className={terms__Content}>
        <p>
          <em>Last Updated: January 25, 2023</em>
        </p>
        <p>
          Airbnb exists to help build connections between people and make the
          world more open and inclusive. In short—to build a world where anyone
          can belong anywhere. We are a community built on trust. A fundamental
          part of earning that trust means being clear about how we use your
          information and protecting your human right to privacy.
        </p>
        <p>
          This Privacy Policy describes how Airbnb, Inc. and its affiliates ,
          process personal information in relation to your use of the Airbnb
          Platform. Depending on where you live and what you are doing on the
          Airbnb Platform, the supplemental privacy pages listed below may apply
          to you. Please follow the links and review the supplemental
          information describing how we process personal information for those
          regions and services.
        </p>
        <h3>1. DEFINITIONS</h3>
        <p>
          We collect personal information about you when you use the Airbnb
          Platform. Without it, we may not be able to provide all services
          requested. This information includes:
        </p>
        <ul>
          <li>
            Contact, Account, and Profile Information. Such as your first name,
            last name, phone number, postal address, email address, date of
            birth, and profile photo, some of which will depend on the features
            you use.
          </li>
          <li>
            Identity Verification and Payment Information. Such as images of
            your government-issued ID (as permitted by applicable laws), your ID
            number or other verification information, a selfie when we verify
            your ID, bank account or payment account information. ​​If you are
            not an Airbnb user, we may receive payment information relating to
            you, such as when an Airbnb user provides your payment card to
            complete a booking. If a copy of your ID is provided to us, we may
            scan, use, and store information contained in your ID to verify your
            identity and for security purposes.
          </li>
        </ul>

        <h3>2. HOW WE USE INFORMATION WE COLLECT</h3>
        <p>
          If you provide us with your contacts' information, such as your
          friends or co-travelers, we may process this information to: (i)
          facilitate your referral invitations, (ii) share your trip details and
          facilitate trip planning, (iii) detect and prevent fraud, and (iv)
          facilitate your requests or for any other purpose you authorize.
        </p>
        <p>
          For example, as part of our fraud prevention efforts, we scan and
          analyze messages to mask contact information and references to other
          sites, and subject to applicable law, we scan and analyze all images
          uploaded by users to the Airbnb platform in message threads, profiles,
          listings, and experiences for certain illegal or inappropriate
          activities (such as evidence of child exploitation) for the purpose of
          identifying and reporting content violations to appropriate
          authorities. In some cases, we may also scan, review, or analyze
          messages to debug, improve, and expand product offerings. We use
          automated methods where reasonably possible. Occasionally we may need
          to manually review communications, such as for fraud investigations
          and customer support, or to assess and improve the functionality of
          these automated tools. We will not review, scan, or analyze your
          messaging communications to send third-party marketing messages to you
          and we will not sell reviews or analyses of these communications.{" "}
        </p>
        <h3>3. SHARING & DISCLOSURE</h3>
        <p>
          Where you provide consent, we share your information as described at
          the time of consent, such as when authorizing a third-party
          application or website to access your Airbnb account or participating
          in promotional activities by Airbnb partners or third parties.
        </p>
        <p>
          Where permissible under applicable law, we may use certain information
          about you, such as your email address, that we share with social media
          platforms after de-identifying it to generate leads, drive traffic to
          Airbnb, or otherwise promote our products and services.
        </p>
      </div>
      <p>
        <strong>Woah... Thank you for reaching so far...</strong>
      </p>
    </div>
  );
};

export default Terms;
