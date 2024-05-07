import type { Meta } from "@storybook/react";

import Accordion from "./accordion";
import theme from "./styles/theme";

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export const Playground = () => {
  return (
    <>
      <h2>Basic component</h2>
      <Accordion title={<div>Accordion Item Title</div>}>
        <div>Children content goes here</div>
      </Accordion>
      <br />
      <br />

      <h3>Sample usage</h3>
      <div
        style={{
          background: theme.colors.white,
          borderRadius: "16px",
          padding: "1.5rem",
        }}
      >
        <Accordion title={<span>Authorisation and Declaration</span>}>
          <p>First Party Payer</p>
          <p>
            I consent to Singapore Life Ltd (&quot;Singlife&quot;) collecting,
            using and disclosing my personal data for the following purposes:
          </p>
          <br />
          <ol>
            <li>to process of the above request; and</li>
            <li>
              for statistical, research, audit, compliance and regulatory
              purposes.
            </li>
          </ol>
          <br />
          <p>
            I also consent to Singlife disclosing and/or transferring my
            personal data to:
          </p>
          <br />
          <ol>
            <li>
              Singlife related group of companies, third party service
              providers, reinsurers, suppliers and intermediaries (including my
              financial adviser, where applicable);
            </li>
            <li>the Government of Singapore;</li>
            <li>statutory boards; and</li>
            <li>
              organisations approved by the Government of Singapore, whether
              located in Singapore and/or elsewhere, for the above purposes.
            </li>
          </ol>
          <br />
          <p>
            I have read, understood and agree to be bound by the terms of
            Singlife&apos;s Data Protection Notice (found on
            https://singlife.com/en/pdpa) as may be amended, supplemented and/or
            substituted by Singlife from time to time, and confirm that I am
            aware that the latest version of such terms (amended, supplemented
            and/or substituted version) will be posted on Singlife&apos;s
            website and such version shall bind me upon posting until such time
            when I withdraw the consent or revoke the e-GIRO arrangement
            indicated.
          </p>
          <br />
          <p>Third Party Payer</p>
          <p>
            Where applicable, I confirm that for the personal data of Payer that
            I have disclosed to Singapore Life Ltd (&quot;Singlife&quot;), that
            I have prior to disclosing such personal data to Singlife, obtained
            the appropriate consent from the individual to:
          </p>
          <br />
          <ul>
            <li>
              permit me to collect, use and/or disclose the individual&apos;s
              personal data to Singlife for the following purposes:
              <ol>
                <br />
                <li>to process the above request; and</li>
                <li>
                  for statistical, research, audit, compliance and regulatory
                  purposes;
                </li>
                <br />
              </ol>
            </li>
            <li>
              permit Singlife to collect, use and/or disclose the
              individual&apos;s personal data for the above purposes; and
            </li>
            <br />
            <li>
              permit Singlife to disclose and/or transfer the individual&apos;s
              personal data to
              <ol>
                <br />
                <li>
                  Singlife related group of companies, third party service
                  providers, reinsurers, suppliers and intermediaries (including
                  my financial adviser, where applicable);
                </li>
                <li>the Government of Singapore;</li>
                <li>statutory boards; and</li>
                <li>
                  organisations approved by the Government of Singapore, whether
                  located in Singapore and/or elsewhere, for the above purposes.
                </li>
                <br />
              </ol>
            </li>
          </ul>
          <p>
            I have read, understood and agree to be bound by the terms of
            Singlife&apos;s Data Protection Notice (found on
            https://singlife.com/en/pdpa) as may be amended, supplemented and/or
            substituted by Singlife from time to time, and confirm that I am
            aware that the latest version of such terms (amended, supplemented
            and/or substituted version) will be posted on Singlife&apos;s
            website and such version shall bind me upon posting until such time
            when I withdraw the consent or revoke the e-GIRO arrangement
            indicated.
          </p>
        </Accordion>
      </div>
    </>
  );
};

export default meta;
