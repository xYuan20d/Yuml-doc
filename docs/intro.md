---
sidebar_position: 1
title: Yuml简介
---

:::info 温馨提示
Yuml 的很多机制都受到 Python 启发(且兼容Python)，如果你对 Python 有一定了解，将更容易理解 Yuml 的核心设计。

[零基础点我👈](/docs/其他/basics)
:::

---

## 🧠 什么是 Yuml？

Yuml 是一个**基于 YAML 语法结构构建的声明式 UI 和元编程语言**，它的设计理念是：

> **摆脱 HTML + JS 的限制，实现全平台可嵌入的数据交互式编程体验**

- 类似 XML/HTML 的结构，但具备控制流、模块系统、动态表达式等能力。
- 既可以用来写页面 UI，也可以作为逻辑脚本语言运行。
- 支持 Python、Lua 的无缝嵌入，也能完全脱离传统语言独立运行。

## 🔥 特点一览

- ✅ 事件驱动编程
- ✅ 模块系统（可导入依赖包和组件）
- ✅ 全局变量、作用域、数据绑定机制
- ✅ 字符串模板渲染（`{< >}` / `{<< >>}` 支持表达式嵌入）
- ✅ 插件化机制，支持扩展组件、拖拽式可视化编辑
- ✅ 支持控制流（if / for / break / continue）
- ✅ 自定义语法指令

## 简单示例

你可以像写 YAML 一样写 UI 元素，也可以写函数、变量、模块：

```yaml
run:
  \>hello_world: "Hello World!"
  LOG: "{< hello_world >}"  # 输出Hello World!