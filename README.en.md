# touch-tiny

[![npm version](https://img.shields.io/npm/v/touch-tiny.svg)](https://www.npmjs.com/package/touch-tiny)
[![License](https://img.shields.io/npm/l/touch-tiny.svg)](https://github.com/zswdevx/touch-tiny/blob/master/LICENSE)

*[简体中文](./README.md) | English*

A lightweight file creation tool similar to the Unix/Linux `touch` command, but optimized for Node.js environment, supporting the creation of both files and folders.

## Installation

### Global Installation (Recommended)

```shell
npm install -g touch-tiny
# or using yarn
yarn global add touch-tiny
# or using pnpm
pnpm add -g touch-tiny
```

### Local Installation

```shell
npm install touch-tiny
# or using yarn
yarn add touch-tiny
# or using pnpm
pnpm add touch-tiny
```

## Usage

### Create a Single File

```shell
touch filename.txt
```

### Create Multiple Files

```shell
touch file1.js file2.js file3.css
```

### Create Files in Nested Paths

You can create files in nested folders by specifying the path:

```shell
touch src/components/Button.jsx
```

### Create Folders

If the path doesn't contain a file extension, a folder will be created:

```shell
touch dist/assets
```

### Create Multiple Files and Folders

You can create multiple files or folders at once using space-separated paths:

```shell
touch file1.js src/utils/helpers.js dist/assets
```

## Features

- 🚀 Lightweight with no third-party dependencies
- 📁 Smart creation of files and folders
- 🔄 Automatically creates non-existent directories
- 💻 Cross-platform support (Windows, MacOS, Linux)
- 📚 Support for creating multiple files or folders at once with space-separated paths

## License

MIT

## Contribution

Feel free to submit Issues and Pull Requests to the [GitHub repository](https://github.com/zswdevx/touch-tiny).