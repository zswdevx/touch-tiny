# touch-tiny

一个轻量级的文件创建工具，类似于 Unix/Linux 的 `touch` 命令，但针对 Node.js 环境优化，支持创建文件和文件夹。

## 安装

### 全局安装（推荐）

```shell
npm install -g touch-tiny
# 或使用 yarn
yarn global add touch-tiny
# 或使用 pnpm
pnpm add -g touch-tiny
```

### 本地安装

```shell
npm install touch-tiny
# 或使用 yarn
yarn add touch-tiny
# 或使用 pnpm
pnpm add touch-tiny
```

## 使用方法

### 创建单个文件

```shell
touch filename.txt
```

### 创建多个文件

```shell
touch file1.js file2.js file3.css
```

### 创建嵌套路径下的文件

可以通过指定路径创建嵌套文件夹下的文件：

```shell
touch src/components/Button.jsx
```

### 创建文件夹

如果路径不包含文件扩展名，将创建文件夹：

```shell
touch dist/assets
```

### 创建多个文件和文件夹

支持空格分隔的方式一次创建多个文件或文件夹：

```shell
touch file1.js src/utils/helpers.js dist/assets
```

## 特性

- 🚀 轻量级，无外部依赖
- 📁 智能创建文件和文件夹
- 🔄 自动创建不存在的目录
- 💻 跨平台支持 (Windows, MacOS, Linux)
- 📚 支持空格分隔一次创建多个文件或文件夹

## 许可证

MIT

## 贡献

欢迎提交 Issues 和 Pull Requests 到 [GitHub 仓库](https://github.com/zhswchn/touch-tiny)。
