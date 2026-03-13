"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="AM Agency"
          navItems={[
            { name: "Work", id: "/" },
            { name: "Process", id: "/" },
            { name: "About", id: "/" },
            { name: "Contact", id: "/contact" }
          ]}
          button={{ text: "Get Started", href: "/contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="We'd love to hear from you. Send us a message and let's start discussing your project."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your project...",            rows: 5,
            required: true
          }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-modern-creative-studio-workspace-with--1773394805437-eefa660c.png?_wi=1"
          imageAlt="Contact us to start your project"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Message"
          onSubmit={(data) => {
            console.log("Form data:", data);
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="   AM Agency "
          copyrightText="© 2026 AM Agency. All rights reserved."
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com/company/creativestudio", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com/creativestudio", ariaLabel: "Twitter" },
            { icon: Instagram, href: "https://instagram.com/creativestudio", ariaLabel: "Instagram" },
            { icon: Github, href: "https://github.com/creativestudio", ariaLabel: "GitHub" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
