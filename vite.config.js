/** @type {import('vite').UserConfig} */
export default {
    server: {
        port: 1234
    },
    build: {
        sourcemap: true,
        assetsDir: 'code',
    },
    publicDir: 'static',
}