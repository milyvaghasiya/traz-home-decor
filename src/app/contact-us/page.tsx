import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/Contact/ContactForm";
import Features from "@/components/Home/Features";

const ContactUsPage = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
			<ContactForm />
      <Features />
    </>
  );
};

export default ContactUsPage;
