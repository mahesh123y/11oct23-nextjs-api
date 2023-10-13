// 1. Import Area





// 2. Define Area
export async function PUT(){
    // Object.method(actualArgument)
    return Response.json({
        "Context": {
            "cookies": {
                "session": "session-id",
                "recognition": "x-acbin",
                "locale": "lc-acbin",
                "ubid": "ubid-acbin"
            }
        },
        "ShoppingAidsList": {
            "MultiPageShoppingAids": {
                "data": {},
                "priorityList": []
            },
            "Hotspots": {
                "data": {},
                "priorityList": []
            },
            "Sparkles": {
                "data": {},
                "priorityList": []
            },
            "Audiospots": {
                "data": {},
                "priorityList": []
            },
            "ToolTips": {
                "data": {},
                "priorityList": []
            },
            "SmartHintsXFAB": {
                "data": {},
                "priorityList": []
            },
            "BottomSheets": {
                "data": {},
                "priorityList": []
            }
        }
    });
}