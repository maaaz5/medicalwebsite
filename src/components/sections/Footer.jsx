import React from "react";
import styled from "styled-components";
import FooterUls from "../Footer/FooterUls";
import { Containers } from "../../layout/globalStyle";
const Footer = () => {
  return (
    <FooterSection>
      <Containers>
        <FooterWrapper>
          <FooterUls
            MainTitle="Company Info"
            title1="About Us"
            title2="Carrier"
            title3="We are hiring"
            title4="Blog"
          />
          <FooterUls
            MainTitle="Legal"
            title1="About Us"
            title2="Carrier"
            title3="We are hiring"
            title4="Blog"
          />
          <FooterUls
            MainTitle="Features"
            title1="Buisness"
            title2="User Analytic"
            title3="Live chat"
            title4="Unlimited Support"
          />
          <FooterUls
            MainTitle="Ressources"
            title1="IOS & Android"
            title2="Watch a Demo"
            title3="Customers"
            title4="API"
          />
          <FooterUls
            MainTitle="Get in touch"
            title1="(480) 555-0103"
            title2="4517 Washington Ave. Manchester, Kentucky 39495"
            title3="exemple@gmail.com"
            icon1="fa-solid fa-phone"
            icon2="fa-solid fa-location-dot"
            icon3="fa-solid fa-envelope"
          />
        </FooterWrapper>
      </Containers>
    </FooterSection>
  );
};
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 968px) {
    & {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;
const FooterSection = styled.div`
  padding: 6em 0em;
`;
export default Footer;
