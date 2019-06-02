import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import alias from 'rollup-plugin-alias'
import resolve from 'rollup-plugin-node-resolve'
import ttypescript from 'ttypescript'
import { join } from 'path'

const isProduction = process.env.BUILD === 'production'
const srtDir = join(__dirname, 'src')
const distDir = join(__dirname, 'dist')

export default async () => [
  // You can also get a more optimized wrapper by creating dedicated builds for the formats “cjs” (Node), “amd” or “iife” (script tag)
  await getConfig({
    optimize: true,
    output: {
      file: join(distDir, 'bundle-umd.js'),
      format: 'umd',
      esModule: true
    }
    // не важно какой output.format, главное сгенерировать css файл один раз, а не для каждой сборки (конфига)
    // generateCssFile: join(distDir, 'main.css')
  }),
  await getConfig({
    output: {
      file: join(distDir, 'bundle-esm.js'),
      format: 'esm',
      // это отдельная сборка под ES модули
      esModule: true
    }
  }),
  await getConfig({
    optimize: true,
    output: {
      file: join(distDir, 'bundle-cjs.js'),
      format: 'cjs'
    }
  }),
  await getConfig({
    optimize: true,
    output: {
      file: join(distDir, 'bundle-iife.js'),
      format: 'iife'
    }
  })
]

async function getConfig ({
  optimize = false,
  output: {
    file,
    format,
    esModule = false
  },
  plugins = []
}) {
  return {
    input: join(srtDir, 'main.ts'),
    output: {
      esModule,
      file,
      format,
      exports: 'named',
      // используется в umd и в iife
      name: 'tailwindCssVue',
      globals: {
        vue: 'Vue'
      }
    },
    // можно Object.keys(globals)
    external: [
      'vue'
    ],
    plugins: [
      alias({
        resolve: ['.ts', '.js'],
        '~': srtDir
      }),
      // TODO раньшн resolve был после commonjs (но в github я видел в таком порядке)
      resolve({
        extensions: ['.ts', '.js', '.json'],
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      }),
      commonjs(),
      typescript({
        // это фиксит Unknown object type "asyncfunction"
        // https://github.com/ezolenko/rollup-plugin-typescript2/issues/105
        clean: true,
        typescript: ttypescript
      }),
      // оптимизация
      optimize && isProduction && (await import('rollup-plugin-terser')).terser(),
      ...plugins
    ]
  }
}
