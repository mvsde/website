import path from 'node:path'

import cssnano from 'cssnano'
import pluginImport from 'postcss-import'
import pluginURL from 'postcss-url'

/** @typedef {import('postcss').Plugin} Plugin */
/** @typedef {import('postcss').Processor} Processor */
/** @typedef {import('postcss').Transformer} Transformer */
/** @typedef {import('postcss-url').Options} PluginURLOptions */

/**
 * @typedef {Object} Config
 * @property {import('postcss').SourceMapOptions} map
 * @property {Array<Plugin|Processor|Transformer|false>} plugins
 */

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

/** @type {PluginURLOptions[]} */
const urlOptions = [
	{
		filter: '**/*.woff2',
		url: 'copy',
		basePath: path.resolve('node_modules'),
		assetsPath: 'fonts',
		useHash: true,
	},
]

/** @type {Config} */
export default {
	map: {
		inline: false,
	},
	plugins: [pluginImport(), pluginURL(urlOptions), IS_PRODUCTION && cssnano()],
}
