import fs from 'fs'
import config from './vite.config.js'
const settingsPath = './.vscode/settings.json'
const cwd = process.cwd()
const aliases = config.resolve.alias
const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'))

settings['path-autocomplete.pathMappings'] ||= {}
settings['path-intellisense.pathMappings'] ||= {}

for (let key in aliases) {
  const value = aliases[key]

  settings['path-autocomplete.pathMappings'][key] = value.replace(
    cwd,
    '${folder}'
  )
  settings['path-intellisense.pathMappings'][key] = value.replace(
    cwd,
    '${workspaceFolder}'
  )
}

const settingsStr = JSON.stringify(settings)
fs.writeFileSync(settingsPath, settingsStr)
console.log(settings)
