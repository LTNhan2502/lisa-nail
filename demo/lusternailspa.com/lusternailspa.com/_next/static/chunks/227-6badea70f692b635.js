"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [227], {
        67433: (a, t, c) => {
            c.d(t, {
                L9: () => i,
                QQ: () => o,
                pe: () => e
            });
            let i = "http://localhost:5512",
                e = {
                    ADDRESSES: {
                        BASE: "/addressesapi",
                        CREATE: "/addressesapi",
                        GET_ALL: "/addressesapi",
                        GET_BY_ID: a => "/addressesapi/".concat(a),
                        UPDATE: a => "/addressesapi/".concat(a),
                        DELETE: a => "/addressesapi/".concat(a),
                        SET_DEFAULT: a => "/addressesapi/".concat(a, "/default")
                    },
                    AUTH: {
                        BASE: "/authapi",
                        CHECK_EMAIL: "/authapi/check-email",
                        REGISTER: "/authapi/register",
                        LOGIN: "/authapi/login",
                        LOGOUT: "/authapi/logout",
                        ME: "/authapi/me",
                        MY_PERMISSIONS: "/authapi/my-permissions",
                        USERS: "/authapi/users",
                        UPDATE: "/authapi/update",
                        GOOGLE: "/authapi/google",
                        GOOGLE_REDIRECT: "/authapi/google/redirect",
                        REQUEST_PASSWORD_RESET: "/authapi/request-password-reset",
                        VERIFY_OTP: "/authapi/verify-otp",
                        RESET_PASSWORD_WITH_TOKEN: "/authapi/reset-password/token",
                        RESET_PASSWORD_WITH_OTP: "/authapi/reset-password/otp",
                        CHECK_PERMISSION: "/authapi/check-permission",
                        METAMASK: {
                            NONCE: "/authapi/metamask/nonce",
                            AUTHENTICATE: "/authapi/metamask/authenticate",
                            LINK: "/authapi/metamask/link",
                            WALLETS: "/authapi/metamask/wallets",
                            WALLETS_BY_ADDRESS: a => "/authapi/metamask/wallets/".concat(a),
                            WALLETS_BY_ADDRESS_PRIMARY: a => "/authapi/metamask/wallets/".concat(a, "/primary")
                        }
                    },
                    BANNERS: {
                        BASE: "/bannersapi",
                        CREATE: "/bannersapi",
                        GET_ALL: "/bannersapi",
                        GET_ACTIVE_BY_TYPE: a => "/bannersapi/active/".concat(a),
                        GET_BY_ID: a => "/bannersapi/".concat(a),
                        UPDATE: a => "/bannersapi/".concat(a),
                        UPDATE_ORDER: a => "/bannersapi/".concat(a, "/order"),
                        TOGGLE_ACTIVE: a => "/bannersapi/".concat(a, "/toggle-active"),
                        DELETE: a => "/bannersapi/".concat(a)
                    },
                    CATEGORIES_POST: {
                        BASE: "/category-postsapi",
                        CREATE: "/category-postsapi",
                        UPDATE: a => "/category-postsapi/".concat(a),
                        GET_ONE: a => "/category-postsapi/".concat(a),
                        GET_ALL: a => {
                            let t = "/category-postsapi";
                            if (a) {
                                let c = new URLSearchParams;
                                void 0 !== a.page && c.append("page", String(a.page)), void 0 !== a.limit && c.append("limit", String(a.limit)), a.search && c.append("search", a.search);
                                let i = c.toString();
                                i && (t += "?".concat(i))
                            }
                            return t
                        },
                        SOFT_DELETE: a => "/category-postsapi/".concat(a, "/soft-delete"),
                        DELETE: a => "/category-postsapi/".concat(a)
                    },
                    CATEGORIES_PRODUCT: {
                        BASE: "/categories-productsapi",
                        CREATE: "/categories-productsapi",
                        GET_ALL: "/categories-productsapi",
                        GET_BY_ID: a => "/categories-productsapi/id/".concat(a),
                        GET_MAIN: "/categories-productsapi/main",
                        GET_SUB_BY_PARENT_ID: a => "/categories-productsapi/sub/".concat(a),
                        GET_BY_SLUG: a => "/categories-productsapi/".concat(a),
                        UPDATE: a => "/categories-productsapi/".concat(a),
                        DELETE: a => "/categories-productsapi/".concat(a)
                    },
                    CHECKOUTS: {
                        BASE: "/checkoutsapi",
                        CREATE: "/checkoutsapi",
                        GET_ALL: "/checkoutsapi",
                        GET_BY_SLUG: a => "/checkoutsapi/".concat(a),
                        UPDATE: a => "/checkoutsapi/".concat(a),
                        UPDATE_PAYMENT_STATUS: a => "/checkoutsapi/".concat(a, "/payment-status"),
                        DELETE: a => "/checkoutsapi/".concat(a),
                        METAMASK: {
                            BASE: "/checkoutsapi/metamask",
                            VERIFY_TRANSACTION: a => "/checkoutsapi/metamask/".concat(a, "/verify"),
                            GENERATE_PAYMENT_INFO: a => "/checkoutsapi/metamask/".concat(a, "/payment-info")
                        }
                    },
                    CONTACTS: {
                        BASE: "/contactsapi",
                        CREATE: "/contactsapi",
                        GET_ALL: "/contactsapi",
                        GET_BY_ID: a => "/contactsapi/".concat(a),
                        DELETE: a => "/contactsapi/".concat(a)
                    },
                    CREATE_PAGES: {
                        BASE: "/pagesapi",
                        CREATE: "/pagesapi",
                        GET_ALL: "/pagesapi",
                        GET_BY_SLUG: a => "/pagesapi/by-slug/".concat(a),
                        UPDATE: a => "/pagesapi/by-slug/".concat(a),
                        DELETE: a => "/pagesapi/by-slug/".concat(a)
                    },
                    IMAGES: {
                        BASE: "/imagesapi",
                        GET_ALL: "/imagesapi",
                        UPLOAD: "/imagesapi/upload",
                        UPLOAD_MULTIPLE: "/imagesapi/upload-multiple",
                        UPLOAD_SUNEDITOR: "/imagesapi/sunEditor",
                        DELETE: a => "/imagesapi/".concat(a)
                    },
                    INFO_WEBSITE: {
                        BASE: "/info-websitesapi",
                        CREATE: "/info-websitesapi",
                        GET_ALL: "/info-websitesapi",
                        GET_ACTIVE: "/info-websitesapi/active",
                        GET_BY_ID: a => "/info-websitesapi/".concat(a),
                        UPDATE: a => "/info-websitesapi/".concat(a),
                        DELETE: a => "/info-websitesapi/".concat(a),
                        SET_ACTIVE: a => "/info-websitesapi/".concat(a, "/set-active")
                    },
                    MANAGER_PERMISSIONS: {
                        ROLES_BASE: "/rolesapi",
                        ROLES_GET_ALL: "/rolesapi",
                        ROLES_GET_ALL_WITH_PERMISSIONS: "/rolesapi/with-permissions",
                        ROLES_GET_BY_ID: a => "/rolesapi/".concat(a),
                        ROLES_CREATE: "/rolesapi",
                        ROLES_UPDATE: a => "/rolesapi/".concat(a),
                        ROLES_DELETE: a => "/rolesapi/".concat(a),
                        ROLES_GET_PERMISSIONS: a => "/rolesapi/".concat(a, "/permissions"),
                        ROLES_UPDATE_PERMISSIONS: a => "/rolesapi/".concat(a, "/permissions"),
                        USER_ROLES_BASE: "/user-rolesapi",
                        USER_ROLES_ASSIGN: "/user-rolesapi",
                        USER_ROLES_REMOVE: a => "/user-rolesapi/".concat(a, "/role"),
                        USER_ROLES_GET: a => "/user-rolesapi/".concat(a, "/role")
                    },
                    ORDERS: {
                        BASE: "/ordersapi",
                        CREATE: "/ordersapi",
                        GET_ALL: "/ordersapi",
                        GET_BY_SLUG: a => "/ordersapi/".concat(a),
                        UPDATE: a => "/ordersapi/".concat(a),
                        UPDATE_STATUS: a => "/ordersapi/".concat(a, "/status"),
                        DELETE: a => "/ordersapi/".concat(a),
                        UPDATE_PAYMENT_STATUS: a => "/ordersapi/".concat(a, "/update-payment-status")
                    },
                    PAYPAL: {
                        BASE: "/paypalsapi",
                        CREATE_ORDER: "/paypalsapi/create-order",
                        GET_ORDER_DETAILS: a => "/paypalsapi/order/".concat(a),
                        CAPTURE_PAYMENT: a => "/paypalsapi/order/".concat(a, "/capture"),
                        AUTHORIZE_PAYMENT: a => "/paypalsapi/order/".concat(a, "/authorize"),
                        WEBHOOKS: "/paypalsapi/webhooks"
                    },
                    PERMISSIONS: {
                        BASE: "/permissionsapi",
                        GET_ALL: "/permissionsapi",
                        CREATE: "/permissionsapi",
                        GET_BY_USER_ID: a => "/permissionsapi/user/".concat(a),
                        UPDATE_USER_PERMISSIONS: a => "/permissionsapi/user/".concat(a),
                        INITIALIZE: "/permissionsapi/initialize",
                        ASSIGN_ALL_TO_ADMIN: a => "/permissionsapi/admin/".concat(a)
                    },
                    POSTS: {
                        BASE: "/postsapi",
                        CREATE: "/postsapi",
                        GET_ALL: "/postsapi",
                        GET_MY_POSTS: function(a) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                            return "/postsapi/my-posts?userId=".concat(a, "&page=").concat(t, "&limit=").concat(c)
                        },
                        GET_BY_STATUS: function(a) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            return "/postsapi/by-status/".concat(a, "?page=").concat(t, "&limit=").concat(c, "&includeHidden=").concat(i)
                        },
                        GET_BY_SLUG: function(a) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return "/postsapi/".concat(a, "?includeHidden=").concat(t)
                        },
                        UPDATE: a => "/postsapi/".concat(a),
                        UPDATE_SLUG: a => "/postsapi/".concat(a, "/update-slug"),
                        UPDATE_VISIBILITY: a => "/postsapi/".concat(a, "/visibility"),
                        UPDATE_STATUS: a => "/postsapi/".concat(a, "/status"),
                        DELETE: a => "/postsapi/".concat(a),
                        HARD_DELETE: a => "/postsapi/".concat(a, "/force"),
                        TRANSFER_ALL: "/postsapi/transfer-all",
                        TRANSFER_SELECTED: "/postsapi/transfer-selected"
                    },
                    PRODUCTS: {
                        BASE: "/productsapi",
                        CREATE: "/productsapi",
                        GET_ALL: function() {
                            let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            return "/productsapi?page=".concat(a)
                        },
                        GET_ALL_BASIC_INFO: function() {
                            let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            return "/productsapi/basic-info?page=".concat(a)
                        },
                        GET_BY_CATEGORY_ID: function(a) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
                            return "/productsapi/by-categoryID?mainCategoryId=".concat(a, "&page=").concat(t, "&limit=").concat(c)
                        },
                        SEARCH: function(a) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return "/productsapi/search?q=".concat(encodeURIComponent(a), "&page=").concat(t)
                        },
                        GET_BY_SLUG: a => "/productsapi/".concat(a),
                        GET_BY_MAIN_CATEGORY: function(a) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return "/productsapi/bycategory/".concat(encodeURIComponent(a), "?page=").concat(t)
                        },
                        GET_BY_SUB_CATEGORY: function(a) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return "/productsapi/bysubcategory/".concat(encodeURIComponent(a), "?page=").concat(t)
                        },
                        UPDATE: a => "/productsapi/".concat(a),
                        DELETE: a => "/productsapi/".concat(a),
                        UPDATE_NAME: a => "/productsapi/".concat(a, "/name"),
                        UPDATE_CATEGORY: a => "/productsapi/".concat(a, "/category"),
                        UPDATE_VARIANTS: a => "/productsapi/".concat(a, "/variants"),
                        UPDATE_SLUG: a => "/productsapi/".concat(a, "/slug")
                    },
                    REDIRECTS: {
                        BASE: "/redirectsapi",
                        CREATE: "/redirectsapi",
                        CREATE_BULK: "/redirectsapi/bulk",
                        GET_ALL: function() {
                            let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                c = arguments.length > 2 ? arguments[2] : void 0,
                                i = arguments.length > 3 ? arguments[3] : void 0,
                                e = arguments.length > 4 ? arguments[4] : void 0,
                                o = arguments.length > 5 ? arguments[5] : void 0,
                                E = "/redirectsapi?page=".concat(a, "&limit=").concat(t);
                            return void 0 !== c && (E += "&type=".concat(encodeURIComponent(c))), void 0 !== i && (E += "&isActive=".concat(i)), void 0 !== e && (E += "&path=".concat(encodeURIComponent(e))), void 0 !== o && (E += "&statusCode=".concat(o)), E
                        },
                        CHECK: a => "/redirectsapi/check?path=".concat(encodeURIComponent(a)),
                        GET_BY_ID: a => "/redirectsapi/".concat(a),
                        UPDATE: a => "/redirectsapi/".concat(a),
                        DELETE: a => "/redirectsapi/".concat(a)
                    },
                    REVIEWS: {
                        BASE: "/reviewsapi",
                        CREATE: "/reviewsapi",
                        GET_ALL: "/reviewsapi",
                        GET_BY_PRODUCT_SLUG: a => "/reviewsapi/product/".concat(a),
                        GET_PRODUCT_RATING: a => "/reviewsapi/product/".concat(a, "/rating"),
                        GET_BY_ID: a => "/reviewsapi/".concat(a),
                        UPDATE: a => "/reviewsapi/".concat(a),
                        DELETE: a => "/reviewsapi/".concat(a)
                    },
                    SCRIPTS: {
                        BASE: "/scriptsapi",
                        CREATE: "/scriptsapi",
                        GET_ALL: "/scriptsapi",
                        GET_BY_POSITION: a => "/scriptsapi/position/".concat(encodeURIComponent(a)),
                        GET_ALL_BY_SECTION: "/scriptsapi/sections",
                        GET_BY_ID: a => "/scriptsapi/".concat(a),
                        UPDATE: a => "/scriptsapi/".concat(a),
                        DELETE: a => "/scriptsapi/".concat(a),
                        TOGGLE_ACTIVE: a => "/scriptsapi/".concat(a, "/toggle")
                    },
                    USERS: {
                        BASE: "/usersapi",
                        GET_ME: "/usersapi/me",
                        UPDATE_ME: "/usersapi/me",
                        GET_ALL: "/usersapi",
                        GET_BY_ID: a => "/usersapi/".concat(a),
                        CREATE: "/usersapi",
                        UPDATE: a => "/usersapi/".concat(a),
                        DELETE: a => "/usersapi/".concat(a)
                    },
                    VARIANTS: {
                        BASE: "/variantsapi",
                        CREATE: "/variantsapi",
                        GET_ALL: "/variantsapi",
                        GET_BY_SLUG: a => "/variantsapi/".concat(a),
                        UPDATE: a => "/variantsapi/".concat(a),
                        DELETE: a => "/variantsapi/".concat(a),
                        UPDATE_NAME: a => "/variantsapi/".concat(a, "/name"),
                        UPDATE_VALUES: a => "/variantsapi/".concat(a, "/values"),
                        UPDATE_SLUG: a => "/variantsapi/".concat(a, "/slug")
                    },
                    VERIFY: {
                        BASE: "/verifysapi",
                        SEND_VERIFICATION_EMAIL: "/verifysapi/send",
                        VERIFY_EMAIL: "/verifysapi/verify-email"
                    },
                    VIETQR_CONFIG: {
                        BASE: "/vietqr-configsapi",
                        GET_ACTIVE: "/vietqr-configsapi",
                        GET_ALL: "/vietqr-configsapi/all",
                        CREATE: "/vietqr-configsapi",
                        UPDATE: a => "/vietqr-configsapi/".concat(a),
                        SET_ACTIVE: a => "/vietqr-configsapi/".concat(a, "/activate")
                    },
                    VOUCHERS: {
                        BASE: "/vouchersapi",
                        CREATE: "/vouchersapi",
                        GET_ALL: "/vouchersapi",
                        GET_VALID: a => {
                            let t = "/vouchersapi/valid",
                                c = [];
                            return (null == a ? void 0 : a.productSlug) && c.push("productSlug=".concat(encodeURIComponent(a.productSlug))), (null == a ? void 0 : a.userId) && c.push("userId=".concat(encodeURIComponent(a.userId))), (null == a ? void 0 : a.paymentMethod) && c.push("paymentMethod=".concat(encodeURIComponent(a.paymentMethod))), c.length && (t += "?" + c.join("&")), t
                        },
                        GET_BY_ID: a => "/vouchersapi/".concat(a),
                        GET_BY_CODE: a => "/vouchersapi/code/".concat(encodeURIComponent(a)),
                        CHECK_VALIDITY: (a, t) => {
                            let c = "/vouchersapi/check/".concat(encodeURIComponent(a)),
                                i = [];
                            return (null == t ? void 0 : t.productSlug) && i.push("productSlug=".concat(encodeURIComponent(t.productSlug))), (null == t ? void 0 : t.userId) && i.push("userId=".concat(encodeURIComponent(t.userId))), (null == t ? void 0 : t.paymentMethod) && i.push("paymentMethod=".concat(encodeURIComponent(t.paymentMethod))), (null == t ? void 0 : t.totalAmount) !== void 0 && i.push("totalAmount=".concat(t.totalAmount)), i.length && (c += "?" + i.join("&")), c
                        },
                        USE: a => "/vouchersapi/use/".concat(encodeURIComponent(a)),
                        UPDATE: a => "/vouchersapi/".concat(a),
                        DELETE: a => "/vouchersapi/".concat(a)
                    },
                    FILTERS: {
                        BASE: "/filtersapi",
                        CREATE: "/filtersapi",
                        GET_ALL: "/filtersapi",
                        GET_BY_ID: a => "/filtersapi/".concat(a),
                        UPDATE: a => "/filtersapi/".concat(a),
                        DELETE: a => "/filtersapi/".concat(a)
                    },
                    SPECIFICATIONS: {
                        GET_ALL: "/specificationsapi",
                        CREATE: "/specificationsapi",
                        GET_BY_SLUG: a => "/specificationsapi/".concat(a),
                        UPDATE: a => "/specificationsapi/".concat(a),
                        DELETE: a => "/specificationsapi/".concat(a),
                        UPDATE_STATUS: a => "/specificationsapi/".concat(a, "/status"),
                        GET_BY_CATEGORIES: a => "/specificationsapi/category/".concat(a)
                    }
                },
                o = e
        },
        30227: (a, t, c) => {
            c.d(t, {
                $: () => o
            });
            var i = c(68878),
                e = c(67433);
            let o = {
                API_URL: i.K.API_URL,
                APP_URL: i.K.APP_URL,
                ROUTES: e.pe,
                DEFAULT_IMAGE_URL: "/images/default-thumbnail.png",
                MAX_FILE_SIZE: 5242880,
                SUPPORTED_IMAGE_FORMATS: ["image/jpg", "image/jpeg", "image/png"],
                ENVIRONMENT: i.K.ENVIRONMENT,
                ADMIN_EMAIL: "ngcuong1182004@gmail.com"
            }
        },
        68878: (a, t, c) => {
            c.d(t, {
                K: () => i
            });
            let i = {
                API_URL: "http://localhost:5512",
                APP_URL: c(2818).env.NEXT_PUBLIC_APP_URL,
                ENVIRONMENT: "production",
                METAMASK_ENVIRONMENT: "development"
            }
        }
    }
]);