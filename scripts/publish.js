#!/usr/bin/env node
/**
 * 自动化发布脚本
 * 执行流程：切换到npm官方源 -> 发布包 -> 切换回淘宝源
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const OFFICIAL_NPM_REGISTRY = 'https://registry.npmjs.org/'
const TAOBAO_NPM_REGISTRY = 'https://registry.npmmirror.com/'

function runCommand(command) {
  console.log(`执行命令: ${command}`)
  try {
    const output = execSync(command, { cwd: rootDir, encoding: 'utf8' })
    if (output && output.trim()) {
      console.log(output)
    }
    return output
  } catch (error) {
    console.error(`命令执行失败: ${error.message}`)
    if (error.stdout) console.error(`标准输出: ${error.stdout}`)
    if (error.stderr) console.error(`错误输出: ${error.stderr}`)
    process.exit(1)
  }
}

function getCurrentRegistry() {
  try {
    return execSync('npm config get registry', { encoding: 'utf8' }).trim()
  } catch (error) {
    console.error('获取当前npm源失败:', error)
    return TAOBAO_NPM_REGISTRY
  }
}

async function main() {
  try {
    try {
      runCommand('npm whoami')
      console.log('已登录npm账号')
    } catch (error) {
      console.log('未登录npm账号，请先登录')
      runCommand('npm login')
    }

    const originalRegistry = getCurrentRegistry()
    console.log(`当前npm源: ${originalRegistry}`)

    console.log('切换到npm官方源...')
    runCommand(`npm config set registry ${OFFICIAL_NPM_REGISTRY}`)

    console.log('开始发布包...')
    runCommand('npm publish')

    console.log(`切换回原来的npm源: ${originalRegistry}...`)
    runCommand(`npm config set registry ${originalRegistry}`)

    console.log('发布成功！')
  } catch (error) {
    console.error('发布过程中出错:', error)
    process.exit(1)
  }
}

main()
