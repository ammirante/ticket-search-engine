import { ResponseContractInterceptor } from "./response-contract.interceptor";

describe('ResponseContractInterceptor', () => {
    describe('init', () => {
        it('should be defined', () => {
            expect(new ResponseContractInterceptor()).toBeDefined();
        });
    });
});
