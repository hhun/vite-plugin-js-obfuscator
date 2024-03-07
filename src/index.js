'use strict'
Object.defineProperties(exports, {
	__esModule: {
		value: !0
	},
	[Symbol.toStringTag]: {
		value: 'Module'
	}
})
var obfuscator = require('javascript-obfuscator')

function fun(param = {}) {
	return {
		name: 'vite:obfuscatefiles',
		transformIndexHtml: {
			enforce: 'post',
			transform(fileCode, id) {
				if (!(id != null && id.bundle)) {
					return fileCode
				}
				console.log('Obfuscate files')
				for (const [path, data] of Object.entries(id.bundle)) {
					if (data.code) {
						let isExclude =
							param.exclude.findIndex((currentValue) => {
								return path.substring(0, currentValue.length) == currentValue
							}) > -1
						if (isExclude) {
							console.log(`Skip obfuscate ${path}`)
						} else {
							console.log(`File obfuscate ${path}`)
							data.code = obfuscator.obfuscate(data.code, param.options).getObfuscatedCode()
						}
					}
				}
				console.log('Obfuscate done')
				return fileCode
			}
		}
	}
}
exports.default = fun
