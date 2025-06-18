const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

module.exports = withNextIntl({
    experimental: {
        serverActions: false,
    },
});