import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo1.png" alt="Yuml Logo" style={{ width: '120px', marginBottom: '1rem' }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">基于 YAML 的声明式 UI 与数据交互语言</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            🚀 快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Yuml"
      description="Yuml 是一门基于 YAML 的声明式 UI 与数据交互语言，支持插件化、元编程、可视化组件，适用于数据可视化与前端开发。">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}

        <section className={styles.section}>
          <div className="container">
            <h2>🧠 Yuml 是什么？</h2>
            <p>
              <strong>Yuml</strong> 是一门面向 UI 和数据交互场景设计的声明式语言，基于 YAML 语法扩展而来，适用于构建可视化界面、数据面板、插件系统等复杂交互逻辑。
            </p>
            <ul>
              <li>🧩 支持模块化、插件扩展、元素冲突检测机制</li>
              <li>🪄 原生支持 Python / Lua 脚本嵌入与交互</li>
              <li>🔁 完整控制流：支持 if / for / break / continue</li>
              <li>🎯 元编程 + 数据绑定 + 模板渲染 引擎</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              👉 想了解更多？查看 <a href="/docs/intro">使用文档</a> 或访问 <a href="https://github.com/lvzhiyuan/Yuml-docs" target="_blank">GitHub 仓库</a>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}