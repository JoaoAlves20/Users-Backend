import assert from 'assert';

import UserService from '../src/service/users.service.ts';

describe("UserService", () => {
    it('testando o findall', async () => {
        const result = await UserService.findAll();
        const data = [{
            created_at: '2026-04-30T00:42:31.122303+00:00',
            email: 'admin@example.com',
            id: '33daa8df-6c37-4ad0-b077-565493adc256',
            password: 'jvsa18072002',
            role: 'ADMIN',
            username: 'admin'
        }]

        assert.deepEqual(data, result);
    })
})