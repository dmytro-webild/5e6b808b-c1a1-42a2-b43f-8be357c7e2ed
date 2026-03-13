"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import CardStack from "@/components/cardStack/CardStack";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Award, Briefcase, CheckCircle, Github, Heart, Instagram, Linkedin, MessageSquare, Sparkles, Target, TrendingUp, Twitter, Users, Zap } from "lucide-react";

export default function LandingPage() {
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
          brandName="AM Agency "
          navItems={[
            { name: "Work", id: "portfolio" },
            { name: "Process", id: "process" },
            { name: "About", id: "about" },
            { name: "Contact", id: "/contact" }
          ]}
          button={{ text: "Get Started", href: "/contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Crafting Modern & Luxurious Webiste for Business"
          description="We design and build extraordinary digital products for ambitious brands. Transform your vision into reality with our expertise in web design, development, and creative strategy."
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "25+ ", label: "Projects Delivered" },
            { value: "100%", label: "Focused on Client Needs" },
            { value: "98%", label: "Client Satisfaction" }
          ]}
          enableKpiAnimation={true}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/uploaded-1773396641155-y1d3vcet.png"
          imageAlt="Creative studio workspace and design process"
          mediaAnimation="slide-up"
          buttons={[
            { text: "Explore Our Work", href: "#portfolio" },
            { text: "Let's Talk", href: "/contact" }
          ]}
          buttonAnimation="slide-up"
          tag="Highly Dedicated Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Mission"
          tagIcon={Target}
          tagAnimation="slide-up"
          title="We transform complex ideas into intuitive, beautiful digital solutions that drive real business results"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardNineteen
          title="Our Creative Process"
          description="From discovery to launch, we follow a proven methodology to ensure every project exceeds expectations. Our process combines strategic thinking with creative excellence."
          tag="How We Work"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Strategy",              title: "Understaing & Strategy",              subtitle: "Understanding your vision and market",              description: "We dive deep into your business, audience, and competitive landscape. Through collaborative workshops and research, we develop a strategic foundation that guides every decision throughout the project.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-diverse-team-of-strategists-and-consul-1773394805105-b8ebb479.png",              imageAlt: "Team collaborating on strategy",              buttons: [{ text: "Learn More", href: "#" }]
            },
            {
              id: 2,
              tag: "Design",              title: "Design & Innovation",              subtitle: "Creating beautiful, functional experiences",              description: "Our designers craft intuitive interfaces and stunning visuals that captivate users. We blend aesthetics with functionality, ensuring every pixel serves a purpose and enhances the user experience.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-talented-designer-working-at-a-compute-1773394805987-2f75a2a9.png",              imageAlt: "Designer working on digital mockups",              buttons: [{ text: "See Designs", href: "#" }]
            },
            {
              id: 3,
              tag: "Development",              title: "Development & Optimization",              subtitle: "Building performant, scalable solutions",              description: "Our developers bring designs to life with clean, efficient code. We prioritize performance, security, and scalability to create robust digital solutions that grow with your business.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-skilled-developer-coding-on-a-computer-1773394805144-a84dfcb2.png",              imageAlt: "Developer coding on computer",              buttons: [{ text: "View Tech Stack", href: "#" }]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Clients Say"
          description="Hear from industry leaders who've transformed their business with our creative solutions."
          tag="Client Testimonials"
          tagIcon={MessageSquare}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Sarah Chen, CEO of TechVenture",              date: "Date: November 2024",              title: "Exceptional creativity and technical excellence",              quote: "Working with Creative Studio transformed our digital presence. Their team understood our vision immediately and delivered a platform that exceeded every expectation. The attention to detail and innovative approach set them apart.",              tag: "Premium Package",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/professional-headshot-photo-of-a-confide-1773394806740-739ebc86.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-modern-tech-startup-office-environment-1773394806081-eae1d05c.png"
            },
            {
              id: "2",              name: "Marcus Williams, Founder of DesignCo",              date: "Date: October 2024",              title: "World-class creative partnership",              quote: "From concept to launch, the Creative Studio team demonstrated professionalism and creativity at the highest level. They brought our ambitious ideas to life and helped us achieve remarkable results in the competitive tech space.",              tag: "Enterprise Solution",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/professional-headshot-photo-of-a-confide-1773394804463-a65ade3f.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-creative-design-studio-showing-marcus--1773394807427-2a779d06.png"
            },
            {
              id: "3",              name: "Elena Rodriguez, Director of Innovation at GlobalBrand",              date: "Date: September 2024",              title: "Strategic thinking meets creative brilliance",              quote: "Creative Studio doesn't just build websites; they craft experiences. Their strategic approach combined with stunning design and flawless execution made our project a true success story.",              tag: "Custom Solution",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/professional-headshot-photo-of-a-confide-1773394804549-d3ed3f99.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-professional-corporate-office-environm-1773394804841-71496d85.png"
            },
            {
              id: "4",              name: "James Thompson, VP Product at InnovateLabs",              date: "Date: August 2024",              title: "Partners who understand your business",              quote: "What impressed us most was their deep understanding of our industry and users. Creative Studio delivered a solution that not only looks incredible but performs exceptionally well across all metrics.",              tag: "Performance Focused",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/professional-headshot-photo-of-a-confide-1773394805022-8cc14bb9.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-technology-innovation-lab-showing-jame-1773394806191-7f2f96c9.png"
            },
            {
              id: "5",              name: "Victoria Park, CEO of CreativeHub",              date: "Date: July 2024",              title: "Truly transformative partnership",              quote: "The Creative Studio team brought fresh perspectives and innovative solutions to challenges we'd been facing for years. Their expertise and collaborative approach made all the difference in our digital transformation journey.",              tag: "Transformation Project",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/professional-headshot-photo-of-a-confide-1773394807579-94c9312c.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-vibrant-creative-hub-environment-showi-1773394805849-2c0e9527.png"
            },
            {
              id: "6",              name: "David Kim, Founder of StartupXYZ",              date: "Date: June 2024",              title: "Exceeded all expectations",              quote: "From the initial consultation through to launch and beyond, Creative Studio demonstrated exceptional professionalism and creativity. Our new platform has become a competitive advantage in our market.",              tag: "Startup Success",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/professional-headshot-photo-of-a-confide-1773394805453-ff733928.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-lean-startup-workspace-showing-david-k-1773394805864-abcb5a9d.png"
            }
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <CardStack
          title="Our Portfolio"
          description="Explore our latest and greatest projects showcasing our creative expertise and technical excellence."
          tag="Featured Work"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          carouselThreshold={5}
          mode="buttons"
        >
          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-[var(--accent)] bg-[var(--card)]">
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img
                src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/uploaded-1773396641155-y1d3vcet.png"
                alt="Portfolio project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">E-Commerce Platform Redesign</h3>
              <p className="text-sm text-[var(--foreground)] opacity-70">Modern e-commerce platform with enhanced user experience and conversion optimization</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-[var(--accent)] bg-[var(--card)]">
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img
                src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-modern-tech-startup-office-environment-1773394806081-eae1d05c.png"
                alt="Portfolio project 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">SaaS Dashboard Design</h3>
              <p className="text-sm text-[var(--foreground)] opacity-70">Intuitive analytics dashboard for enterprise clients with real-time data visualization</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-[var(--accent)] bg-[var(--card)]">
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img
                src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aj7GIMAiMrDMRaDjVpBEuEoiXn/a-creative-design-studio-showing-marcus--1773394807427-2a779d06.png"
                alt="Portfolio project 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">Brand Identity System</h3>
              <p className="text-sm text-[var(--foreground)] opacity-70">Comprehensive brand identity with design system and digital guidelines</p>
            </div>
          </div>
        </CardStack>
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to bring your creative vision to life? Let's collaborate and create something extraordinary together. Reach out today and let's start the conversation."
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Get Your Free Consultation", href: "/contact" },
            { text: "Schedule a Call", href: "/contact" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Creative Studio"
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
