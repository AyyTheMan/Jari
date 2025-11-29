(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/context/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const storedRole = localStorage.getItem("userRole");
            if (storedRole) {
                setUserRole(storedRole);
            }
            setIsLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (userRole) {
                localStorage.setItem("userRole", userRole);
            } else {
                localStorage.removeItem("userRole");
            }
        }
    }["AuthProvider.useEffect"], [
        userRole
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
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
_s(AuthProvider, "nJAD39QUIDSNvk5j4gxsUQU9IuQ=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants/districts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/data-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataProvider",
    ()=>DataProvider,
    "useData",
    ()=>useData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$districts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/districts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const DataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
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
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_USER);
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_REPORTS);
    const [votedReports, setVotedReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [votedSuggestions, setVotedSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataProvider.useEffect": ()=>{
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
                const migrated = parsed.map({
                    "DataProvider.useEffect.migrated": (s)=>{
                        if (typeof s.district === "string") {
                            const districtObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$districts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDistrictByName"])(s.district);
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
                    }
                }["DataProvider.useEffect.migrated"]);
                setSuggestions(migrated);
            }
            if (storedVotedSuggestions) setVotedSuggestions(new Set(JSON.parse(storedVotedSuggestions)));
            setIsInitialized(true);
        }
    }["DataProvider.useEffect"], []);
    // Save to localStorage whenever data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataProvider.useEffect": ()=>{
            if (!isInitialized) return;
            localStorage.setItem("app_user", JSON.stringify(user));
        }
    }["DataProvider.useEffect"], [
        user,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataProvider.useEffect": ()=>{
            if (!isInitialized) return;
            localStorage.setItem("app_reports", JSON.stringify(reports));
        }
    }["DataProvider.useEffect"], [
        reports,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataProvider.useEffect": ()=>{
            if (!isInitialized) return;
            localStorage.setItem("app_voted_reports", JSON.stringify(Array.from(votedReports)));
        }
    }["DataProvider.useEffect"], [
        votedReports,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataProvider.useEffect": ()=>{
            if (!isInitialized) return;
            localStorage.setItem("app_suggestions", JSON.stringify(suggestions));
        }
    }["DataProvider.useEffect"], [
        suggestions,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataProvider.useEffect": ()=>{
            if (!isInitialized) return;
            localStorage.setItem("app_voted_suggestions", JSON.stringify(Array.from(votedSuggestions)));
        }
    }["DataProvider.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataContext.Provider, {
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
_s(DataProvider, "yHShdJSyVvqYfmMZlJJK/DzGr8I=");
_c = DataProvider;
function useData() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
_s1(useData, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "DataProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/analytics";
var version = "1.5.0";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return `${props.basePath}/insights/script.js`;
    }
    return "/_vercel/insights/script.js";
}
// src/generic.ts
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const src = getScriptSrc(props);
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    } else if (props.basePath) {
        script.dataset.endpoint = `${props.basePath}/insights`;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined" || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === "undefined") {
        return void 0;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/react/index.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            var _a;
            if (props.beforeSend) {
                (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
            }
        }
    }["Analytics.useEffect"], [
        props.beforeSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            inject({
                framework: props.framework || "react",
                basePath: props.basePath ?? getBasePath(),
                ...props.route !== void 0 && {
                    disableAutoTrack: true
                },
                ...props
            });
        }
    }["Analytics.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            if (props.route && props.path) {
                pageview({
                    route: props.route,
                    path: props.path
                });
            }
        }
    }["Analytics.useEffect"], [
        props.route,
        props.path
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!params) {
        return {
            route: null,
            path
        };
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return {
        route: computeRoute(path, finalParams),
        path
    };
};
function getBasePath2() {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined" || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === "undefined") {
        return void 0;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Analytics, {
        path,
        route,
        ...props,
        basePath: getBasePath2(),
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AnalyticsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_e9c2da51._.js.map