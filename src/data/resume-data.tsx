import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Simranjot",
  initials: "",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about: "I shape complex systems into tools people actually use.",
  summary:
    "Product leader with 9+ years of experience building and scaling B2B SaaS and platform products. My work spans across omnichannel support systems, developer platforms, applied AI, mobile apps, and workflow automations. Known for building on complex systems, aligning teams around shared context, and delivering products that drive adoption, revenue, and scale.",
  avatarUrl: "https://avatars.githubusercontent.com/u/14364505?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "iamsimranjot@gmail.com",
    tel: "+91-9914370072",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/iamsimranjot",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iamsimranjot",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/iamsimranjot",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Chitkara University",
      degree: "Bachelor's Degree in Computer Science (8.3)",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "BusinessOnBot (YC W21)",
      link: "https://www.businessonbot.com/",
      badges: [],
      title: "Senior Product Manager - Platform & Growth",
      start: "05/2024",
      end: "Present",
      description: (
        <>
          <div className="mt-3"></div>
          <li className="mb-1 ml-1">
            Led the shift from a WhatsApp only product to a full omnichannel
            support platform integrating WhatsApp, Instagram, Email, Facebook,
            and Voice or IVR for thousands of D2C brands and enterprises.
          </li>
          <li className="mb-1 ml-1">
            Built a new B2B product vertical from scratch, working closely with
            customers to define the right ICPs, core use cases, pricing, and GTM
            strategy to create a new growth lever.
          </li>
          <li className="mb-1 ml-1">
            Delivered a suite of AI-powered features, including intelligent AI
            agents and contextual assistance, to provide proactive support
            helping enterprises and improving agent efficiency at scale.
          </li>
          <li className="mb-1 ml-1">
            Owned the end-to-end launch of the mobile app, deciding what
            mattered for the MVP, adapting key web workflows for mobile, and
            driving adoption among existing customers.
          </li>
          <li className="ml-1">
            Put core product practices in place for the team, including
            roadmapping, prioritization, and delivery rhythms to improve focus
            and execution.
          </li>
          <li className="ml-1">
            Achieved a 19% MRR uplift through initiatives focused on delivering
            customer value, increasing adoption, and creating new expansion
            opportunities.
          </li>
        </>
      ),
    },
    {
      company: "Canonic",
      link: "https://www.producthunt.com/products/canonic",
      badges: [],
      title: "Co-Founder & Head of Product",
      start: "06/2020",
      end: "05/2024",
      description: (
        <>
          <div className="mt-3"></div>
          <li className="mb-1 ml-1">
            Led product strategy from concept to scale for the entire no code
            platform (VC Funded), from problem discovery to product delivery.
            Used by over 8K+ users who have deployed 10,000+ applications.
          </li>
          <li className="mb-1 ml-1">
            Spent significant time with users to understand real problems, ran
            interviews, and translated those insights into clear PRDs, system
            flows, and close working sessions with engineers on architecture,
            APIs, and key platform trade-offs.
          </li>
          <li className="mb-1 ml-1">
            Owned product decisions for core platform capabilities, such as app
            building and deployment workflows, third-party integrations, and
            scaling the system reliably as usage and complexity grew.
          </li>
          <li className="mb-1 ml-1">
            Set up product analytics and monitoring from the ground up, defining
            the right metrics, dashboards, and alerts to understand adoption,
            performance, overall platform health and a culture of continuous
            learning.
          </li>
          <li className="ml-1">
            Successfully executed multiple high-impact product launches,
            demonstrating initiative and the ability to drive GTM coordination
            and deliver tangible results in a fast-paced startup environment.
          </li>
        </>
      ),
    },
    {
      company: "Haptik",
      link: "https://www.haptik.ai/",
      badges: [],
      title: "Software Engineer (iOS)",
      start: "02/2017",
      end: "06/2020",
      description: (
        <>
          <div className="mt-3"></div>
          <li className="mb-1 ml-1">
            Built Haptik’s iOS AI SDK from scratch and owned it end to end,
            designing it to handle millions of conversations a day and power
            AI-driven chat experiences inside native iOS apps.
          </li>
          <li className="mb-1 ml-1">
            Took on a full rewrite of the SDK from Objective-C to Swift,
            improving performance, reducing technical debt, and simplifying
            developer adoption.
          </li>
          <li className="ml-1">
            Designed a modular (AI chatbot, agent chat, payments, etc.), and
            scalable architecture, enabling enterprise clients to seamlessly
            embed AI capabilities into their existing workflows and
            environments.
          </li>
          <li className="ml-1">
            Automated build and release pipelines using Fastlane, reducing
            manual overhead and making releases more reliable.
          </li>
          <li className="ml-1">
            Teamed closely with enterprise partners such as Jio, Times Group,
            and Future Pay to integrate the SDK into high scale apps, supporting
            Haptik’s transition from B2C to B2B and contributing to its 100M
            dollar acquisition by Jio.
          </li>
        </>
      ),
    },
    {
      company: "Novoinvent",
      link: "https://www.novoinvent.com/",
      badges: [],
      title: "Software Engineering Intern (iOS)",
      start: "05/2016",
      end: "01/2017",
      description: (
        <>
          <div className="mt-3"></div>
          <li className="mb-1 ml-1">
            Engineered a customizable Health Insurance Marketplace framework for
            iOS, streamlining the enrollment and purchase process of health
            insurance for US citizens.
          </li>
          <li className="ml-1">
            Implemented tailored architectures to accommodate state-specific
            applications such as Access Health CT for Connecticut and Enroll MHC
            for Maryland, ensuring seamless integration and functionality.
          </li>
        </>
      ),
    },
  ],
  projects: [
    {
      title: "Mixpanel - Analytics",
      description: "Mixpanel for Product Analytics.",
      link: {
        label: "Mixpanel Blog",
        href: "https://canonic.dev/blog/using-mixpanel-for-product-analysis",
      },
    },
    {
      title: "Canonic - Product Hunt",
      description: "Product Hunt Launches",
      link: {
        label: "Product Hunt",
        href: "https://www.producthunt.com/products/canonic",
      },
    },
  ],
  skills: [
    "Product Management",
    "Product Strategy",
    "Product Roadmapping",
    "Product Requirements",
    "PRDs",
    "Product Analytics",
    "Pricing & Monetization",
    "User Research",
    "Customer Discovery",
    "Stakeholder Management",
    "Cross-functional Collaboration",
    "Workflow Design",
    "Agile Methodologies",
    "Problem Solving",
    "Applied AI Products",
    "AI Agents",
    "LLMs",
    "Developer Platforms",
    "Data Analysis",
    "Microservices",
    "API Design",
    "System Architecture",
    "SDKs",
    "Mobile Applications",
  ],
} as const;
