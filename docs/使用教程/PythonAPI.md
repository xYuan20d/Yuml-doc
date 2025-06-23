---
sidebar_position: 1
title: Python API
id: python_api
---

# Yuml Python API 简介

Yuml 提供的 Python API 相对较少，核心功能大多由 Yuml 缩写封装，因此 Python API 仅包含少量关键接口。

## 主要 API

### 类 `LoadYmlFile`

```python
LoadYmlFile(
    file_name: str,           # Yuml 文件路径
    app: QApplication,        # Qt 应用实例
    load_str: bool = False,   # 是否加载字符串内容，默认 False
    is_module: bool = False,  # 是否作为模块加载，默认 False
    _p: QWidget | None = None # 父窗口指针，默认 None
)
```

### 示例
```python
from PySide6.QtWidgets import QApplication
from os import environ
environ["__YuQt_WindowStyle"] = "YW_root"  # 设置窗口样式，必须在导入 Yuml 之前

from YUML.Yuml import LoadYmlFile

app = QApplication([])

# 加载 Yuml 文件，启动应用
LoadYmlFile("main.yaml", app)

app.exec()
```