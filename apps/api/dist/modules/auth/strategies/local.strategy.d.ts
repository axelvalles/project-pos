import { AuthService } from '../services/auth/auth.service';
import { ExceptionsService } from 'src/modules/common/services/exceptions/exceptions.service';
declare const LocalStategy_base: new (...args: any[]) => any;
export declare class LocalStategy extends LocalStategy_base {
    private authService;
    private exceptionsService;
    constructor(authService: AuthService, exceptionsService: ExceptionsService);
    validate(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
export {};
