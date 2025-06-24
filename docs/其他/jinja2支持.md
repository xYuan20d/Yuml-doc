---
id: jinja2
title: Jinja2支持
sidebar_position: 2
---

在 Yuml 中，所有代码在执行前，**默认会先经过 [Jinja2](https://jinja.palletsprojects.com/) 模板引擎的预处理**，然后再进入解释器阶段执行。

这种机制让你能够使用非常强大的模板表达式来动态生成 Yuml 代码，实现 **循环、判断、变量、模板复用等功能**。

---

## 🧠 为什么用 Jinja2？

Yuml 是声明式的语言，但并不意味着要放弃灵活性。

借助 Jinja2，你可以在静态结构中加入：

- 条件判断 (`{% if %}` / `{% else %}`)
- 循环语句 (`{% for %}`)
- 变量替换 (`{{ variable }}`)
- 宏函数 / include 等模板技巧

---

## ✨ 支持语法示例

```yml
; 会根据变量生成不同的内容
{% set show_button = true %}

{{ 'BUTTON:' ~ '确认' if show_button else '提示' }}

{% for i in range(3) %}
LOG: 第 {{ i }} 次执行
{% endfor %}