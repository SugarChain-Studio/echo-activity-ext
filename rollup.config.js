const path = require("path");
const { createModRollupConfig } = require("./utils/rollupUtils.cjs");
const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const terser = require("@rollup/plugin-terser");
const { defineConfig } = require("rollup");

const packageJSON = require(path.join(process.cwd(), "package.json"));

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
    const debug = !!cliArgs.configDebug;
    const baseURL = cliArgs.configBaseURL;
    const beta = !!cliArgs.configBeta;
    const utilDir = cliArgs.configUtilsDir ? cliArgs.configUtilsDir : "utils";
    const curDir = __dirname;

    const destDir = `${curDir}/public/`;

    if (!baseURL || typeof baseURL !== "string") throw new Error("No deploy site specified");

    return [
        await createModRollupConfig({ packageJSON, curDir, utilDir, destDir, baseURL, beta, debug }),
        createTranslationConfig({ destDir, beta, debug }),
    ];
};
