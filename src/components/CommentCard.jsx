import React, { useState, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function CommentCard() {
  const [show, setShow] = useState(false);
  const { colorMode } = useColorMode(); // Docusaurus 当前主题
  const [giscusTheme, setGiscusTheme] = useState('');

  // 🔄 根据 localStorage 设置 giscus 的 theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setGiscusTheme(
      savedTheme === 'dark'
        ? 'dark_dimmed'
        : savedTheme === 'light'
        ? 'light_high_contrast'
        : 'light'
    );
  }, [colorMode]);

  // 💬 动态插入 giscus
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
      script.setAttribute('data-theme', giscusTheme); // ✅ 关键点：动态主题
      script.setAttribute('data-lang', 'zh-CN');
      script.setAttribute('crossorigin', 'anonymous');
      script.async = true;
      script.id = 'giscus-script';

      document.getElementById('giscus-container').appendChild(script);
    }
  }, [show, giscusTheme]);

  // 🌈 按钮颜色适配主题
  const isDark = colorMode === 'dark';
  const backgroundColor = isDark ? '#333' : '#fff';
  const hoverColor = isDark ? '#444' : '#f2f2f2';
  const borderColor = isDark ? '#555' : '#ddd';
  const textColor = isDark ? '#eee' : '#333';

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '1.5rem',
        paddingRight: '0.5rem',
      }}>
        <button
          onClick={() => setShow(true)}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            fontSize: '1.2rem',
            background: backgroundColor,
            color: textColor,
            border: `1px solid ${borderColor}`,
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = hoverColor;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = backgroundColor;
          }}
          title="查看评论"
        >
          💬
        </button>
      </div>

      {show && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => setShow(false)}
        >
          <div
            style={{
              background: isDark ? '#2a2a2a' : '#fefefe',
              borderRadius: '12px',
              maxWidth: '800px',
              width: '90%',
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              position: 'relative',
              color: isDark ? '#eee' : '#333',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShow(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: isDark ? '#aaa' : '#555',
              }}
              title="关闭评论"
            >
              ✖
            </button>

            <div id="giscus-container" />
          </div>
        </div>
      )}
    </>
  );
}