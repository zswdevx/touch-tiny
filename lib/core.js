import fs from 'fs'
import path from 'path'

export function hasFileExtension(filePath) {
  return path.extname(filePath) !== ''
}

export function create(targetPath) {
  if (hasFileExtension(targetPath)) {
    // create file
    const dirname = path.dirname(targetPath)
    if (dirname !== '.') {
      fs.mkdirSync(dirname, { recursive: true })
    }
    const fileDescriptor = fs.openSync(targetPath, 'a')
    const now = new Date()
    fs.futimesSync(fileDescriptor, now, now)
    fs.closeSync(fileDescriptor)
    return `File created: ${targetPath}`
  } else {
    // create directory
    fs.mkdirSync(targetPath, { recursive: true })
    return `Directory created: ${targetPath}`
  }
}
