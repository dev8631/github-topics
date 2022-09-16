import Index from './index.js';

describe('Test index.js', () => {
    it("Should render app without crashing", () => {
        expect(
            JSON.stringify(
                Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
            ),
        ).toMatchSnapshot();
    });
})