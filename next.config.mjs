import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  output: 'export',
  outputFileTracingRoot: dirname
}

export default nextConfig