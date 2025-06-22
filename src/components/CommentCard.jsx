import React, { useState, useEffect } from 'react';

export default function CommentCard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show && !document.getElementById('giscus-script')) {
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
      script.id = 'giscus-script';

      document.getElementById('giscus-container').appendChild(script);
    }
  }, [show]);

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <button
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          background: '#00897B',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={() => setShow(!show)}
      >
        💬 {show ? '隐藏评论' : '显示评论'}
      </button>

      {show && (
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            background: '#f5f5f5',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          <div id="giscus-container" />
        </div>
      )}
    </div>
  );
}