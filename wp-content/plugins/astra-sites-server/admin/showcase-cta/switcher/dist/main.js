! function() {
    "use strict";
    var e, t = {
            532: function() {
                var e = window.wp.element,
                    t = window.wp.i18n;
                const a = e => {
                        window.postMessage({
                            call: "showcaseCTAPreviewDispatch",
                            value: e
                        }, "*")
                    },
                    s = [{
                        id: "0",
                        "body-font-family": "'Source Sans Pro', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Playfair Display', serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "1",
                        "body-font-family": "'Lato', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Poppins', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "2",
                        "body-font-family": "'Lato', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 17,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Montserrat', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "3",
                        "body-font-family": "'Karla', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 17,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Rubik', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "4",
                        "body-font-family": "'Roboto', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Roboto Condensed', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "5",
                        "body-font-family": "'Inter', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 17,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Merriweather', serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "6",
                        "body-font-family": "'Open Sans', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Vollkorn', serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "7",
                        "body-font-family": "'Work Sans', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Open Sans', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }],
                    o = JSON.parse(localStorage.getItem("showcase-cta-preview-data"));
                let n = "",
                    r = "";
                if (o && o.url === showcaseCTA.path) {
                    if (o.data.siteTypography) {
                        const e = s.find((e => e["headings-font-family"] === o.data.siteTypography["headings-font-family"]));
                        r = e && e.id
                    }
                    n = o.data.colorPalette && o.data.colorPalette.slug
                }
                const l = {
                    sidebarOpen: !1,
                    selectedTypographyIndex: r,
                    typography: {},
                    selectedColorPallete: n,
                    activePalette: {},
                    firstTimeShown: !1
                };
                const i = (0, e.createContext)(),
                    d = () => (0, e.useContext)(i),
                    c = [{
                        slug: "style-1",
                        title: (0, t.__)("Style 1", "astra-sites"),
                        colors: ["#8E43F0", "#7215EA", "#FFFFFF", "#EEEBF4", "#150E1F", "#494153", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-2",
                        title: (0, t.__)("Style 2", "astra-sites"),
                        colors: ["#EF4D48", "#D90700", "#FFFFFF", "#EEEAEC", "#2B161B", "#3C2F32", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-3",
                        title: (0, t.__)("Style 3", "astra-sites"),
                        colors: ["#FF42B3", "#FF0099", "#FFFFFF", "#EEEAEC", "#2B161B", "#3C2F32", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-4",
                        title: (0, t.__)("Style 4", "astra-sites"),
                        colors: ["#FF6A97", "#FA036B", "#FFFFFF", "#EEEAEC", "#2B161B", "#3C2F32", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-5",
                        title: (0, t.__)("Style 5", "astra-sites"),
                        colors: ["#FF7A3D", "#FF5100", "#FFFFFF", "#F1EDEB", "#1E1810", "#443D3A", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-6",
                        title: (0, t.__)("Style 6", "astra-sites"),
                        colors: ["#F9C349", "#FFB100", "#FFFFFF", "#F0EFEC", "#1E1810", "#4D4A46", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-7",
                        title: (0, t.__)("Style 7", "astra-sites"),
                        colors: ["#30C7B5", "#00AC97", "#FFFFFF", "#F0EFEC", "#1E1810", "#4D4A46", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-8",
                        title: (0, t.__)("Style 8", "astra-sites"),
                        colors: ["#1BAE70", "#06752E", "#FFFFFF", "#EBECEB", "#14261C", "#3D4641", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-9",
                        title: (0, t.__)("Style 9", "astra-sites"),
                        colors: ["#2FE6FF", "#00D0EC", "#FFFFFF", "#E8EBEC", "#101218", "#3B4244", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-10",
                        title: (0, t.__)("Style 10", "astra-sites"),
                        colors: ["#4175FC", "#084AF3", "#FFFFFF", "#E8EBEC", "#101218", "#3B4244", "#000000", "#4B4F58", "#F6F7F8"]
                    }],
                    m = [{
                        slug: "style-1",
                        title: (0, t.__)("Style 1", "astra-sites"),
                        colors: ["#8E43F0", "#6300E2", "#150E1F", "#584D66", "#F3F1F6", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-2",
                        title: (0, t.__)("Style 2", "astra-sites"),
                        colors: ["#EF4D48", "#D90700", "#2B161B", "#453E3E", "#F7F3F5", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-3",
                        title: (0, t.__)("Style 3", "astra-sites"),
                        colors: ["#FF42B3", "#FF0099", "#2B161B", "#554B4E", "#F6F3F5", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-4",
                        title: (0, t.__)("Style 4", "astra-sites"),
                        colors: ["#FF6A97", "#FA036B", "#2B161B", "#645659", "#F8F3F5", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-5",
                        title: (0, t.__)("Style 5", "astra-sites"),
                        colors: ["#FF7A3D", "#FF5100", "#1E1810", "#575250", "#F8F5F4", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-6",
                        title: (0, t.__)("Style 6", "astra-sites"),
                        colors: ["#F9C349", "#FFB100", "#1E1810", "#62615C", "#F8F7F3", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-7",
                        title: (0, t.__)("Style 7", "astra-sites"),
                        colors: ["#30C7B5", "#00AC97", "#14261C", "#4F5655", "#F3F6F3", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-8",
                        title: (0, t.__)("Style 8", "astra-sites"),
                        colors: ["#1BAE70", "#06752E", "#14261C", "#4E5652", "#F4F6F4", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-9",
                        title: (0, t.__)("Style 9", "astra-sites"),
                        colors: ["#2FC1FF", "#08ACF2", "#101218", "#4C5253", "#F3F6F6", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-10",
                        title: (0, t.__)("Style 10", "astra-sites"),
                        colors: ["#4175FC", "#084AF3", "#101218", "#494B51", "#F3F5F5", "#FFFFFF", "#000000", "#4B4F58", "#F6F7F8"]
                    }];
                var f = () => {
                    const [{
                        selectedColorPallete: s
                    }, o] = d(), [n, r] = (0, e.useState)([]), l = e => {
                        o({
                            type: "set",
                            selectedColorPallete: e.slug,
                            activePalette: e
                        }), a({
                            param: "colorPalette",
                            data: e
                        })
                    };
                    (0, e.useEffect)((() => {
                        const e = (e => {
                            let a = [];
                            if (e) {
                                const s = e["astra-settings"]["global-color-palette"].palette || [];
                                s && (a = [{
                                    slug: "default",
                                    title: (0, t.__)("DEFAULT COLORS", "astra-sites"),
                                    colors: s
                                }])
                            }
                            return a
                        })(showcaseCTA.customizerData);
                        r(e)
                    }), []);
                    const i = "light" === showcaseCTA.templateColorScheme ? m : c,
                        f = (t, a, s, o, n) => (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                            className: "h-[16px] w-[16px] rounded-full " + ("#ffffff" === t.toLowerCase() ? "border border-gray-200" : ""),
                            style: {
                                backgroundColor: t
                            }
                        }), (0, e.createElement)("div", {
                            className: "h-[16px] w-[16px] rounded-full " + ("#ffffff" === a.toLowerCase() ? "border border-gray-200" : ""),
                            style: {
                                backgroundColor: a
                            }
                        }), (0, e.createElement)("div", {
                            className: "h-[16px] w-[16px] rounded-full " + ("#ffffff" === s.toLowerCase() ? "border border-gray-200" : ""),
                            style: {
                                backgroundColor: s
                            }
                        }), (0, e.createElement)("div", {
                            className: "h-[16px] w-[16px] rounded-full " + ("#ffffff" === o.toLowerCase() ? "border border-gray-200" : ""),
                            style: {
                                backgroundColor: o
                            }
                        }), (0, e.createElement)("div", {
                            className: "h-[16px] w-[16px] rounded-full " + ("#ffffff" === n.toLowerCase() ? "border border-gray-200" : ""),
                            style: {
                                backgroundColor: n
                            }
                        }));
                    return (0, e.createElement)("div", {
                        className: "flex flex-col"
                    }, (0, e.createElement)("div", {
                        className: "flex align-center justify-between items-center"
                    }, (0, e.createElement)("p", {
                        className: "text-[16px] font-medium text-gray-800 m-0"
                    }, (0, t.__)("Try Other Colors", "astra-sites-server")), (0, e.createElement)("div", {
                        className: "text-[12px] text-gray-800 " + ("" === s || "default" === s ? "reset-btn opacity-40 cursor-not-allowed" : "reset-btn active cursor-pointer"),
                        onClick: () => {
                            o({
                                type: "set",
                                selectedColorPallete: "",
                                activePalette: {}
                            }), a({
                                param: "colorPalette",
                                data: ""
                            })
                        }
                    }, (0, t.__)("Default", "astra-sites-server"))), (0, e.createElement)("div", {
                        className: "grid grid-cols-1 pt-[20px] gap-[10px] leading-none"
                    }, n.map(((t, a) => {
                        const o = t.colors[0] || "",
                            n = t.colors[1] || "",
                            r = t.colors[2] || "",
                            i = t.colors[3] || "",
                            d = t.colors[4] || "";
                        return (0, e.createElement)("div", {
                            className: `flex p-[12px] border-solid border rounded-sm border-gray-300 justify-between items-center hover:border-blue-600 hover:cursor-pointer\n                            ${""===s||"default"===s?"border-blue-600":""}\n\t\t\t\t\t\t\thover:transition-all hover:duration-300 hover:ease-linear`,
                            key: a,
                            onClick: () => l(t)
                        }, (0, e.createElement)("div", {
                            className: "flex flex-row text-[12px] font-medium text-gray-800"
                        }, t.title), (0, e.createElement)("div", {
                            className: "flex gap-2"
                        }, f(o, n, r, i, d)))
                    }))), (0, e.createElement)("div", {
                        className: "grid grid-cols-2 pt-[20px] pb-[30px] gap-[10px] border-b border-solid border-gray-300"
                    }, i.map(((t, a) => {
                        const o = t.colors[0] || "",
                            n = t.colors[1] || "",
                            r = t.colors[2] || "",
                            i = t.colors[3] || "",
                            d = t.colors[4] || "";
                        return (0, e.createElement)("div", {
                            className: `flex p-[12px] border-solid border rounded-sm border-gray-300 justify-evenly items-center hover:border-blue-600 hover:cursor-pointer\n                            ${s===t.slug?"border-blue-600":""}\n\t\t\t\t\t\t\thover:transition-all hover:duration-300 hover:ease-linear`,
                            key: a,
                            onClick: () => l(t)
                        }, (0, e.createElement)("div", {
                            className: "flex gap-2"
                        }, f(o, n, r, i, d)))
                    }))))
                };
                const h = {
                    customize: (0, e.createElement)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, " ", (0, e.createElement)("path", {
                        d: "M7 0.25C3.2725 0.25 0.25 3.2725 0.25 7C0.25 10.7275 3.2725 13.75 7 13.75C7.6225 13.75 8.125 13.2475 8.125 12.625C8.125 12.3325 8.0125 12.07 7.8325 11.8675C7.66 11.6725 7.5475 11.41 7.5475 11.125C7.5475 10.5025 8.05 10 8.6725 10H10C12.07 10 13.75 8.32 13.75 6.25C13.75 2.935 10.7275 0.25 7 0.25ZM2.875 7C2.2525 7 1.75 6.4975 1.75 5.875C1.75 5.2525 2.2525 4.75 2.875 4.75C3.4975 4.75 4 5.2525 4 5.875C4 6.4975 3.4975 7 2.875 7ZM5.125 4C4.5025 4 4 3.4975 4 2.875C4 2.2525 4.5025 1.75 5.125 1.75C5.7475 1.75 6.25 2.2525 6.25 2.875C6.25 3.4975 5.7475 4 5.125 4ZM8.875 4C8.2525 4 7.75 3.4975 7.75 2.875C7.75 2.2525 8.2525 1.75 8.875 1.75C9.4975 1.75 10 2.2525 10 2.875C10 3.4975 9.4975 4 8.875 4ZM11.125 7C10.5025 7 10 6.4975 10 5.875C10 5.2525 10.5025 4.75 11.125 4.75C11.7475 4.75 12.25 5.2525 12.25 5.875C12.25 6.4975 11.7475 7 11.125 7Z",
                        fill: "#2563EB"
                    }), " "),
                    cart: (0, e.createElement)("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, " ", (0, e.createElement)("path", {
                        d: "M4.66666 11.0002C3.93332 11.0002 3.33999 11.6002 3.33999 12.3335C3.33999 13.0668 3.93332 13.6668 4.66666 13.6668C5.39999 13.6668 5.99999 13.0668 5.99999 12.3335C5.99999 11.6002 5.39999 11.0002 4.66666 11.0002ZM0.666656 0.333496V1.66683H1.99999L4.39999 6.72683L3.49999 8.36016C3.39332 8.54683 3.33332 8.76683 3.33332 9.00016C3.33332 9.7335 3.93332 10.3335 4.66666 10.3335H12.6667V9.00016H4.94666C4.85332 9.00016 4.77999 8.92683 4.77999 8.8335L4.79999 8.7535L5.39999 7.66683H10.3667C10.8667 7.66683 11.3067 7.3935 11.5333 6.98016L13.92 2.6535C13.9733 2.56016 14 2.44683 14 2.3335C14 1.96683 13.7 1.66683 13.3333 1.66683H3.47332L2.84666 0.333496H0.666656ZM11.3333 11.0002C10.6 11.0002 10.0067 11.6002 10.0067 12.3335C10.0067 13.0668 10.6 13.6668 11.3333 13.6668C12.0667 13.6668 12.6667 13.0668 12.6667 12.3335C12.6667 11.6002 12.0667 11.0002 11.3333 11.0002Z",
                        fill: "#2563EB"
                    }), " "),
                    questionMark: (0, e.createElement)("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, " ", (0, e.createElement)("path", {
                        d: "M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8.75 13.25H7.25V11.75H8.75V13.25ZM10.3025 7.4375L9.6275 8.1275C9.0875 8.675 8.75 9.125 8.75 10.25H7.25V9.875C7.25 9.05 7.5875 8.3 8.1275 7.7525L9.0575 6.8075C9.335 6.5375 9.5 6.1625 9.5 5.75C9.5 4.925 8.825 4.25 8 4.25C7.175 4.25 6.5 4.925 6.5 5.75H5C5 4.0925 6.3425 2.75 8 2.75C9.6575 2.75 11 4.0925 11 5.75C11 6.41 10.73 7.01 10.3025 7.4375Z",
                        fill: "#2563EB"
                    }), " "),
                    reset: (0, e.createElement)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, " ", (0, e.createElement)("path", {
                        d: "M8.53033 1.46875C7.62351 0.5625 6.37899 0 4.99687 0C2.23265 0 0 2.2375 0 5C0 7.7625 2.23265 10 4.99687 10C7.32958 10 9.27455 8.40625 9.83114 6.25H8.53033C8.01751 7.70625 6.62914 8.75 4.99687 8.75C2.92683 8.75 1.24453 7.06875 1.24453 5C1.24453 2.93125 2.92683 1.25 4.99687 1.25C6.03502 1.25 6.9606 1.68125 7.63602 2.3625L5.62226 4.375H10V0L8.53033 1.46875Z",
                        fill: "black"
                    }), " "),
                    cross: (0, e.createElement)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                        fill: "#6B7280"
                    }))
                };
                var F = () => {
                        const [{
                            sidebarOpen: t
                        }, a] = d(), s = {
                            customize: {
                                title: "Customize",
                                icon: h.customize,
                                onclick: () => {
                                    a({
                                        type: "set",
                                        sidebarOpen: !t
                                    })
                                }
                            }
                        };
                        return (0, e.createElement)("div", {
                            className: "flex flex-col shadow-customize-btn rounded-tl-sm rounded-bl-sm"
                        }, Object.keys(s).map(((a, o) => {
                            const {
                                title: n,
                                icon: r,
                                onclick: l,
                                className: i
                            } = s[a];
                            return (0, e.createElement)("div", {
                                key: o,
                                className: `${i||""} st-customize-btn-item relative flex align-center items-center rounded-tl-sm rounded-bl-sm bg-white p-4 border-none ${t?"text-white":"text-gray-800"} cursor-pointer`,
                                onClick: l
                            }, (0, e.createElement)("span", {
                                className: "flex items-center gap-3 pointer-events-none"
                            }, r, (0, e.createElement)("span", {
                                className: "text-[15px] normal-case leading-4 font-medium tracking-normal pointer-events-none font-DM-sans"
                            }, n)))
                        })))
                    },
                    p = ({
                        children: t,
                        content: a
                    }) => (0, e.createElement)("div", {
                        className: "stc-tooltip group relative"
                    }, t, a ? (0, e.createElement)("div", {
                        className: "text-[#ffffff] opacity-0 invisible group-hover:opacity-100 group-hover:visible stc-tooltip-content py-1.5 px-3 absolute right-0 top-[110%] z-100 bg-gray-800 font-normal leading-none text-center min-w-max rounded-sm text-xs shadow-typoTooltip "
                    }, a) : null);
                const u = (e, t) => {
                    if (!e) return "";
                    if (e) {
                        const a = e.match(/'([^']+)'/);
                        return a ? a[1] : "inherit" === e ? t : e
                    }
                    return t || void 0
                };
                var g = () => {
                        const [o] = (0, e.useState)(s), [n, r] = (0, e.useState)([]), [{
                            selectedTypographyIndex: l
                        }, i] = d(), c = (e => {
                            const t = {},
                                a = ["h1", "h2", "h3", "h4", "h5", "h6"];
                            if (e) {
                                const s = e["astra-settings"] || [];
                                a.forEach((e => {
                                    t["font-family-" + e] = s[`font-family-${e}`], t["font-weight-" + e] = s[`font-weight-${e}`], t["text-transform-" + e] = s[`text-transform-${e}`], t["line-height-" + e] = s[`line-height-${e}`]
                                }))
                            }
                            return t
                        })(showcaseCTA.customizerData), [m] = (0, e.useState)(c);
                        (0, e.useEffect)((() => {
                            const e = document.getElementById("google-fonts-url"),
                                t = [],
                                a = (e => {
                                    let t = {};
                                    if (e) {
                                        const a = e["astra-settings"] || [],
                                            s = a["headings-font-family"];
                                        t = {
                                            default: !0,
                                            "body-font-family": a["body-font-family"],
                                            "body-font-variant": a["body-font-variant"],
                                            "body-font-weight": a["body-font-weight"],
                                            "font-size-body": a["font-size-body"],
                                            "body-line-height": a["body-line-height"],
                                            "headings-font-family": s,
                                            "headings-font-weight": a["headings-font-weight"],
                                            "headings-line-height": a["headings-line-height"],
                                            "headings-font-variant": a["headings-font-variant"]
                                        }
                                    }
                                    return t
                                })(showcaseCTA.customizerData);
                            if (t.default = a, r(t), !document.getElementById("google-fonts-domain")) {
                                const e = document.createElement("link");
                                e.id = "google-fonts-domain", e.setAttribute("rel", "preconnect"), e.setAttribute("href", "https://fonts.gstatic.com"), document.head.appendChild(e)
                            }
                            e && e.remove();
                            const s = document.createElement("link");
                            s.id = "google-fonts-url", s.setAttribute("rel", "stylesheet");
                            const n = [];
                            let l = a["body-font-family"] || "",
                                i = parseInt(a["body-font-weight"]) || "";
                            i && (i = `:wght@${i}`), l && (l = u(l), l = l.replace(" ", "+"), n.push(`family=${l}${i}`));
                            let d = a["headings-font-family"] || "",
                                c = parseInt(a["headings-font-weight"]) || "";
                            c && (c = `:wght@${c}`), d && (d = u(d, l), d = d.replace(" ", "+"), n.push(`family=${d}${c}`));
                            let m = "";
                            if (o) {
                                for (const e of o) m += `&family=${u(e["headings-font-family"]).replaceAll(" ","+")}:wght@${e["headings-font-weight"]}&family=${u(e["body-font-family"]).replaceAll(" ","+")}:wght@${e["body-font-weight"]}`;
                                m = m.replace(/[&]{1}$/i, "")
                            }
                            if (n) {
                                const e = `https://fonts.googleapis.com/css2?${n.join("&")}${m}&display=swap`;
                                s.setAttribute("href", e), document.head.appendChild(s)
                            }
                        }), []);
                        const f = () => {
                            i({
                                type: "set",
                                selectedTypographyIndex: "",
                                typography: {}
                            }), a({
                                param: "siteTypography",
                                data: ""
                            })
                        };
                        return (0, e.createElement)("div", {
                            className: "flex flex-col"
                        }, (0, e.createElement)("div", {
                            className: "flex align-center justify-between items-center mt-6"
                        }, (0, e.createElement)("p", {
                            className: "text-[16px] font-medium text-gray-800 m-0"
                        }, (0, t.__)("Try Other Fonts", "astra-sites-server")), (0, e.createElement)("div", {
                            className: "text-[12px] text-gray-800 " + ("" !== l ? "reset-btn active cursor-pointer" : "reset-btn opacity-40 cursor-not-allowed"),
                            onClick: f
                        }, (0, t.__)("Default", "astra-sites-server"))), (0, e.createElement)("div", {
                            className: "pt-[20px]"
                        }, (0, e.createElement)("ul", {
                            className: "grid grid-cols-1 text-center list-none m-0 p-0"
                        }, Object.keys(n).map((t => {
                            const a = u(n[t]["body-font-family"]) || "",
                                s = u(n[t]["headings-font-family"], a) || "",
                                o = n[t]["body-font-weight"],
                                r = n[t]["headings-font-weight"];
                            return (0, e.createElement)("li", {
                                className: `border-solid border rounded-sm border-gray-300 bg-[#F7F7F9] p-[8px] h-full text-[16px] hover:border-blue-600 hover:cursor-pointer hover:text-blue-600 text-gray-800 ${""===l?"border-blue-600 text-blue-600":""}\n\t\t\t\t\t\t\t\t\thover:transition-all hover:duration-200 hover:ease-linear flex gap-2 place-content-center items-center`,
                                key: t,
                                tabIndex: "0",
                                title: `${s} / ${a}`,
                                onClick: f
                            }, (0, e.createElement)(e.Fragment, null, (0, e.createElement)("span", {
                                style: {
                                    fontFamily: s,
                                    fontWeight: r
                                },
                                className: "heading-font-preview"
                            }, s), (0, e.createElement)("span", {
                                className: "font-separator"
                            }, "/"), (0, e.createElement)("span", {
                                style: {
                                    fontFamily: a,
                                    fontWeight: o
                                },
                                className: "body-font-preview"
                            }, a)))
                        })))), (0, e.createElement)("div", {
                            className: "flex flex-col pt-[20px] pb-[10px]"
                        }, (0, e.createElement)("ul", {
                            className: "grid grid-cols-4 gap-4 text-center list-none m-0 p-0"
                        }, Object.keys(s).map((o => {
                            const n = u(s[o]["body-font-family"]) || "",
                                r = u(s[o]["headings-font-family"], n) || "",
                                d = s[o]["body-font-weight"],
                                c = s[o]["headings-font-weight"],
                                f = s[o].id;
                            return (0, e.createElement)(p, {
                                content: `${r} / ${n}`,
                                key: f
                            }, (0, e.createElement)("li", {
                                className: `border-solid border rounded-sm border-gray-300 bg-[#F7F7F9] p-[8px] h-full text-[24px] hover:border-blue-600 hover:cursor-pointer hover:text-blue-600 text-gray-800 ${l===o?"border-blue-600 text-blue-600":""}\n\t\t\t\t\t\t\t\t\thover:transition-all hover:duration-200 hover:ease-linear`,
                                key: f,
                                tabIndex: "0",
                                title: `${r} / ${n}`,
                                onClick: () => (e => {
                                    i({
                                        type: "set",
                                        selectedTypographyIndex: e,
                                        typography: s[e]
                                    });
                                    const t = m ? { ...s[e],
                                        ...m
                                    } : s[e];
                                    a({
                                        param: "siteTypography",
                                        data: JSON.parse(JSON.stringify(t))
                                    })
                                })(o)
                            }, (0, e.createElement)(e.Fragment, null, (0, e.createElement)("span", {
                                style: {
                                    fontFamily: r,
                                    fontWeight: c
                                },
                                className: "heading-font-preview"
                            }, (0, t.__)("A", "astra-sites-server")), (0, e.createElement)("span", {
                                style: {
                                    fontFamily: n,
                                    fontWeight: d
                                },
                                className: "body-font-preview"
                            }, (0, t.__)("a", "astra-sites-server")))))
                        })))))
                    },
                    y = () => {
                        const [{
                            sidebarOpen: a,
                            firstTimeShown: s
                        }, o] = d(), [n, r] = (0, e.useState)("translate-x-[101%]"), l = (0, e.useRef)();
                        (0, e.useEffect)((() => (document.addEventListener("click", i, !1), () => {
                            document.removeEventListener("click", i, !1)
                        })), [a]);
                        const i = e => {
                            l.current && !l.current.contains(e.target) && o({
                                type: "set",
                                sidebarOpen: !1
                            })
                        };
                        return (0, e.useEffect)((() => {
                            s || setTimeout((() => {
                                o({
                                    type: "set",
                                    firstTimeShown: !0
                                }), r("translate-x-0")
                            }), 1e3), s && (setTimeout((() => {
                                r("translate-x-[86px]")
                            }), 50), a || setTimeout((() => {
                                r("translate-x-0")
                            }), 500))
                        }), [a]), (0, e.createElement)("div", {
                            className: "fixed overflow-hidden z-100",
                            "aria-labelledby": "slide-over-title",
                            role: "dialog",
                            "aria-modal": "true",
                            ref: l
                        }, (0, e.createElement)("div", {
                            className: "absolute overflow-hidden"
                        }, (0, e.createElement)("div", {
                            className: "absolute",
                            "aria-hidden": "true"
                        }, (0, e.createElement)("div", {
                            className: `fixed inset-y-0 right-0 pl-[40px] flex w-screen max-w-[368px] transform transition ease-in-out duration-400 sm:duration-500 ${a?"translate-x-0":"translate-x-[101%]"} `
                        }, (0, e.createElement)("div", {
                            className: `absolute top-1/3 ${a?"left-[-90px]":"left-[-135px]"} z-1 bg-white rounded-tl-sm rounded-bl-sm hover:rounded-tl-sm hover:rounded-bl-sm transform transition linear duration-400 sm:duration-500 ${n}`
                        }, (0, e.createElement)(F, null)), (0, e.createElement)("div", {
                            className: "h-full flex flex-col bg-white overflow-y-auto shadow-sidebar"
                        }, (0, e.createElement)("div", {
                            className: "py-[20px] px-[25px] shadow-templateName flex items-center justify-between z-[3] leading-none"
                        }, (0, e.createElement)("div", {
                            className: "flex"
                        }, (0, e.createElement)("p", {
                            className: "text-[18px] font-semibold text-gray-600 m-0",
                            id: "slide-over-title"
                        }, showcaseCTA.templateName)), (0, e.createElement)("div", {
                            className: "close-sidebar-btn cursor-pointer border-solid border rounded-sm border-gray-300 p-[6px] hover:border-gray-800",
                            onClick: () => {
                                o({
                                    type: "set",
                                    sidebarOpen: !1
                                })
                            }
                        }, (0, e.createElement)("span", {
                            className: "flex items-center"
                        }, h.cross))), (0, e.createElement)("div", {
                            className: "flex justify-between flex-col h-full z-[2] bg-white"
                        }, (0, e.createElement)("div", {
                            className: "px-6 pt-6 main-content"
                        }, (0, e.createElement)("p", {
                            className: "text-[14px] text-gray-800 mb-[14px]"
                        }, (0, t.__)("Use the template as-is or try different colors and fonts from the options below.", "astra-sites-server")), ["gutenberg", "elementor"].includes(showcaseCTA.pageBuilder[0]) && (0, e.createElement)(f, null), (0, e.createElement)(g, null)), "template" === ("customize", new URLSearchParams(window.location.search).get("customize") || "") && (0, e.createElement)("div", {
                            className: "px-5 py-3 shadow-show-templates-btn"
                        }, (0, e.createElement)("div", {
                            className: "flex place-content-center place-items-center bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium px-9 py-2.5 rounded text-[15px] mb-2.5 hover:transition-all hover:duration-100 hover:ease-linear",
                            onClick: () => {
                                window.open(`https://wpastra.com/starter-templates-plans/?utm_source=${showcaseCTA.templateName}&utm_medium=websitedemos&utm_campaign=templatecustomizer`, "_blank")
                            }
                        }, (0, t.__)("Buy Now", "astra-sites-server")), (0, e.createElement)("div", {
                            className: "flex place-content-center place-items-center bg-white cursor-pointer text-blue-600 hover:text-white hover:bg-blue-600 font-medium px-5 py-[0.525rem] rounded text-[13px] hover:transition-all hover:duration-100 hover:ease-linear border border-blue-600",
                            onClick: () => {
                                window.open(`https://wpastra.com/docs/getting-started-with-starter-templates/?utm_source=${showcaseCTA.templateName}&utm_medium=websitedemos&utm_campaign=templatecustomizer`, "_blank")
                            }
                        }, (0, t.__)("Learn how to use this template", "astra-sites-server")))))))))
                    };
                const b = document.getElementById("showcase-cta-entry-root"),
                    v = (0, e.createElement)((({
                        reducer: t,
                        initialState: a,
                        children: s
                    }) => (0, e.createElement)(i.Provider, {
                        value: (0, e.useReducer)(t, a)
                    }, s)), {
                        reducer: (e = l, {
                            type: t,
                            ...a
                        }) => "set" === t ? { ...e,
                            ...a
                        } : e,
                        initialState: l
                    }, (0, e.createElement)((() => ((0, e.useEffect)((() => {
                        if (showcaseCTA.isMainSite) {
                            document.querySelector("body").classList.remove("showcase-cta-preview-palette");
                            const e = document.getElementsByClassName("showcase-cta-preview-palette");
                            e.length > 0 && e[0].remove();
                            const t = document.getElementById("showcase-cta-typography");
                            t && t.remove(), localStorage.removeItem("showcase-cta-preview-data")
                        }
                    }), []), showcaseCTA.isMainSite ? null : (0, e.createElement)(y, null))), null));
                e.createRoot ? (0, e.createRoot)(b).render(v) : (0, e.render)(v, b)
            }
        },
        a = {};

    function s(e) {
        var o = a[e];
        if (void 0 !== o) return o.exports;
        var n = a[e] = {
            exports: {}
        };
        return t[e](n, n.exports, s), n.exports
    }
    s.m = t, e = [], s.O = function(t, a, o, n) {
            if (!a) {
                var r = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    a = e[c][0], o = e[c][1], n = e[c][2];
                    for (var l = !0, i = 0; i < a.length; i++)(!1 & n || r >= n) && Object.keys(s.O).every((function(e) {
                        return s.O[e](a[i])
                    })) ? a.splice(i--, 1) : (l = !1, n < r && (r = n));
                    if (l) {
                        e.splice(c--, 1);
                        var d = o();
                        void 0 !== d && (t = d)
                    }
                }
                return t
            }
            n = n || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > n; c--) e[c] = e[c - 1];
            e[c] = [a, o, n]
        }, s.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var e = {
                179: 0,
                278: 0
            };
            s.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, a) {
                    var o, n, r = a[0],
                        l = a[1],
                        i = a[2],
                        d = 0;
                    if (r.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (o in l) s.o(l, o) && (s.m[o] = l[o]);
                        if (i) var c = i(s)
                    }
                    for (t && t(a); d < r.length; d++) n = r[d], s.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                    return s.O(c)
                },
                a = self.webpackChunkastra_sites_server = self.webpackChunkastra_sites_server || [];
            a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        }();
    var o = s.O(void 0, [278], (function() {
        return s(532)
    }));
    o = s.O(o)
}();