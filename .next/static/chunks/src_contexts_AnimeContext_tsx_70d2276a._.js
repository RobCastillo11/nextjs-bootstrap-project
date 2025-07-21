(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/AnimeContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnimeProvider": (()=>AnimeProvider),
    "useAnime": (()=>useAnime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const AnimeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Categorías predeterminadas
const defaultCategories = [
    {
        id: '1',
        name: 'Acción',
        color: '#ef4444',
        description: 'Animes con mucha acción y combates'
    },
    {
        id: '2',
        name: 'Romance',
        color: '#ec4899',
        description: 'Historias de amor y relaciones'
    },
    {
        id: '3',
        name: 'Comedia',
        color: '#f59e0b',
        description: 'Animes divertidos y humorísticos'
    },
    {
        id: '4',
        name: 'Drama',
        color: '#8b5cf6',
        description: 'Historias emotivas y dramáticas'
    },
    {
        id: '5',
        name: 'Fantasía',
        color: '#10b981',
        description: 'Mundos mágicos y fantásticos'
    },
    {
        id: '6',
        name: 'Ciencia Ficción',
        color: '#3b82f6',
        description: 'Tecnología futurista y espacial'
    },
    {
        id: '7',
        name: 'Slice of Life',
        color: '#6b7280',
        description: 'Vida cotidiana y realista'
    },
    {
        id: '8',
        name: 'Thriller',
        color: '#1f2937',
        description: 'Suspenso y misterio'
    }
];
function AnimeProvider({ children }) {
    _s();
    const [animes, setAnimes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultCategories);
    // Cargar datos del localStorage al inicializar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimeProvider.useEffect": ()=>{
            const savedAnimes = localStorage.getItem('animes');
            const savedCategories = localStorage.getItem('categories');
            if (savedAnimes) {
                setAnimes(JSON.parse(savedAnimes));
            }
            if (savedCategories) {
                setCategories(JSON.parse(savedCategories));
            }
        }
    }["AnimeProvider.useEffect"], []);
    // Guardar animes en localStorage cuando cambien
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimeProvider.useEffect": ()=>{
            localStorage.setItem('animes', JSON.stringify(animes));
        }
    }["AnimeProvider.useEffect"], [
        animes
    ]);
    // Guardar categorías en localStorage cuando cambien
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimeProvider.useEffect": ()=>{
            localStorage.setItem('categories', JSON.stringify(categories));
        }
    }["AnimeProvider.useEffect"], [
        categories
    ]);
    const addAnime = (anime)=>{
        setAnimes((prev)=>[
                anime,
                ...prev
            ]);
    };
    const updateAnime = (id, updatedAnime)=>{
        setAnimes((prev)=>prev.map((anime)=>anime.id === id ? {
                    ...anime,
                    ...updatedAnime
                } : anime));
    };
    const deleteAnime = (id)=>{
        setAnimes((prev)=>prev.filter((anime)=>anime.id !== id));
    };
    const addCategory = (category)=>{
        setCategories((prev)=>[
                ...prev,
                category
            ]);
    };
    const updateCategory = (id, updatedCategory)=>{
        setCategories((prev)=>prev.map((category)=>category.id === id ? {
                    ...category,
                    ...updatedCategory
                } : category));
    };
    const deleteCategory = (id)=>{
        // Remover la categoría de todos los animes que la usen
        setAnimes((prev)=>prev.map((anime)=>({
                    ...anime,
                    categoryIds: anime.categoryIds.filter((catId)=>catId !== id)
                })));
        // Eliminar la categoría
        setCategories((prev)=>prev.filter((category)=>category.id !== id));
    };
    const getAnimeById = (id)=>{
        return animes.find((anime)=>anime.id === id);
    };
    const getCategoryById = (id)=>{
        return categories.find((category)=>category.id === id);
    };
    const getCategoriesByIds = (ids)=>{
        return categories.filter((category)=>ids.includes(category.id));
    };
    const value = {
        animes,
        categories,
        addAnime,
        updateAnime,
        deleteAnime,
        addCategory,
        updateCategory,
        deleteCategory,
        getAnimeById,
        getCategoryById,
        getCategoriesByIds
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AnimeContext.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(AnimeProvider, "77hwH80vY2W8Nz/6jg1VkeATE7E=");
_c = AnimeProvider;
function useAnime() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AnimeContext);
    if (context === undefined) {
        throw new Error('useAnime must be used within an AnimeProvider');
    }
    return context;
}
_s1(useAnime, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AnimeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_contexts_AnimeContext_tsx_70d2276a._.js.map