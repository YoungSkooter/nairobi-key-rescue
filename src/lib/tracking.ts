// Push events to GTM dataLayer for tracking clicks
export const trackCallClick = () => {
  (window as any).dataLayer?.push({
    event: 'call_click',
    click_url: 'tel:+254729312480',
  });
};

export const trackWhatsAppClick = () => {
  (window as any).dataLayer?.push({
    event: 'whatsapp_click',
    click_url: 'https://wa.me/254729312480',
  });
};
