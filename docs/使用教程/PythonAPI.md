---
sidebar_position: 1
title: Python API
id: python_api
---

# 🐍 Yuml Python API 简介

Yuml 的 Python API 比较简洁。  
大多数功能由 Yuml 的 YAML 脚本驱动完成，Python 端仅提供入口级封装，用于**加载 YAML 文件并启动应用**。

---

## 📌 核心接口：`LoadYmlFile`

```python
LoadYmlFile(
    file_name: str,            # Yuml 文件路径
    app: QApplication,         # Qt 应用实例
    load_str: bool = False,    # 是否以字符串方式加载内容（而非文件路径）
    _p: QWidget | None = None  # 父窗口对象（可选）
    ...                        # 这里不展示Yuml底层交互参数
)
```

该函数会自动识别并执行 YAML 中的根块，如 `windowCreated` 等。

---

## 🚀 示例用法

```python
from PySide6.QtWidgets import QApplication
from os import environ

# 必须在导入 Yuml 前设置窗口样式
environ["__YuQt_WindowStyle"] = "YW_root"

from YUML.Yuml import LoadYmlFile

app = QApplication([])

# 加载 Yuml 文件并运行
LoadYmlFile("main.yaml", app)

# 注意：不要使用 app.exec()
# Yuml 内部已集成 Qt 事件循环管理，建议在 YAML 中使用 $app::run 代替！
```

---

## 📎 注意事项

- `LoadYmlFile` 是 **Yuml 与 Python 的桥梁入口**
- 建议统一在 `main.yaml` 中使用 `windowCreated` 等事件块进行初始化