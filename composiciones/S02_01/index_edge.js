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
                id: 's02_4',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['748', '428','320px','45px','auto', 'auto'],
                source: ['media/s02_4.mp3'],
                preload: 'auto'
            },
            {
                id: 's02_3',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['1074', '305','320px','45px','auto', 'auto'],
                source: ['media/s02_3.mp3'],
                preload: 'auto'
            },
            {
                id: 's02_2',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['520', '188','320px','45px','auto', 'auto'],
                source: ['media/s02_2.mp3'],
                preload: 'auto'
            },
            {
                id: 's02_1',
                type: 'audio',
                tag: 'audio',
                rect: ['54', '520','320px','45px','auto', 'auto'],
                source: ['media/s02_1.mp3'],
                preload: 'auto'
            },
            {
                id: 's02_02_7',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s02_02_7.png",'0px','0px']
            },
            {
                id: 's02_02_1',
                type: 'image',
                rect: ['796px', '105px','555px','165px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s02_02_1.png",'0px','0px']
            },
            {
                id: 'btn_1',
                type: 'rect',
                rect: ['25px', '535','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_2',
                type: 'rect',
                rect: ['456px', '535px','auto','auto','auto', 'auto']
            },
            {
                id: 'btn_3',
                type: 'rect',
                rect: ['882px', '535px','auto','auto','auto', 'auto']
            },
            {
                id: 'brillo_1',
                display: 'none',
                type: 'rect',
                rect: ['43', '544','auto','auto','auto', 'auto']
            },
            {
                id: 'brillo_2',
                display: 'none',
                type: 'rect',
                rect: ['473px', '543px','auto','auto','auto', 'auto']
            },
            {
                id: 'brillo_3',
                display: 'none',
                type: 'rect',
                rect: ['900px', '544px','auto','auto','auto', 'auto']
            },
            {
                id: 'hotspot_1',
                type: 'rect',
                rect: ['44px', '544px','413px','107px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(39,193,202,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotspot_2',
                type: 'rect',
                rect: ['473px', '543px','413px','107px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(39,193,202,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotspot_3',
                display: 'none',
                type: 'rect',
                rect: ['900px', '543px','413px','107px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(39,193,202,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 's02_02_3',
                type: 'image',
                rect: ['0px', '280px','1366px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s02_02_3.png",'0px','0px']
            },
            {
                id: 'bt_audio',
                type: 'rect',
                rect: ['725px', '100px','auto','auto','auto', 'auto'],
                title: 's02_1',
                transform: [[],[],[],['0.60526','0.60526']]
            },
            {
                id: 'robot',
                type: 'rect',
                rect: ['-733px', '-1080px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['-0.15286','0.15748']]
            },
            {
                id: 'pop_1',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'pop_2',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'pop_3',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'pop_instruccion',
                type: 'rect',
                rect: ['-5', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'bt_audio_2',
                display: 'none',
                type: 'rect',
                rect: ['1109px', '460px','auto','auto','auto', 'auto'],
                title: 's02_2',
                transform: [[],[],[],['0.60526','0.60526']]
            },
            {
                id: 'bt_audio_3',
                display: 'none',
                type: 'rect',
                rect: ['1109px', '460px','auto','auto','auto', 'auto'],
                title: 's02_3',
                transform: [[],[],[],['0.60526','0.60526']]
            },
            {
                id: 'bt_audio_4',
                display: 'none',
                type: 'rect',
                rect: ['1109px', '460px','auto','auto','auto', 'auto'],
                title: 's02_4',
                transform: [[],[],[],['0.60526','0.60526']]
            }],
            symbolInstances: [
            {
                id: 'robot',
                symbolName: 'robot',
                autoPlay: {

                }
            },
            {
                id: 'btn_3',
                symbolName: 'btn_3',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio_2',
                symbolName: 'bt_audio'
            },
            {
                id: 'brillo_3',
                symbolName: 'brillo_1',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio_4',
                symbolName: 'bt_audio'
            },
            {
                id: 'pop_3',
                symbolName: 'pop_3',
                autoPlay: {

                }
            },
            {
                id: 'pop_1',
                symbolName: 'pop_1',
                autoPlay: {

                }
            },
            {
                id: 'btn_1',
                symbolName: 'btn_1',
                autoPlay: {

                }
            },
            {
                id: 'pop_instruccion',
                symbolName: 'pop_instruccion',
                autoPlay: {

                }
            },
            {
                id: 'btn_2',
                symbolName: 'btn_2',
                autoPlay: {

                }
            },
            {
                id: 'brillo_1',
                symbolName: 'brillo_1',
                autoPlay: {

                }
            },
            {
                id: 'brillo_2',
                symbolName: 'brillo_1',
                autoPlay: {

                }
            },
            {
                id: 'pop_2',
                symbolName: 'pop_2',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio_3',
                symbolName: 'bt_audio'
            }
            ]
        },
    states: {
        "Base State": {
            "${_btn_2}": [
                ["style", "left", '456px'],
                ["style", "top", '775px']
            ],
            "${_bt_audio_4}": [
                ["style", "top", '460px'],
                ["transform", "scaleY", '0.60526'],
                ["transform", "scaleX", '0.60526'],
                ["style", "left", '1109px'],
                ["style", "display", 'none']
            ],
            "${_hotspot_2}": [
                ["style", "top", '543px'],
                ["style", "left", '473px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(39,193,202,0.00)']
            ],
            "${_s02_02_1}": [
                ["style", "left", '1372px'],
                ["style", "top", '105px']
            ],
            "${_hotspot_3}": [
                ["style", "top", '543px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '900px'],
                ["color", "background-color", 'rgba(39,193,202,0.00)']
            ],
            "${_s02_02_3}": [
                ["style", "top", '280px'],
                ["style", "left", '0px'],
                ["style", "background-position", [-1373.8515625,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_robot}": [
                ["style", "top", '-1080px'],
                ["style", "left", '-1117px'],
                ["transform", "scaleY", '0.15748'],
                ["transform", "scaleX", '-0.15286']
            ],
            "${_bt_audio}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '0.60526'],
                ["transform", "scaleX", '0.60526'],
                ["style", "opacity", '0'],
                ["style", "left", '864px']
            ],
            "${_bt_audio_2}": [
                ["style", "top", '460px'],
                ["transform", "scaleY", '0.60526'],
                ["transform", "scaleX", '0.60526'],
                ["style", "left", '1109px'],
                ["style", "display", 'none']
            ],
            "${_bt_audio_3}": [
                ["style", "top", '460px'],
                ["transform", "scaleY", '0.60526'],
                ["transform", "scaleX", '0.60526'],
                ["style", "left", '1109px'],
                ["style", "display", 'none']
            ],
            "${_s02_02_7}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_hotspot_1}": [
                ["color", "background-color", 'rgba(39,193,202,0.00)'],
                ["style", "cursor", 'pointer']
            ],
            "${_btn_1}": [
                ["style", "left", '25px'],
                ["style", "top", '775px']
            ],
            "${_brillo_3}": [
                ["style", "top", '544px'],
                ["style", "left", '900px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_btn_3}": [
                ["style", "left", '882px'],
                ["style", "top", '775px']
            ],
            "${_brillo_2}": [
                ["style", "top", '543px'],
                ["style", "left", '473px'],
                ["style", "display", 'none']
            ],
            "${_brillo_1}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 49439,
            autoPlay: true,
            timeline: [
                { id: "eid481", tween: [ "style", "${_bt_audio_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid485", tween: [ "style", "${_bt_audio}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid434", tween: [ "style", "${_brillo_1}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeOutCirc" },
                { id: "eid412", tween: [ "style", "${_btn_1}", "top", '535px', { fromValue: '775px'}], position: 1000, duration: 1000, easing: "easeOutBack" },
                { id: "eid401", tween: [ "style", "${_robot}", "left", '-751px', { fromValue: '-1117px'}], position: 500, duration: 1000, easing: "easeOutCirc" },
                { id: "eid442", tween: [ "style", "${_hotspot_3}", "display", 'block', { fromValue: 'none'}], position: 1301, duration: 0, easing: "easeOutCirc" },
                { id: "eid436", tween: [ "style", "${_brillo_3}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeOutCirc" },
                { id: "eid480", tween: [ "style", "${_bt_audio_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid479", tween: [ "style", "${_bt_audio_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid414", tween: [ "style", "${_btn_2}", "top", '535px', { fromValue: '775px'}], position: 1071, duration: 1000, easing: "easeOutBack" },
                { id: "eid407", tween: [ "style", "${_s02_02_1}", "left", '796px', { fromValue: '1372px'}], position: 71, duration: 1000, easing: "easeOutCirc" },
                { id: "eid405", tween: [ "style", "${_s02_02_3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1373.8515625,0]}], position: 250, duration: 1000, easing: "easeOutCirc" },
                { id: "eid416", tween: [ "style", "${_btn_3}", "top", '535px', { fromValue: '775px'}], position: 1146, duration: 1000, easing: "easeOutBack" },
                { id: "eid435", tween: [ "style", "${_brillo_2}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeOutCirc" },
                { id: "eid483", tween: [ "style", "${_bt_audio}", "left", '725px', { fromValue: '864px'}], position: 1000, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"btn_1": {
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
                    type: 'image',
                    rect: ['0px', '0px', '1311px', '258px', 'auto', 'auto'],
                    display: 'block',
                    id: 's02_02_2',
                    clip: ['rect(0px 442.4921875px 130.1875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '0px', '1311px', '258px', 'auto', 'auto'],
                    display: 'none',
                    id: 's02_02_2Copy',
                    clip: ['rect(0px 442.4921875px 130.1875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_2.png', '0px', '-128.03125px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s02_02_2}": [
                ["style", "display", 'block'],
                ["style", "clip", [0,442.4921875,130.1875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_s02_02_2Copy}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,442.4921875,130.1875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "background-position", [-0.4921875,-131.9140625], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '440px']
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
                { id: "eid409", tween: [ "style", "${_s02_02_2Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
                { id: "eid408", tween: [ "style", "${_s02_02_2Copy}", "background-position", [-0.4921875,-131.9140625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-0.4921875,-131.9140625]}], position: 0, duration: 0, easing: "easeOutCirc" },
                { id: "eid410", tween: [ "style", "${_s02_02_2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutCirc" }            ]
        }
    }
},
"robot": {
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
                    rect: ['66px', '-255px', '5760px', '3240px', 'auto', 'auto'],
                    id: 'sombraCopy',
                    type: 'image',
                    clip: ['rect(2570px 1290px 2740px 750px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '0px', '0px']
                },
                {
                    id: 'robot_conpes',
                    type: 'rect',
                    clip: ['rect(0px 4010px 3240px 1390.908203125px)'],
                    rect: ['-1764px', '-255px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'robot_cabeza',
                    type: 'rect',
                    rect: ['2002', '422px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'robot_cabeza',
                symbolName: 'robot_cabeza',
                autoPlay: {

               }
            },
            {
                id: 'robot_conpes',
                symbolName: 'robot_conpes',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sombraCopy}": [
                ["style", "top", '-255px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '66px'],
                ["style", "clip", [2570,1290,2740,750], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [17.72,82.22], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '2663px'],
                ["style", "width", '1905px']
            ],
            "${_robot_cabeza}": [
                ["style", "-webkit-transform-origin", [48.51,91.48], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '154px'],
                ["style", "left", '261px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_robot_conpes}": [
                ["style", "-webkit-transform-origin", [45.07,46.44], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-1755px'],
                ["style", "clip", [0,4010,3240,1390.908203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20000,
            autoPlay: true,
            timeline: [
                { id: "eid204", tween: [ "style", "${_robot_cabeza}", "left", '-18px', { fromValue: '261px'}], position: 0, duration: 1500, easing: "easeOutBack" },
                { id: "eid208", tween: [ "style", "${_robot_cabeza}", "left", '306px', { fromValue: '-18px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid213", tween: [ "style", "${_robot_cabeza}", "left", '-32px', { fromValue: '306px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid251", tween: [ "style", "${_robot_cabeza}", "left", '-66px', { fromValue: '-32px'}], position: 8500, duration: 500, easing: "easeOutBack" },
                { id: "eid250", tween: [ "style", "${_robot_cabeza}", "left", '511px', { fromValue: '-66px'}], position: 9000, duration: 1000, easing: "easeOutBack" },
                { id: "eid249", tween: [ "style", "${_robot_cabeza}", "left", '261px', { fromValue: '511px'}], position: 10000, duration: 1500, easing: "easeOutBack" },
                { id: "eid423", tween: [ "style", "${_robot_cabeza}", "left", '261px', { fromValue: '261px'}], position: 11500, duration: 0, easing: "easeOutBack" },
                { id: "eid200", tween: [ "style", "${_robot_conpes}", "left", '-2093px', { fromValue: '-1755px'}], position: 0, duration: 1500, easing: "easeOutBack" },
                { id: "eid215", tween: [ "style", "${_robot_conpes}", "left", '-1773px', { fromValue: '-2093px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid395", tween: [ "style", "${_robot_conpes}", "left", '-2002px', { fromValue: '-1773px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid256", tween: [ "style", "${_robot_conpes}", "left", '-2040px', { fromValue: '-2002px'}], position: 8500, duration: 500, easing: "easeOutBack" },
                { id: "eid396", tween: [ "style", "${_robot_conpes}", "left", '-1564px', { fromValue: '-2040px'}], position: 9000, duration: 1000, easing: "easeOutBack" },
                { id: "eid255", tween: [ "style", "${_robot_conpes}", "left", '-1755px', { fromValue: '-1564px'}], position: 10000, duration: 1500, easing: "easeOutBack" },
                { id: "eid427", tween: [ "style", "${_robot_conpes}", "left", '-1755px', { fromValue: '-1755px'}], position: 11500, duration: 0, easing: "easeOutBack" },
                { id: "eid209", tween: [ "style", "${_robot_cabeza}", "top", '145px', { fromValue: '154px'}], position: 0, duration: 2500, easing: "easeOutBack" },
                { id: "eid214", tween: [ "style", "${_robot_cabeza}", "top", '136px', { fromValue: '145px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid248", tween: [ "style", "${_robot_cabeza}", "top", '145px', { fromValue: '136px'}], position: 8500, duration: 500, easing: "easeOutBack" },
                { id: "eid247", tween: [ "style", "${_robot_cabeza}", "top", '154px', { fromValue: '145px'}], position: 9000, duration: 2500, easing: "easeOutBack" },
                { id: "eid422", tween: [ "style", "${_robot_cabeza}", "top", '154px', { fromValue: '154px'}], position: 11500, duration: 0, easing: "easeOutBack" },
                { id: "eid216", tween: [ "style", "${_sombraCopy}", "left", '-618px', { fromValue: '66px'}], position: 0, duration: 1500, easing: "easeOutBack" },
                { id: "eid220", tween: [ "style", "${_sombraCopy}", "left", '134px', { fromValue: '-618px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid221", tween: [ "style", "${_sombraCopy}", "left", '-204px', { fromValue: '134px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid262", tween: [ "style", "${_sombraCopy}", "left", '-238px', { fromValue: '-204px'}], position: 8500, duration: 500, easing: "easeOutBack" },
                { id: "eid261", tween: [ "style", "${_sombraCopy}", "left", '-89px', { fromValue: '-238px'}], position: 9000, duration: 1000, easing: "easeOutBack" },
                { id: "eid260", tween: [ "style", "${_sombraCopy}", "left", '66px', { fromValue: '-89px'}], position: 10000, duration: 1500, easing: "easeOutBack" },
                { id: "eid429", tween: [ "style", "${_sombraCopy}", "left", '66px', { fromValue: '66px'}], position: 11500, duration: 0, easing: "easeOutBack" },
                { id: "eid245", tween: [ "transform", "${_sombraCopy}", "scaleX", '0.81435', { fromValue: '1'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid246", tween: [ "transform", "${_sombraCopy}", "scaleX", '1', { fromValue: '0.81435'}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid264", tween: [ "transform", "${_sombraCopy}", "scaleX", '0.81435', { fromValue: '1'}], position: 10000, duration: 750, easing: "easeOutBack" },
                { id: "eid263", tween: [ "transform", "${_sombraCopy}", "scaleX", '1', { fromValue: '0.81435'}], position: 10750, duration: 750, easing: "easeOutBack" },
                { id: "eid430", tween: [ "transform", "${_sombraCopy}", "scaleX", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutBack" },
                { id: "eid205", tween: [ "transform", "${_robot_cabeza}", "rotateZ", '13deg', { fromValue: '0deg'}], position: 0, duration: 1500, easing: "easeOutBack" },
                { id: "eid206", tween: [ "transform", "${_robot_cabeza}", "rotateZ", '-3deg', { fromValue: '13deg'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid207", tween: [ "transform", "${_robot_cabeza}", "rotateZ", '-6deg', { fromValue: '-3deg'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid254", tween: [ "transform", "${_robot_cabeza}", "rotateZ", '-3deg', { fromValue: '-6deg'}], position: 8500, duration: 500, easing: "easeOutBack" },
                { id: "eid253", tween: [ "transform", "${_robot_cabeza}", "rotateZ", '13deg', { fromValue: '-3deg'}], position: 9000, duration: 1000, easing: "easeOutBack" },
                { id: "eid252", tween: [ "transform", "${_robot_cabeza}", "rotateZ", '0deg', { fromValue: '13deg'}], position: 10000, duration: 1500, easing: "easeOutBack" },
                { id: "eid424", tween: [ "transform", "${_robot_cabeza}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 11500, duration: 0, easing: "easeOutBack" },
                { id: "eid201", tween: [ "transform", "${_robot_conpes}", "rotateZ", '13deg', { fromValue: '0deg'}], position: 0, duration: 1500, easing: "easeOutBack" },
                { id: "eid202", tween: [ "transform", "${_robot_conpes}", "rotateZ", '-3deg', { fromValue: '13deg'}], position: 1500, duration: 1000, easing: "easeOutBack" },
                { id: "eid203", tween: [ "transform", "${_robot_conpes}", "rotateZ", '-2deg', { fromValue: '-3deg'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid259", tween: [ "transform", "${_robot_conpes}", "rotateZ", '-3deg', { fromValue: '-2deg'}], position: 8500, duration: 500, easing: "easeOutBack" },
                { id: "eid258", tween: [ "transform", "${_robot_conpes}", "rotateZ", '13deg', { fromValue: '-3deg'}], position: 9000, duration: 1000, easing: "easeOutBack" },
                { id: "eid257", tween: [ "transform", "${_robot_conpes}", "rotateZ", '0deg', { fromValue: '13deg'}], position: 10000, duration: 1500, easing: "easeOutBack" },
                { id: "eid428", tween: [ "transform", "${_robot_conpes}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 11500, duration: 0, easing: "easeOutBack" }            ]
        }
    }
},
"robot_conpes": {
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
                    rect: ['-2716px', '1112px', '5760px', '3240px', 'auto', 'auto'],
                    type: 'image',
                    id: 'brazo_izq1',
                    display: 'block',
                    clip: ['rect(280px 5170px 700px 4100px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['-2268px', '-757px', '5760px', '3240px', 'auto', 'auto'],
                    transform: [[0, 0], ['32']],
                    id: 'brazo_izq2',
                    display: 'none',
                    clip: ['rect(2270px 4790px 3050px 3960px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '0px', '0px']
                },
                {
                    rect: ['1830px', '0px', '5760px', '3240px', 'auto', 'auto'],
                    id: 'tronco',
                    type: 'image',
                    clip: ['rect(1340px 1340px 2530px 380px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '0px', '0px']
                },
                {
                    rect: ['-1771px', '272px', '5760px', '3240px', 'auto', 'auto'],
                    type: 'image',
                    id: 'brazo_der1',
                    display: 'block',
                    clip: ['rect(1120px 5720px 1500px 4761.87890625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '0px', '0px']
                },
                {
                    rect: ['-2216px', '-701px', '5760px', '3240px', 'auto', 'auto'],
                    type: 'image',
                    id: 'brazo_der2',
                    display: 'none',
                    clip: ['rect(2160px 5560px 2970px 5080px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '0px', '0px']
                },
                {
                    rect: ['-1004px', '528px', '5760px', '3240px', 'auto', 'auto'],
                    id: 'manga',
                    type: 'image',
                    clip: ['rect(970px 4217.8916015625px 1260.6904296875px 3880.71875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '-348.2421875px', '-706.93041992188px']
                },
                {
                    id: 'escudo',
                    type: 'rect',
                    rect: ['2450', '1558', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'escudo',
                symbolName: 'escudo',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_brazo_der1}": [
                ["style", "-webkit-transform-origin", [84.34,41.71], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "clip", [1120,5720,1500,5220.9697265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-2230px'],
                ["style", "top", '272px']
            ],
            "${_brazo_der2}": [
                ["style", "top", '-592px'],
                ["transform", "rotateZ", '-91deg'],
                ["style", "display", 'none'],
                ["style", "left", '-2548px'],
                ["style", "clip", [2628.903564453125,5560,2970,5080], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [91.84,71.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_manga}": [
                ["style", "-webkit-transform-origin", [80.03,73.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [970,4217.8916015625,1260.6904296875,3880.71875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '528px'],
                ["style", "background-position", [-348.2421875,-706.93041992188], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-1004px']
            ],
            "${symbolSelector}": [
                ["style", "height", '3240px'],
                ["style", "width", '5760px']
            ],
            "${_brazo_izq1}": [
                ["style", "top", '1112px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '-2052px'],
                ["style", "clip", [280,4360.9091796875,700,4100], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [87.67,16.05], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_brazo_izq2}": [
                ["style", "-webkit-transform-origin", [80.03,73.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '32deg'],
                ["style", "display", 'none'],
                ["style", "top", '-962px'],
                ["style", "clip", [2432.854736328125,4790,3050,3960], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1795px']
            ],
            "${_tronco}": [
                ["style", "-webkit-transform-origin", [13.54,45.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "clip", [1340,1340,2530,380], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1830px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20000,
            autoPlay: true,
            timeline: [
                { id: "eid48", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 750, duration: 750, easing: "swing" },
                { id: "eid49", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-3deg', { fromValue: '-9deg'}], position: 1500, duration: 250, easing: "swing" },
                { id: "eid50", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-7deg', { fromValue: '-3deg'}], position: 1750, duration: 250, easing: "swing" },
                { id: "eid51", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-4deg', { fromValue: '-7deg'}], position: 2000, duration: 250, easing: "swing" },
                { id: "eid52", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-13deg', { fromValue: '-4deg'}], position: 2250, duration: 500, easing: "swing" },
                { id: "eid53", tween: [ "transform", "${_brazo_der1}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 2750, duration: 750, easing: "swing" },
                { id: "eid83", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 12750, duration: 750, easing: "swing" },
                { id: "eid82", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-4deg', { fromValue: '-13deg'}], position: 13500, duration: 500, easing: "swing" },
                { id: "eid81", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-7deg', { fromValue: '-4deg'}], position: 14000, duration: 250, easing: "swing" },
                { id: "eid80", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-3deg', { fromValue: '-7deg'}], position: 14250, duration: 250, easing: "swing" },
                { id: "eid79", tween: [ "transform", "${_brazo_der1}", "rotateZ", '-9deg', { fromValue: '-3deg'}], position: 14500, duration: 250, easing: "swing" },
                { id: "eid78", tween: [ "transform", "${_brazo_der1}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 14750, duration: 750, easing: "swing" },
                { id: "eid45", tween: [ "style", "${_brazo_der1}", "left", '-1771px', { fromValue: '-2230px'}], position: 0, duration: 750, easing: "swing" },
                { id: "eid54", tween: [ "style", "${_brazo_der1}", "left", '-2230px', { fromValue: '-1771px'}], position: 3500, duration: 750, easing: "swing" },
                { id: "eid59", tween: [ "style", "${_brazo_der1}", "left", '-2612px', { fromValue: '-2230px'}], position: 4250, duration: 500, easing: "swing" },
                { id: "eid74", tween: [ "style", "${_brazo_der1}", "left", '-2230px', { fromValue: '-2612px'}], position: 11500, duration: 500, easing: "swing" },
                { id: "eid73", tween: [ "style", "${_brazo_der1}", "left", '-1771px', { fromValue: '-2230px'}], position: 12000, duration: 750, easing: "swing" },
                { id: "eid72", tween: [ "style", "${_brazo_der1}", "left", '-2230px', { fromValue: '-1771px'}], position: 17250, duration: 750, easing: "swing" },
                { id: "eid57", tween: [ "style", "${_brazo_der2}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0, easing: "swing" },
                { id: "eid84", tween: [ "style", "${_brazo_der2}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0, easing: "swing" },
                { id: "eid145", tween: [ "style", "${_brazo_izq2}", "top", '-843px', { fromValue: '-962px'}], position: 5000, duration: 81, easing: "swing" },
                { id: "eid160", tween: [ "style", "${_brazo_izq2}", "top", '-776px', { fromValue: '-843px'}], position: 5081, duration: 77, easing: "swing" },
                { id: "eid159", tween: [ "style", "${_brazo_izq2}", "top", '-757px', { fromValue: '-776px'}], position: 5158, duration: 92, easing: "swing" },
                { id: "eid162", tween: [ "style", "${_brazo_izq2}", "top", '-753px', { fromValue: '-757px'}], position: 5378, duration: 372, easing: "swing" },
                { id: "eid172", tween: [ "style", "${_brazo_izq2}", "top", '-776px', { fromValue: '-757px'}], position: 11000, duration: 92, easing: "swing" },
                { id: "eid171", tween: [ "style", "${_brazo_izq2}", "top", '-843px', { fromValue: '-776px'}], position: 11092, duration: 77, easing: "swing" },
                { id: "eid170", tween: [ "style", "${_brazo_izq2}", "top", '-962px', { fromValue: '-843px'}], position: 11169, duration: 81, easing: "swing" },
                { id: "eid91", tween: [ "style", "${_brazo_der2}", "clip", [2376.044677734375,5560,2970,5160.58935546875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2628.903564453125,5560,2970,5080]}], position: 4750, duration: 250, easing: "swing" },
                { id: "eid92", tween: [ "style", "${_brazo_der2}", "clip", [2362.450439453125,5560,2970,5175.912109375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2376.044677734375,5560,2970,5160.58935546875]}], position: 5000, duration: 13, easing: "swing" },
                { id: "eid195", tween: [ "style", "${_brazo_der2}", "clip", [2247.782470703125,5560,2970,5165.015625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2362.450439453125,5560,2970,5175.912109375]}], position: 5013, duration: 68, easing: "swing" },
                { id: "eid100", tween: [ "style", "${_brazo_der2}", "clip", [2160,5560,2970,5175.4541015625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2247.782470703125,5560,2970,5165.015625]}], position: 5081, duration: 419, easing: "swing" },
                { id: "eid110", tween: [ "style", "${_brazo_der2}", "clip", [2247.782470703125,5560,2970,5165.015625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2160,5560,2970,5175.4541015625]}], position: 10750, duration: 419, easing: "swing" },
                { id: "eid109", tween: [ "style", "${_brazo_der2}", "clip", [2347.233154296875,5560,2970,5179.3525390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2247.782470703125,5560,2970,5165.015625]}], position: 11169, duration: 21, easing: "swing" },
                { id: "eid125", tween: [ "style", "${_brazo_der2}", "clip", [2369.125244140625,5560,2970,5161.615234375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2347.233154296875,5560,2970,5179.3525390625]}], position: 11190, duration: 21, easing: "swing" },
                { id: "eid121", tween: [ "style", "${_brazo_der2}", "clip", [2376.044677734375,5560,2970,5160.58935546875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2369.125244140625,5560,2970,5161.615234375]}], position: 11211, duration: 39, easing: "swing" },
                { id: "eid108", tween: [ "style", "${_brazo_der2}", "clip", [2628.903564453125,5560,2970,5080], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2376.044677734375,5560,2970,5160.58935546875]}], position: 11250, duration: 250, easing: "swing" },
                { id: "eid157", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '47deg', { fromValue: '32deg'}], position: 5000, duration: 81, easing: "swing" },
                { id: "eid158", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '54deg', { fromValue: '47deg'}], position: 5081, duration: 77, easing: "swing" },
                { id: "eid161", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '96deg', { fromValue: '54deg'}], position: 5378, duration: 372, easing: "swing" },
                { id: "eid163", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '80deg', { fromValue: '96deg'}], position: 5750, duration: 250, easing: "swing" },
                { id: "eid164", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '90deg', { fromValue: '80deg'}], position: 6000, duration: 250, easing: "swing" },
                { id: "eid165", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '58deg', { fromValue: '90deg'}], position: 6250, duration: 250, easing: "swing" },
                { id: "eid167", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '54deg', { fromValue: '58deg'}], position: 7198, duration: 1052, easing: "swing" },
                { id: "eid168", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '63deg', { fromValue: '54deg'}], position: 8250, duration: 1250, easing: "swing" },
                { id: "eid169", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '54deg', { fromValue: '63deg'}], position: 9500, duration: 1000, easing: "swing" },
                { id: "eid174", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '47deg', { fromValue: '54deg'}], position: 11092, duration: 77, easing: "swing" },
                { id: "eid173", tween: [ "transform", "${_brazo_izq2}", "rotateZ", '32deg', { fromValue: '47deg'}], position: 11169, duration: 81, easing: "swing" },
                { id: "eid150", tween: [ "style", "${_brazo_izq2}", "left", '-2013px', { fromValue: '-1795px'}], position: 4750, duration: 250, easing: "swing" },
                { id: "eid143", tween: [ "style", "${_brazo_izq2}", "left", '-2268px', { fromValue: '-2013px'}], position: 5000, duration: 250, easing: "swing" },
                { id: "eid182", tween: [ "style", "${_brazo_izq2}", "left", '-2013px', { fromValue: '-2268px'}], position: 11000, duration: 250, easing: "swing" },
                { id: "eid181", tween: [ "style", "${_brazo_izq2}", "left", '-1795px', { fromValue: '-2013px'}], position: 11250, duration: 250, easing: "swing" },
                { id: "eid151", tween: [ "style", "${_brazo_izq2}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0, easing: "swing" },
                { id: "eid194", tween: [ "style", "${_brazo_izq2}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0, easing: "swing" },
                { id: "eid87", tween: [ "style", "${_brazo_der2}", "left", '-2362px', { fromValue: '-2548px'}], position: 4750, duration: 250, easing: "swing" },
                { id: "eid97", tween: [ "style", "${_brazo_der2}", "left", '-2239px', { fromValue: '-2362px'}], position: 5000, duration: 81, easing: "swing" },
                { id: "eid99", tween: [ "style", "${_brazo_der2}", "left", '-2260px', { fromValue: '-2239px'}], position: 5081, duration: 77, easing: "swing" },
                { id: "eid95", tween: [ "style", "${_brazo_der2}", "left", '-2216px', { fromValue: '-2260px'}], position: 5158, duration: 342, easing: "swing" },
                { id: "eid114", tween: [ "style", "${_brazo_der2}", "left", '-2260px', { fromValue: '-2216px'}], position: 10750, duration: 342, easing: "swing" },
                { id: "eid113", tween: [ "style", "${_brazo_der2}", "left", '-2239px', { fromValue: '-2260px'}], position: 11092, duration: 77, easing: "swing" },
                { id: "eid112", tween: [ "style", "${_brazo_der2}", "left", '-2297px', { fromValue: '-2239px'}], position: 11169, duration: 21, easing: "swing" },
                { id: "eid123", tween: [ "style", "${_brazo_der2}", "left", '-2323px', { fromValue: '-2297px'}], position: 11190, duration: 21, easing: "swing" },
                { id: "eid118", tween: [ "style", "${_brazo_der2}", "left", '-2362px', { fromValue: '-2323px'}], position: 11211, duration: 39, easing: "swing" },
                { id: "eid111", tween: [ "style", "${_brazo_der2}", "left", '-2548px', { fromValue: '-2362px'}], position: 11250, duration: 250, easing: "swing" },
                { id: "eid149", tween: [ "style", "${_brazo_izq2}", "clip", [2479.215087890625,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2432.854736328125,4790,3050,3960]}], position: 4750, duration: 141, easing: "swing" },
                { id: "eid152", tween: [ "style", "${_brazo_izq2}", "clip", [2592.821044921875,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2479.215087890625,4790,3050,3960]}], position: 4891, duration: 109, easing: "swing" },
                { id: "eid153", tween: [ "style", "${_brazo_izq2}", "clip", [2502.19140625,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2592.821044921875,4790,3050,3960]}], position: 5000, duration: 81, easing: "swing" },
                { id: "eid154", tween: [ "style", "${_brazo_izq2}", "clip", [2395.928955078125,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2502.19140625,4790,3050,3960]}], position: 5081, duration: 77, easing: "swing" },
                { id: "eid155", tween: [ "style", "${_brazo_izq2}", "clip", [2311.460205078125,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2395.928955078125,4790,3050,3960]}], position: 5158, duration: 92, easing: "swing" },
                { id: "eid180", tween: [ "style", "${_brazo_izq2}", "clip", [2395.928955078125,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2311.460205078125,4790,3050,3960]}], position: 11000, duration: 92, easing: "swing" },
                { id: "eid179", tween: [ "style", "${_brazo_izq2}", "clip", [2502.19140625,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2395.928955078125,4790,3050,3960]}], position: 11092, duration: 77, easing: "swing" },
                { id: "eid178", tween: [ "style", "${_brazo_izq2}", "clip", [2592.821044921875,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2502.19140625,4790,3050,3960]}], position: 11169, duration: 81, easing: "swing" },
                { id: "eid177", tween: [ "style", "${_brazo_izq2}", "clip", [2479.215087890625,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2592.821044921875,4790,3050,3960]}], position: 11250, duration: 109, easing: "swing" },
                { id: "eid176", tween: [ "style", "${_brazo_izq2}", "clip", [2432.854736328125,4790,3050,3960], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2479.215087890625,4790,3050,3960]}], position: 11359, duration: 141, easing: "swing" },
                { id: "eid128", tween: [ "style", "${_brazo_izq1}", "left", '-2716px', { fromValue: '-2052px'}], position: 0, duration: 750, easing: "swing" },
                { id: "eid133", tween: [ "style", "${_brazo_izq1}", "left", '-2052px', { fromValue: '-2716px'}], position: 3500, duration: 750, easing: "swing" },
                { id: "eid135", tween: [ "style", "${_brazo_izq1}", "left", '-1866px', { fromValue: '-2052px'}], position: 4250, duration: 500, easing: "swing" },
                { id: "eid190", tween: [ "style", "${_brazo_izq1}", "left", '-2052px', { fromValue: '-1866px'}], position: 11500, duration: 500, easing: "swing" },
                { id: "eid189", tween: [ "style", "${_brazo_izq1}", "left", '-2716px', { fromValue: '-2052px'}], position: 12000, duration: 750, easing: "swing" },
                { id: "eid188", tween: [ "style", "${_brazo_izq1}", "left", '-2052px', { fromValue: '-2716px'}], position: 17250, duration: 750, easing: "swing" },
                { id: "eid85", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-62deg', { fromValue: '-91deg'}], position: 4750, duration: 250, easing: "swing" },
                { id: "eid93", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-63deg', { fromValue: '-62deg'}], position: 5000, duration: 13, easing: "swing" },
                { id: "eid196", tween: [ "transform", "${_brazo_der2}", "rotateZ", '0deg', { fromValue: '-63deg'}], position: 5013, duration: 487, easing: "swing" },
                { id: "eid67", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-26deg', { fromValue: '0deg'}], position: 5750, duration: 838, easing: "swing" },
                { id: "eid68", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-14deg', { fromValue: '-26deg'}], position: 6588, duration: 258, easing: "swing" },
                { id: "eid69", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-31deg', { fromValue: '-14deg'}], position: 6846, duration: 1914, easing: "swing" },
                { id: "eid70", tween: [ "transform", "${_brazo_der2}", "rotateZ", '0deg', { fromValue: '-31deg'}], position: 8760, duration: 1740, easing: "swing" },
                { id: "eid106", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-48deg', { fromValue: '0deg'}], position: 10750, duration: 419, easing: "swing" },
                { id: "eid122", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-75deg', { fromValue: '-48deg'}], position: 11169, duration: 42, easing: "swing" },
                { id: "eid120", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-62deg', { fromValue: '-75deg'}], position: 11211, duration: 39, easing: "swing" },
                { id: "eid105", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-92deg', { fromValue: '-62deg'}], position: 11250, duration: 141, easing: "swing" },
                { id: "eid126", tween: [ "transform", "${_brazo_der2}", "rotateZ", '-91deg', { fromValue: '-92deg'}], position: 11391, duration: 109, easing: "swing" },
                { id: "eid89", tween: [ "style", "${_brazo_der2}", "top", '-621px', { fromValue: '-592px'}], position: 4750, duration: 250, easing: "swing" },
                { id: "eid94", tween: [ "style", "${_brazo_der2}", "top", '-688px', { fromValue: '-621px'}], position: 5000, duration: 81, easing: "swing" },
                { id: "eid98", tween: [ "style", "${_brazo_der2}", "top", '-678px', { fromValue: '-688px'}], position: 5081, duration: 77, easing: "swing" },
                { id: "eid96", tween: [ "style", "${_brazo_der2}", "top", '-701px', { fromValue: '-678px'}], position: 5158, duration: 342, easing: "swing" },
                { id: "eid104", tween: [ "style", "${_brazo_der2}", "top", '-678px', { fromValue: '-701px'}], position: 10750, duration: 342, easing: "swing" },
                { id: "eid103", tween: [ "style", "${_brazo_der2}", "top", '-688px', { fromValue: '-678px'}], position: 11092, duration: 77, easing: "swing" },
                { id: "eid102", tween: [ "style", "${_brazo_der2}", "top", '-629px', { fromValue: '-688px'}], position: 11169, duration: 21, easing: "swing" },
                { id: "eid124", tween: [ "style", "${_brazo_der2}", "top", '-603px', { fromValue: '-629px'}], position: 11190, duration: 21, easing: "swing" },
                { id: "eid119", tween: [ "style", "${_brazo_der2}", "top", '-621px', { fromValue: '-603px'}], position: 11211, duration: 39, easing: "swing" },
                { id: "eid101", tween: [ "style", "${_brazo_der2}", "top", '-592px', { fromValue: '-621px'}], position: 11250, duration: 250, easing: "swing" },
                { id: "eid58", tween: [ "style", "${_brazo_der1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid138", tween: [ "style", "${_brazo_der1}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "swing" },
                { id: "eid139", tween: [ "style", "${_brazo_der1}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0, easing: "swing" },
                { id: "eid71", tween: [ "style", "${_brazo_der1}", "display", 'block', { fromValue: 'block'}], position: 18000, duration: 0, easing: "swing" },
                { id: "eid131", tween: [ "transform", "${_brazo_izq1}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 750, duration: 1250, easing: "swing" },
                { id: "eid132", tween: [ "transform", "${_brazo_izq1}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 2000, duration: 1500, easing: "swing" },
                { id: "eid137", tween: [ "transform", "${_brazo_izq1}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 4250, duration: 250, easing: "swing" },
                { id: "eid193", tween: [ "transform", "${_brazo_izq1}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 11750, duration: 250, easing: "swing" },
                { id: "eid192", tween: [ "transform", "${_brazo_izq1}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 12750, duration: 1500, easing: "swing" },
                { id: "eid191", tween: [ "transform", "${_brazo_izq1}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 14250, duration: 1250, easing: "swing" },
                { id: "eid47", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,4761.87890625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5220.9697265625]}], position: 0, duration: 750, easing: "swing" },
                { id: "eid55", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5220.9697265625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,4761.87890625]}], position: 3500, duration: 750, easing: "swing" },
                { id: "eid60", tween: [ "style", "${_brazo_der1}", "clip", [1134.611572265625,5720,1500,5413.4248046875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5220.9697265625]}], position: 4250, duration: 90, easing: "swing" },
                { id: "eid116", tween: [ "style", "${_brazo_der1}", "clip", [1138.18212890625,5720,1500,5500.04541015625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1134.611572265625,5720,1500,5413.4248046875]}], position: 4340, duration: 72, easing: "swing" },
                { id: "eid115", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5684.60693359375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1138.18212890625,5720,1500,5500.04541015625]}], position: 4412, duration: 338, easing: "swing" },
                { id: "eid77", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5557.1962890625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5684.60693359375]}], position: 11500, duration: 89, easing: "swing" },
                { id: "eid117", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5220.9697265625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5557.1962890625]}], position: 11589, duration: 411, easing: "swing" },
                { id: "eid76", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,4761.87890625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5220.9697265625]}], position: 12000, duration: 750, easing: "swing" },
                { id: "eid75", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5220.9697265625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,4761.87890625]}], position: 17250, duration: 750, easing: "swing" },
                { id: "eid140", tween: [ "style", "${_brazo_izq1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid141", tween: [ "style", "${_brazo_izq1}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "swing" },
                { id: "eid183", tween: [ "style", "${_brazo_izq1}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0, easing: "swing" },
                { id: "eid130", tween: [ "style", "${_brazo_izq1}", "clip", [280,5170,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,4360.9091796875,700,4100]}], position: 0, duration: 750, easing: "swing" },
                { id: "eid134", tween: [ "style", "${_brazo_izq1}", "clip", [280,4360.9091796875,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,5170,700,4100]}], position: 3500, duration: 750, easing: "swing" },
                { id: "eid136", tween: [ "style", "${_brazo_izq1}", "clip", [280,4170,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,4360.9091796875,700,4100]}], position: 4250, duration: 500, easing: "swing" },
                { id: "eid187", tween: [ "style", "${_brazo_izq1}", "clip", [280,4360.9091796875,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,4170,700,4100]}], position: 11500, duration: 500, easing: "swing" },
                { id: "eid186", tween: [ "style", "${_brazo_izq1}", "clip", [280,5170,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,4360.9091796875,700,4100]}], position: 12000, duration: 750, easing: "swing" },
                { id: "eid185", tween: [ "style", "${_brazo_izq1}", "clip", [280,4360.9091796875,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,5170,700,4100]}], position: 17250, duration: 750, easing: "swing" }            ]
        }
    }
},
"robot_cabeza": {
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
                    rect: ['-150px', '-47px', '5760px', '3240px', 'auto', 'auto'],
                    id: 'cabeza',
                    type: 'image',
                    clip: ['rect(60px 1390px 1040px 180px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '0px', '0px']
                },
                {
                    rect: ['-1882px', '178px', '5760px', '3240px', 'auto', 'auto'],
                    id: 'ojos',
                    type: 'image',
                    clip: ['rect(220px 2890px 480px 2072px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '0px', '0px']
                },
                {
                    rect: ['-2802px', '173px', '5760px', '3240px', 'auto', 'auto'],
                    id: 'boca',
                    type: 'image',
                    clip: ['rect(344px 3714px 580px 3056px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '-8px', '-12px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ojos}": [
                ["style", "top", '178px'],
                ["style", "left", '-1882px'],
                ["style", "-webkit-transform-origin", [13.54,29.66], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [220,2890,480,2072], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [8,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_boca}": [
                ["style", "-webkit-transform-origin", [13.54,29.66], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [344,3714,580,3056], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '173px'],
                ["style", "left", '-2802px'],
                ["style", "background-position", [-8,-4], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_cabeza}": [
                ["style", "-webkit-transform-origin", [13.54,29.66], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [60,1390,1040,180], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-150px'],
                ["style", "top", '-47px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1004px'],
                ["style", "width", '1272px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9750,
            autoPlay: true,
            labels: {
                "feliz": 0,
                "sorprendido": 7000,
                "confundido": 8000,
                "feliz2": 9000,
                "bravo": 9750
            },
            timeline: [
                { id: "eid31", tween: [ "style", "${_boca}", "background-position", [-8,-1604], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-8,-4]}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_boca}", "background-position", [-8,-4], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-8,-1604]}], position: 4000, duration: 0 },
                { id: "eid38", tween: [ "style", "${_boca}", "background-position", [-8,-4], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-8,-2272]}], position: 4750, duration: 0 },
                { id: "eid4", tween: [ "style", "${_boca}", "background-position", [-8,-532], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-8,-4]}], position: 7000, duration: 0 },
                { id: "eid1", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_ojos}", "background-position", [8,-1583.5668945313], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 1000, duration: 0 },
                { id: "eid397", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,-1556]}], position: 1500, duration: 0 },
                { id: "eid398", tween: [ "style", "${_ojos}", "background-position", [8,-1583.5668945313], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 1750, duration: 0 },
                { id: "eid399", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,-1583.5668945313]}], position: 2000, duration: 0 },
                { id: "eid35", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 4000, duration: 0 },
                { id: "eid39", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,-2280]}], position: 4750, duration: 0 },
                { id: "eid5", tween: [ "style", "${_ojos}", "background-position", [8,-512], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 7000, duration: 0 }            ]
        }
    }
},
"escudo": {
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
                    rect: ['-621px', '-1074px', '5760px', '3240px', 'auto', 'auto'],
                    id: 'escu',
                    type: 'image',
                    clip: ['rect(1110px 850px 1302px 668px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '244px'],
                ["style", "width", '260px']
            ],
            "${_escu}": [
                ["style", "-webkit-transform-origin", [80.03,73.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-1074px'],
                ["style", "opacity", '1'],
                ["style", "clip", [1110,850,1302,668], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-621px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid40", tween: [ "style", "${_escu}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 345, easing: "swing" },
                { id: "eid41", tween: [ "style", "${_escu}", "opacity", '0.61788591056911', { fromValue: '0.000000'}], position: 1345, duration: 155, easing: "swing" },
                { id: "eid42", tween: [ "style", "${_escu}", "opacity", '0.089430715447155', { fromValue: '0.617886'}], position: 1500, duration: 250, easing: "swing" },
                { id: "eid43", tween: [ "style", "${_escu}", "opacity", '1', { fromValue: '0.089431'}], position: 1750, duration: 250, easing: "swing" }            ]
        }
    }
},
"btn_2": {
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
                    type: 'image',
                    rect: ['0px', '0px', '1311px', '258px', 'auto', 'auto'],
                    display: 'block',
                    id: 's02_02_2',
                    clip: ['rect(0px 442.4921875px 130.1875px 7.265625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_2.png', '-431.5390625px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '0px', '1311px', '258px', 'auto', 'auto'],
                    display: 'none',
                    id: 's02_02_2Copy',
                    clip: ['rect(0px 442.4921875px 130.1875px 11.0234375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_2.png', '0px', '-128.03125px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '440px']
            ],
            "${_s02_02_2Copy}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "background-position", [-431.8281255,-131.914063], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,442.4921875,130.1875,11.0234375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_s02_02_2}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "clip", [0,442.4921875,130.1875,7.265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-431.5390625,0], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                { id: "eid409", tween: [ "style", "${_s02_02_2Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
                { id: "eid408", tween: [ "style", "${_s02_02_2Copy}", "background-position", [-431.8281255,-131.914063], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-431.8281255,-131.914063]}], position: 0, duration: 0, easing: "easeOutCirc" },
                { id: "eid410", tween: [ "style", "${_s02_02_2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutCirc" }            ]
        }
    }
},
"btn_3": {
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
                    type: 'image',
                    rect: ['0px', '0px', '1311px', '258px', 'auto', 'auto'],
                    display: 'block',
                    id: 's02_02_2',
                    clip: ['rect(0px 442.4921875px 130.1875px 7.265625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_2.png', '-864.6875px', '0px']
                },
                {
                    type: 'image',
                    rect: ['0px', '0px', '1311px', '258px', 'auto', 'auto'],
                    display: 'none',
                    id: 's02_02_2Copy',
                    clip: ['rect(0px 442.4921875px 130.1875px 11.0234375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_2.png', '0px', '-128.03125px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s02_02_2}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "background-position", [-864.6875,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,442.4921875,130.1875,7.265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_s02_02_2Copy}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "background-position", [-863.0390625,-131.914063], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,442.4921875,130.1875,11.0234375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '440px']
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
                { id: "eid409", tween: [ "style", "${_s02_02_2Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
                { id: "eid408", tween: [ "style", "${_s02_02_2Copy}", "background-position", [-863.0390625,-131.914063], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-863.0390625,-131.914063]}], position: 0, duration: 0, easing: "easeOutCirc" },
                { id: "eid410", tween: [ "style", "${_s02_02_2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutCirc" }            ]
        }
    }
},
"brillo_1": {
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
                    rect: ['393px', '0px', '20px', '107px', 'auto', 'auto'],
                    opacity: 0.47863685344828,
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(39,193,202,0.61)']
                },
                {
                    rect: ['0px', '0px', '20px', '107px', 'auto', 'auto'],
                    opacity: 0.47863685344828,
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(39,193,202,0.6118)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(39,193,202,0.61)'],
                ["style", "height", '107px'],
                ["style", "opacity", '0'],
                ["style", "left", '393px'],
                ["style", "top", '0px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(39,193,202,0.61)'],
                ["style", "height", '107px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '107px'],
                ["style", "width", '413px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid418", tween: [ "style", "${_Rectangle}", "left", '212px', { fromValue: '393px'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid419", tween: [ "style", "${_Rectangle}", "left", '393px', { fromValue: '212px'}], position: 750, duration: 750, easing: "easeOutCirc" },
                { id: "eid417", tween: [ "style", "${_RectangleCopy}", "left", '190px', { fromValue: '0px'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid420", tween: [ "style", "${_RectangleCopy}", "left", '0px', { fromValue: '190px'}], position: 750, duration: 750, easing: "easeOutCirc" },
                { id: "eid425", tween: [ "style", "${_RectangleCopy}", "opacity", '0.34827641741983', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid433", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '0.34827641741983'}], position: 750, duration: 750, easing: "easeOutCirc" },
                { id: "eid431", tween: [ "style", "${_Rectangle}", "opacity", '0.35323275862069', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid432", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0.35323275862069'}], position: 750, duration: 750, easing: "easeOutCirc" }            ]
        }
    }
},
"bt_audio": {
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
                    rect: ['1px', '0px', '90px', '90px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    id: 'bt_audio_reiniciar',
                    type: 'image',
                    rect: ['1px', '89px', '86px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bt_audio_reiniciar.png', '0px', '0px']
                },
                {
                    rect: ['-16px', '-40px', '120px', '260px', 'auto', 'auto'],
                    id: 'bt_audio',
                    transform: [[], [], [], ['0.7', '0.7']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/bt_audio_azul.png', '0.94377790178545px', '-0.082659040178868px']
                },
                {
                    type: 'rect',
                    borderRadius: ['65px 65px', '65px 65px', '65px 65px', '65px 65px'],
                    id: 'ht_spot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    rect: ['-1px', '-1px', '90px', '90px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.95556']],
                    clip: ['rect(0px 90px 90px 0px)'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    borderRadius: ['65px 65px', '65px 65px', '65px 65px', '65px 65px'],
                    id: 'ht_spot2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    rect: ['-1px', '91px', '90px', '90px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.95556']],
                    clip: ['rect(0px 90px 90px 0px)'],
                    fill: ['rgba(148,148,148,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bt_audio_reiniciar}": [
                ["style", "top", '89px'],
                ["style", "height", '88px'],
                ["style", "left", '1px'],
                ["style", "width", '86px']
            ],
            "${_ht_spot}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-top-left-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.95556'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '90px'],
                ["style", "top", '-1px'],
                ["style", "border-bottom-left-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '90px'],
                ["style", "border-top-right-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '190px'],
                ["style", "width", '90px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bt_audio}": [
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '-15px'],
                ["style", "background-position", [0.94377790178545,-0.082659040178868], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '90px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '1px'],
                ["style", "width", '90px']
            ],
            "${_ht_spot2}": [
                ["color", "background-color", 'rgba(148,148,148,0.00)'],
                ["style", "border-top-left-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.95556'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '90px'],
                ["style", "top", '91px'],
                ["style", "border-bottom-left-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '90px'],
                ["style", "border-top-right-radius", [65,65], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "up": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1359", tween: [ "style", "${_bt_audio}", "top", '-41px', { fromValue: '-41px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid1363", tween: [ "style", "${_bt_audio}", "top", '-131px', { fromValue: '-41px'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid1358", tween: [ "style", "${_bt_audio}", "left", '-15px', { fromValue: '-15px'}], position: 0, duration: 0, easing: "easeOutQuad" }            ]
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
                    preload: 'auto',
                    rect: ['-253', '215', '320px', '45px', 'auto', 'auto'],
                    title: 'audio_2',
                    id: 's02_2',
                    source: ['media/s02_2.mp3'],
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 's02_02_9',
                    opacity: 0.79870690107346,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_7.png', '0px', '0px']
                },
                {
                    rect: ['123px', '54px', '1119px', '657px', 'auto', 'auto'],
                    id: 's02_02_8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_8.png', '0px', '0px']
                },
                {
                    rect: ['336px', '158px', '680px', '417px', 'auto', 'auto'],
                    id: 's02_02_52',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_5.png', '0px', '0px']
                },
                {
                    rect: ['1100px', '119px', '55px', '55px', 'auto', 'auto'],
                    type: 'image',
                    id: 'cerrar',
                    display: 'none',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/cerrar_gray.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s02_02_9}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ],
            "${_s02_02_52}": [
                ["style", "top", '887px'],
                ["style", "left", '336px'],
                ["style", "display", 'none']
            ],
            "${_cerrar}": [
                ["style", "top", '119px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1071px'],
                ["style", "cursor", 'pointer']
            ],
            "${_s02_02_8}": [
                ["style", "top", '783px'],
                ["style", "left", '123px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30989,
            autoPlay: true,
            timeline: [
                { id: "eid458", tween: [ "style", "${_s02_02_8}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutBack" },
                { id: "eid457", tween: [ "style", "${_s02_02_52}", "display", 'block', { fromValue: 'none'}], position: 326, duration: 0, easing: "easeOutBack" },
                { id: "eid449", tween: [ "style", "${_s02_02_8}", "top", '54px', { fromValue: '783px'}], position: 250, duration: 750, easing: "easeOutBack" },
                { id: "eid444", tween: [ "style", "${_s02_02_9}", "opacity", '0.7987068891525269', { fromValue: '0'}], position: 95, duration: 500, easing: "easeOutBack" },
                { id: "eid455", tween: [ "style", "${_cerrar}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid451", tween: [ "style", "${_s02_02_52}", "top", '158px', { fromValue: '887px'}], position: 326, duration: 750, easing: "easeOutBack" },
                { id: "eid445", tween: [ "style", "${_s02_02_9}", "display", 'block', { fromValue: 'none'}], position: 95, duration: 0, easing: "easeOutBack" },
                { id: "eid453", tween: [ "style", "${_cerrar}", "left", '1100px', { fromValue: '1071px'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid456", tween: [ "style", "${_cerrar}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid463", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_s02_2}', [] ], ""], position: 1000 }            ]
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
                    preload: 'auto',
                    rect: ['-115', '89', '320px', '45px', 'auto', 'auto'],
                    source: ['media/s02_3.mp3'],
                    id: 's02_3',
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 's02_02_9',
                    opacity: 0.79870690107346,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_7.png', '0px', '0px']
                },
                {
                    rect: ['123px', '54px', '1119px', '657px', 'auto', 'auto'],
                    id: 's02_02_8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_8.png', '0px', '0px']
                },
                {
                    rect: ['343px', '158px', '680px', '346px', 'auto', 'auto'],
                    id: 's02_02_52',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_4.png', '0px', '0px']
                },
                {
                    rect: ['1100px', '119px', '55px', '55px', 'auto', 'auto'],
                    type: 'image',
                    id: 'cerrar',
                    display: 'none',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/cerrar_gray.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_s02_02_9}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ],
            "${_s02_02_52}": [
                ["style", "display", 'none'],
                ["style", "top", '887px'],
                ["style", "left", '343px'],
                ["style", "height", '346px']
            ],
            "${_cerrar}": [
                ["style", "top", '119px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1071px'],
                ["style", "cursor", 'pointer']
            ],
            "${_s02_02_8}": [
                ["style", "top", '783px'],
                ["style", "left", '123px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 31519,
            autoPlay: true,
            timeline: [
                { id: "eid458", tween: [ "style", "${_s02_02_8}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutBack" },
                { id: "eid457", tween: [ "style", "${_s02_02_52}", "display", 'block', { fromValue: 'none'}], position: 326, duration: 0, easing: "easeOutBack" },
                { id: "eid449", tween: [ "style", "${_s02_02_8}", "top", '54px', { fromValue: '783px'}], position: 250, duration: 750, easing: "easeOutBack" },
                { id: "eid453", tween: [ "style", "${_cerrar}", "left", '1100px', { fromValue: '1071px'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid451", tween: [ "style", "${_s02_02_52}", "top", '192px', { fromValue: '887px'}], position: 326, duration: 750, easing: "easeOutBack" },
                { id: "eid456", tween: [ "style", "${_cerrar}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid445", tween: [ "style", "${_s02_02_9}", "display", 'block', { fromValue: 'none'}], position: 95, duration: 0, easing: "easeOutBack" },
                { id: "eid444", tween: [ "style", "${_s02_02_9}", "opacity", '0.7987068891525269', { fromValue: '0'}], position: 95, duration: 500, easing: "easeOutBack" },
                { id: "eid455", tween: [ "style", "${_cerrar}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid465", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_s02_3}', [] ], ""], position: 250 }            ]
        }
    }
},
"pop_3": {
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
                    preload: 'auto',
                    rect: ['135', '554', '320px', '45px', 'auto', 'auto'],
                    source: ['media/s02_4.mp3'],
                    id: 's02_4',
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 's02_02_9',
                    opacity: 0.79870690107346,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_7.png', '0px', '0px']
                },
                {
                    rect: ['123px', '54px', '1119px', '657px', 'auto', 'auto'],
                    id: 's02_02_8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_8.png', '0px', '0px']
                },
                {
                    rect: ['340px', '210px', '702px', '344px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(148,148,148,0)'],
                    c: [
                    {
                        id: 's02_02_62',
                        type: 'image',
                        rect: ['-7px', '-26px', '680px', '606px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/s02_02_62.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['1100px', '119px', '55px', '55px', 'auto', 'auto'],
                    type: 'image',
                    id: 'cerrar',
                    display: 'none',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/cerrar_gray.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["style", "top", '816px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '344px'],
                ["style", "display", 'none'],
                ["style", "width", '702px']
            ],
            "${_s02_02_9}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_s02_02_8}": [
                ["style", "top", '783px'],
                ["style", "left", '123px'],
                ["style", "display", 'none']
            ],
            "${_s02_02_62}": [
                ["style", "top", '-26px'],
                ["style", "left", '-7px']
            ],
            "${_cerrar}": [
                ["style", "top", '119px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '1071px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 49439,
            autoPlay: true,
            timeline: [
                { id: "eid456", tween: [ "style", "${_cerrar}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid461", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutBack" },
                { id: "eid449", tween: [ "style", "${_s02_02_8}", "top", '54px', { fromValue: '783px'}], position: 250, duration: 750, easing: "easeOutBack" },
                { id: "eid444", tween: [ "style", "${_s02_02_9}", "opacity", '0.7987068891525269', { fromValue: '0'}], position: 95, duration: 500, easing: "easeOutBack" },
                { id: "eid455", tween: [ "style", "${_cerrar}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid458", tween: [ "style", "${_s02_02_8}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutBack" },
                { id: "eid445", tween: [ "style", "${_s02_02_9}", "display", 'block', { fromValue: 'none'}], position: 95, duration: 0, easing: "easeOutBack" },
                { id: "eid453", tween: [ "style", "${_cerrar}", "left", '1100px', { fromValue: '1071px'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid460", tween: [ "style", "${_Rectangle3}", "top", '210px', { fromValue: '816px'}], position: 250, duration: 750, easing: "easeOutBack" },
                { id: "eid466", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_s02_4}', [] ], ""], position: 250 }            ]
        }
    }
},
"pop_instruccion": {
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
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '1375px', '768px', 'auto', 'auto'],
                    id: 'S02_03-09',
                    fill: ['rgba(0,0,0,0)', 'images/S02_03-09.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['154px', '215px', '1088px', '337px', 'auto', 'auto'],
                    id: 'S02_03-10',
                    fill: ['rgba(0,0,0,0)', 'images/S02_03-10.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['195px', '267px', '1008px', '321px', 'auto', 'auto'],
                    id: 'S02_03-11',
                    fill: ['rgba(0,0,0,0)', 'images/S02_03-11.png', '0px', '0px']
                },
                {
                    rect: ['1147px', '174px', '111px', '103px', 'auto', 'auto'],
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'cerrar',
                    display: 'block',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '357px']
            ],
            "${_S02_03-10}": [
                ["style", "top", '192px'],
                ["style", "display", 'block'],
                ["style", "height", '430px'],
                ["style", "opacity", '1'],
                ["style", "left", '154px'],
                ["style", "width", '1088px']
            ],
            "${_S02_03-11}": [
                ["style", "top", '267px'],
                ["style", "height", '321px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '195px'],
                ["style", "width", '1008px']
            ],
            "${_cerrar}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '103px'],
                ["style", "left", '1147px'],
                ["style", "display", 'block'],
                ["style", "top", '174px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '111px']
            ],
            "${_S02_03-09}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
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
                { id: "eid475", tween: [ "style", "${_cerrar}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeOutCirc" },
                { id: "eid474", tween: [ "style", "${_S02_03-09}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid476", tween: [ "style", "${_S02_03-11}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeOutCirc" },
                { id: "eid470", tween: [ "style", "${_S02_03-10}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid471", tween: [ "style", "${_S02_03-11}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid468", tween: [ "style", "${_S02_03-10}", "height", '1px', { fromValue: '430px'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid467", tween: [ "style", "${_S02_03-09}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
                { id: "eid469", tween: [ "style", "${_S02_03-10}", "top", '367px', { fromValue: '192px'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid477", tween: [ "style", "${_S02_03-10}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeOutCirc" },
                { id: "eid473", tween: [ "transform", "${_S02_03-09}", "scaleY", '0.0013', { fromValue: '1'}], position: 0, duration: 750, easing: "easeOutCirc" },
                { id: "eid478", tween: [ "style", "${_S02_03-09}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeOutCirc" }            ]
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
