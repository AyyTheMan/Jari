module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/context/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedRole = localStorage.getItem("userRole");
        if (storedRole) {
            setUserRole(storedRole);
        }
        setIsLoading(false);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userRole) {
            localStorage.setItem("userRole", userRole);
        } else {
            localStorage.removeItem("userRole");
        }
    }, [
        userRole
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            userRole,
            setUserRole,
            userData,
            setUserData,
            isLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/auth-context.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
}),
"[project]/constants/districts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JEDDAH_DISTRICTS",
    ()=>JEDDAH_DISTRICTS,
    "findDistrictById",
    ()=>findDistrictById,
    "findDistrictByName",
    ()=>findDistrictByName
]);
const JEDDAH_DISTRICTS = [
    {
        id: "al-naeem",
        name: "Al-Naeem",
        arabic: "النعيم"
    },
    {
        id: "al-balad",
        name: "Al-Balad",
        arabic: "البلد"
    },
    {
        id: "al-hamra",
        name: "Al-Hamra",
        arabic: "الحمراء"
    },
    {
        id: "al-rawdah",
        name: "Al-Rawdah",
        arabic: "الروضة"
    },
    {
        id: "al-salamah",
        name: "Al-Salamah",
        arabic: "السلامة"
    },
    {
        id: "al-zahra",
        name: "Al-Zahra",
        arabic: "الزهراء"
    },
    {
        id: "al-andalus",
        name: "Al-Andalus",
        arabic: "الأندلس"
    },
    {
        id: "al-shati",
        name: "Al-Shati",
        arabic: "الشاطئ"
    },
    {
        id: "al-marjan",
        name: "Al-Marjan",
        arabic: "المرجان"
    },
    {
        id: "downtown",
        name: "Downtown",
        arabic: "وسط المدينة"
    },
    {
        id: "westside",
        name: "Westside",
        arabic: "الجانب الغربي"
    },
    {
        id: "north-obhur",
        name: "North Obhur",
        arabic: "أبحر الشمالية"
    },
    {
        id: "south-obhur",
        name: "South Obhur",
        arabic: "أبحر الجنوبية"
    },
    {
        id: "al-basateen",
        name: "Al-Basateen",
        arabic: "البساتين"
    },
    {
        id: "al-faisaliyah",
        name: "Al-Faisaliyah",
        arabic: "الفيصلية"
    },
    {
        id: "al-rehab",
        name: "Al-Rehab",
        arabic: "الرحاب"
    },
    {
        id: "al-safa",
        name: "Al-Safa",
        arabic: "الصفا"
    },
    {
        id: "al-aziziyah",
        name: "Al-Aziziyah",
        arabic: "العزيزية"
    },
    {
        id: "ash-sharafiyah",
        name: "Ash Sharafiyah",
        arabic: "الشرفية"
    },
    {
        id: "al-baghdadiyah",
        name: "Al-Baghdadiyah",
        arabic: "البغدادية"
    },
    {
        id: "al-khalidiyah",
        name: "Al-Khalidiyah",
        arabic: "الخالدية"
    },
    {
        id: "al-muhammadiyah",
        name: "Al-Muhammadiyah",
        arabic: "المحمدية"
    },
    {
        id: "al-thaalba",
        name: "Al-Thaalba",
        arabic: "الثعالبة"
    },
    {
        id: "al-bawadi",
        name: "Al-Bawadi",
        arabic: "البوادي"
    },
    {
        id: "al-fayhaa",
        name: "Al-Fayhaa",
        arabic: "الفيحاء"
    },
    {
        id: "al-jameah",
        name: "Al-Jameah",
        arabic: "الجامعة"
    },
    {
        id: "al-waziriyah",
        name: "Al-Waziriyah",
        arabic: "الوزيرية"
    },
    {
        id: "al-sabeel",
        name: "Al-Sabeel",
        arabic: "السبيل"
    },
    {
        id: "al-kandra",
        name: "Al-Kandra",
        arabic: "الكندرة"
    },
    {
        id: "al-naseem",
        name: "Al-Naseem",
        arabic: "النسيم"
    },
    {
        id: "al-manar",
        name: "Al-Manar",
        arabic: "المنار"
    },
    {
        id: "al-sheraa",
        name: "Al-Sheraa",
        arabic: "الشراع"
    },
    {
        id: "al-ferdous",
        name: "Al-Ferdous",
        arabic: "الفردوس"
    },
    {
        id: "al-harazat",
        name: "Al-Harazat",
        arabic: "الحرازات"
    },
    {
        id: "al-rowais",
        name: "Al-Rowais",
        arabic: "الرويس"
    },
    {
        id: "al-sharafiyah-al-gharbiyah",
        name: "Al-Sharafiyah Al-Gharbiyah",
        arabic: "الشرفية الغربية"
    },
    {
        id: "al-salehiyah",
        name: "Al-Salehiyah",
        arabic: "الصالحية"
    },
    {
        id: "al-sawaid",
        name: "Al-Sawaid",
        arabic: "الصوائد"
    },
    {
        id: "al-taiaser",
        name: "Al-Taiaser",
        arabic: "التياسر"
    },
    {
        id: "al-buhairat",
        name: "Al-Buhairat",
        arabic: "البحيرات"
    },
    {
        id: "al-ajaweed",
        name: "Al-Ajaweed",
        arabic: "الأجاويد"
    },
    {
        id: "al-nakheel",
        name: "Al-Nakheel",
        arabic: "النخيل"
    },
    {
        id: "al-montazahat",
        name: "Al-Montazahat",
        arabic: "المنتزهات"
    },
    {
        id: "al-murjan",
        name: "Al-Murjan",
        arabic: "المرجان"
    },
    {
        id: "al-worood",
        name: "Al-Worood",
        arabic: "الورود"
    },
    {
        id: "al-rabwah",
        name: "Al-Rabwah",
        arabic: "الربوة"
    },
    {
        id: "al-corniche",
        name: "Al-Corniche",
        arabic: "الكورنيش"
    },
    {
        id: "al-ameer-fawaz",
        name: "Al-Ameer Fawaz",
        arabic: "الأمير فواز"
    },
    {
        id: "al-ameer-abdullah-al-faisal",
        name: "Al-Ameer Abdullah Al-Faisal",
        arabic: "الأمير عبدالله الفيصل"
    },
    {
        id: "al-sahel",
        name: "Al-Sahel",
        arabic: "الساحل"
    },
    {
        id: "al-lulu",
        name: "Al-Lulu",
        arabic: "اللؤلؤ"
    },
    {
        id: "al-ajwad",
        name: "Al-Ajwad",
        arabic: "الأجواد"
    },
    {
        id: "al-mahrajan",
        name: "Al-Mahrajan",
        arabic: "المهرجان"
    },
    {
        id: "al-wahah",
        name: "Al-Wahah",
        arabic: "الواحة"
    },
    {
        id: "al-yaqoot",
        name: "Al-Yaqoot",
        arabic: "الياقوت"
    },
    {
        id: "al-meshrefa",
        name: "Al-Meshrefa",
        arabic: "المشرفة"
    },
    {
        id: "al-mohammadiyah-aljanoubiyah",
        name: "Al-Mohammadiyah Al-Janoubiyah",
        arabic: "المحمدية الجنوبية"
    },
    {
        id: "al-jamea",
        name: "Al-Jamea",
        arabic: "الجامعة"
    },
    {
        id: "al-narjis",
        name: "Al-Narjis",
        arabic: "النرجس"
    },
    {
        id: "al-rabwa",
        name: "Al-Rabwa",
        arabic: "الربوة"
    },
    {
        id: "al-hindawiyah",
        name: "Al-Hindawiyah",
        arabic: "الهنداوية"
    },
    {
        id: "al-sultan",
        name: "Al-Sultan",
        arabic: "السلطان"
    },
    {
        id: "al-mina",
        name: "Al-Mina",
        arabic: "الميناء"
    },
    {
        id: "al-rihab",
        name: "Al-Rihab",
        arabic: "الرحاب"
    },
    {
        id: "al-amir-majed",
        name: "Al-Amir Majed",
        arabic: "الأمير ماجد"
    },
    {
        id: "al-mohamadiyah-ash-shamaliyah",
        name: "Al-Mohamadiyah Ash-Shamaliyah",
        arabic: "المحمدية الشمالية"
    },
    {
        id: "al-samer",
        name: "Al-Samer",
        arabic: "السامر"
    },
    {
        id: "al-fairoziyah",
        name: "Al-Fairoziyah",
        arabic: "الفيروز"
    },
    {
        id: "al-sanabel",
        name: "Al-Sanabel",
        arabic: "السنابل"
    },
    {
        id: "al-ahmar",
        name: "Al-Ahmar",
        arabic: "الأحمر"
    },
    {
        id: "briman",
        name: "Briman",
        arabic: "بريمان"
    },
    {
        id: "al-hamdaniyah",
        name: "Al-Hamdaniyah",
        arabic: "الحمدانية"
    },
    {
        id: "al-sharafieh",
        name: "Al-Sharafieh",
        arabic: "الشرفية"
    },
    {
        id: "al-morooj",
        name: "Al-Morooj",
        arabic: "المروج"
    },
    {
        id: "al-tawfiq",
        name: "Al-Tawfiq",
        arabic: "التوفيق"
    },
    {
        id: "al-mahjar",
        name: "Al-Mahjar",
        arabic: "المحجر"
    },
    {
        id: "al-samer-al-jadeed",
        name: "Al-Samer Al-Jadeed",
        arabic: "السامر الجديد"
    },
    {
        id: "al-baghlieh",
        name: "Al-Baghlieh",
        arabic: "البغلية"
    },
    {
        id: "ghulail",
        name: "Ghulail",
        arabic: "غليل"
    },
    {
        id: "al-nozha",
        name: "Al-Nozha",
        arabic: "النزهة"
    },
    {
        id: "al-quds",
        name: "Al-Quds",
        arabic: "القدس"
    },
    {
        id: "al-shafaa",
        name: "Al-Shafaa",
        arabic: "الشفاء"
    },
    {
        id: "al-shatee",
        name: "Al-Shatee",
        arabic: "الشاطئ"
    },
    {
        id: "al-shamaliyah",
        name: "Al-Shamaliyah",
        arabic: "الشمالية"
    },
    {
        id: "madaen-al-fahd",
        name: "Madaen Al-Fahd",
        arabic: "مدائن الفهد"
    },
    {
        id: "al-jawhara",
        name: "Al-Jawhara",
        arabic: "الجوهرة"
    },
    {
        id: "al-luyat",
        name: "Al-Luyat",
        arabic: "اللؤيات"
    },
    {
        id: "taiba",
        name: "Taiba",
        arabic: "طيبة"
    },
    {
        id: "al-moosa",
        name: "Al-Moosa",
        arabic: "الموسى"
    },
    {
        id: "al-sawari",
        name: "Al-Sawari",
        arabic: "الصواري"
    },
    {
        id: "al-amwaj",
        name: "Al-Amwaj",
        arabic: "الأمواج"
    },
    {
        id: "al-qurayyat",
        name: "Al-Qurayyat",
        arabic: "القريات"
    },
    {
        id: "al-ashrafieh",
        name: "Al-Ashrafieh",
        arabic: "الأشرفية"
    },
    {
        id: "al-nozla-al-yamania",
        name: "Al-Nozla Al-Yamania",
        arabic: "النزلة اليمانية"
    },
    {
        id: "al-nozla-ash-sharqiya",
        name: "Al-Nozla Ash-Sharqiya",
        arabic: "النزلة الشرقية"
    },
    {
        id: "al-safwa",
        name: "Al-Safwa",
        arabic: "الصفوة"
    },
    {
        id: "al-thaghr",
        name: "Al-Thaghr",
        arabic: "الثغر"
    },
    {
        id: "al-ajyad",
        name: "Al-Ajyad",
        arabic: "الأجياد"
    },
    {
        id: "al-tayseer",
        name: "Al-Tayseer",
        arabic: "التيسير"
    },
    {
        id: "ar-rayaan",
        name: "Ar-Rayaan",
        arabic: "الريان"
    },
    {
        id: "umm-as-salam",
        name: "Umm As-Salam",
        arabic: "أم السلم"
    }
];
function findDistrictByName(name) {
    return JEDDAH_DISTRICTS.find((d)=>d.name === name || d.id === name);
}
function findDistrictById(id) {
    return JEDDAH_DISTRICTS.find((d)=>d.id === id);
}
}),
"[project]/context/data-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataProvider",
    ()=>DataProvider,
    "useData",
    ()=>useData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$districts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/districts.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const DataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const DEFAULT_USER = {
    name: "Ayman AlJenidi",
    district: "Al-Naeem",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ayman",
    role: "citizen"
};
const DEFAULT_REPORTS = [
    {
        id: "main-1",
        title: "Pothole on Main St",
        lat: 21.6169,
        lng: 39.1564,
        votes: 12,
        type: "pothole",
        district: "Al-Naeem",
        status: "pending"
    },
    {
        id: "main-2",
        title: "Broken Streetlight",
        lat: 21.618,
        lng: 39.158,
        votes: 8,
        type: "light",
        district: "Al-Naeem",
        status: "in-progress"
    },
    {
        id: "main-3",
        title: "Trash Pile",
        lat: 21.615,
        lng: 39.155,
        votes: 5,
        type: "trash",
        district: "Al-Naeem",
        status: "resolved"
    }
];
function DataProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_USER);
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_REPORTS);
    const [votedReports, setVotedReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [votedSuggestions, setVotedSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedUser = localStorage.getItem("app_user");
        const storedReports = localStorage.getItem("app_reports");
        const storedVotedReports = localStorage.getItem("app_voted_reports");
        const storedSuggestions = localStorage.getItem("app_suggestions");
        const storedVotedSuggestions = localStorage.getItem("app_voted_suggestions");
        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedReports) setReports(JSON.parse(storedReports));
        if (storedVotedReports) setVotedReports(new Set(JSON.parse(storedVotedReports)));
        if (storedSuggestions) {
            const parsed = JSON.parse(storedSuggestions);
            const migrated = parsed.map((s)=>{
                if (typeof s.district === "string") {
                    const districtObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$districts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findDistrictByName"])(s.district);
                    return {
                        ...s,
                        district: districtObj || {
                            id: "al-naeem",
                            name: "Al-Naeem",
                            arabic: "النعيم"
                        }
                    };
                }
                return s;
            });
            setSuggestions(migrated);
        }
        if (storedVotedSuggestions) setVotedSuggestions(new Set(JSON.parse(storedVotedSuggestions)));
        setIsInitialized(true);
    }, []);
    // Save to localStorage whenever data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInitialized) return;
        localStorage.setItem("app_user", JSON.stringify(user));
    }, [
        user,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInitialized) return;
        localStorage.setItem("app_reports", JSON.stringify(reports));
    }, [
        reports,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInitialized) return;
        localStorage.setItem("app_voted_reports", JSON.stringify(Array.from(votedReports)));
    }, [
        votedReports,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInitialized) return;
        localStorage.setItem("app_suggestions", JSON.stringify(suggestions));
    }, [
        suggestions,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInitialized) return;
        localStorage.setItem("app_voted_suggestions", JSON.stringify(Array.from(votedSuggestions)));
    }, [
        votedSuggestions,
        isInitialized
    ]);
    const updateUser = (updates)=>{
        setUser((prev)=>({
                ...prev,
                ...updates
            }));
    };
    const addReport = (report)=>{
        setReports((prev)=>[
                ...prev,
                report
            ]);
    };
    const upvoteReport = (id)=>{
        if (votedReports.has(id)) return;
        setReports((prev)=>prev.map((r)=>r.id === id ? {
                    ...r,
                    votes: r.votes + 1
                } : r));
        setVotedReports((prev)=>{
            const newSet = new Set(prev);
            newSet.add(id);
            return newSet;
        });
    };
    const addSuggestion = (suggestion)=>{
        setSuggestions((prev)=>[
                ...prev,
                suggestion
            ]);
    };
    const upvoteSuggestion = (id)=>{
        if (votedSuggestions.has(id)) return;
        setSuggestions((prev)=>prev.map((s)=>s.id === id ? {
                    ...s,
                    votes: s.votes + 1
                } : s));
        setVotedSuggestions((prev)=>{
            const newSet = new Set(prev);
            newSet.add(id);
            return newSet;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DataContext.Provider, {
        value: {
            user,
            updateUser,
            reports,
            addReport,
            upvoteReport,
            votedReports,
            suggestions,
            addSuggestion,
            upvoteSuggestion,
            votedSuggestions
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/data-context.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
function useData() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__53b52621._.js.map