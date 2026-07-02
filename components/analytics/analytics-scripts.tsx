import Script from "next/script";

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID?.trim();
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const microsoftClarityId = process.env.MICROSOFT_CLARITY_ID?.trim();
const plausibleDomain = process.env.PLAUSIBLE_DOMAIN?.trim();

export function AnalyticsScripts() {
  return (
    <>
      {googleSiteVerification ? (
        <meta name="google-site-verification" content={googleSiteVerification} />
      ) : null}

      {googleAnalyticsId ? (
        <>
          <Script
            id="ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {microsoftClarityId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${microsoftClarityId}");
          `}
        </Script>
      ) : null}

      {plausibleDomain ? (
        <Script
          data-domain={plausibleDomain}
          defer
          id="plausible-analytics"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
