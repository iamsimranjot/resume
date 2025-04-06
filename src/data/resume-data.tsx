import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Simranjot",
  initials: "",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Driving growth, monetization, and product strategy.",
  summary: "Product & engineering leader with 8+ years of experience building and scaling impactful products. I bring strong ownership, a user-first mindset, and a passion for driving growth and meaningful outcomes through tech. Recently led initiatives that boosted MRR by 19% at a YC-backed startup.",
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
      title: "Senior Product Manager",
      start: "2024",
      end: "Present",
      description:(
        <>
        <li>Leading the Support vertical, facilitated the transition from a WhatsApp-first offering to a complete omnichannel support suite (WhatsApp, Instagram, Email).</li>
        <li>Increased average monthly transaction size (ATS) across client portfolio by ₹2000, resulting in a ~19% uplift in MRR.</li>
        <li>Launched the Knowledge Base with the Customer Success team improving client self-service and reducing dependency on support teams by 31%.</li>
        <li>Responsible for hiring across Product and Design functions, helping scale the team with strong talent.</li>
        <li>Managing a team of 3 PMs and 2 Designers, setting up product practices, roadmapping rituals, and delivery processes.</li>
        <li>Working closely with Engineering, Customer Success, and Growth teams to to ensure alignment between business goals and product priorities.</li>
        </>
      ) 
    },
    {
      company: "Canonic",
      link: "https://www.producthunt.com/products/canonic",
      badges: [],
      title: "Head of Product | Co-Founder",
      start: "2020",
      end: "2024",
      description:(
        <>
        <li>
        Led product development and strategy at Canonic, empowering users to create full-stack applications without code, and securing a seed round from top-tier investors.
        </li>
        <li>
        Orchestrated user interviews and surveys, authored detailed Product Requirement Documents (PRDs), directed ongoing product enhancements, and led product road-mapping as a product owner.
        </li>
        <li>
        Implemented robust analytical frameworks, including comprehensive dashboards and alert systems, to monitor performance metrics and drive data-driven decisions.
        </li>
        <li>
        Engineered successful product launches on platforms such as Product Hunt, securing top rankings and increasing our visibility within the developer community.
        </li>     
        <li>
        Established cross-functional teams across engineering, design, and marketing for cohesive collaboration, growing the team from 4 to 14 members.
        </li>
        </>
      )
        
    },
    {
      company: "Haptik",
      link: "https://www.haptik.ai/",
      badges: [],
      title: "Software Engineer (iOS)",
      start: "2017",
      end: "2020",
      description: (
        <>
          <li>
          Headed the development and management of the iOS SDK from inception, designed to manage millions of conversations daily, enabling AI-powered chatbots within iOS applications.
          </li>
          <li>
          Facilitated the company's strategic transition from a B2C to a B2B business model, culminating in a $100M acquisition by Jio.
          </li>
          <li>
          Integrated the SDK with notable brands including FuturePay, Times, Jio, and others, expanding its reach and impact.
          </li>
        </>
      ),
    },
    {
      company: "Novoinvent",
      link: "https://www.novoinvent.com/",
      badges: [],
      title: "Software Engineering Intern (iOS)",
      start: "2016",
      end: "2017",
      description:(
        <>
        <li>
        Engineered a customizable Health Insurance Marketplace framework for iOS, streamlining the enrollment and purchase process of health insurance for US citizens.
        </li>
        <li>
        Implemented tailored architectures to accommodate state-specific applications such as Access Health CT for Connecticut and Enroll MHC for Maryland, ensuring seamless integration and functionality.
        </li>
        </>
      )        ,
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
    // {
    //   title: "Case Study",
    //   description: "Product Hunt Launches",
    //   link: {
    //     label: "Product Hunt",
    //     href: "https://www.producthunt.com/products/canonic",
    //   },
    // },
  ],
  skills: [
    "Product Strategy",
    "Product Management",
    "User Research",
    "Market Research",
    "Stakeholder Management",
    "Growth Strategy",
    "Data Analysis",
    "Technical Writing",  
    "Developer Tools",
    "API Design",
    "Scrum",
  ],
} as const;
