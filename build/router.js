"use strict";
// app.use(KoaCompose([LoginRouter.routes(), LoginRouter.allowedMethods()]));
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
const koa_passport_1 = __importDefault(require("koa-passport"));
const koa_router_1 = __importDefault(require("koa-router"));
const education_1 = require("./routes/cv/education");
const experience_1 = require("./routes/cv/experience");
const license_certificate_1 = require("./routes/cv/license_certificate");
const portfolio_1 = require("./routes/cv/portfolio");
const preview_1 = require("./routes/cv/preview");
const profile_1 = require("./routes/cv/profile");
const access_menu_1 = require("./routes/setting/access_menu");
const access_modul_1 = require("./routes/setting/access_modul");
const documentation_1 = require("./routes/setting/documentation");
const login_1 = require("./routes/setting/login");
const master_category_1 = require("./routes/setting/master_category");
const master_data_1 = require("./routes/setting/master_data");
const menu_1 = require("./routes/setting/menu");
const modul_1 = require("./routes/setting/modul");
const parameter_1 = require("./routes/setting/parameter");
const user_1 = require("./routes/setting/user");
const user_group_1 = require("./routes/setting/user_group");
const user_2 = require("./routes/v1/user");
const router = new koa_router_1.default({});
//! Authentication
router.post(`/login`, login_1.LoginController.login);
//! Setting Section
router.get(`/setting/user`, user_1.SettingUserController.getUsers);
router.post(`/setting/user`, user_1.SettingUserController.createUsers);
router.put(`/setting/user/:id`, user_1.SettingUserController.updateUsers);
router.put(`/setting/user/:id`, user_1.SettingUserController.updateNameUsers);
router.del(`/setting/user/:id`, user_1.SettingUserController.deleteUsers);
router.get(`/setting/user_group`, user_group_1.SettingUserGroupController.getUserGroup);
router.post(`/setting/user_group`, user_group_1.SettingUserGroupController.createUserGroup);
router.put(`/setting/user_group/:id`, user_group_1.SettingUserGroupController.updateUserGroup);
router.del(`/setting/user_group/:id`, user_group_1.SettingUserGroupController.deleteUserGroup);
router.get(`/setting/modul`, modul_1.SettingModulController.getModul);
router.post(`/setting/modul`, modul_1.SettingModulController.createModul);
router.put(`/setting/modul/:id`, modul_1.SettingModulController.updateModul);
router.del(`/setting/modul/:id`, modul_1.SettingModulController.deleteModul);
router.get(`/setting/menu`, menu_1.SettingMenuController.getMenu);
router.post(`/setting/menu`, menu_1.SettingMenuController.createMenu);
router.put(`/setting/menu/:id`, menu_1.SettingMenuController.updateMenu);
router.del(`/setting/menu/:id`, menu_1.SettingMenuController.deleteMenu);
router.get(`/setting/access_modul`, access_modul_1.SettingAccessModulController.get);
router.get(`/setting/access_modul/by_user_group/:app_group_user_id`, access_modul_1.SettingAccessModulController.getByUserGroup);
router.post(`/setting/access_modul`, access_modul_1.SettingAccessModulController.create);
router.get(`/setting/access_menu`, access_menu_1.SettingAccessMenuController.get);
router.get(`/setting/access_menu/by_user_group/:app_group_user_id`, access_menu_1.SettingAccessMenuController.getByUserGroup);
router.post(`/setting/access_menu`, access_menu_1.SettingAccessMenuController.create);
router.get(`/setting/master_category`, master_category_1.SettingMasterCategoryController.get);
router.post(`/setting/master_category`, master_category_1.SettingMasterCategoryController.create);
router.put(`/setting/master_category/:id`, master_category_1.SettingMasterCategoryController.update);
router.del(`/setting/master_category/:id`, master_category_1.SettingMasterCategoryController.delete);
router.get(`/setting/master_data`, master_data_1.SettingMasterDataController.get);
router.post(`/setting/master_data`, master_data_1.SettingMasterDataController.create);
router.put(`/setting/master_data/:id`, master_data_1.SettingMasterDataController.update);
router.del(`/setting/master_data/:id`, master_data_1.SettingMasterDataController.delete);
router.get(`/setting/parameter`, parameter_1.SettingParameterController.get);
router.post(`/setting/parameter`, parameter_1.SettingParameterController.create);
router.put(`/setting/parameter/:id`, parameter_1.SettingParameterController.update);
router.del(`/setting/parameter/:id`, parameter_1.SettingParameterController.delete);
router.get(`/setting/documentation`, documentation_1.SettingDocumentationController.get);
router.post(`/setting/documentation`, documentation_1.SettingDocumentationController.create);
router.put(`/setting/documentation/:id`, documentation_1.SettingDocumentationController.update);
router.del(`/setting/documentation/:id`, documentation_1.SettingDocumentationController.delete);
//! CV Section
router.get(`/cv/profile/:users_id`, profile_1.CVProfileController.get);
router.post(`/cv/profile`, profile_1.CVProfileController.upsert);
router.get(`/cv/experience/:users_id`, experience_1.CVExperienceController.get);
router.post(`/cv/experience`, experience_1.CVExperienceController.upsert);
router.del(`/cv/experience/:id`, experience_1.CVExperienceController.delete);
router.get(`/cv/education/:users_id`, education_1.CVEducationController.get);
router.post(`/cv/education`, education_1.CVEducationController.upsert);
router.del(`/cv/education/:id`, education_1.CVEducationController.delete);
router.get(`/cv/license_certificate/:users_id`, license_certificate_1.CVLicenseCertificateController.get);
router.post(`/cv/license_certificate`, license_certificate_1.CVLicenseCertificateController.upsert);
router.del(`/cv/license_certificate/:id`, license_certificate_1.CVLicenseCertificateController.delete);
router.get(`/cv/portfolio/:users_id`, portfolio_1.CVPortfolioController.get);
router.post(`/cv/portfolio`, portfolio_1.CVPortfolioController.upsert);
router.del(`/cv/portfolio/:id`, portfolio_1.CVPortfolioController.delete);
router.get(`/cv/preview/pdf/:user_id`, preview_1.CVPreviewController.getPdfPreview);
router.post(`/cv/preview/generate_pdf/:user_id`, preview_1.CVPreviewController.generatePDF);
router.get(`/cv/contact/:users_id`, preview_1.CVPreviewController.getPdfPreview);
//! V1 Section
router.get(`/v1/user/:username`, user_2.V1UserController.getByUsername);
//! Experimental
router.get("/v1/google/signin/failed", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.status = 403;
    ctx.body = {
        error: true,
        message: "Login Failure",
    };
}));
router.get("/v1/google/signin/success", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ctx.isAuthenticated) {
        ctx.status = 403;
        return (ctx.body = {
            error: true,
            message: "Not Authorized",
        });
    }
    ctx.status = 200;
    return (ctx.body = {
        error: false,
        message: "Login Success",
    });
}));
router.get("/v1/google/signin", koa_passport_1.default.authenticate("google", {
    successRedirect: process.env.GOOGLE_OAUTH_SUCCESSREDIRECT,
    failureRedirect: process.env.GOOGLE_OAUTH_FAILEDREDIRECT,
}));
router.get("/v1/logout", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    ctx.logOut();
    ctx.redirect((_a = process.env.GOOGLE_OAUTH_SUCCESSREDIRECT) !== null && _a !== void 0 ? _a : "");
}));
exports.default = router;
