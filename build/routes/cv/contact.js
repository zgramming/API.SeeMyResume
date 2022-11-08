"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastest_validator_1 = __importDefault(require("fastest-validator"));
const koa_router_1 = __importDefault(require("koa-router"));
const client_1 = require("@prisma/client");
const constant_1 = require("../../utils/constant");
const prisma = new client_1.PrismaClient();
const validator = new fastest_validator_1.default();
const CVContactRouter = new koa_router_1.default({ prefix: "/api/cv/contact" });
CVContactRouter.get("/:users_id", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { users_id } = ctx.params;
    const result = yield prisma.cVContact.findMany({
        include: { user: true },
        where: { users_id: +users_id },
    });
    ctx.status = 200;
    return (ctx.body = {
        success: true,
        data: result,
    });
}));
CVContactRouter.post("/send/:username", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = ctx.params;
        const { email_sender, subject_sender, content_sender } = ctx.request.body;
        const user = yield prisma.users.findFirstOrThrow({
            where: { username: username },
        });
        const data = {
            users_id: user.id,
            email_sender,
            subject_sender,
            content_sender,
        };
        console.log({
            body: data,
            file: ctx.request.files,
        });
        const schema = {
            email_sender: { type: "string" },
            subject_sender: { type: "string" },
            content_sender: { type: "string" },
        };
        const createSchema = validator.compile(schema);
        const checkSchema = yield createSchema(data);
        if (checkSchema !== true) {
            ctx.status = 400;
            return (ctx.body = {
                success: false,
                type: constant_1.ERROR_TYPE_VALIDATION,
                message: checkSchema,
            });
        }
        const insert = yield prisma.cVContact.create({
            data: data,
        });
        ctx.status = 200;
        return (ctx.body = {
            success: true,
            message: "Berhasil mengirimkan pesan",
            data: insert,
        });
    }
    catch (error) {
        console.log({ error: error });
        ctx.status = error.statusCode || error.status || 500;
        ctx.body = {
            success: false,
            message: error.message,
        };
    }
}));
exports.default = CVContactRouter;