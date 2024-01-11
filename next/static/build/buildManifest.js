self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "static/chunks/708-e3f50f15b200a0d5.js", "static/chunks/pages/index-2622cf4f9feeea5d.js"],
        "/404": [s, "static/chunks/pages/404-9ca09bf35aeeaa2c.js"],
        "/_error": ["static/chunks/pages/_error-1995526792b513b2.js"],
        sortedPages: ["/", "/404", "/_app", "/_error"]
    }
}("static/chunks/100.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();