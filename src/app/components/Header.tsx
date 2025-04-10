"use client";

import { GlobeIcon, MailIcon, PhoneIcon, DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import toast from "react-hot-toast";

interface LocationLinkProps {
  location: typeof RESUME_DATA.location;
  locationLink: typeof RESUME_DATA.locationLink;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  return (
    <p className="font-poppins max-w-md items-center text-pretty text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  const isCopy =
    label.toLowerCase() === "email" || label.toLowerCase() === "phone";

  const handleCopy = () => {
    navigator.clipboard.writeText(href).then(() => {
      toast.success(`${label} copied!`, {
        iconTheme: {
          primary: "gray",
          secondary: "#FFFAEE",
        },
      });
    });
  };

  return isCopy ? (
    <Button
      className="size-8"
      variant="outline"
      size="icon"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
    >
      <Icon className="size-4" aria-hidden="true" />
    </Button>
  ) : (
    <Button className="size-8" variant="outline" size="icon" asChild>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

interface DownloadButtonProps {
  icon: React.ElementType;
  label?: string;
  className?: string;
}

function DownloadButton({
  icon: Icon,
  label = "Download PDF",
  className,
}: DownloadButtonProps) {
  const handlePrint = () => {
    toast.success("Opening PDF print dialog...", {
      iconTheme: {
        primary: "gray",
        secondary: "#FFFAEE",
      },
    });

    window.print();
  };

  return (
    <Button
      className={`size-8 ${className}`}
      variant="outline"
      size="icon"
      onClick={handlePrint}
      aria-label={label}
    >
      <Icon className="size-4" aria-hidden="true" />
    </Button>
  );
}

interface ContactButtonsProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
  return (
    <div
      className="font-poppins flex gap-x-1 pt-1 text-sm text-foreground/80 print:hidden"
      role="list"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <SocialButton
          href={personalWebsiteUrl}
          icon={GlobeIcon}
          label="Personal website"
        />
      )}
      {contact.email && (
        <SocialButton
          href={contact.email} // Not mailto
          icon={MailIcon}
          label="Email"
        />
      )}
      {contact.tel && (
        <SocialButton
          href={contact.tel} // Not tel:
          icon={PhoneIcon}
          label="Phone"
        />
      )}
      {contact.social.map((social) => (
        <SocialButton
          key={social.name}
          href={social.url}
          icon={social.icon}
          label={social.name}
        />
      ))}
    </div>
  );
}

interface PrintContactProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
  return (
    <div
      className="font-poppins hidden gap-x-2 text-sm text-foreground/80 print:flex print:text-[12px]"
      aria-label="Print contact information"
    >
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.tel && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`tel:${contact.tel}`}
          >
            {contact.tel}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.social[1] && (
        <a
          className="underline hover:text-foreground/70"
          href={`${contact.social[1].url}`}
        >
          {`${contact.social[1].url
            .replace("https://", "")
            .replace("www.", "")
            .replace("in/", "")}`}
        </a>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold" id="resume-name">
          {RESUME_DATA.name}
        </h1>
        <p
          className="font-poppins max-w-md text-pretty text-base text-foreground/80 print:text-[12px]"
          aria-labelledby="resume-name"
        >
          {RESUME_DATA.about}
        </p>

        <LocationLink
          location={RESUME_DATA.location}
          locationLink={RESUME_DATA.locationLink}
        />

        <ContactButtons
          contact={RESUME_DATA.contact}
          personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
        />

        <PrintContact
          contact={RESUME_DATA.contact}
          personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
        />
      </div>

      <DownloadButton
        icon={DownloadIcon}
        label="Download PDF"
        className="print:hidden"
      />
    </header>
  );
}
