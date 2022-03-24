import React from "react";
import styled from "styled-components";
import SectionsHeader from "../Departement/DepartmentHeader";
import { Containers } from "../../layout/globalStyle";
import ContactForm from "../Contact/ContactForm";
const ContactUs = () => {
  return (
    <ContactSection>
      <Containers>
        <SectionsHeader
          align="center"
          title="Team"
          H1="Our Team"
        ></SectionsHeader>
        <ContactForm />
      </Containers>
    </ContactSection>
  );
};
const ContactSection = styled.div`
  padding-top: 5rem;
  background-color: #ececec;
`;
export default ContactUs;
