// 1. Import Area





// 2. Define Area
export async function GET(){
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
        "SessionDayImpressionCount": {
            "Audiospots": 0,
            "Hotspots": 0,
            "Sparkles": 1,
            "BottomSheets": 0,
            "MultiPageShoppingAids": 0,
            "ToolTips": 0
        },
        "ShoppingAidsList": {
            "MultiPageShoppingAids": {
                "data": {},
                "priorityList": []
            },
            "Hotspots": {
                "data": {
                    "s-pinch-to-zoom-hotspot-tooltip-EU": {
                        "positionY": -5,
                        "identifier": "s-pinch-to-zoom-hotspot-tooltip-EU",
                        "sequenceNum": 0,
                        "elementDisplayType": "HTML",
                        "maxDisplayCount": 5,
                        "pulsatingIteration": 6,
                        "hotspotAnchor": "#s-pinch-to-zoom-hotspot-tooltip",
                        "weblabTriggerOnlyFlag": false,
                        "nestedSAPriorityList": [
                            {
                                "identifier": "s-search-pinch-to-zoom-hotspot-video-tooltip-text-EU",
                                "pageType": "search",
                                "SAType": "ToolTips"
                            }
                        ],
                        "impressionInterval": 5,
                        "positionX": 5
                    }
                },
                "priorityList": [
                    "s-pinch-to-zoom-hotspot-tooltip-EU"
                ]
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
                "data": {
                    "a9vs_morelikethis_tooltip_in": {
                        "identifier": "a9vs_morelikethis_tooltip_in",
                        "sequenceNum": 3,
                        "tipType": "tool_tip",
                        "elementBackgroundColor": "#FFA724",
                        "elementBorderColor": "#FFA724",
                        "weblabTriggerOnlyFlag": false,
                        "elementWidth": 390,
                        "elementArrowPosition": "topleft",
                        "elementTextColor": "#000000",
                        "impressionInterval": 24,
                        "elementAnchor": ".mlt-icon-container",
                        "clientSideTargetting": "html .mlt-icon-container visible",
                        "elementDuration": 3000,
                        "elementBounceDuration": 9000,
                        "elementStartOffset": 1,
                        "highlighter": false,
                        "elementDisplayType": "HTML",
                        "userState": "ANY",
                        "maxDisplayCount": 5,
                        "elementHeight": 80,
                        "scrollToAnchor": false,
                        "elementValue": "See more like this",
                        "elementType": "TEXT"
                    },
                    "s-search-pinch-to-zoom-hotspot-video-tooltip-text-EU": {
                        "identifier": "s-search-pinch-to-zoom-hotspot-video-tooltip-text-EU",
                        "weblabTriggerOnlyFlag": false,
                        "elementArrowPosition": "topmiddle",
                        "type": "tool_tip",
                        "impressionInterval": 5,
                        "elementAnchor": "#s-pinch-to-zoom-hotspot-tooltip",
                        "pageType": "search",
                        "highlighter": false,
                        "elementDisplayType": "HTML",
                        "maxDisplayCount": 5,
                        "scrollToAnchor": false,
                        "elementValue": "Pinch images to zoom",
                        "parentIdentity": {
                            "identifier": "s-pinch-to-zoom-hotspot-tooltip-EU",
                            "pageType": "search",
                            "SAType": "Hotspots"
                        }
                    }
                },
                "priorityList": [
                    "a9vs_morelikethis_tooltip_in"
                ]
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