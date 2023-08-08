"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const prisma_service_1 = require("../../../../database/prisma/prisma.service");
const user_presenter_1 = require("../../presenters/user.presenter");
let UsersService = exports.UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }
    async findAll() {
        const users = await this.prisma.user.findMany();
        return users.map((user) => new user_presenter_1.UserPresenter(user));
    }
    async create(data) {
        const salt = await (0, bcrypt_1.genSalt)(10);
        const hashPassword = await (0, bcrypt_1.hash)(data.password, salt);
        const newUser = await this.prisma.user.create({
            data: {
                ...data,
                password: hashPassword,
            },
        });
        return new user_presenter_1.UserPresenter(newUser);
    }
    async update(id, data) {
        return this.prisma.user.update({
            data,
            where: {
                id,
            },
        });
    }
    async delete(id) {
        return this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map