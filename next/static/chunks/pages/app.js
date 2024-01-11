(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        3454: function(e, t, o) {
            "use strict";
            var n, r;
            e.exports = (null === (n = o.g.process) || void 0 === n ? void 0 : n.env) && "object" === typeof(null === (r = o.g.process) || void 0 === r ? void 0 : r.env) ? o.g.process : o(7663)
        },
        6363: function(e, t, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return o(4917)
            }])
        },
        4917: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return y
                }
            });
            var n = o(5893),
                r = (o(6774), o(9008)),
                a = o(7294);

            function i() {
                return i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                    }
                    return e
                }, i.apply(this, arguments)
            }

            function p(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }
            var l = {
                    templateTitle: "",
                    noindex: !1,
                    nofollow: !1,
                    defaultOpenGraphImageWidth: 0,
                    defaultOpenGraphImageHeight: 0,
                    defaultOpenGraphVideoWidth: 0,
                    defaultOpenGraphVideoHeight: 0,
                    disableGooglebot: !1
                },
                c = function(e, t, o) {
                    void 0 === t && (t = []);
                    var n = void 0 === o ? {} : o,
                        r = n.defaultWidth,
                        i = n.defaultHeight;
                    return t.reduce((function(t, o, n) {
                        return t.push(a.createElement("meta", {
                            key: "og:" + e + ":0" + n,
                            property: "og:" + e,
                            content: o.url
                        })), o.alt && t.push(a.createElement("meta", {
                            key: "og:" + e + ":alt0" + n,
                            property: "og:" + e + ":alt",
                            content: o.alt
                        })), o.secureUrl && t.push(a.createElement("meta", {
                            key: "og:" + e + ":secure_url0" + n,
                            property: "og:" + e + ":secure_url",
                            content: o.secureUrl.toString()
                        })), o.type && t.push(a.createElement("meta", {
                            key: "og:" + e + ":type0" + n,
                            property: "og:" + e + ":type",
                            content: o.type.toString()
                        })), o.width ? t.push(a.createElement("meta", {
                            key: "og:" + e + ":width0" + n,
                            property: "og:" + e + ":width",
                            content: o.width.toString()
                        })) : r && t.push(a.createElement("meta", {
                            key: "og:" + e + ":width0" + n,
                            property: "og:" + e + ":width",
                            content: r.toString()
                        })), o.height ? t.push(a.createElement("meta", {
                            key: "og:" + e + ":height" + n,
                            property: "og:" + e + ":height",
                            content: o.height.toString()
                        })) : i && t.push(a.createElement("meta", {
                            key: "og:" + e + ":height" + n,
                            property: "og:" + e + ":height",
                            content: i.toString()
                        })), t
                    }), [])
                },
                s = function(e) {
                    var t, o, n, r = [];
                    e.titleTemplate && (l.templateTitle = e.titleTemplate);
                    var p = "";
                    e.title ? (p = e.title, l.templateTitle && (p = l.templateTitle.replace(/%s/g, (function() {
                        return p
                    })))) : e.defaultTitle && (p = e.defaultTitle), p && r.push(a.createElement("title", {
                        key: "title"
                    }, p));
                    var s, h, u = e.noindex || l.noindex || e.dangerouslySetAllPagesToNoIndex,
                        d = e.nofollow || l.nofollow || e.dangerouslySetAllPagesToNoFollow,
                        m = e.disableGooglebot || l.disableGooglebot || e.dangerouslyDisableGooglebot,
                        f = "";
                    if (e.robotsProps) {
                        var g = e.robotsProps,
                            y = g.nosnippet,
                            v = g.maxSnippet,
                            G = g.maxImagePreview,
                            k = g.maxVideoPreview,
                            b = g.noarchive,
                            w = g.noimageindex,
                            E = g.notranslate,
                            T = g.unavailableAfter;
                        f = (y ? ",nosnippet" : "") + (v ? ",max-snippet:" + v : "") + (G ? ",max-image-preview:" + G : "") + (b ? ",noarchive" : "") + (T ? ",unavailable_after:" + T : "") + (w ? ",noimageindex" : "") + (k ? ",max-video-preview:" + k : "") + (E ? ",notranslate" : "")
                    }(e.dangerouslyDisableGooglebot && (l.disableGooglebot = !0), u || d ? (e.dangerouslySetAllPagesToNoIndex && (l.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (l.nofollow = !0), r.push(a.createElement("meta", {
                        key: "robots",
                        name: "robots",
                        content: (u ? "noindex" : "index") + "," + (d ? "nofollow" : "follow") + f
                    })), m || r.push(a.createElement("meta", {
                        key: "googlebot",
                        name: "googlebot",
                        content: (u ? "noindex" : "index") + "," + (d ? "nofollow" : "follow") + f
                    }))) : (r.push(a.createElement("meta", {
                        key: "robots",
                        name: "robots",
                        content: "index,follow" + f
                    })), m || r.push(a.createElement("meta", {
                        key: "googlebot",
                        name: "googlebot",
                        content: "index,follow" + f
                    }))), e.description && r.push(a.createElement("meta", {
                        key: "description",
                        name: "description",
                        content: e.description
                    })), e.mobileAlternate && r.push(a.createElement("link", {
                        rel: "alternate",
                        key: "mobileAlternate",
                        media: e.mobileAlternate.media,
                        href: e.mobileAlternate.href
                    })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach((function(e) {
                        r.push(a.createElement("link", {
                            rel: "alternate",
                            key: "languageAlternate-" + e.hrefLang,
                            hrefLang: e.hrefLang,
                            href: e.href
                        }))
                    })), e.twitter && (e.twitter.cardType && r.push(a.createElement("meta", {
                        key: "twitter:card",
                        name: "twitter:card",
                        content: e.twitter.cardType
                    })), e.twitter.site && r.push(a.createElement("meta", {
                        key: "twitter:site",
                        name: "twitter:site",
                        content: e.twitter.site
                    })), e.twitter.handle && r.push(a.createElement("meta", {
                        key: "twitter:creator",
                        name: "twitter:creator",
                        content: e.twitter.handle
                    }))), e.facebook && e.facebook.appId && r.push(a.createElement("meta", {
                        key: "fb:app_id",
                        property: "fb:app_id",
                        content: e.facebook.appId
                    })), null != (t = e.openGraph) && t.title || e.title) && r.push(a.createElement("meta", {
                        key: "og:title",
                        property: "og:title",
                        content: (null == (s = e.openGraph) ? void 0 : s.title) || p
                    }));
                    (null != (o = e.openGraph) && o.description || e.description) && r.push(a.createElement("meta", {
                        key: "og:description",
                        property: "og:description",
                        content: (null == (h = e.openGraph) ? void 0 : h.description) || e.description
                    }));
                    if (e.openGraph) {
                        if ((e.openGraph.url || e.canonical) && r.push(a.createElement("meta", {
                                key: "og:url",
                                property: "og:url",
                                content: e.openGraph.url || e.canonical
                            })), e.openGraph.type) {
                            var _ = e.openGraph.type.toLowerCase();
                            r.push(a.createElement("meta", {
                                key: "og:type",
                                property: "og:type",
                                content: _
                            })), "profile" === _ && e.openGraph.profile ? (e.openGraph.profile.firstName && r.push(a.createElement("meta", {
                                key: "profile:first_name",
                                property: "profile:first_name",
                                content: e.openGraph.profile.firstName
                            })), e.openGraph.profile.lastName && r.push(a.createElement("meta", {
                                key: "profile:last_name",
                                property: "profile:last_name",
                                content: e.openGraph.profile.lastName
                            })), e.openGraph.profile.username && r.push(a.createElement("meta", {
                                key: "profile:username",
                                property: "profile:username",
                                content: e.openGraph.profile.username
                            })), e.openGraph.profile.gender && r.push(a.createElement("meta", {
                                key: "profile:gender",
                                property: "profile:gender",
                                content: e.openGraph.profile.gender
                            }))) : "book" === _ && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach((function(e, t) {
                                r.push(a.createElement("meta", {
                                    key: "book:author:0" + t,
                                    property: "book:author",
                                    content: e
                                }))
                            })), e.openGraph.book.isbn && r.push(a.createElement("meta", {
                                key: "book:isbn",
                                property: "book:isbn",
                                content: e.openGraph.book.isbn
                            })), e.openGraph.book.releaseDate && r.push(a.createElement("meta", {
                                key: "book:release_date",
                                property: "book:release_date",
                                content: e.openGraph.book.releaseDate
                            })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach((function(e, t) {
                                r.push(a.createElement("meta", {
                                    key: "book:tag:0" + t,
                                    property: "book:tag",
                                    content: e
                                }))
                            }))) : "article" === _ && e.openGraph.article ? (e.openGraph.article.publishedTime && r.push(a.createElement("meta", {
                                key: "article:published_time",
                                property: "article:published_time",
                                content: e.openGraph.article.publishedTime
                            })), e.openGraph.article.modifiedTime && r.push(a.createElement("meta", {
                                key: "article:modified_time",
                                property: "article:modified_time",
                                content: e.openGraph.article.modifiedTime
                            })), e.openGraph.article.expirationTime && r.push(a.createElement("meta", {
                                key: "article:expiration_time",
                                property: "article:expiration_time",
                                content: e.openGraph.article.expirationTime
                            })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach((function(e, t) {
                                r.push(a.createElement("meta", {
                                    key: "article:author:0" + t,
                                    property: "article:author",
                                    content: e
                                }))
                            })), e.openGraph.article.section && r.push(a.createElement("meta", {
                                key: "article:section",
                                property: "article:section",
                                content: e.openGraph.article.section
                            })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach((function(e, t) {
                                r.push(a.createElement("meta", {
                                    key: "article:tag:0" + t,
                                    property: "article:tag",
                                    content: e
                                }))
                            }))) : "video.movie" !== _ && "video.episode" !== _ && "video.tv_show" !== _ && "video.other" !== _ || !e.openGraph.video || (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach((function(e, t) {
                                e.profile && r.push(a.createElement("meta", {
                                    key: "video:actor:0" + t,
                                    property: "video:actor",
                                    content: e.profile
                                })), e.role && r.push(a.createElement("meta", {
                                    key: "video:actor:role:0" + t,
                                    property: "video:actor:role",
                                    content: e.role
                                }))
                            })), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach((function(e, t) {
                                r.push(a.createElement("meta", {
                                    key: "video:director:0" + t,
                                    property: "video:director",
                                    content: e
                                }))
                            })), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach((function(e, t) {
                                r.push(a.createElement("meta", {
                                    key: "video:writer:0" + t,
                                    property: "video:writer",
                                    content: e
                                }))
                            })), e.openGraph.video.duration && r.push(a.createElement("meta", {
                                key: "video:duration",
                                property: "video:duration",
                                content: e.openGraph.video.duration.toString()
                            })), e.openGraph.video.releaseDate && r.push(a.createElement("meta", {
                                key: "video:release_date",
                                property: "video:release_date",
                                content: e.openGraph.video.releaseDate
                            })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach((function(e, t) {
                                r.push(a.createElement("meta", {
                                    key: "video:tag:0" + t,
                                    property: "video:tag",
                                    content: e
                                }))
                            })), e.openGraph.video.series && r.push(a.createElement("meta", {
                                key: "video:series",
                                property: "video:series",
                                content: e.openGraph.video.series
                            })))
                        }
                        e.defaultOpenGraphImageWidth && (l.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (l.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && r.push.apply(r, c("image", e.openGraph.images, {
                            defaultWidth: l.defaultOpenGraphImageWidth,
                            defaultHeight: l.defaultOpenGraphImageHeight
                        })), e.defaultOpenGraphVideoWidth && (l.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (l.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && r.push.apply(r, c("video", e.openGraph.videos, {
                            defaultWidth: l.defaultOpenGraphVideoWidth,
                            defaultHeight: l.defaultOpenGraphVideoHeight
                        })), e.openGraph.locale && r.push(a.createElement("meta", {
                            key: "og:locale",
                            property: "og:locale",
                            content: e.openGraph.locale
                        })), e.openGraph.site_name && r.push(a.createElement("meta", {
                            key: "og:site_name",
                            property: "og:site_name",
                            content: e.openGraph.site_name
                        }))
                    }
                    return e.canonical && r.push(a.createElement("link", {
                        rel: "canonical",
                        href: e.canonical,
                        key: "canonical"
                    })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach((function(e) {
                        var t, o, n;
                        r.push(a.createElement("meta", i({
                            key: "meta:" + (null != (t = null != (o = null != (n = e.keyOverride) ? n : e.name) ? o : e.property) ? t : e.httpEquiv)
                        }, e)))
                    })), null != (n = e.additionalLinkTags) && n.length && e.additionalLinkTags.forEach((function(e) {
                        var t;
                        r.push(a.createElement("link", i({
                            key: "link" + (null != (t = e.keyOverride) ? t : e.href) + e.rel
                        }, e)))
                    })), r
                },
                h = (a.Component, function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return p(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.title,
                            o = e.noindex,
                            n = void 0 !== o && o,
                            i = e.nofollow,
                            p = e.robotsProps,
                            l = e.description,
                            c = e.canonical,
                            h = e.openGraph,
                            u = e.facebook,
                            d = e.twitter,
                            m = e.additionalMetaTags,
                            f = e.titleTemplate,
                            g = e.mobileAlternate,
                            y = e.languageAlternates,
                            v = e.additionalLinkTags,
                            G = e.disableGooglebot;
                        return a.createElement(r.default, null, s({
                            title: t,
                            noindex: n,
                            nofollow: i,
                            robotsProps: p,
                            description: l,
                            canonical: c,
                            facebook: u,
                            openGraph: h,
                            additionalMetaTags: m,
                            twitter: d,
                            titleTemplate: f,
                            mobileAlternate: g,
                            languageAlternates: y,
                            additionalLinkTags: v,
                            disableGooglebot: G
                        }))
                    }, t
                }(a.Component)),
                u = o(4298),
                d = o.n(u),
                m = (o(5655), o(89), o(4920), o(4523), o(6657), o(7274), o(3454));

            function f(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(o);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(o, e).enumerable
                    })))), n.forEach((function(t) {
                        f(e, t, o[t])
                    }))
                }
                return e
            }
            var y = function(e) {
                var t = e.Component,
                    o = e.pageProps;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(d(), {
                        strategy: "lazyOnload",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(m.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
                    }), (0, n.jsx)(d(), {
                        id: "google-analytics",
                        strategy: "lazyOnload",
                        children: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(m.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, "', {\n              page_path: window.location.pathname,\n            });\n                ")
                    }), (0, n.jsx)(h, {
                        title: "KOI | HuTao Simp \u2661",
                        titleTemplate: "KOI",
                        defaultTitle: "KOI | HuTao Simp \u2661",
                        description: "Hey! I'm KOI, Let's Be Friends :3",
                        openGraph: {
                            url: "https://ikankoi.my.id/",
                            title: "KOI | HuTao Simp \u2661",
                            description: "Hey! I'm KOI, Let's Be Friends :3",
                            images: [{
                                url: "https://telegra.ph/file/fb8741aabb9d25e2fcdb4.jpg",
                                alt: "KOI | HuTao Simp \u2661"
                            }]
                        },
                        twitter: {
                            handle: "@neekoi_",
                            site: "@neekoi_",
                            cardType: "summary_large_image"
                        },
                        additionalMetaTags: [{
                            property: "keywords",
                            content: "koi, open source"
                        }]
                    }), (0, n.jsx)(r.default, {
                        children: (0, n.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            href: "/pwa-512x512.png"
                        })
                    }), (0, n.jsx)(t, g({}, o))]
                })
            }
        },
        5655: function() {},
        89: function() {},
        4920: function() {},
        4523: function() {},
        6657: function() {},
        7274: function() {},
        6774: function() {},
        7663: function(e) {
            ! function() {
                var t = {
                        162: function(e) {
                            var t, o, n = e.exports = {};

                            function r() {
                                throw new Error("setTimeout has not been defined")
                            }

                            function a() {
                                throw new Error("clearTimeout has not been defined")
                            }

                            function i(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (n) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (n) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" === typeof setTimeout ? setTimeout : r
                                } catch (e) {
                                    t = r
                                }
                                try {
                                    o = "function" === typeof clearTimeout ? clearTimeout : a
                                } catch (e) {
                                    o = a
                                }
                            }();
                            var p, l = [],
                                c = !1,
                                s = -1;

                            function h() {
                                c && p && (c = !1, p.length ? l = p.concat(l) : s = -1, l.length && u())
                            }

                            function u() {
                                if (!c) {
                                    var e = i(h);
                                    c = !0;
                                    for (var t = l.length; t;) {
                                        for (p = l, l = []; ++s < t;) p && p[s].run();
                                        s = -1, t = l.length
                                    }
                                    p = null, c = !1,
                                        function(e) {
                                            if (o === clearTimeout) return clearTimeout(e);
                                            if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                                            try {
                                                o(e)
                                            } catch (t) {
                                                try {
                                                    return o.call(null, e)
                                                } catch (t) {
                                                    return o.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function d(e, t) {
                                this.fun = e, this.array = t
                            }

                            function m() {}
                            n.nextTick = function(e) {
                                var t = new Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                                l.push(new d(e, t)), 1 !== l.length || c || i(u)
                            }, d.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(e) {
                                return []
                            }, n.binding = function(e) {
                                throw new Error("process.binding is not supported")
                            }, n.cwd = function() {
                                return "/"
                            }, n.chdir = function(e) {
                                throw new Error("process.chdir is not supported")
                            }, n.umask = function() {
                                return 0
                            }
                        }
                    },
                    o = {};

                function n(e) {
                    var r = o[e];
                    if (void 0 !== r) return r.exports;
                    var a = o[e] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        t[e](a, a.exports, n), i = !1
                    } finally {
                        i && delete o[e]
                    }
                    return a.exports
                }
                n.ab = "//";
                var r = n(162);
                e.exports = r
            }()
        },
        9008: function(e, t, o) {
            e.exports = o(3121)
        },
        4298: function(e, t, o) {
            e.exports = o(3573)
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], (function() {
            return t(6363), t(880)
        }));
        var o = e.O();
        _N_E = o
    }
]);