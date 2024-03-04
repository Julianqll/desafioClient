// auth.ts
const TOKEN_KEY = 'token';
const USER_KEY = 'user';

interface User {
    id: number;
    username: string;
    email: string;
    groups: number[];
}

class Auth {
    private token: string | null;
    private user: User | null;

    constructor() {
        this.token = localStorage.getItem(TOKEN_KEY);
        this.user = this.getUserFromLocalStorage();
    }

    private getUserFromLocalStorage(): User | null {
        const userStr = localStorage.getItem(USER_KEY);
        return userStr ? JSON.parse(userStr) : null;
    }

    public setTokenAndUser(token: string, user: User) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        this.token = token;
        this.user = user;
    }

    public getToken(): string | null {
        return this.token;
    }

    public getUser(): User | null {
        return this.user;
    }

    public removeTokenAndUser() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
        this.token = null;
        this.user = null;
    }
}

const authInstance = new Auth();
export default authInstance;
