import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "H₂OP – Das Hopfenwasser | Premium Alcohol-Free Hoppy Water",
  description = "Join the revolution with H₂OP – Das Hopfenwasser. Fizzy hoppy goodness for beer lovers. Tropical, bright, crisp flavor with 0% alcohol, no gluten, and no calories. Made in Germany with over 20 years of brewing experience. Berlin born, globally inspired.",
  keywords = "alcohol-free beer, hoppy water, zero alcohol beverage, non-alcoholic drink, gluten-free, zero calories, H2OP, hopfenwasser, German beverage, Berlin drink, premium alcohol-free, hop water, sparkling hop drink, mindful drinking, sober curious",
  image = "https://images.unsplash.com/photo-1588623857436-5e51bcc5bf89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  url = "https://h2op.com",
  type = "website",
}: SEOProps) {
  const siteName = "H₂OP – Das Hopfenwasser";
  const twitterHandle = "@h2opwater";

  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Helper function to set or update link tags
    const setLinkTag = (rel: string, href: string, attributes: Record<string, string> = {}) => {
      let element = document.querySelector(`link[rel="${rel}"]${attributes.hreflang ? `[hreflang="${attributes.hreflang}"]` : ''}`);
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      
      element.setAttribute('href', href);
      Object.entries(attributes).forEach(([key, value]) => {
        element!.setAttribute(key, value);
      });
    };

    // Set HTML lang attribute
    document.documentElement.setAttribute('lang', 'en');

    // Primary Meta Tags
    setMetaTag('title', title);
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'H₂OP');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'English');
    setMetaTag('revisit-after', '7 days');

    // Open Graph / Facebook
    setMetaTag('og:type', type, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:image:alt', 'H₂OP Hopfenwasser - Premium Alcohol-Free Beverage', true);
    setMetaTag('og:site_name', siteName, true);
    setMetaTag('og:locale', 'en_US', true);

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:url', url);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    setMetaTag('twitter:creator', twitterHandle);
    setMetaTag('twitter:site', twitterHandle);

    // Additional SEO Meta Tags
    setMetaTag('theme-color', '#059669');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    setMetaTag('apple-mobile-web-app-title', 'H₂OP');
    setMetaTag('format-detection', 'telephone=no');
    setMetaTag('mobile-web-app-capable', 'yes');

    // Geo Tags
    setMetaTag('geo.region', 'DE-BE');
    setMetaTag('geo.placename', 'Berlin');
    setMetaTag('geo.position', '52.520008;13.404954');
    setMetaTag('ICBM', '52.520008, 13.404954');

    // Canonical URL
    setLinkTag('canonical', url);

    // Alternate Languages
    setLinkTag('alternate', url, { hreflang: 'en' });
    setLinkTag('alternate', `${url}/de`, { hreflang: 'de' });
    setLinkTag('alternate', url, { hreflang: 'x-default' });

    // Performance & Resource Hints
    setLinkTag('preconnect', 'https://fonts.googleapis.com');
    setLinkTag('preconnect', 'https://fonts.gstatic.com', { crossorigin: 'anonymous' });
    setLinkTag('preconnect', 'https://images.unsplash.com');
    setLinkTag('dns-prefetch', 'https://www.google-analytics.com');

    // Favicon & App Icons
    setLinkTag('icon', '/favicon.svg', { type: 'image/svg+xml' });
    setLinkTag('apple-touch-icon', '/apple-touch-icon.png', { sizes: '180x180' });
    setLinkTag('manifest', '/site.webmanifest');

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${url}#organization`,
          name: siteName,
          url: url,
          logo: {
            "@type": "ImageObject",
            url: `${url}/logo.png`,
          },
          description: description,
          foundingDate: "2024",
          foundingLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Berlin",
              addressCountry: "DE",
            },
          },
          sameAs: [
            "https://instagram.com/h2opwater",
            "https://facebook.com/h2opwater",
            "https://twitter.com/h2opwater",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${url}#website`,
          url: url,
          name: siteName,
          description: description,
          publisher: {
            "@id": `${url}#organization`,
          },
        },
        {
          "@type": "Product",
          name: "H₂OP Hopfenwasser",
          description:
            "Premium alcohol-free hoppy water with tropical flavor, 0% alcohol, no gluten, and zero calories",
          brand: {
            "@type": "Brand",
            name: "H₂OP",
          },
          offers: {
            "@type": "AggregateOffer",
            availability: "https://schema.org/InStock",
            priceCurrency: "EUR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "250",
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Alcohol Content",
              value: "0%",
            },
            {
              "@type": "PropertyValue",
              name: "Calories",
              value: "0",
            },
            {
              "@type": "PropertyValue",
              name: "Gluten",
              value: "Gluten-Free",
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: url,
            },
          ],
        },
      ],
    };

    // Add or update structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, image, url, type, siteName, twitterHandle]);

  return null;
}