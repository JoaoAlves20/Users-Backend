import assert from 'assert';

import UserService from '../src/service/users.service.ts';

const data = [
    {
        created_at: '2026-04-30T23:07:35.484173+00:00',
        email: 'teste@example.com',
        id: '812a81cf-c0ae-4f4c-a19d-b4586bc095ce',
        password: 'teste1234',
        role: 'USER',
        username: 'Teste'
    }
]

describe("UserService", () => {
    it('testando o findall', async () => {
        const result = await UserService.findAll();
        const expect = data;

        assert.deepEqual(expect, result);
    })

    it('testando o findbyid', async () => {
        const result = await UserService.findById('812a81cf-c0ae-4f4c-a19d-b4586bc095ce');
        const expect = data;

        assert.deepEqual(result, expect);
    })

    it('testando o create', async () => {
        const value = { username: 'user-random3', password: 'userrandom1234',email: 'user3@example.com' }
        const result = await UserService.create(value);
        const expect = true;

        assert.deepEqual(result, expect);
    })

    it('testando o update', async () => {
        const value = { username: 'João Alves', password: 'joaoalves1234' };
        const result = await UserService.update('33daa8df-6c37-4ad0-b077-565493adc256', value);
        const expect = true;

        assert.deepEqual(result, expect);
    })

    it('testando o delete', async () => {
        const result = await UserService.delete('916482ab-f2c8-4ade-a034-b9ec4f3cbf0e');
        const expect = true;

        assert.deepEqual(result, expect);
    })
})