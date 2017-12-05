/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Helvetica']='';
    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

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
                id: 'slide_15',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_14',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_13',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_12',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'slide_11',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_10',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_9',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_8',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_7',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_6',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_5',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_4',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'slide_2',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'slide_1',
                display: 'block',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto']
            },
            {
                id: 'slide_3',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','1366px','768px','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'pie',
                display: 'none',
                type: 'image',
                rect: ['0', '682px','1366px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pie.png",'0px','0px']
            },
            {
                id: 'cont',
                display: 'none',
                type: 'image',
                rect: ['683px', '703px','683px','65px','auto', 'auto'],
                clip: ['rect(0px 683px 65px 486.6669921875px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'bt_back',
                display: 'none',
                type: 'rect',
                rect: ['1194px', '699px','auto','auto','auto', 'auto'],
                title: 'Anterior'
            },
            {
                id: 'bt_next',
                display: 'none',
                type: 'rect',
                rect: ['1313px', '697px','auto','auto','auto', 'auto'],
                title: 'Siguiente'
            },
            {
                id: 'textCount',
                display: 'none',
                type: 'text',
                rect: ['1239px', '720px','87px','40px','auto', 'auto'],
                text: "0 - 0",
                align: "center",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'volver',
                display: 'none',
                type: 'image',
                rect: ['1207px', '715px','147px','37px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"volver.png",'0px','0px']
            },
            {
                id: 'top',
                display: 'none',
                type: 'image',
                rect: ['0', '0px','1366px','91px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"top.png",'0px','0px']
            },
            {
                id: 'inicio',
                display: 'none',
                type: 'rect',
                rect: ['1194px', '2px','172px','54px','auto', 'auto'],
                fill: ["rgba(13,45,61,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'arreglo',
                display: 'none',
                type: 'rect',
                rect: ['1305px', '688px','63px','86px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'revisar_slide10',
                display: 'none',
                type: 'rect',
                rect: ['44px', '153px','156px','57px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'guia_usuario',
                display: 'none',
                type: 'rect',
                rect: ['0', '2','auto','auto','auto', 'auto']
            },
            {
                id: 'pop_instruccion',
                display: 'none',
                type: 'rect',
                rect: ['0', '2','auto','auto','auto', 'auto']
            },
            {
                id: 'menu',
                display: 'none',
                type: 'rect',
                rect: ['1251px', '0','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'info',
                display: 'none',
                type: 'rect',
                rect: ['1318', '7','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'warning2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"warning2.png",'0px','0px']
            },
            {
                id: 'warning1',
                display: 'none',
                type: 'image',
                rect: ['0px', '7px','1366px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"warning1.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'slide_13',
                symbolName: 'slide_13',
                autoPlay: {

                }
            },
            {
                id: 'slide_3',
                symbolName: 'slide_3',
                autoPlay: {

                }
            },
            {
                id: 'slide_6',
                symbolName: 'slide_6',
                autoPlay: {

                }
            },
            {
                id: 'slide_8',
                symbolName: 'slide_8',
                autoPlay: {

                }
            },
            {
                id: 'slide_5',
                symbolName: 'slide_5',
                autoPlay: {

                }
            },
            {
                id: 'slide_14',
                symbolName: 'slide_14',
                autoPlay: {

                }
            },
            {
                id: 'slide_12',
                symbolName: 'slide_12',
                autoPlay: {

                }
            },
            {
                id: 'slide_11',
                symbolName: 'slide_11',
                autoPlay: {

                }
            },
            {
                id: 'slide_1',
                symbolName: 'slide_1',
                autoPlay: {

                }
            },
            {
                id: 'slide_9',
                symbolName: 'slide_9',
                autoPlay: {

                }
            },
            {
                id: 'info',
                symbolName: 'info',
                autoPlay: {

                }
            },
            {
                id: 'guia_usuario',
                symbolName: 'guia_usuario',
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
                id: 'slide_2',
                symbolName: 'slide_2',
                autoPlay: {

                }
            },
            {
                id: 'slide_10',
                symbolName: 'slide_10',
                autoPlay: {

                }
            },
            {
                id: 'menu',
                symbolName: 'menu',
                autoPlay: {

                }
            },
            {
                id: 'bt_next',
                symbolName: 'bt_next',
                autoPlay: {

                }
            },
            {
                id: 'slide_4',
                symbolName: 'slide_4',
                autoPlay: {

                }
            },
            {
                id: 'slide_15',
                symbolName: 'slide_15',
                autoPlay: {

                }
            },
            {
                id: 'bt_back',
                symbolName: 'bt_back',
                autoPlay: {

                }
            },
            {
                id: 'slide_7',
                symbolName: 'slide_7',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_top}": [
                ["style", "display", 'none']
            ],
            "${_slide_4}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_bt_back}": [
                ["style", "top", '699px'],
                ["transform", "scaleY", '1'],
                ["style", "overflow", 'hidden'],
                ["transform", "scaleX", '1'],
                ["style", "left", '1194px'],
                ["style", "display", 'none']
            ],
            "${_slide_5}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_slide_11}": [
                ["style", "display", 'none']
            ],
            "${_pie}": [
                ["style", "top", '682px'],
                ["style", "display", 'none']
            ],
            "${_slide_13}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_cont}": [
                ["style", "display", 'none'],
                ["style", "top", '703px'],
                ["style", "clip", [0,683,65,486.6669921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '683px']
            ],
            "${_warning1}": [
                ["style", "top", '7px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_info}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_slide_15}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_slide_14}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_menu}": [
                ["style", "display", 'none'],
                ["style", "left", '1251px'],
                ["style", "cursor", 'pointer']
            ],
            "${_slide_9}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_slide_8}": [
                ["style", "display", 'none']
            ],
            "${_slide_12}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_bt_next}": [
                ["style", "top", '697px'],
                ["transform", "scaleY", '1'],
                ["style", "overflow", 'hidden'],
                ["transform", "scaleX", '1'],
                ["style", "left", '1313px'],
                ["style", "display", 'none']
            ],
            "${_volver}": [
                ["style", "display", 'none'],
                ["style", "top", '715px'],
                ["style", "left", '1207px'],
                ["style", "cursor", 'pointer']
            ],
            "${_textCount}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1239px'],
                ["style", "font-size", '24px'],
                ["style", "top", '720px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'none'],
                ["style", "height", '40px'],
                ["style", "width", '87px'],
                ["style", "font-style", 'normal']
            ],
            "${_pop_instruccion}": [
                ["style", "display", 'none']
            ],
            "${_slide_1}": [
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_slide_6}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_inicio}": [
                ["color", "background-color", 'rgba(13,45,61,1.00)'],
                ["style", "display", 'none'],
                ["style", "height", '54px'],
                ["style", "top", '2px'],
                ["style", "left", '1194px'],
                ["style", "width", '172px']
            ],
            "${_slide_10}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_slide_3}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_guia_usuario}": [
                ["style", "display", 'none']
            ],
            "${_arreglo}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_label}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_slide_7}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_warning2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_slide_2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_revisar_slide10}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 29000,
            autoPlay: true,
            labels: {
                "slide_1": 0,
                "slide_2": 1000,
                "slide_3": 2000,
                "slide_4": 3000,
                "slide_5": 4000,
                "slide_6": 5000,
                "slide_7": 6000,
                "slide_8": 7000,
                "slide_9": 8000,
                "slide_10": 9000,
                "slide_11": 10000,
                "slide_12": 11000,
                "slide_13": 12000,
                "slide_14": 13000,
                "slide_15": 14000,
                "slide_16": 15000,
                "slide_17": 16000,
                "slide_18": 17000,
                "slide_19": 18000,
                "slide_20": 19000,
                "slide_21": 20000,
                "slide_22": 21000,
                "slide_23": 22000,
                "slide_24": 23000,
                "slide_25": 24000,
                "slide_26": 25000,
                "slide_27": 26000,
                "slide_28": 27000,
                "slide_29": 28000,
                "slide_30": 29000
            },
            timeline: [
                { id: "eid1108", tween: [ "style", "${_slide_9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1236", tween: [ "style", "${_slide_9}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid1237", tween: [ "style", "${_slide_9}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid1347", tween: [ "style", "${_bt_back}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1499", tween: [ "style", "${_bt_back}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1109", tween: [ "style", "${_slide_10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1238", tween: [ "style", "${_slide_10}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid1239", tween: [ "style", "${_slide_10}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid1546", tween: [ "style", "${_pop_instruccion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1544", tween: [ "style", "${_arreglo}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1545", tween: [ "style", "${_arreglo}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1503", tween: [ "style", "${_volver}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid1511", tween: [ "style", "${_volver}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid1337", tween: [ "style", "${_slide_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1130", tween: [ "style", "${_slide_1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1547", tween: [ "style", "${_revisar_slide10}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid1114", tween: [ "style", "${_slide_15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1248", tween: [ "style", "${_slide_15}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid1249", tween: [ "style", "${_slide_15}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid1132", tween: [ "style", "${_slide_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1101", tween: [ "style", "${_slide_2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1131", tween: [ "style", "${_slide_2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1516", tween: [ "style", "${_guia_usuario}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1031", tween: [ "style", "${_slide_13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_slide_13}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_slide_13}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid1103", tween: [ "style", "${_slide_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1134", tween: [ "style", "${_slide_4}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid1136", tween: [ "style", "${_slide_4}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid1026", tween: [ "style", "${_slide_8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1234", tween: [ "style", "${_slide_8}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid1235", tween: [ "style", "${_slide_8}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid1105", tween: [ "style", "${_slide_6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1228", tween: [ "style", "${_slide_6}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid1229", tween: [ "style", "${_slide_6}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid1025", tween: [ "style", "${_slide_7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1232", tween: [ "style", "${_slide_7}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid1233", tween: [ "style", "${_slide_7}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid1349", tween: [ "style", "${_top}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1110", tween: [ "style", "${_slide_11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1240", tween: [ "style", "${_slide_11}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid1241", tween: [ "style", "${_slide_11}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid1133", tween: [ "style", "${_slide_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1102", tween: [ "style", "${_slide_3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1135", tween: [ "style", "${_slide_3}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1346", tween: [ "style", "${_textCount}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1501", tween: [ "style", "${_textCount}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1348", tween: [ "style", "${_bt_next}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1502", tween: [ "style", "${_bt_next}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1350", tween: [ "style", "${_inicio}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1113", tween: [ "style", "${_slide_14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1246", tween: [ "style", "${_slide_14}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid1247", tween: [ "style", "${_slide_14}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid1520", tween: [ "style", "${_info}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1351", tween: [ "style", "${_menu}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1104", tween: [ "style", "${_slide_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1226", tween: [ "style", "${_slide_5}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid1227", tween: [ "style", "${_slide_5}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid1353", tween: [ "style", "${_cont}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1512", tween: [ "style", "${_cont}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid1345", tween: [ "style", "${_pie}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutCirc" },
                { id: "eid1424", tween: [ "style", "${_pie}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1425", tween: [ "style", "${_pie}", "display", 'none', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid1426", tween: [ "style", "${_pie}", "display", 'none', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid1543", tween: [ "style", "${_warning1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1542", tween: [ "style", "${_warning2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1111", tween: [ "style", "${_slide_12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1242", tween: [ "style", "${_slide_12}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_slide_12}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 }            ]
        }
    }
},
"slide_2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"slide_4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 's02_02_7',
                    type: 'image',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/s02_02_7.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy3',
                    rect: ['0px', '9px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(508.109375px 1366px 685.9140625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy2',
                    rect: ['0px', '9px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(331.546875px 1258.875px 505.828125px 29.3134765625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenidoCopy',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(79.060546875px 782.640625px 295.140625px 31.09375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'contenido',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(74.265625px 1366px 226.0546875px 781.8828125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/contenido.png', '0px', '0px']
                },
                {
                    id: 'check_1',
                    type: 'rect',
                    rect: ['75px', '359px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'check_2',
                    type: 'rect',
                    rect: ['451px', '359px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'check_3',
                    type: 'rect',
                    rect: ['826px', '359px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'check_4',
                    type: 'rect',
                    rect: ['75px', '542px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'check_5',
                    type: 'rect',
                    rect: ['449px', '542px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'check_6',
                    type: 'rect',
                    rect: ['826px', '542px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    borderRadius: ['0px', '20px 20px', '20px 20px', '0px'],
                    rect: ['136px', '349px', '289px', '155px', 'auto', 'auto'],
                    id: 'Rectangle1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,0.00)'],
                    c: [
                    {
                        id: 'brillo_1',
                        type: 'rect',
                        clip: ['rect(0px 341.34375px 155px 53.171875px)'],
                        rect: ['-53px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'rect',
                    borderRadius: ['0px', '20px 20px', '20px 20px', '0px'],
                    rect: ['507px', '349px', '289px', '155px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,0.00)'],
                    c: [
                    {
                        id: 'brillo_2',
                        type: 'rect',
                        clip: ['rect(0px 340.640625px 155px 51.5859375px)'],
                        rect: ['-53px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'rect',
                    borderRadius: ['0px', '20px 20px', '20px 20px', '0px'],
                    rect: ['883px', '349px', '289px', '155px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,0.00)'],
                    c: [
                    {
                        id: 'brillo_3',
                        type: 'rect',
                        clip: ['rect(0px 340.7265625px 155px 51.7734375px)'],
                        rect: ['-53px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'rect',
                    borderRadius: ['0px', '20px 20px', '20px 20px', '0px'],
                    rect: ['136px', '548px', '289px', '155px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,0.00)'],
                    c: [
                    {
                        id: 'brillo_4',
                        type: 'rect',
                        clip: ['rect(0px 338.28125px 155px 52.375px)'],
                        rect: ['-53px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'rect',
                    borderRadius: ['0px', '20px 20px', '20px 20px', '0px'],
                    rect: ['512px', '548px', '289px', '155px', 'auto', 'auto'],
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,0.00)'],
                    c: [
                    {
                        id: 'brillo_5',
                        type: 'rect',
                        clip: ['rect(0px 340.890625px 155px 50.125px)'],
                        rect: ['-53px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'rect',
                    borderRadius: ['0px', '20px 20px', '20px 20px', '0px'],
                    rect: ['884px', '548px', '289px', '155px', 'auto', 'auto'],
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,0.00)'],
                    c: [
                    {
                        id: 'brillo_6',
                        type: 'rect',
                        clip: ['rect(0px 340.265625px 155px 47.9296875px)'],
                        rect: ['-53px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'image',
                    id: 'revisar',
                    rect: ['1176px', '481px', '163px', '204px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/revisar.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['135px', '350px', '289px', '155px', 'auto', 'auto'],
                    display: 'none',
                    id: 'hotspot_1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    type: 'rect',
                    rect: ['510px', '350px', '289px', '155px', 'auto', 'auto'],
                    display: 'none',
                    id: 'hotspot_2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    type: 'rect',
                    rect: ['886px', '350px', '289px', '155px', 'auto', 'auto'],
                    display: 'none',
                    id: 'hotspot_3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    type: 'rect',
                    rect: ['136px', '528px', '289px', '155px', 'auto', 'auto'],
                    display: 'none',
                    id: 'hotspot_4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    type: 'rect',
                    rect: ['509px', '528px', '289px', '155px', 'auto', 'auto'],
                    display: 'none',
                    id: 'hotspot_5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    type: 'rect',
                    rect: ['886px', '528px', '289px', '155px', 'auto', 'auto'],
                    display: 'none',
                    id: 'hotspot_6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'check_1',
                symbolName: 'check',
                autoPlay: {

               }
            },
            {
                id: 'check_4',
                symbolName: 'check',
                autoPlay: {

               }
            },
            {
                id: 'check_5',
                symbolName: 'check',
                autoPlay: {

               }
            },
            {
                id: 'brillo_3',
                symbolName: 'brillo',
                autoPlay: {

               }
            },
            {
                id: 'brillo_5',
                symbolName: 'brillo',
                autoPlay: {

               }
            },
            {
                id: 'brillo_4',
                symbolName: 'brillo',
                autoPlay: {

               }
            },
            {
                id: 'brillo_6',
                symbolName: 'brillo',
                autoPlay: {

               }
            },
            {
                id: 'check_2',
                symbolName: 'check',
                autoPlay: {

               }
            },
            {
                id: 'brillo_1',
                symbolName: 'brillo',
                autoPlay: {

               }
            },
            {
                id: 'brillo_2',
                symbolName: 'brillo',
                autoPlay: {

               }
            },
            {
                id: 'check_3',
                symbolName: 'check',
                autoPlay: {

               }
            },
            {
                id: 'check_6',
                symbolName: 'check',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_brillo_6}": [
                ["style", "top", '-1px'],
                ["style", "left", '-53px'],
                ["style", "clip", [0,340.265625,155,47.9296875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Rectangle2}": [
                ["style", "top", '349px'],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '507px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_check_3}": [
                ["style", "top", '359px'],
                ["transform", "scaleY", '0.09751'],
                ["transform", "scaleX", '0.09751'],
                ["style", "opacity", '0'],
                ["style", "left", '826px']
            ],
            "${_revisar}": [
                ["style", "top", '760px'],
                ["style", "left", '1175px'],
                ["style", "cursor", 'pointer']
            ],
            "${_check_1}": [
                ["style", "top", '359px'],
                ["transform", "scaleY", '0.09751'],
                ["transform", "scaleX", '0.09751'],
                ["style", "opacity", '0'],
                ["style", "left", '75px']
            ],
            "${_Rectangle1}": [
                ["style", "top", '349px'],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '136px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_check_4}": [
                ["style", "top", '542px'],
                ["transform", "scaleY", '0.09751'],
                ["transform", "scaleX", '0.09751'],
                ["style", "opacity", '0'],
                ["style", "left", '75px']
            ],
            "${_brillo_1}": [
                ["style", "top", '-1px'],
                ["style", "left", '-53px'],
                ["style", "clip", [0,341.34375,155,53.171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_3}": [
                ["style", "top", '350px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '886px']
            ],
            "${_hotspot_5}": [
                ["style", "top", '528px'],
                ["style", "display", 'none'],
                ["style", "left", '509px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_brillo_3}": [
                ["style", "top", '-1px'],
                ["style", "left", '-53px'],
                ["style", "clip", [0,340.7265625,155,51.7734375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_6}": [
                ["style", "top", '528px'],
                ["style", "display", 'none'],
                ["style", "left", '886px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["style", "top", '529px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '136px']
            ],
            "${_hotspot_2}": [
                ["style", "top", '350px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '510px']
            ],
            "${_check_2}": [
                ["style", "top", '359px'],
                ["transform", "scaleY", '0.09751'],
                ["transform", "scaleX", '0.09751'],
                ["style", "opacity", '0'],
                ["style", "left", '451px']
            ],
            "${_brillo_5}": [
                ["style", "top", '-1px'],
                ["style", "left", '-53px'],
                ["style", "clip", [0,340.890625,155,50.125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy3}": [
                ["style", "top", '9px'],
                ["style", "left", '1385px'],
                ["style", "clip", [508.109375,1366,685.9140625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenido}": [
                ["style", "top", '-243px'],
                ["style", "left", '0px'],
                ["style", "clip", [74.265625,1366,226.0546875,781.8828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_4}": [
                ["style", "top", '528px'],
                ["style", "display", 'none'],
                ["style", "left", '136px'],
                ["style", "cursor", 'pointer']
            ],
            "${_brillo_4}": [
                ["style", "top", '-1px'],
                ["style", "left", '-53px'],
                ["style", "clip", [0,338.28125,155,52.375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Rectangle6}": [
                ["style", "top", '529px'],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '884px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_hotspot_1}": [
                ["style", "top", '350px'],
                ["style", "display", 'none'],
                ["style", "left", '135px'],
                ["style", "cursor", 'pointer']
            ],
            "${_brillo_2}": [
                ["style", "top", '-1px'],
                ["style", "left", '-53px'],
                ["style", "clip", [0,340.640625,155,51.5859375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Rectangle3}": [
                ["style", "top", '349px'],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '883px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_check_6}": [
                ["style", "top", '542px'],
                ["transform", "scaleY", '0.09751'],
                ["transform", "scaleX", '0.09751'],
                ["style", "opacity", '0'],
                ["style", "left", '826px']
            ],
            "${_check_5}": [
                ["style", "top", '542px'],
                ["transform", "scaleY", '0.09751'],
                ["transform", "scaleX", '0.09751'],
                ["style", "opacity", '0'],
                ["style", "left", '449px']
            ],
            "${_Rectangle5}": [
                ["style", "top", '529px'],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["style", "left", '512px'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${_s02_02_7}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_contenidoCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '-845px'],
                ["style", "clip", [79.060546875,782.640625,295.140625,31.09375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_contenidoCopy2}": [
                ["style", "top", '9px'],
                ["style", "left", '-1263px'],
                ["style", "clip", [331.546875,1258.875,505.828125,29.3134765625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid1438", tween: [ "style", "${_contenidoCopy3}", "left", '15px', { fromValue: '1385px'}], position: 1353, duration: 918, easing: "easeOutBack" },
                { id: "eid1490", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1437", tween: [ "style", "${_contenidoCopy2}", "left", '15px', { fromValue: '-1263px'}], position: 1250, duration: 933, easing: "easeOutBack" },
                { id: "eid1492", tween: [ "style", "${_Rectangle6}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1489", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1507", tween: [ "style", "${_revisar}", "left", '1176px', { fromValue: '1175px'}], position: 1500, duration: 750, easing: "easeOutBack" },
                { id: "eid1491", tween: [ "style", "${_Rectangle5}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1466", tween: [ "style", "${_check_2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1442", tween: [ "transform", "${_check_2}", "scaleX", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1460", tween: [ "transform", "${_check_3}", "scaleY", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1448", tween: [ "transform", "${_check_1}", "scaleY", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1476", tween: [ "style", "${_check_6}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1458", tween: [ "transform", "${_check_3}", "scaleX", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1450", tween: [ "transform", "${_check_5}", "scaleX", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1446", tween: [ "transform", "${_check_1}", "scaleX", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1464", tween: [ "transform", "${_check_6}", "scaleY", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1454", tween: [ "transform", "${_check_4}", "scaleX", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1496", tween: [ "style", "${_hotspot_3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1488", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1474", tween: [ "style", "${_check_3}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1456", tween: [ "transform", "${_check_4}", "scaleY", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1444", tween: [ "transform", "${_check_2}", "scaleY", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1436", tween: [ "style", "${_contenidoCopy}", "left", '0px', { fromValue: '-845px'}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid1497", tween: [ "style", "${_hotspot_2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1452", tween: [ "transform", "${_check_5}", "scaleY", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1462", tween: [ "transform", "${_check_6}", "scaleX", '1', { fromValue: '0.09751'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1505", tween: [ "style", "${_revisar}", "top", '481px', { fromValue: '760px'}], position: 1500, duration: 750, easing: "easeOutBack" },
                { id: "eid1493", tween: [ "style", "${_hotspot_6}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1472", tween: [ "style", "${_check_4}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1470", tween: [ "style", "${_check_5}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1498", tween: [ "style", "${_hotspot_1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1495", tween: [ "style", "${_hotspot_4}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1434", tween: [ "style", "${_contenido}", "top", '0px', { fromValue: '-243px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid1468", tween: [ "style", "${_check_1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid1487", tween: [ "style", "${_Rectangle1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid1494", tween: [ "style", "${_hotspot_5}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 }            ]
        }
    }
},
"slide_5": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'b02_01_aCopy',
                    type: 'image',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b02_01_a.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'B02_02_1Copy',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(325.1923828125px 1366px 436.729248046875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/B02_02_1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'B02_02_1',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(0px 1366px 327.437744140625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/B02_02_1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'B02_02_1Copy2',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(0px 1366px 327.437744140625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/B02_02_1.png', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'btn_ingresar',
                    rect: ['382px', '406px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'b02_01_dCopy5',
                    rect: ['-5px', '-29px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(190.703125px 1366px 369.875px 792px)'],
                    fill: ['rgba(0,0,0,0)', 'images/b02_01_d.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'b02_01_dCopy4',
                    rect: ['0px', '-29px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(283.826416015625px 769.359375px 369.875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/b02_01_d.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'b02_01_dCopy3',
                    rect: ['-5px', '-29px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(190.703125px 769.359375px 277.6875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/b02_01_d.png', '0px', '0px']
                },
                {
                    id: 'robotCopy',
                    type: 'rect',
                    rect: ['146px', '-982px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.18375', '0.18375']]
                },
                {
                    type: 'rect',
                    rect: ['1px', '667px', '1366px', '101px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['390px', '406px', '190px', '173px', 'auto', 'auto'],
                    type: 'rect',
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'hotspot_ingresar',
                    display: 'none',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'image',
                    id: 'b02_01_bCopy',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(668.40625px 1366px 756.582275390625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/b02_01_b.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'b02_01_d',
                    rect: ['0', '-138px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(454.183837890625px 1366px 518.051513671875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/b02_01_d.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['69px', '45px', '790px', '534px', 'auto', 'auto'],
                    id: 'globo_bien',
                    fill: ['rgba(0,0,0,0)', 'images/globo_bien.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['604px', '510px', '80px', '80px', 'auto', 'auto'],
                    display: 'none',
                    id: 'btn_go',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/btn_go.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'btn_ingresar',
                symbolName: 'btn_ingresar',
                autoPlay: {

               }
            },
            {
                id: 'robotCopy',
                symbolName: 'robot',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_b02_01_dCopy3}": [
                ["style", "top", '-29px'],
                ["style", "background-position", [0,66.17822265625], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "clip", [190.703125,769.359375,277.6875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-5px']
            ],
            "${_B02_02_1}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,1366,327.437744140625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "background-position", [0,78.757568359375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_b02_01_dCopy5}": [
                ["style", "top", '-29px'],
                ["style", "opacity", '0'],
                ["style", "left", '-5px'],
                ["style", "clip", [190.703125,1366,369.875,792], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_B02_02_1Copy}": [
                ["style", "top", '0px'],
                ["style", "clip", [325.1923828125,1366,436.729248046875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "background-position", [0,-88.8046875], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_b02_01_aCopy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_hotspot_ingresar}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '390px']
            ],
            "${_btn_go}": [
                ["transform", "scaleX", '0.2523'],
                ["style", "opacity", '0'],
                ["style", "left", '604px'],
                ["style", "width", '80px'],
                ["style", "top", '510px'],
                ["transform", "scaleY", '0.25231'],
                ["style", "height", '80px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer']
            ],
            "${_b02_01_dCopy4}": [
                ["style", "top", '-29px'],
                ["style", "background-position", [0,-51.513671875], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "clip", [283.82641601563,769.359375,369.875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_B02_02_1Copy2}": [
                ["style", "top", '0px'],
                ["style", "background-position", [0,78.757568359375], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "clip", [582.80224609375,1366,663.179931640625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_b02_01_bCopy}": [
                ["style", "top", '0px'],
                ["style", "background-position", [0,116.61791992187], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "clip", [668.40625,1366,756.58227539063,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_b02_01_d}": [
                ["style", "top", '-138px'],
                ["style", "opacity", '0'],
                ["style", "clip", [454.183837890625,1366,518.051513671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1366px']
            ],
            "${_btn_ingresar}": [
                ["style", "top", '339px'],
                ["style", "opacity", '0'],
                ["style", "left", '382px'],
                ["style", "display", 'block']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none']
            ],
            "${_robotCopy}": [
                ["style", "top", '-982px'],
                ["transform", "scaleY", '0.18375'],
                ["transform", "scaleX", '0.18375'],
                ["style", "opacity", '1'],
                ["style", "left", '729px']
            ],
            "${_globo_bien}": [
                ["style", "top", '45px'],
                ["transform", "scaleY", '-0.0378'],
                ["transform", "scaleX", '0.03778'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '69px'],
                ["style", "-webkit-transform-origin", [97.2,78.06], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [97.2,78.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [97.2,78.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [97.2,78.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [97.2,78.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [97.2,78.06],{valueTemplate:'@@0@@% @@1@@%'}]
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
                { id: "eid1397", tween: [ "style", "${_hotspot_ingresar}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 500 },
                { id: "eid1414", tween: [ "style", "${_robotCopy}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeOutCubic" },
                { id: "eid1364", tween: [ "style", "${_b02_01_bCopy}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,116.61791992187]}], position: 0, duration: 1000, easing: "swing" },
                { id: "eid1403", tween: [ "transform", "${_robotCopy}", "scaleY", '0.24259', { fromValue: '0.18375'}], position: 1750, duration: 750, easing: "easeOutCirc" },
                { id: "eid1399", tween: [ "style", "${_robotCopy}", "top", '-771px', { fromValue: '-982px'}], position: 1750, duration: 750, easing: "easeOutCirc" },
                { id: "eid1531", tween: [ "transform", "${_btn_go}", "scaleX", '1', { fromValue: '0.2523'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1430", tween: [ "style", "${_b02_01_d}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
                { id: "eid1432", tween: [ "style", "${_b02_01_d}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 500 },
                { id: "eid1357", tween: [ "style", "${_b02_01_dCopy5}", "opacity", '1', { fromValue: '0'}], position: 1123, duration: 56, easing: "swing" },
                { id: "eid1358", tween: [ "style", "${_b02_01_dCopy5}", "opacity", '0', { fromValue: '1'}], position: 1179, duration: 71, easing: "swing" },
                { id: "eid1359", tween: [ "style", "${_b02_01_dCopy5}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 141, easing: "swing" },
                { id: "eid1360", tween: [ "style", "${_b02_01_dCopy5}", "opacity", '0', { fromValue: '1'}], position: 1391, duration: 148, easing: "swing" },
                { id: "eid1361", tween: [ "style", "${_b02_01_dCopy5}", "opacity", '1', { fromValue: '0'}], position: 1539, duration: 175, easing: "swing" },
                { id: "eid1394", tween: [ "style", "${_b02_01_dCopy5}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 500 },
                { id: "eid1415", tween: [ "style", "${_b02_01_aCopy}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 750 },
                { id: "eid1354", tween: [ "style", "${_robotCopy}", "left", '161px', { fromValue: '729px'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid1398", tween: [ "style", "${_robotCopy}", "left", '127px', { fromValue: '161px'}], position: 1750, duration: 500 },
                { id: "eid1539", tween: [ "style", "${_robotCopy}", "left", '90px', { fromValue: '127px'}], position: 2250, duration: 250, easing: "easeOutCirc" },
                { id: "eid1355", tween: [ "style", "${_b02_01_dCopy3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,66.17822265625]}], position: 500, duration: 750, easing: "swing" },
                { id: "eid1356", tween: [ "style", "${_b02_01_dCopy4}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-51.513671875]}], position: 596, duration: 750, easing: "swing" },
                { id: "eid1417", tween: [ "style", "${_B02_02_1}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 750 },
                { id: "eid1522", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 1864, duration: 0 },
                { id: "eid1404", tween: [ "style", "${_B02_02_1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,78.757568359375]}], position: 3500, duration: 750, easing: "easeOutCubic" },
                { id: "eid1533", tween: [ "transform", "${_btn_go}", "scaleY", '1', { fromValue: '0.25231'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1363", tween: [ "style", "${_btn_ingresar}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "swing" },
                { id: "eid1396", tween: [ "style", "${_btn_ingresar}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 500 },
                { id: "eid1524", tween: [ "transform", "${_globo_bien}", "scaleX", '1', { fromValue: '0.03778'}], position: 1750, duration: 505, easing: "easeOutBack" },
                { id: "eid1420", tween: [ "style", "${_B02_02_1Copy2}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 750 },
                { id: "eid1405", tween: [ "style", "${_B02_02_1Copy}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-88.8046875]}], position: 3500, duration: 750, easing: "easeOutCubic" },
                { id: "eid1419", tween: [ "style", "${_B02_02_1Copy2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,78.757568359375]}], position: 3500, duration: 750, easing: "easeOutCubic" },
                { id: "eid1526", tween: [ "transform", "${_globo_bien}", "scaleY", '1', { fromValue: '-0.0378'}], position: 1750, duration: 505, easing: "easeOutBack" },
                { id: "eid1528", tween: [ "style", "${_globo_bien}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 505, easing: "easeOutBack" },
                { id: "eid1538", tween: [ "style", "${_globo_bien}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750 },
                { id: "eid1416", tween: [ "style", "${_b02_01_bCopy}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 750 },
                { id: "eid1395", tween: [ "style", "${_b02_01_dCopy4}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 500 },
                { id: "eid1418", tween: [ "style", "${_B02_02_1Copy}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 750 },
                { id: "eid1402", tween: [ "transform", "${_robotCopy}", "scaleX", '0.24259', { fromValue: '0.18375'}], position: 1750, duration: 750, easing: "easeOutCirc" },
                { id: "eid1536", tween: [ "style", "${_btn_go}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeOutBack" },
                { id: "eid1540", tween: [ "style", "${_btn_go}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid1535", tween: [ "style", "${_btn_go}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
                { id: "eid1537", tween: [ "style", "${_btn_go}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750 },
                { id: "eid1529", tween: [ "style", "${_globo_bien}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeOutBack" },
                { id: "eid1406", tween: [ "style", "${_btn_ingresar}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "easeOutCubic" },
                { id: "eid1362", tween: [ "style", "${_btn_ingresar}", "top", '406px', { fromValue: '339px'}], position: 1000, duration: 500, easing: "swing" },
                { id: "eid1393", tween: [ "style", "${_b02_01_dCopy3}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 500 },
                { id: "eid1365", tween: [ "style", "${_hotspot_ingresar}", "display", 'block', { fromValue: 'none'}], position: 1714, duration: 0, easing: "easeOutBack" },
                { id: "eid1407", tween: [ "style", "${_hotspot_ingresar}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "easeOutCubic" }            ]
        }
    }
},
"Hot_Spot": {
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '40px', '40px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '40px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.35)'],
                ["style", "height", '40px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            labels: {
                "iniciar": 0,
                "loop": 2000
            },
            timeline: [
                { id: "eid694", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(255,255,255,0.35)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.35)'}], position: 1000, duration: 0 },
                { id: "eid695", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid696", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeInQuad" }            ]
        }
    }
},
"slide_6": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_7": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
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
},
"slide_8": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1366px']
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
},
"slide_9": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1366px']
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
},
"slide_10": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1366px']
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
},
"slide_11": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_12": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_13": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_14": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_15": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_16": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_17": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_18": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_19": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_20": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_21": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_22": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_23": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_24": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_25": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_26": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_27": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_28": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_29": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"slide_30": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px'],
                ["style", "overflow", 'hidden']
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
},
"bt_next": {
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
                    id: 'nav_next',
                    rect: ['-8px', '-8px', '70px', '70px', 'auto', 'auto'],
                    clip: ['rect(0px 70px 70px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/nav.png', '0px', '0px', '70px', '70px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '70px', '70px', 'auto', 'auto'],
                    id: 'hotspot_area_next',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotspot_area_next}": [
                ["style", "left", '0px'],
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '54px']
            ],
            "${_nav_next}": [
                ["style", "top", '-8px'],
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-8px'],
                ["style", "height", '70px'],
                ["style", "background-size", [145,145], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "background-position", [-84,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 1000,
                "up": 2000
            },
            timeline: [
                { id: "eid1194", tween: [ "style", "${_nav_next}", "background-position", [-84,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-84,0]}], position: 0, duration: 0 },
                { id: "eid1195", tween: [ "style", "${_nav_next}", "background-position", [-84,-65.666992], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-84,0]}], position: 1000, duration: 0 },
                { id: "eid1808", tween: [ "style", "${_nav_next}", "background-position", [-84,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-84,-65.666992]}], position: 2000, duration: 0 },
                { id: "eid1368", tween: [ "style", "${_nav_next}", "left", '-8px', { fromValue: '-8px'}], position: 0, duration: 0 }            ]
        }
    }
},
"bt_back": {
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
                    id: 'nav_back',
                    rect: ['-7px', '-9px', '145px', '145px', 'auto', 'auto'],
                    clip: ['rect(0px 145px 145px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/nav.png', '0px', '0px', '70px', '70px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '70px', '70px', 'auto', 'auto'],
                    id: 'hotspot_area_back',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotspot_area_back}": [
                ["style", "height", '70px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ],
            "${_nav_back}": [
                ["style", "top", '-9px'],
                ["style", "clip", [0,70,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [12,-2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '145px'],
                ["style", "background-size", [145,145], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-7px'],
                ["style", "width", '145px']
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '54px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 1000,
                "up": 2000
            },
            timeline: [
                { id: "eid1191", tween: [ "style", "${_nav_back}", "background-position", [12,-2], { valueTemplate: '@@0@@px @@1@@px', fromValue: [12,-2]}], position: 0, duration: 0 },
                { id: "eid1190", tween: [ "style", "${_nav_back}", "background-position", [11,-67], { valueTemplate: '@@0@@px @@1@@px', fromValue: [12,-2]}], position: 1000, duration: 0 },
                { id: "eid1807", tween: [ "style", "${_nav_back}", "background-position", [12,-2], { valueTemplate: '@@0@@px @@1@@px', fromValue: [11,-67]}], position: 2000, duration: 0 }            ]
        }
    }
},
"slide_40": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '1366px']
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
},
"menu": {
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
                    type: 'rect',
                    rect: ['-243px', '58px', '299px', '642px', 'auto', 'auto'],
                    display: 'none',
                    id: 'Rectangle2',
                    opacity: 0.93,
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    fill: ['rgba(13,45,61,1)']
                },
                {
                    type: 'image',
                    rect: ['-56px', '0px', '110px', '115px', 'auto', 'auto'],
                    display: 'block',
                    id: 'menu',
                    clip: ['rect(0px 110px 57px -1px)'],
                    fill: ['rgba(0,0,0,0)', 'images/menu.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'menuCopy',
                    rect: ['-56px', '-56px', '110px', '115px', 'auto', 'auto'],
                    clip: ['rect(58px 108.57470703125px 115px 6px)'],
                    fill: ['rgba(0,0,0,0)', 'images/menu.png', '-0.34228515624905px', '-0.34252929687447px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-245px', '58', '299px', '642px', 'auto', 'auto'],
                    id: 'cont_menu',
                    fill: ['rgba(0,0,0,0)', 'images/cont_menu.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cont_menu}": [
                ["style", "left", '54px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.93'],
                ["style", "left", '56px']
            ],
            "${symbolSelector}": [
                ["style", "height", '57px'],
                ["style", "width", '54px']
            ],
            "${_menuCopy}": [
                ["style", "top", '-56px'],
                ["style", "left", '-56px'],
                ["style", "opacity", '0'],
                ["style", "clip", [58,108.57470703125,115,6], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-0.34228515624905,-0.34252929687447], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_menu}": [
                ["style", "top", '0px'],
                ["style", "left", '-56px'],
                ["style", "clip", [0,110,57,-1], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'block']
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
                { id: "eid1379", tween: [ "style", "${_cont_menu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1340", tween: [ "style", "${_cont_menu}", "left", '-245px', { fromValue: '54px'}], position: 0, duration: 500, easing: "easeOutCirc" },
                { id: "eid1342", tween: [ "style", "${_Rectangle2}", "left", '-243px', { fromValue: '56px'}], position: 0, duration: 500, easing: "easeOutCirc" },
                { id: "eid1378", tween: [ "style", "${_menu}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid1338", tween: [ "style", "${_menuCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid1380", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"mapa": {
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
                    id: 'menu',
                    rect: ['0px', '0px', '110px', '115px', 'auto', 'auto'],
                    clip: ['rect(0px 52px 55px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/menu.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'menuCopy',
                    rect: ['0px', '-60px', '110px', '115px', 'auto', 'auto'],
                    clip: ['rect(61px 53px 115px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/menu.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_menuCopy}": [
                ["style", "top", '-60px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [61,53,115,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_menu}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,52,55,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '57px'],
                ["style", "width", '54px']
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
                { id: "eid1338", tween: [ "style", "${_menuCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
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
                ["style", "-webkit-transform-origin", [17.72,82.22], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [17.72,82.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [2570,1290,2740,750], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '66px']
            ],
            "${_robot_conpes}": [
                ["style", "top", '-250px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [45.07,46.44], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [45.07,46.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [0,4010,3240,1390.908203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1755px']
            ],
            "${_robot_cabeza}": [
                ["style", "top", '154px'],
                ["style", "-webkit-transform-origin", [48.51,91.48], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.51,91.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '261px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '2663px'],
                ["style", "width", '1905px']
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
                    rect: ['-2268px', '-757px', '5760px', '3240px', 'auto', 'auto'],
                    transform: [[0, 0], ['32']],
                    type: 'image',
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
                    rect: ['-1004px', '528px', '5760px', '3240px', 'auto', 'auto'],
                    id: 'manga',
                    type: 'image',
                    clip: ['rect(970px 4158px 1230px 3944px)'],
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
                    id: 'manga2',
                    type: 'image',
                    clip: ['rect(970px 4158px 1230px 3944px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs6.png', '-288px', '0px']
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
            "${_manga2}": [
                ["style", "-webkit-transform-origin", [69.69,34.32], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [69.69,34.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [69.69,34.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [69.69,34.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [69.69,34.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [69.69,34.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "background-position", [-288,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '528px'],
                ["style", "left", '-1004px'],
                ["style", "clip", [970,4158,1230,3944], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_brazo_der2}": [
                ["style", "-webkit-transform-origin", [91.84,71.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [91.84,71.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-91deg'],
                ["style", "display", 'none'],
                ["style", "top", '-592px'],
                ["style", "clip", [2628.903564453125,5560,2970,5080], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-2548px']
            ],
            "${_brazo_der1}": [
                ["style", "top", '272px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "-webkit-transform-origin", [84.34,41.71], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.34,41.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-2230px'],
                ["style", "clip", [1120,5720,1500,5220.9697265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_manga}": [
                ["style", "top", '528px'],
                ["style", "-webkit-transform-origin", [80.03,73.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-1004px'],
                ["style", "clip", [970,4158,1230,3944], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '3240px'],
                ["style", "width", '5760px']
            ],
            "${_brazo_izq1}": [
                ["style", "-webkit-transform-origin", [87.67,16.05], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [87.67,16.05],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "top", '1112px'],
                ["style", "clip", [280,4360.9091796875,700,4100], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-2052px']
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
                ["style", "clip", [2432.854736328125,4790,3050,3960], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1795px'],
                ["style", "top", '-962px']
            ],
            "${_tronco}": [
                ["style", "-webkit-transform-origin", [13.54,45.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.54,45.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [1340,1340,2530,380], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1830px'],
                ["style", "top", '0px']
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
                { id: "eid130", tween: [ "style", "${_brazo_izq1}", "clip", [280,5170,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,4360.9091796875,700,4100]}], position: 0, duration: 750, easing: "swing" },
                { id: "eid134", tween: [ "style", "${_brazo_izq1}", "clip", [280,4360.9091796875,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,5170,700,4100]}], position: 3500, duration: 750, easing: "swing" },
                { id: "eid136", tween: [ "style", "${_brazo_izq1}", "clip", [280,4170,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,4360.9091796875,700,4100]}], position: 4250, duration: 500, easing: "swing" },
                { id: "eid187", tween: [ "style", "${_brazo_izq1}", "clip", [280,4360.9091796875,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,4170,700,4100]}], position: 11500, duration: 500, easing: "swing" },
                { id: "eid186", tween: [ "style", "${_brazo_izq1}", "clip", [280,5170,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,4360.9091796875,700,4100]}], position: 12000, duration: 750, easing: "swing" },
                { id: "eid185", tween: [ "style", "${_brazo_izq1}", "clip", [280,4360.9091796875,700,4100], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [280,5170,700,4100]}], position: 17250, duration: 750, easing: "swing" },
                { id: "eid140", tween: [ "style", "${_brazo_izq1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid141", tween: [ "style", "${_brazo_izq1}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "swing" },
                { id: "eid183", tween: [ "style", "${_brazo_izq1}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0, easing: "swing" },
                { id: "eid47", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,4761.87890625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5220.9697265625]}], position: 0, duration: 750, easing: "swing" },
                { id: "eid55", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5220.9697265625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,4761.87890625]}], position: 3500, duration: 750, easing: "swing" },
                { id: "eid60", tween: [ "style", "${_brazo_der1}", "clip", [1134.611572265625,5720,1500,5413.4248046875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5220.9697265625]}], position: 4250, duration: 90, easing: "swing" },
                { id: "eid116", tween: [ "style", "${_brazo_der1}", "clip", [1138.18212890625,5720,1500,5500.04541015625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1134.611572265625,5720,1500,5413.4248046875]}], position: 4340, duration: 72, easing: "swing" },
                { id: "eid115", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5684.60693359375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1138.18212890625,5720,1500,5500.04541015625]}], position: 4412, duration: 338, easing: "swing" },
                { id: "eid77", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5557.1962890625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5684.60693359375]}], position: 11500, duration: 89, easing: "swing" },
                { id: "eid117", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5220.9697265625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5557.1962890625]}], position: 11589, duration: 411, easing: "swing" },
                { id: "eid76", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,4761.87890625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,5220.9697265625]}], position: 12000, duration: 750, easing: "swing" },
                { id: "eid75", tween: [ "style", "${_brazo_der1}", "clip", [1120,5720,1500,5220.9697265625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1120,5720,1500,4761.87890625]}], position: 17250, duration: 750, easing: "swing" }            ]
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
            "${symbolSelector}": [
                ["style", "height", '1004px'],
                ["style", "width", '1272px']
            ],
            "${_boca}": [
                ["style", "top", '173px'],
                ["style", "background-position", [-8,-4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "-webkit-transform-origin", [13.54,29.66], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [344,3714,580,3056], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-2802px']
            ],
            "${_cabeza}": [
                ["style", "top", '-47px'],
                ["style", "-webkit-transform-origin", [13.54,29.66], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-150px'],
                ["style", "clip", [60,1390,1040,180], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_ojos}": [
                ["style", "-webkit-transform-origin", [13.54,29.66], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.54,29.66],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "background-position", [8,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '178px'],
                ["style", "left", '-1882px'],
                ["style", "clip", [220,2890,480,2072], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid1", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_ojos}", "background-position", [8,-1583.5668945313], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 1000, duration: 0 },
                { id: "eid397", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,-1556]}], position: 1500, duration: 0 },
                { id: "eid398", tween: [ "style", "${_ojos}", "background-position", [8,-1583.5668945313], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 1750, duration: 0 },
                { id: "eid399", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,-1583.5668945313]}], position: 2000, duration: 0 },
                { id: "eid35", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 4000, duration: 0 },
                { id: "eid39", tween: [ "style", "${_ojos}", "background-position", [8,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,-2280]}], position: 4750, duration: 0 },
                { id: "eid5", tween: [ "style", "${_ojos}", "background-position", [8,-512], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8,0]}], position: 7000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_boca}", "background-position", [-8,-1604], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-8,-4]}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_boca}", "background-position", [-8,-4], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-8,-1604]}], position: 4000, duration: 0 },
                { id: "eid38", tween: [ "style", "${_boca}", "background-position", [-8,-4], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-8,-2272]}], position: 4750, duration: 0 },
                { id: "eid4", tween: [ "style", "${_boca}", "background-position", [-8,-532], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-8,-4]}], position: 7000, duration: 0 }            ]
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
            "${_escu}": [
                ["style", "-webkit-transform-origin", [80.03,73.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-621px'],
                ["style", "opacity", '1'],
                ["style", "clip", [1110,850,1302,668], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-1074px']
            ],
            "${symbolSelector}": [
                ["style", "height", '244px'],
                ["style", "width", '260px']
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
"btn_ingresar": {
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
                    rect: ['-389px', '-414px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'b02_01_c',
                    display: 'none',
                    clip: ['rect(404.234375px 600.8828125px 600.6640625px 384.1171875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/b02_01_c2.png', '-221.75px', '0px']
                },
                {
                    rect: ['-389px', '-414px', '1366px', '768px', 'auto', 'auto'],
                    type: 'image',
                    id: 'b02_01_cCopy',
                    display: 'block',
                    clip: ['rect(394.1328125px 596.046875px 610.90625px 382.6875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/b02_01_c2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${_b02_01_c}": [
                ["style", "top", '-414px'],
                ["style", "display", 'none'],
                ["style", "left", '-389px'],
                ["style", "background-position", [-221.75,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [404.234375,600.8828125,600.6640625,384.1171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_b02_01_cCopy}": [
                ["style", "display", 'block'],
                ["style", "top", '-414px'],
                ["style", "clip", [394.1328125,596.046875,610.90625,382.6875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-389px']
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
                { id: "eid1367", tween: [ "style", "${_b02_01_c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1369", tween: [ "style", "${_b02_01_c}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1366", tween: [ "style", "${_b02_01_cCopy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }            ]
        }
    }
},
"escudo_1": {
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
                    id: 'escu',
                    rect: ['-621px', '-1074px', '5760px', '3240px', 'auto', 'auto'],
                    clip: ['rect(1110px 850px 1302px 668px)'],
                    fill: ['rgba(0,0,0,0)', 'images/PERSONAJE_lipsync_cs67.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_escu}": [
                ["style", "-webkit-transform-origin", [80.03,73.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.03,73.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-621px'],
                ["style", "opacity", '1'],
                ["style", "clip", [1110,850,1302,668], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-1074px']
            ],
            "${symbolSelector}": [
                ["style", "height", '244px'],
                ["style", "width", '260px']
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
"miga": {
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
                    rect: ['0px', '0px', '1366px', '59px', 'auto', 'auto'],
                    id: 'miga',
                    type: 'image',
                    clip: ['rect(0px 498.4326171875px 59px 319.7001953125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/miga.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '59px', 'auto', 'auto'],
                    id: 'migaCopy3',
                    type: 'image',
                    clip: ['rect(0px 316.63671875px 59px 189.18896484375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/miga.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '59px', 'auto', 'auto'],
                    id: 'migaCopy4',
                    type: 'image',
                    clip: ['rect(0px 190.32373046875px 59px 37.837890625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/miga.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_migaCopy4}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,190.32373046875,59,37.837890625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,54.053955078125], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_miga}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,498.4326171875,59,319.7001953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,59.45947265625], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '59px'],
                ["style", "width", '1366px']
            ],
            "${_migaCopy3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,316.63671875,59,189.18896484375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,59.45947265625], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 623,
            autoPlay: true,
            timeline: [
                { id: "eid1431", tween: [ "style", "${_migaCopy4}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,54.053955078125]}], position: 0, duration: 467, easing: "easeOutCirc" },
                { id: "eid1435", tween: [ "style", "${_miga}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,59.45947265625]}], position: 156, duration: 467, easing: "easeOutCirc" },
                { id: "eid1433", tween: [ "style", "${_migaCopy3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,59.45947265625]}], position: 73, duration: 467, easing: "easeOutCirc" }            ]
        }
    }
},
"check": {
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
                    display: 'none',
                    rect: ['0px', '0px', '50px', '48px', 'auto', 'auto'],
                    id: 'check-off',
                    fill: ['rgba(0,0,0,0)', 'images/check-off.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '50px', '48px', 'auto', 'auto'],
                    id: 'check-on',
                    fill: ['rgba(0,0,0,0)', 'images/check-on.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_check-on}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '50px']
            ],
            "${_check-off}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "down": 250
            },
            timeline: [
                { id: "eid1439", tween: [ "style", "${_check-on}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid1440", tween: [ "style", "${_check-off}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 }            ]
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
                    rect: ['27px', '0px', '24px', '155px', 'auto', 'auto'],
                    transform: [[0, 0], [], ['-19']],
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.42)']
                },
                {
                    rect: ['56px', '0px', '9px', '155px', 'auto', 'auto'],
                    transform: [[0, 0], [], ['-19']],
                    id: 'Rectangle2Copy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.42)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["transform", "skewX", '-19deg'],
                ["style", "height", '155px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '27px'],
                ["color", "background-color", 'rgba(255,255,255,0.42)']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(255,255,255,0.42)'],
                ["style", "top", '0px'],
                ["transform", "skewX", '-19deg'],
                ["style", "height", '155px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '56px'],
                ["style", "width", '9px']
            ],
            "${symbolSelector}": [
                ["style", "height", '155px'],
                ["style", "width", '91px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid1482", tween: [ "style", "${_Rectangle2}", "opacity", '0.70414870689655', { fromValue: '0.000000'}], position: 0, duration: 333 },
                { id: "eid1486", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '0.7041490077972412'}], position: 667, duration: 333 },
                { id: "eid1483", tween: [ "style", "${_Rectangle2Copy}", "left", '358px', { fromValue: '56px'}], position: 0, duration: 1000 },
                { id: "eid1484", tween: [ "style", "${_Rectangle2}", "left", '329px', { fromValue: '27px'}], position: 0, duration: 1000 },
                { id: "eid1481", tween: [ "style", "${_Rectangle2Copy}", "opacity", '0.70414870689655', { fromValue: '0.000000'}], position: 0, duration: 333 },
                { id: "eid1485", tween: [ "style", "${_Rectangle2Copy}", "opacity", '0', { fromValue: '0.7041490077972412'}], position: 667, duration: 333 }            ]
        }
    }
},
"guia_usuario": {
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
                    rect: ['2px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    rect: ['1298px', '79px', '55px', '55px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'cerrar',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cerrar}": [
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17418,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"info": {
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
                    rect: ['0px', '0px', '34px', '79px', 'auto', 'auto'],
                    type: 'image',
                    id: 'informacion',
                    display: 'block',
                    clip: ['rect(0px 34px 38.37255859375px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/informacion.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '34px', '79px', 'auto', 'auto'],
                    type: 'image',
                    id: 'informacionCopy',
                    display: 'none',
                    clip: ['rect(0px 34px 40.17431640625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/informacion.png', '0px', '-38.465087890625px']
                },
                {
                    rect: ['-11px', '7px', '1px', '29px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(14,210,239,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_informacionCopy}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "background-position", [0,-38.465087890625], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,34,40.17431640625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '7px'],
                ["style", "height", '29px'],
                ["color", "background-color", 'rgba(14,210,239,1.00)'],
                ["style", "left", '-11px'],
                ["style", "width", '1px']
            ],
            "${_informacion}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,34,38.37255859375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '34px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 511,
            autoPlay: true,
            labels: {
                "up": 0,
                "down": 511
            },
            timeline: [
                { id: "eid1518", tween: [ "style", "${_informacionCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1519", tween: [ "style", "${_informacion}", "display", 'none', { fromValue: 'block'}], position: 511, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-5531445");
