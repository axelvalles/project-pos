export declare class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly phone: string;
    readonly email: string;
    readonly password: string;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
