import { User } from '@prisma/client';
export declare class UserPresenter {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    isActive: boolean;
    constructor(user: User);
}
