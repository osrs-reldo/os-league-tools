import React from 'react';
import Card from './common/Card';

export default function IconLinkCard({ title, iconSrc = null, iconText = null, href = null, onClick = () => {} }) {
  const icon = iconSrc ? <IconFromSrc src={iconSrc} /> : <IconFromText text={iconText || title.toLowerCase()} />;
  const content = href ? (
    <CardLink title={title} icon={icon} href={href} />
  ) : (
    <CardButton title={title} icon={icon} onClick={onClick} />
  );

  return (
    <Card
      borders='accent-bottom'
      padding='sm'
      valign='center'
      halign='center'
      className='m-2 h-24 w-24 md:inline hidden'
    >
      <Card.Body>{content}</Card.Body>
    </Card>
  );
}

function IconFromText({ text }) {
  return <span className='icon-4xl text-center'>{text}</span>;
}

function IconFromSrc({ src }) {
  return <img className='h-9 mb-1 img-primary' src={src} alt='' />;
}

function CardLink({ title, icon, href }) {
  return (
    <a className='flex flex-col' href={href}>
      {icon}
      <p className='font-sans-alt text-center'>{title}</p>
    </a>
  );
}

function CardButton({ title, icon, onClick }) {
  return (
    <button className='flex flex-col items-center w-full' onClick={onClick} type='button'>
      {icon}
      <p className='font-sans-alt text-center'>{title}</p>
    </button>
  );
}
