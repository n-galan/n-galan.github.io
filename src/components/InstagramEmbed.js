import React, { useEffect } from 'react';

const InstagramEmbed = ({ embedHtml }) => {
  useEffect(() => {
    // Dynamically load Instagram's embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    // Function to hide likes in the embedded post
    const hideLikes = () => {
      // Observe changes in the DOM to identify the likes section
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // Check if like elements exist and hide them
          const likeElements = document.querySelectorAll('.instagram-media ._aacl ._aacu');
          likeElements.forEach(element => {
            element.style.display = 'none';
          });
        });
      });

      // Observe changes in the Instagram embed container
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Cleanup the observer when the component is unmounted
      return () => {
        observer.disconnect();
      };
    };

    // Wait for the Instagram embed script to load
    script.onload = () => {
      hideLikes();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [embedHtml]); // Runs every time embedHtml changes

  return <div dangerouslySetInnerHTML={{ __html: embedHtml }} />;
};

export default InstagramEmbed;
