export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    company: Company;
}

interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}
