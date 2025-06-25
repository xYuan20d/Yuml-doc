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
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            🚀 快速开始
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog"
            style={{ marginLeft: '1rem' }}>
            📚 动态
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/xYuan20d/Yuml-Packages/refs/heads/main/packages.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("加载 JSON 失败:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout
      title="Yuml"
      description="Yuml 是一门基于 YAML 的声明式 UI 与数据交互语言，支持插件化、元编程、可视化组件，适用于数据可视化与前端开发。">

      <HomepageHeader />

      <main>
        <section className={styles.section}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🧠 Yuml 是什么？</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <strong>Yuml</strong> 是一门面向 UI 和数据交互场景设计的声明式语言，基于 YAML 语法扩展而来，适用于构建可视化界面、数据面板、插件系统等复杂交互逻辑。
            </p>
            <ul>
              <li>🧩 支持模块化、插件扩展、元素冲突检测机制</li>
              <li>⚡ 语法极简：无需写 JavaScript 或 HTML</li>
              <li>🪄 原生支持 Python / Lua 脚本嵌入与交互</li>
              <li>🔁 完整控制流：支持 if / for / break / continue</li>
              <li>🎯 事件驱动 + 数据绑定 + 模板渲染 引擎</li>
            </ul>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>📦 可用的 Yuml 插件</h3>
              {loading ? (
                <p>加载中...</p>
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
                        <div style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'inherit', opacity: 0.85 }}>
                          {data[key].info}
                        </div>
                      </div>

                      <div
                        style={{
                          marginTop: '0.8rem',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                        }}
                      >
                        {(data[key].authors || []).map((author, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              color: 'inherit',
                              padding: '2px 8px',
                              fontSize: '0.75rem',
                              borderRadius: '12px',
                              userSelect: 'none',
                              whiteSpace: 'nowrap',
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
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}