import { registerAs } from '@nestjs/config';

export const airlinesConfig = registerAs('airlinesConfig', () => {
    const {
        AZUL_URL: azulBaseUrl,
    } = process.env;

    return {
        azulBaseUrl,
    };
});
