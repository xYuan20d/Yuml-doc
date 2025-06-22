import React, { useEffect } from 'react';

export default function Comment() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'xYuan20d/Yuml-doc');
    script.setAttribute('data-repo-id', 'R_kgDOO_0DMQ');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOO_0DMc4Cr2BH');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'zh-CN');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const container = document.getElementById('giscus-container');
    if (container) container.appendChild(script);
  }, []);

  return <div id="giscus-container" />;
}