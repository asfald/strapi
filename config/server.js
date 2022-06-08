module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('OEsKeJyv1hdrGNFkqtK4Ow==,CWSURyQqQ0EEj+f3+F/dXQ==,eEOI9IZVmZDIKYzb7JEOkw==,PJgSU8lSe0+JWUk4/dsW3g=='),
    },
});