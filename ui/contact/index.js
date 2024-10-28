import ContactForm from "@/components/form/ContactForm";
import React from "react";
import Information from "./Information";

const ContactPage = () => {
  return (
    <div className="flex-center py-10 sm:py-[68px] padding-layout">
      <div className="flex flex-col items-center justify-center w-full gap-8 xl:flex-row xl:items-stretch">
        <ContactForm />
        <Information />
      </div>
    </div>
  );
};

export default ContactPage;
