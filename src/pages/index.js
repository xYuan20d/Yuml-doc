import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import React, { useEffect, useState } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/logo1.png"
          alt="Yuml Logo"
          style={{ width: '120px', marginBottom: '1rem' }}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">基于 YAML 的声明式 UI 与数据交互语言</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            🚀 快速开始
          </Link>
          <Link className="button button--secondary button--lg" to="/blog" style={{ marginLeft: '1rem' }}>
            📚 动态
          </Link>
        </div>
      </div>
    </header>
  );
}

const frostedStyle = {
  background: 'rgba(255, 255, 255, 0.12)',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(10px) saturate(180%)',
  WebkitBackdropFilter: 'blur(10px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  color: 'var(--ifm-font-color-base)',
  backfaceVisibility: 'hidden',
};

function Card({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const shouldIgnoreClick = (target) => {
    return (
      ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL'].includes(target.tagName) ||
      target.closest('button, a, input, textarea, select, label')
    );
  };

  const handleClick = (e) => {
    if (shouldIgnoreClick(e.target)) return;
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{ perspective: '1200px', marginBottom: '3rem' }}>
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '300px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s',
          transform: isFlipped ? 'rotateY(180deg)' : 'none',
          cursor: 'pointer',
        }}
      >
        <div style={{ ...frostedStyle }}>
          {front}
        </div>

        <div
          style={{
            ...frostedStyle,
            transform: 'rotateY(180deg)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const defaultSource = 'https://raw.githubusercontent.com/xYuan20d/Yuml-Packages/refs/heads/main/packages.json';
  const [source, setSource] = useState(defaultSource);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const loadData = (url) => {
    setLoading(true);
    setMessage('加载中...');
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP 错误: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setData(json);
        setMessage('加载成功！');
      })
      .catch((err) => {
        console.error('加载失败：', err);
        setMessage('加载失败，请检查链接或网络');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData(source);
  }, []);

  return (
    <Layout
      title="Yuml"
      description="Yuml 是一门基于 YAML 的声明式 UI 与数据交互语言，支持插件化、元编程、可视化组件，适用于数据可视化与前端开发。"
    >
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">

            {/* 简介卡片 */}
            <Card
              front={
                <>
                  <h2>🧠 Yuml 是什么？</h2>
                  <p>
                    <strong>Yuml</strong> 是一门基于 YAML 的声明式语言，专注 UI 和数据交互，支持模块化、脚本嵌入、控制流与事件驱动。
                  </p>
                  <ul>
                    <li>🧩 插件机制与冲突检测</li>
                    <li>⚡ 极简语法，无需 JS</li>
                    <li>🪄 支持 Python / Lua</li>
                    <li>🔁 完整控制流语法</li>
                    <li>🎯 数据绑定 & 模板渲染</li>
                  </ul>
                </>
              }
              back={
                <>
                <h2>
                  没啦~
                </h2>
                </>
              }
            />

            {/* 插件列表卡片 */}
            <Card
              front={
                <>
                  <h3 style={{ textAlign: 'center' }}>📦 可用的 Yuml 插件</h3>
                  {loading ? (
                    <p style={{ textAlign: 'center' }}>{message}</p>
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: 'center',
                      }}
                    >
                      {Object.keys(data).map((key) => (
                        <button
                          key={key}
                          onClick={() => window.open(data[key].link, '_blank')}
                          className="button button--primary button--lg"
                          style={{
                            width: '300px',
                            textAlign: 'left',
                            padding: '1rem 1.5rem',
                            whiteSpace: 'normal',
                            lineHeight: '1.4',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>{key}</div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.85 }}>
                              {data[key].info}
                            </div>
                          </div>
                          <div style={{ marginTop: '0.8rem', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            {(data[key].authors || []).map((author, idx) => (
                              <span
                                key={idx}
                                style={{
                                  backgroundColor: 'rgba(255,255,255,0.3)',
                                  borderRadius: '12px',
                                  padding: '2px 8px',
                                  fontSize: '0.75rem',
                                  userSelect: 'none',
                                }}
                              >
                                {author}
                              </span>
                            ))}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              }
              back={
                <>
                  <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>🛠 更换插件源</h3>
                  <input
                    type="text"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="输入 JSON 数据地址"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #ccc',
                      fontSize: '1rem',
                      marginBottom: '1rem',
                    }}
                  />
                  <button
                    className="button button--primary button--lg"
                    onClick={() => loadData(source.trim())}
                    disabled={loading}
                    style={{ width: '100%' }}
                  >
                    🔄 重新加载
                  </button>
                  <p style={{ marginTop: '1rem', textAlign: 'center' }}>{message}</p>
                </>
              }
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}