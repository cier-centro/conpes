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
                id: 'background',
                type: 'image',
                rect: ['0px', '0px','1366px','772px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"background.png",'0px','0px']
            },
            {
                id: 'guia_3',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'guia_2',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'guia_1',
                type: 'rect',
                rect: ['2px', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'cerrar_gray',
                type: 'image',
                rect: ['1292px', '78px','55px','55px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cerrar_gray.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'guia_1',
                symbolName: 'guia_1'
            },
            {
                id: 'guia_2',
                symbolName: 'guia_2'
            },
            {
                id: 'guia_3',
                symbolName: 'guia_3'
            }
            ]
        },
    states: {
        "Base State": {
            "${_guia_1}": [
                ["style", "left", '2px']
            ],
            "${_guia_2}": [
                ["style", "display", 'none']
            ],
            "${_cerrar_gray}": [
                ["style", "left", '1292px'],
                ["style", "top", '78px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_background}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_guia_3}": [
                ["style", "display", 'none']
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
                { id: "eid439", tween: [ "style", "${_guia_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid440", tween: [ "style", "${_guia_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" }            ]
        }
    }
},
"guia_1": {
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
                    rect: ['-2px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_1',
                    type: 'image',
                    clip: ['rect(101.75048828125px 1366px 678.39453125px 546.7451171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_1.png', '0px', '0px']
                },
                {
                    rect: ['-2px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_1Copy',
                    type: 'image',
                    clip: ['rect(448.352294921875px 451.98828125px 643.5927734375px 84.13623046875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_1.png', '0px', '0px']
                },
                {
                    rect: ['-2px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_1Copy4',
                    type: 'image',
                    clip: ['rect(385.66259765625px 451.98828125px 448.391845703125px 84.13623046875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_1.png', '0px', '0px']
                },
                {
                    rect: ['-2px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_1Copy2',
                    type: 'image',
                    clip: ['rect(175.6943359375px 370.89697265625px 371.73974609375px 162.24658203125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_1.png', '0px', '0px']
                },
                {
                    rect: ['-84px', '101px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_1Copy3',
                    type: 'image',
                    clip: ['rect(66.78955078125px 490.28369140625px 153.98046875px 400.1591796875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_1.png', '0px', '0px']
                },
                {
                    id: 'boton_next',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['1275px', '674px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'boton_next',
                symbolName: 'boton_next',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenido_1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [101.75048828125,1366,678.39453125,546.7451171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '293px']
            ],
            "${_contenido_1Copy4}": [
                ["style", "top", '72px'],
                ["style", "opacity", '0'],
                ["style", "clip", [385.66259765625,451.98828125,448.391845703125,84.13623046875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-2px']
            ],
            "${_contenido_1Copy}": [
                ["style", "top", '-19px'],
                ["style", "opacity", '0'],
                ["style", "clip", [448.352294921875,451.98828125,643.5927734375,84.13623046875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_contenido_1Copy3}": [
                ["style", "-webkit-transform-origin", [30.27,17.9], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [30.27,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [30.27,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [30.27,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [30.27,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [30.27,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.24952'],
                ["style", "top", '101px'],
                ["transform", "scaleX", '0.24952'],
                ["style", "opacity", '0'],
                ["style", "clip", [66.78955078125,490.28369140625,153.98046875,400.1591796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-84px']
            ],
            "${_boton_next}": [
                ["style", "top", '779px'],
                ["style", "left", '1275px'],
                ["style", "cursor", 'pointer']
            ],
            "${_contenido_1Copy2}": [
                ["style", "-webkit-transform-origin", [19.11,35.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [19.11,35.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [19.11,35.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [19.11,35.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [19.11,35.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [19.11,35.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.25449'],
                ["transform", "rotateZ", '-74deg'],
                ["transform", "scaleX", '0.25449'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "clip", [175.6943359375,370.89697265625,371.73974609375,162.24658203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid396", tween: [ "transform", "${_contenido_1Copy2}", "scaleX", '1', { fromValue: '0.25449'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid448", tween: [ "style", "${_boton_next}", "top", '674px', { fromValue: '779px'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid400", tween: [ "transform", "${_contenido_1Copy2}", "rotateZ", '0deg', { fromValue: '-74deg'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid408", tween: [ "style", "${_contenido_1Copy3}", "opacity", '1', { fromValue: '0'}], position: 141, duration: 500, easing: "easeOutBack" },
                { id: "eid410", tween: [ "style", "${_contenido_1Copy4}", "top", '0px', { fromValue: '72px'}], position: 250, duration: 638, easing: "easeOutBack" },
                { id: "eid406", tween: [ "transform", "${_contenido_1Copy3}", "scaleY", '1', { fromValue: '0.24952'}], position: 141, duration: 500, easing: "easeOutBack" },
                { id: "eid422", tween: [ "style", "${_contenido_1Copy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid412", tween: [ "style", "${_contenido_1Copy4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 638, easing: "easeOutBack" },
                { id: "eid424", tween: [ "style", "${_contenido_1}", "left", '-2px', { fromValue: '293px'}], position: 500, duration: 750, easing: "easeOutExpo" },
                { id: "eid418", tween: [ "style", "${_contenido_1Copy}", "opacity", '1', { fromValue: '0'}], position: 363, duration: 637, easing: "easeOutCirc" },
                { id: "eid416", tween: [ "style", "${_contenido_1Copy}", "top", '0px', { fromValue: '-19px'}], position: 363, duration: 637, easing: "easeOutBack" },
                { id: "eid404", tween: [ "transform", "${_contenido_1Copy3}", "scaleX", '1', { fromValue: '0.24952'}], position: 141, duration: 500, easing: "easeOutBack" },
                { id: "eid398", tween: [ "transform", "${_contenido_1Copy2}", "scaleY", '1', { fromValue: '0.25449'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid426", tween: [ "style", "${_contenido_1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeOutExpo" }            ]
        }
    }
},
"guia_2": {
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
                    rect: ['0px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_2',
                    type: 'image',
                    clip: ['rect(120.546875px 1366px 506.80126953125px 485.34814453125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_2Copy2',
                    type: 'image',
                    clip: ['rect(155.837890625px 414.8779296875px 379.58544921875px 151.59814453125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_2Copy3',
                    type: 'image',
                    clip: ['rect(393.678955078125px 449.927734375px 446.012939453125px 88.693359375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_2Copy4',
                    type: 'image',
                    clip: ['rect(447.379150390625px 449.927734375px 636.027099609375px 88.693359375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_2.png', '0px', '0px']
                },
                {
                    id: 'boton_next',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['1275px', '674px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'boton_back',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['1179px', '674px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'boton_back',
                symbolName: 'boton_back',
                autoPlay: {

               }
            },
            {
                id: 'boton_next',
                symbolName: 'boton_next',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenido_2}": [
                ["style", "top", '0px'],
                ["style", "left", '879px'],
                ["style", "clip", [120.546875,1366,506.80126953125,485.34814453125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido_2Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [155.837890625,414.8779296875,379.58544921875,151.59814453125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '772px'],
                ["style", "width", '1366px']
            ],
            "${_boton_back}": [
                ["style", "top", '779px'],
                ["style", "left", '1179px'],
                ["style", "cursor", 'pointer']
            ],
            "${_contenido_2Copy4}": [
                ["style", "top", '-43px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [447.379150390625,449.927734375,636.027099609375,88.693359375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_boton_next}": [
                ["style", "top", '779px'],
                ["style", "left", '1275px'],
                ["style", "cursor", 'pointer']
            ],
            "${_contenido_2Copy3}": [
                ["style", "top", '63px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [393.678955078125,449.927734375,446.012939453125,88.693359375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid428", tween: [ "style", "${_contenido_2}", "left", '0px', { fromValue: '879px'}], position: 250, duration: 750, easing: "easeOutExpo" },
                { id: "eid438", tween: [ "style", "${_contenido_2Copy4}", "opacity", '1', { fromValue: '0'}], position: 66, duration: 500, easing: "easeOutBack" },
                { id: "eid436", tween: [ "style", "${_contenido_2Copy4}", "top", '0px', { fromValue: '-43px'}], position: 66, duration: 500, easing: "easeOutBack" },
                { id: "eid434", tween: [ "style", "${_contenido_2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid460", tween: [ "style", "${_boton_next}", "top", '674px', { fromValue: '779px'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid432", tween: [ "style", "${_contenido_2Copy3}", "top", '0px', { fromValue: '63px'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid459", tween: [ "style", "${_boton_back}", "top", '674px', { fromValue: '779px'}], position: 0, duration: 0, easing: "easeOutBack" }            ]
        }
    }
},
"guia_3": {
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
                    rect: ['0px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_2',
                    type: 'image',
                    clip: ['rect(92.073974609375px 1366px 715.998779296875px 485.34814453125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_3.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_2Copy2',
                    type: 'image',
                    clip: ['rect(155.837890625px 414.8779296875px 379.58544921875px 151.59814453125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_2Copy3',
                    type: 'image',
                    clip: ['rect(393.678955078125px 449.927734375px 446.012939453125px 88.693359375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_3.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '772px', 'auto', 'auto'],
                    id: 'contenido_2Copy4',
                    type: 'image',
                    clip: ['rect(447.379150390625px 449.927734375px 677.568359375px 88.693359375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido_3.png', '0px', '0px']
                },
                {
                    id: 'boton_back',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['1179px', '674px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'boton_back',
                symbolName: 'boton_back',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_contenido_2}": [
                ["style", "top", '0px'],
                ["style", "left", '879px'],
                ["style", "clip", [92.073974609375,1366,715.998779296875,485.34814453125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '772px'],
                ["style", "width", '1366px']
            ],
            "${_boton_back}": [
                ["style", "top", '779px'],
                ["style", "left", '1179px'],
                ["style", "cursor", 'pointer']
            ],
            "${_contenido_2Copy4}": [
                ["style", "top", '-43px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [447.379150390625,449.927734375,677.568359375,88.693359375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido_2Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [155.837890625,414.8779296875,379.58544921875,151.59814453125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido_2Copy3}": [
                ["style", "top", '63px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [393.678955078125,449.927734375,446.012939453125,88.693359375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid428", tween: [ "style", "${_contenido_2}", "left", '0px', { fromValue: '879px'}], position: 250, duration: 750, easing: "easeOutExpo" },
                { id: "eid438", tween: [ "style", "${_contenido_2Copy4}", "opacity", '1', { fromValue: '0'}], position: 66, duration: 500, easing: "easeOutBack" },
                { id: "eid436", tween: [ "style", "${_contenido_2Copy4}", "top", '0px', { fromValue: '-43px'}], position: 66, duration: 500, easing: "easeOutBack" },
                { id: "eid434", tween: [ "style", "${_contenido_2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid432", tween: [ "style", "${_contenido_2Copy3}", "top", '0px', { fromValue: '63px'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid455", tween: [ "style", "${_boton_back}", "top", '674px', { fromValue: '779px'}], position: 0, duration: 0, easing: "easeOutBack" }            ]
        }
    }
},
"boton_next": {
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
                    rect: ['-96px', '0px', '176px', '158px', 'auto', 'auto'],
                    type: 'image',
                    id: 'flechas',
                    display: 'none',
                    clip: ['rect(0px 176px 78.87353515625px 95.73828125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/flechas.png', '0px', '0px']
                },
                {
                    rect: ['-96px', '-78px', '176px', '158px', 'auto', 'auto'],
                    type: 'image',
                    id: 'flechasCopy',
                    display: 'block',
                    clip: ['rect(78.181640625px 176px 158.6533203125px 91.5341796875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/flechas.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '80px']
            ],
            "${_flechas}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '-96px'],
                ["style", "clip", [0,176,78.87353515625,95.73828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_flechasCopy}": [
                ["style", "top", '-78px'],
                ["style", "display", 'block'],
                ["style", "left", '-96px'],
                ["style", "clip", [78.181640625,176,158.6533203125,91.5341796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "up": 0,
                "down": 500
            },
            timeline: [
                { id: "eid441", tween: [ "style", "${_flechasCopy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid442", tween: [ "style", "${_flechas}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid443", tween: [ "style", "${_flechas}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" }            ]
        }
    }
},
"boton_back": {
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
                    rect: ['0px', '-78px', '176px', '158px', 'auto', 'auto'],
                    type: 'image',
                    id: 'flechasCopy',
                    display: 'block',
                    clip: ['rect(78.181640625px 84.771484375px 158.6533203125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/flechas.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '176px', '158px', 'auto', 'auto'],
                    type: 'image',
                    id: 'flechas',
                    display: 'none',
                    clip: ['rect(0px 84.50146484375px 78.87353515625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/flechas.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flechasCopy}": [
                ["style", "top", '-78px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "clip", [78.181640625,84.771484375,158.6533203125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_flechas}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [0,84.50146484375,78.87353515625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '80px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "up": 0,
                "down": 500
            },
            timeline: [
                { id: "eid446", tween: [ "style", "${_flechasCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid444", tween: [ "style", "${_flechasCopy}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid445", tween: [ "style", "${_flechas}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" }            ]
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
