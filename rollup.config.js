const path = require("path");
const { createModRollupConfig, parseEnv } = require("./utils/rollupUtils.cjs");
const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const terser = require("@rollup/plugin-terser");
const { defineConfig } = require("rollup");

const packageJSON = require(path.join(process.cwd(), "package.json"));

/**
 * @param {ReturnType<parseEnv>} param0
 */
function createTranslationConfig({ destDir, beta = false, debug = false }) {
    return defineConfig({
        input: `${__dirname}/translation/index.js`,
        output: {
            file: `${destDir}${beta ? "/beta" : ""}/translation.js`,
            format: "es",
            sourcemap: debug ? "inline" : true,
        },
        treeshake: true,
        plugins: [commonjs(), resolve({ browser: true }), ...(debug ? [] : [terser({ sourceMap: true })])],
    });
}

module.exports = async (cliArgs) => {
    const env = parseEnv(__dirname, cliArgs);
    return [await createModRollupConfig({ env, packageJSON }), createTranslationConfig(env)];
};
