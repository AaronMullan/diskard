import React from 'react';
import Image from 'next/image';

export default function ContactBar() {
  const contactCardData = [
    {
      text: 'Fill out our',
      linkText: 'contact form',
      href: '/contact',
      image: '/images/form.svg',
    },
    {
      text: 'Email us',
      linkText: 'help@diskard.com',
      href: 'mailto:aaroncmullan@gmail.com',
      image: '/images/mail.svg',
    },
    {
      text: 'Text us',
      linkText: '503-555-1212',
      href: 'sms:+9179680309',
      image: '/images/text.svg',
    },
  ];

  return (
    <div style={{
      display: 'flex', width: '100%', justifyContent: 'space-between', padding: '40px 0px',
    }}
    >
      {contactCardData.map((el) => (
        <ContactCard
          text={el.text}
          href={el.href}
          linkText={el.linkText}
          image={el.image}
        />
      ))}
    </div>
  );
}

function ContactCard({
  text, href, linkText, image,
}) {
  return (
    <div>
      <a href={href}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
          <Image
            src={image}
            height={20}
            width={20}
            alt="Ridwell Logo"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <p>{text}</p>
        <div className="linkText">
          <p>{linkText}</p>
        </div>
      </a>
    </div>
  );
}
