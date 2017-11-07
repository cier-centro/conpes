/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['0', '0','1366px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'pop_1',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'licencias',
                type: 'rect',
                rect: ['1152px', '664','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'pop_2',
                type: 'rect',
                rect: ['-2px', '0px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'pop_1',
                symbolName: 'pop_1',
                autoPlay: {

                }
            },
            {
                id: 'licencias',
                symbolName: 'licencias',
                autoPlay: {

                }
            },
            {
                id: 'pop_2',
                symbolName: 'pop_2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_pop_2}": [
                ["style", "left", '-2px'],
                ["style", "top", '0px']
            ],
            "${_licencias}": [
                ["style", "opacity", '0'],
                ["style", "left", '1410px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
                { id: "eid468", tween: [ "style", "${_licencias}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutBack" },
                { id: "eid466", tween: [ "style", "${_licencias}", "left", '1152px', { fromValue: '1410px'}], position: 1250, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"brillo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'btn_respuestas_2',
                    type: 'image',
                    rect: ['0px', '0px', '564px', '212px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn_respuestas_2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btn_respuestas_2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '212px'],
                ["style", "width", '564px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid396", tween: [ "style", "${_btn_respuestas_2}", "opacity", '0.30129310344828', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid397", tween: [ "style", "${_btn_respuestas_2}", "opacity", '0.000000', { fromValue: '0.30129310344828'}], position: 500, duration: 500 }            ]
        }
    }
},
"pop_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'bg2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/bg.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2',
                    display: 'none',
                    clip: ['rect(0px 1332.375px 274.40625px 202.578125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy7',
                    display: 'none',
                    clip: ['rect(79.8828125px 211.5078125px 207.203125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-17px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy2',
                    display: 'none',
                    clip: ['rect(523.53125px 1366px 608.3125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-24px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy',
                    display: 'none',
                    clip: ['rect(608.265625px 1366px 691.640625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-9px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy3',
                    display: 'none',
                    clip: ['rect(438.6015625px 1366px 518.5625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy4',
                    display: 'none',
                    clip: ['rect(354.9140625px 1366px 436.4375px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy5',
                    display: 'none',
                    clip: ['rect(275.171875px 994px 347.0234375px 51.7890625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy6',
                    display: 'none',
                    clip: ['rect(268px 1316px 353.9140625px 996.390625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    rect: ['228px', '108px', '1066px', '136px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'T',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_contenido2Copy4}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [354.9140625,1366,436.4375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ],
            "${_contenido2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [0,1332.375,274.40625,202.578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,142.609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_contenido2Copy6}": [
                ["style", "display", 'none'],
                ["style", "top", '0px'],
                ["style", "clip", [268,1316,353.9140625,996.390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_contenido2Copy2}": [
                ["style", "top", '-17px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [523.53125,1366,608.3125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ],
            "${_contenido2Copy5}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [275.171875,994,347.0234375,51.7890625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ],
            "${_Text}": [
                ["style", "top", '20px'],
                ["style", "opacity", '0'],
                ["style", "left", '231px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${_contenido2Copy3}": [
                ["style", "top", '-9px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [438.6015625,1366,518.5625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ],
            "${_contenido2Copy7}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "clip", [79.8828125,211.5078125,207.203125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "background-position", [202.6875,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_bg2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_contenido2Copy}": [
                ["style", "top", '-24px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [608.265625,1366,691.640625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
                { id: "eid457", tween: [ "style", "${_contenido2Copy}", "left", '0px', { fromValue: '-958px'}], position: 1000, duration: 750, easing: "easeOutBack" },
                { id: "eid436", tween: [ "style", "${_contenido2Copy7}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid452", tween: [ "style", "${_contenido2Copy7}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [202.6875,0]}], position: 54, duration: 696, easing: "easeOutCirc" },
                { id: "eid420", tween: [ "style", "${_contenido2Copy5}", "left", '0px', { fromValue: '-958px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid455", tween: [ "style", "${_contenido2Copy}", "display", 'block', { fromValue: 'none'}], position: 173, duration: 0, easing: "easeOutBack" },
                { id: "eid414", tween: [ "style", "${symbolSelector}", "width", '1366px', { fromValue: '200px'}], position: 0, duration: 750 },
                { id: "eid480", tween: [ "style", "${_Text}", "left", '228px', { fromValue: '231px'}], position: 1250, duration: 500, easing: "easeOutSine" },
                { id: "eid412", tween: [ "style", "${_bg2}", "opacity", '1', { fromValue: '0'}], position: 54, duration: 500 },
                { id: "eid484", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutSine" },
                { id: "eid434", tween: [ "style", "${_contenido2Copy4}", "opacity", '1', { fromValue: '0'}], position: 628, duration: 750, easing: "easeOutBack" },
                { id: "eid482", tween: [ "style", "${_Text}", "top", '108px', { fromValue: '20px'}], position: 1250, duration: 500, easing: "easeOutSine" },
                { id: "eid418", tween: [ "style", "${_contenido2Copy6}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0 },
                { id: "eid417", tween: [ "style", "${_bg2}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0 },
                { id: "eid426", tween: [ "style", "${_contenido2Copy4}", "left", '0px', { fromValue: '-958px'}], position: 628, duration: 750, easing: "easeOutBack" },
                { id: "eid435", tween: [ "style", "${_contenido2}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid439", tween: [ "style", "${_contenido2Copy3}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid430", tween: [ "style", "${_contenido2Copy3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid428", tween: [ "style", "${_contenido2Copy5}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid454", tween: [ "style", "${_contenido2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,142.609375]}], position: 54, duration: 696, easing: "easeOutCirc" },
                { id: "eid437", tween: [ "style", "${_contenido2Copy5}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid438", tween: [ "style", "${_contenido2Copy4}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid424", tween: [ "style", "${_contenido2Copy2}", "left", '0px', { fromValue: '-958px'}], position: 881, duration: 750, easing: "easeOutBack" },
                { id: "eid432", tween: [ "style", "${_contenido2Copy2}", "opacity", '1', { fromValue: '0'}], position: 881, duration: 750, easing: "easeOutBack" },
                { id: "eid440", tween: [ "style", "${_contenido2Copy2}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid422", tween: [ "style", "${_contenido2Copy3}", "left", '0px', { fromValue: '-958px'}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid416", tween: [ "style", "${symbolSelector}", "height", '768px', { fromValue: '200px'}], position: 0, duration: 750 },
                { id: "eid456", tween: [ "style", "${_contenido2Copy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750, easing: "easeOutBack" }            ]
        }
    }
},
"brillo_s": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '1px', '171px', '54px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.53)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '171px']
            ],
            "${_RoundRect}": [
                ["style", "top", '1px'],
                ["style", "height", '54px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.53)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid459", tween: [ "style", "${_RoundRect}", "opacity", '0.89964978448276', { fromValue: '0.000000'}], position: 0, duration: 375 },
                { id: "eid460", tween: [ "style", "${_RoundRect}", "opacity", '0.000000', { fromValue: '0.89964978448276'}], position: 375, duration: 375 }            ]
        }
    }
},
"licencias": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-17px', '-3px', '207px', '66px', 'auto', 'auto'],
                    id: 'btn_licencias',
                    transform: [[], [], [], ['0.82556', '0.82556']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/btn_licencias.png', '0px', '0px']
                },
                {
                    id: 'brillo_s',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'brillo_s',
                symbolName: 'brillo_s',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_brillo_s}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btn_licencias}": [
                ["transform", "scaleX", '0.82556'],
                ["style", "top", '-3px'],
                ["style", "left", '-17px'],
                ["transform", "scaleY", '0.82556']
            ],
            "${symbolSelector}": [
                ["style", "height", '57px'],
                ["style", "width", '172px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"pop_2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'bg2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/bg2.png', '0px', '0px']
                },
                {
                    rect: ['2px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2',
                    display: 'none',
                    clip: ['rect(0px 780.375px 223.9453125px 212.578125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy7',
                    display: 'none',
                    clip: ['rect(79.8828125px 211.5078125px 204.6640625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy2',
                    display: 'none',
                    clip: ['rect(623.65625px 1366px 700.921875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy8',
                    display: 'none',
                    clip: ['rect(528.890625px 1366px 627.9296875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy',
                    display: 'none',
                    clip: ['rect(460.09375px 1366px 526.46875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy3',
                    display: 'none',
                    clip: ['rect(360.6796875px 1366px 459.6875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy4',
                    display: 'none',
                    clip: ['rect(291.84375px 1366px 360.9765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy5',
                    display: 'none',
                    clip: ['rect(226.46875px 1366px 293.4375px 33.7890625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido2.png', '0px', '0px']
                },
                {
                    rect: ['2px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'contenido2Copy6',
                    display: 'none',
                    clip: ['rect(0px 1366px 225.9140625px 788.390625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido2.png', '0px', '0px']
                },
                {
                    rect: ['1188', '699', 'auto', 'auto', 'auto', 'auto'],
                    id: 'atras',
                    display: 'none',
                    cursor: ['pointer'],
                    type: 'rect'
                }
            ],
            symbolInstances: [
            {
                id: 'atras',
                symbolName: 'atras',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenido2Copy4}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [291.84375,1366,360.9765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ],
            "${_atras}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1044px'],
                ["style", "cursor", 'pointer']
            ],
            "${_contenido2Copy6}": [
                ["style", "display", 'none'],
                ["style", "clip", [0,1366,225.9140625,788.390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '2px'],
                ["style", "top", '0px']
            ],
            "${_contenido2Copy8}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [528.890625,1366,627.9296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ],
            "${_contenido2Copy}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [460.09375,1366,526.46875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ],
            "${_contenido2Copy5}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [226.46875,1366,293.4375,33.7890625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ],
            "${_contenido2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '2px'],
                ["style", "clip", [0,780.375,223.9453125,212.578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,142.609375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${_contenido2Copy3}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [360.6796875,1366,459.6875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ],
            "${_contenido2Copy7}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "clip", [79.8828125,211.5078125,204.6640625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "background-position", [202.6875,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_bg2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_contenido2Copy2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [623.65625,1366,700.921875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-958px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid456", tween: [ "style", "${_contenido2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 480, easing: "easeOutBack" },
                { id: "eid459", tween: [ "style", "${_contenido2Copy8}", "opacity", '1', { fromValue: '0'}], position: 554, duration: 480, easing: "easeOutBack" },
                { id: "eid474", tween: [ "style", "${_atras}", "left", '1188px', { fromValue: '1044px'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid412", tween: [ "style", "${_bg2}", "opacity", '1', { fromValue: '0'}], position: 54, duration: 500 },
                { id: "eid436", tween: [ "style", "${_contenido2Copy7}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid460", tween: [ "style", "${_contenido2Copy8}", "left", '0px', { fromValue: '-958px'}], position: 554, duration: 480, easing: "easeOutBack" },
                { id: "eid420", tween: [ "style", "${_contenido2Copy5}", "left", '0px', { fromValue: '-958px'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid426", tween: [ "style", "${_contenido2Copy4}", "left", '0px', { fromValue: '-958px'}], position: 324, duration: 480, easing: "easeOutBack" },
                { id: "eid458", tween: [ "style", "${_contenido2Copy8}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid455", tween: [ "style", "${_contenido2Copy}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid440", tween: [ "style", "${_contenido2Copy2}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid457", tween: [ "style", "${_contenido2Copy}", "left", '0px', { fromValue: '-958px'}], position: 500, duration: 480, easing: "easeOutBack" },
                { id: "eid434", tween: [ "style", "${_contenido2Copy4}", "opacity", '1', { fromValue: '0'}], position: 324, duration: 480, easing: "easeOutBack" },
                { id: "eid437", tween: [ "style", "${_contenido2Copy5}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid439", tween: [ "style", "${_contenido2Copy3}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid417", tween: [ "style", "${_bg2}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0 },
                { id: "eid430", tween: [ "style", "${_contenido2Copy3}", "opacity", '1', { fromValue: '0'}], position: 401, duration: 480, easing: "easeOutBack" },
                { id: "eid435", tween: [ "style", "${_contenido2}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid428", tween: [ "style", "${_contenido2Copy5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid469", tween: [ "style", "${symbolSelector}", "width", '200px', { fromValue: '200px'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid470", tween: [ "style", "${symbolSelector}", "width", '200px', { fromValue: '200px'}], position: 750, duration: 0, easing: "easeOutBack" },
                { id: "eid418", tween: [ "style", "${_contenido2Copy6}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0 },
                { id: "eid476", tween: [ "style", "${_atras}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid454", tween: [ "style", "${_contenido2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,142.609375]}], position: 54, duration: 696, easing: "easeOutCirc" },
                { id: "eid438", tween: [ "style", "${_contenido2Copy4}", "display", 'block', { fromValue: 'none'}], position: 54, duration: 0, easing: "easeOutBack" },
                { id: "eid424", tween: [ "style", "${_contenido2Copy2}", "left", '0px', { fromValue: '-958px'}], position: 599, duration: 480, easing: "easeOutBack" },
                { id: "eid432", tween: [ "style", "${_contenido2Copy2}", "opacity", '1', { fromValue: '0'}], position: 599, duration: 480, easing: "easeOutBack" },
                { id: "eid452", tween: [ "style", "${_contenido2Copy7}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [202.6875,0]}], position: 54, duration: 696, easing: "easeOutCirc" },
                { id: "eid422", tween: [ "style", "${_contenido2Copy3}", "left", '0px', { fromValue: '-958px'}], position: 401, duration: 480, easing: "easeOutBack" },
                { id: "eid471", tween: [ "style", "${symbolSelector}", "height", '200px', { fromValue: '200px'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid472", tween: [ "style", "${symbolSelector}", "height", '200px', { fromValue: '200px'}], position: 750, duration: 0, easing: "easeOutBack" },
                { id: "eid477", tween: [ "style", "${_atras}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutBack" }            ]
        }
    }
},
"atras": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.8162', '0.8162']],
                    id: 'btn_atras',
                    type: 'image',
                    rect: ['-16px', '-4px', '172px', '58px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btn_atras.png', '0px', '0px']
                },
                {
                    id: 'brillo_s2',
                    type: 'rect',
                    rect: ['-17px', '-3px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.79532', '0.88889']]
                }
            ],
            symbolInstances: [
            {
                id: 'brillo_s2',
                symbolName: 'brillo_s'
            }            ]
        },
    states: {
        "Base State": {
            "${_brillo_s2}": [
                ["transform", "scaleX", '0.79532'],
                ["style", "left", '-17px'],
                ["transform", "scaleY", '0.88889'],
                ["style", "top", '-3px']
            ],
            "${_btn_atras}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.8162'],
                ["transform", "scaleX", '0.8162'],
                ["style", "height", '58px'],
                ["style", "left", '-16px'],
                ["style", "width", '172px']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-9697239920");
