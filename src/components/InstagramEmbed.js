import React, { useEffect } from 'react';

const InstagramEmbed = ({ embedHtml }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [embedHtml]); // React on changes to embedHtml

  return <div dangerouslySetInnerHTML={{ __html: embedHtml }} />;
};

export default InstagramEmbed;
