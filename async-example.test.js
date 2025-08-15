import { it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

/* it('should generate a token', (done) => {
    const email = 'test@test.com';
    generateToken(email, (err, token) => {
        try {
            expect(token).toBe(2)
            done();
        } catch (err) {
            done(err);
        }
    })
    
});  */

it('should generate a token', (done) => {
    const email = 'test@test.com';
    generateToken(email, (err, token) => {
        try {
            expect(token).toBeDefined()
            done();
        } catch (err) {
            done(err);
        }
    })
    
}); 

it('should generate a token value', () =>{
     const email = 'test@test.com';
     expect(generateTokenPromise(email)).resolves.toBeDefined();
})

it('should generate a token value', async() =>{
    const email = 'test@test.com';
    const token = await generateTokenPromise(email);
    expect(token).toBeDefined(token);
})

