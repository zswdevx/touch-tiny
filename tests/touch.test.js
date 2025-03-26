import { describe, it, expect, vi, beforeEach } from 'vitest'
import { hasFileExtension, create } from '../lib/core.js'
import path from 'path'
import fs from 'fs'

vi.mock('fs')
vi.mock('path')

describe('hasFileExtension', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('应该识别带扩展名的文件', () => {
    path.extname.mockReturnValue('.txt')
    expect(hasFileExtension('file.txt')).toBe(true)
  })

  it('应该识别没有扩展名的文件夹', () => {
    path.extname.mockReturnValue('')
    expect(hasFileExtension('folder')).toBe(false)
  })
})

describe('create', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    // 设置模拟实现
    fs.mkdirSync.mockImplementation(() => undefined)
    fs.openSync.mockReturnValue(1)
    fs.futimesSync.mockImplementation(() => undefined)
    fs.closeSync.mockImplementation(() => undefined)
    path.dirname.mockImplementation(p => (p.includes('/') ? p.split('/')[0] : '.'))
    path.extname.mockImplementation(p => (p.includes('.') ? p.substring(p.lastIndexOf('.')) : ''))
  })

  it('应该创建文件', () => {
    path.extname.mockReturnValue('.txt')

    const result = create('test.txt')

    expect(result).toBe('File created: test.txt')
    expect(fs.openSync).toHaveBeenCalledWith('test.txt', 'a')
    expect(fs.closeSync).toHaveBeenCalled()
  })

  it('应该创建带路径的文件', () => {
    path.extname.mockReturnValue('.js')
    path.dirname.mockReturnValue('src')

    const result = create('src/index.js')

    expect(result).toBe('File created: src/index.js')
    expect(fs.mkdirSync).toHaveBeenCalledWith('src', { recursive: true })
    expect(fs.openSync).toHaveBeenCalledWith('src/index.js', 'a')
  })

  it('应该创建文件夹', () => {
    path.extname.mockReturnValue('')

    const result = create('newfolder')

    expect(result).toBe('Directory created: newfolder')
    expect(fs.mkdirSync).toHaveBeenCalledWith('newfolder', { recursive: true })
  })
})
