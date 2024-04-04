import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Simranjot",
  initials: "",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about:
    "Currently managing Product at Canonic.",
  summary: "Product & engineering professional with a strong sense of ownership. With over seven years of experience in the tech industry, I possess a strong background of leading strategic initiatives and accomplishing business objectives. Passionate about building innovative products that empower users, drive impact and enact meaningful change in the world.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/14364505?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "iamsimranjot@gmail.com",
    tel: "+919914370072",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/iamsimranjot",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iamsimranjot/",
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
      company: "Canonic",
      link: "https://canonic.dev",
      badges: [],
      title: "Product Owner",
      start: "2020",
      end: "Present",
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
        Established and nurtured cross-functional teams across engineering, design, and marketing for cohesive collaboration, growing the team from 4 to 14 members.
        </li>
        <li>
        Managed legal and administrative operations for the company in the US and India, ensuring compliance and operational efficiency.
        </li>
        </>
      )
        
    },
    {
      company: "Haptik",
      link: "https://www.haptik.ai/",
      badges: [],
      title: "Software Engineer",
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
      title: "Software Engineering Intern",
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
    "Data Analysis",
    "SQL",
    "Technical Writing",
    "Developer Tools",
    "Scrum",
    "Legal and Compliance",
  ],
} as const;
