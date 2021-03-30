import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class Password {
    static async encryptAsync(password: string) {

        const salt = randomBytes(8).toString('hex');
        const buffer = (await scryptAsync(password, salt, 64)) as Buffer;

        return `${buffer.toString('hex')}.${salt}`;
    }

    static async compare(storedPassword: string, givenPassword: string) {
        const [hashedPassword, salt] = storedPassword.split('.');
        const buff = (await scryptAsync(givenPassword, salt, 64)) as Buffer;

        return buff.toString('hex') === storedPassword;
    }
}