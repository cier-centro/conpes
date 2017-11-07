/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Helvetica']='';
    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'true',

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
                id: 'hotspot_solucion',
                type: 'rect',
                rect: ['992px', '696px','67px','63px','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 0,
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'bt_solucion',
                type: 'rect',
                rect: ['992px', '696px','auto','auto','auto', 'auto'],
                opacity: 0
            },
            {
                id: 'error',
                type: 'audio',
                tag: 'audio',
                rect: ['1358', '709','320px','45px','auto', 'auto'],
                source: ['media/error.mp3','media/error.ogg'],
                preload: 'true'
            },
            {
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['1358', '709','320px','45px','auto', 'auto'],
                source: ['media/success.mp3','media/success.ogg'],
                preload: 'true'
            },
            {
                id: 'contenido',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'ok_bad',
                type: 'rect',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'InputA_1',
                display: 'none',
                type: 'rect',
                rect: ['111px', '509px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputB_1',
                display: 'none',
                type: 'rect',
                rect: ['221px', '508px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputA_2',
                display: 'none',
                type: 'rect',
                rect: ['368px', '509px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputB_2',
                display: 'none',
                type: 'rect',
                rect: ['478px', '508px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputA_3',
                display: 'none',
                type: 'rect',
                rect: ['626px', '509px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputB_3',
                display: 'none',
                type: 'rect',
                rect: ['739px', '508px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputA_4',
                display: 'none',
                type: 'rect',
                rect: ['888px', '509px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputB_4',
                display: 'none',
                type: 'rect',
                rect: ['1001px', '508px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputA_5',
                display: 'none',
                type: 'rect',
                rect: ['1145px', '509px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'InputB_5',
                display: 'none',
                type: 'rect',
                rect: ['1258px', '508px','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                fill: ["rgba(150,150,150,0.00)"],
                stroke: [1,"rgba(139,139,139,0.50)","none"],
                userClass: "radio-on"
            },
            {
                id: 'bad1',
                display: 'none',
                type: 'rect',
                rect: ['23', '177px','auto','auto','auto', 'auto']
            },
            {
                id: 'ok1',
                display: 'none',
                type: 'rect',
                rect: ['23', '177px','auto','auto','auto', 'auto']
            },
            {
                id: 'fondo_bt',
                type: 'image',
                rect: ['896px', '703px','683px','65px','auto', 'auto'],
                clip: ['rect(0px 472.7265625px 65px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"fondo_bt.png",'0px','0px']
            },
            {
                id: 'bt_validar',
                type: 'rect',
                rect: ['950px', '696px','auto','auto','auto', 'auto']
            },
            {
                id: 'bt_reiniciar',
                type: 'rect',
                rect: ['1025px', '696px','auto','auto','auto', 'auto']
            },
            {
                id: 'bt_ayuda',
                type: 'rect',
                rect: ['1100px', '696px','auto','auto','auto', 'auto']
            },
            {
                id: 'hotspot_ayuda',
                type: 'rect',
                rect: ['1100px', '696px','66px','64px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_reiniciar',
                type: 'rect',
                rect: ['1025px', '696px','66px','60px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_validar',
                type: 'rect',
                rect: ['950px', '696px','66px','61px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'brillo_1',
                display: 'none',
                type: 'rect',
                rect: ['906', '586','auto','auto','auto', 'auto']
            },
            {
                id: 'hotspot_cc',
                display: 'none',
                type: 'rect',
                rect: ['925px', '581px','402px','96px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'pop_cc',
                type: 'rect',
                rect: ['2', '1','auto','auto','auto', 'auto']
            },
            {
                id: 'resp_incorrecta',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"msg_incorrecto.png",'0px','0px']
            },
            {
                id: 'resp_correcta',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"msg_correcto.png",'0px','0px']
            },
            {
                id: 'help_radio',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1366px','768px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"help_radio.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'bt_reiniciar',
                symbolName: 'bt_reiniciar',
                autoPlay: {

                }
            },
            {
                id: 'contenido',
                symbolName: 'contenido',
                autoPlay: {

                }
            },
            {
                id: 'bt_validar',
                symbolName: 'bt_validar',
                autoPlay: {

                }
            },
            {
                id: 'bt_solucion',
                symbolName: 'bt_solucion',
                autoPlay: {

                }
            },
            {
                id: 'ok1',
                symbolName: 'ok',
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
                id: 'pop_cc',
                symbolName: 'pop_cc',
                autoPlay: {

                }
            },
            {
                id: 'bt_ayuda',
                symbolName: 'bt_ayuda',
                autoPlay: {

                }
            },
            {
                id: 'bad1',
                symbolName: 'bad',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_ok1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '696px'],
                ["style", "height", '60px'],
                ["style", "left", '1025px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '66px']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '696px'],
                ["style", "height", '61px'],
                ["style", "left", '950px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '66px']
            ],
            "${_InputB_4}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "cursor", 'pointer'],
                ["style", "border-style", 'none'],
                ["style", "left", '1001px'],
                ["style", "width", '35px'],
                ["style", "top", '508px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '1px'],
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '1']
            ],
            "${_InputA_4}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '888px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '1px'],
                ["style", "width", '35px'],
                ["style", "top", '509px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '1'],
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_bad1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_fondo_bt}": [
                ["style", "top", '703px'],
                ["style", "left", '896px'],
                ["style", "clip", [0,472.7265625,65,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_InputB_2}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '478px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '35px'],
                ["style", "top", '508px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '1px'],
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'none']
            ],
            "${_brillo_1}": [
                ["style", "display", 'none']
            ],
            "${_InputA_3}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '35px'],
                ["style", "top", '509px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "opacity", '1'],
                ["style", "left", '626px']
            ],
            "${_bt_solucion}": [
                ["style", "top", '696px'],
                ["style", "opacity", '0'],
                ["style", "left", '992px']
            ],
            "${_help_radio}": [
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_InputA_1}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '111px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '1px'],
                ["style", "width", '35px'],
                ["style", "top", '509px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer']
            ],
            "${_bt_reiniciar}": [
                ["style", "left", '1025px'],
                ["style", "top", '696px']
            ],
            "${_hotspot_cc}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_InputB_3}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '739px'],
                ["style", "width", '35px'],
                ["style", "top", '508px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-width", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_InputB_1}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '1'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '35px'],
                ["style", "top", '508px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-width", '1px'],
                ["style", "left", '221px']
            ],
            "${_bt_ayuda}": [
                ["style", "left", '1100px'],
                ["style", "top", '696px']
            ],
            "${_resp_correcta}": [
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_InputB_5}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '1'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '35px'],
                ["style", "top", '508px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-width", '1px'],
                ["style", "left", '1258px']
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '992px'],
                ["style", "top", '696px'],
                ["style", "height", '63px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '67px']
            ],
            "${_InputA_5}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "cursor", 'pointer'],
                ["style", "border-style", 'none'],
                ["style", "left", '1145px'],
                ["style", "width", '35px'],
                ["style", "top", '509px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "opacity", '1'],
                ["style", "border-width", '1px']
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '696px'],
                ["style", "height", '64px'],
                ["style", "left", '1100px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '66px']
            ],
            "${_ok37}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_box_01}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "left", '34px'],
                ["style", "width", '446px'],
                ["style", "top", '226px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '282px']
            ],
            "${_bt_validar}": [
                ["style", "top", '696px'],
                ["style", "left", '950px']
            ],
            "${_InputA_2}": [
                ["color", "background-color", 'rgba(150,150,150,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "cursor", 'pointer'],
                ["style", "border-style", 'none'],
                ["style", "left", '368px'],
                ["style", "width", '35px'],
                ["style", "top", '509px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '1'],
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '1px']
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
                { id: "eid1164", tween: [ "style", "${_hotspot_cc}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1163", tween: [ "style", "${_InputA_5}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1155", tween: [ "style", "${_InputA_2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1152", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1156", tween: [ "style", "${_InputB_1}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1162", tween: [ "style", "${_InputB_5}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1153", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1108", tween: [ "style", "${_ok1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1160", tween: [ "style", "${_InputB_4}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1157", tween: [ "style", "${_InputA_1}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1165", tween: [ "style", "${_brillo_1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid497", tween: [ "gradient", "${_box_01}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
                { id: "eid1161", tween: [ "style", "${_InputA_4}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1154", tween: [ "style", "${_InputB_2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1109", tween: [ "style", "${_bad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid888", tween: [ "style", "${_ok37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1159", tween: [ "style", "${_InputB_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1151", tween: [ "style", "${_help_radio}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1158", tween: [ "style", "${_InputA_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 }            ]
        }
    }
},
"ok": {
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
                    id: 'ok',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ok.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ok}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
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
"bad": {
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
                    id: 'bad',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bad.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
            ],
            "${_bad}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
"bt_ayuda": {
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
                    id: 'botones22',
                    type: 'image',
                    rect: ['-223px', '0', '290px', '140px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botones2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px'],
                ["style", "overflow", 'hidden']
            ],
            "${_botones22}": [
                ["style", "top", '0px'],
                ["style", "left", '-223px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 655,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 655
            },
            timeline: [
                { id: "eid1414", tween: [ "style", "${_botones22}", "left", '-223px', { fromValue: '-223px'}], position: 0, duration: 0 },
                { id: "eid1415", tween: [ "style", "${_botones22}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1416", tween: [ "style", "${_botones22}", "top", '-73px', { fromValue: '0px'}], position: 655, duration: 0 }            ]
        }
    }
},
"bt_reiniciar": {
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
                    id: 'botones23',
                    type: 'image',
                    rect: ['-154px', '0', '290px', '140px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botones2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones23}": [
                ["style", "left", '-154px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 655,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 655
            },
            timeline: [
                { id: "eid1418", tween: [ "style", "${_botones23}", "left", '-154px', { fromValue: '-154px'}], position: 0, duration: 0 },
                { id: "eid1419", tween: [ "style", "${_botones23}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1420", tween: [ "style", "${_botones23}", "top", '-72px', { fromValue: '0px'}], position: 655, duration: 0 }            ]
        }
    }
},
"bt_solucion": {
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
                    id: 'botones24',
                    type: 'image',
                    rect: ['-78px', '0', '290px', '140px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botones2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px'],
                ["style", "overflow", 'hidden']
            ],
            "${_botones24}": [
                ["style", "left", '-78px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 655,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 655
            },
            timeline: [
                { id: "eid1423", tween: [ "style", "${_botones24}", "left", '-78px', { fromValue: '-78px'}], position: 0, duration: 0 },
                { id: "eid1521", tween: [ "style", "${_botones24}", "left", '-78px', { fromValue: '-78px'}], position: 655, duration: 0 },
                { id: "eid1422", tween: [ "style", "${_botones24}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1425", tween: [ "style", "${_botones24}", "top", '-73px', { fromValue: '-73px'}], position: 655, duration: 0 }            ]
        }
    }
},
"bt_validar": {
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
                    id: 'botones25',
                    type: 'image',
                    rect: ['-6px', '0', '290px', '140px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/botones2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones25}": [
                ["style", "left", '-6px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '67px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 655,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 655
            },
            timeline: [
                { id: "eid1427", tween: [ "style", "${_botones25}", "left", '-6px', { fromValue: '-6px'}], position: 0, duration: 0 },
                { id: "eid1426", tween: [ "style", "${_botones25}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1428", tween: [ "style", "${_botones25}", "top", '-72px', { fromValue: '0px'}], position: 655, duration: 0 }            ]
        }
    }
},
"pop_cc": {
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
                    rect: ['0px', '0px', '1366px', '766px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(13,45,61,0.77)']
                },
                {
                    rect: ['9px', '140px', '1344px', '564px', 'auto', 'auto'],
                    id: 'creative',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/creative.png', '0px', '0px']
                },
                {
                    rect: ['784px', '54px', '576px', '148px', 'auto', 'auto'],
                    id: 'creative_2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/creative_2.png', '0px', '0px']
                },
                {
                    rect: ['12px', '208px', '1344px', '477px', 'auto', 'auto'],
                    id: 'creative_3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/creative_3.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['1px', '63px', '1366px', '641px', 'auto', 'auto'],
                    display: 'none',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'hotspot_cc',
                    opacity: 0,
                    cursor: ['pointer'],
                    fill: ['rgba(13,45,61,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_creative_2}": [
                ["style", "top", '555px'],
                ["transform", "scaleY", '0.7626'],
                ["transform", "scaleX", '0.7626'],
                ["style", "opacity", '0'],
                ["style", "left", '849px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2}": [
                ["style", "top", '766px'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(13,45,61,0.77)'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_hotspot_cc}": [
                ["color", "background-color", 'rgba(13,45,61,0.00)'],
                ["style", "display", 'none'],
                ["style", "height", '641px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '63px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${_creative}": [
                ["style", "top", '779px'],
                ["style", "left", '7px'],
                ["style", "display", 'none']
            ],
            "${_creative_3}": [
                ["style", "top", '782px'],
                ["style", "left", '13px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 689,
            autoPlay: true,
            timeline: [
                { id: "eid1583", tween: [ "style", "${_creative}", "top", '140px', { fromValue: '779px'}], position: 90, duration: 500, easing: "easeOutBack" },
                { id: "eid1590", tween: [ "style", "${_hotspot_cc}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
                { id: "eid1565", tween: [ "style", "${_Rectangle2}", "height", '766px', { fromValue: '3px'}], position: 44, duration: 500, easing: "easeOutCirc" },
                { id: "eid1589", tween: [ "style", "${_creative_3}", "display", 'block', { fromValue: 'none'}], position: 190, duration: 0, easing: "easeOutBack" },
                { id: "eid1588", tween: [ "style", "${_creative_3}", "top", '208px', { fromValue: '782px'}], position: 190, duration: 499, easing: "easeOutBack" },
                { id: "eid1579", tween: [ "style", "${_creative_2}", "display", 'block', { fromValue: 'none'}], position: 137, duration: 0, easing: "easeOutBack" },
                { id: "eid1581", tween: [ "style", "${_creative}", "left", '9px', { fromValue: '7px'}], position: 90, duration: 500, easing: "easeOutBack" },
                { id: "eid1567", tween: [ "style", "${_Rectangle2}", "top", '0px', { fromValue: '766px'}], position: 44, duration: 500, easing: "easeOutCirc" },
                { id: "eid1574", tween: [ "style", "${_creative_2}", "top", '54px', { fromValue: '555px'}], position: 137, duration: 500, easing: "easeOutBack" },
                { id: "eid1584", tween: [ "style", "${_creative}", "display", 'block', { fromValue: 'none'}], position: 90, duration: 0, easing: "easeOutBack" },
                { id: "eid1586", tween: [ "style", "${_creative_3}", "left", '12px', { fromValue: '13px'}], position: 190, duration: 499, easing: "easeOutBack" },
                { id: "eid1570", tween: [ "transform", "${_creative_2}", "scaleX", '1', { fromValue: '0.7626'}], position: 137, duration: 500, easing: "easeOutBack" },
                { id: "eid1572", tween: [ "transform", "${_creative_2}", "scaleY", '1', { fromValue: '0.7626'}], position: 137, duration: 500, easing: "easeOutBack" },
                { id: "eid1578", tween: [ "style", "${_creative_2}", "opacity", '1', { fromValue: '0'}], position: 137, duration: 500, easing: "easeOutBack" },
                { id: "eid1576", tween: [ "style", "${_creative_2}", "left", '784px', { fromValue: '849px'}], position: 137, duration: 500, easing: "easeOutBack" },
                { id: "eid1568", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 44, duration: 0, easing: "easeOutCirc" }            ]
        }
    }
},
"contenido": {
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
                    id: 'actCopy3',
                    type: 'image',
                    clip: ['rect(189.6640625px 1366px 572.9296875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act2.png', '0px', '0px']
                },
                {
                    id: 'act_2',
                    type: 'image',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/act_2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'act',
                    type: 'image',
                    clip: ['rect(0px 201.7265625px 189.671875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'actCopy5',
                    type: 'image',
                    clip: ['rect(600.2578125px 718.8046875px 669.4765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'actCopy6',
                    type: 'image',
                    clip: ['rect(575.96875px 1330.3828125px 695.3984375px 897.203125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'actCopy',
                    type: 'image',
                    clip: ['rect(0px 1048.2890625px 174.6171875px 200px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    id: 'actCopy4',
                    type: 'image',
                    clip: ['rect(0px 1366px 175.0625px 1062.40625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_actCopy6}": [
                ["style", "top", '0px'],
                ["style", "left", '489px'],
                ["style", "clip", [575.96875,1330.3828125,695.3984375,897.203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_act_2}": [
                ["style", "left", '0px'],
                ["style", "top", '-220px']
            ],
            "${_actCopy3}": [
                ["style", "top", '-416px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [189.6640625,1366,572.9296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1366px']
            ],
            "${_act}": [
                ["style", "-webkit-transform-origin", [9.79,16.78], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [9.79,16.78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [9.79,16.78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [9.79,16.78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [9.79,16.78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [9.79,16.78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.21186'],
                ["transform", "rotateZ", '130deg'],
                ["transform", "scaleX", '0.21186'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,201.7265625,189.671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_actCopy}": [
                ["style", "top", '-184px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,1048.2890625,174.6171875,200], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_actCopy4}": [
                ["style", "top", '-190px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,1366,175.0625,1062.40625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_actCopy5}": [
                ["style", "top", '0px'],
                ["style", "left", '-786px'],
                ["style", "clip", [600.2578125,718.8046875,669.4765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid1556", tween: [ "transform", "${_act}", "scaleX", '1', { fromValue: '0.21186'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid1557", tween: [ "transform", "${_act}", "rotateZ", '0deg', { fromValue: '130deg'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid1558", tween: [ "style", "${_act}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid1545", tween: [ "style", "${_actCopy6}", "left", '0px', { fromValue: '489px'}], position: 0, duration: 500, easing: "easeOutCirc" },
                { id: "eid1537", tween: [ "style", "${_actCopy4}", "top", '0px', { fromValue: '-190px'}], position: 250, duration: 474, easing: "easeOutCirc" },
                { id: "eid1559", tween: [ "transform", "${_act}", "scaleY", '1', { fromValue: '0.21186'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid1543", tween: [ "style", "${_actCopy5}", "left", '0px', { fromValue: '-786px'}], position: 763, duration: 487, easing: "easeOutCirc" },
                { id: "eid1539", tween: [ "style", "${_actCopy3}", "top", '0px', { fromValue: '-416px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid1533", tween: [ "style", "${_actCopy}", "top", '0px', { fromValue: '-184px'}], position: 123, duration: 500, easing: "easeOutCirc" },
                { id: "eid1541", tween: [ "style", "${_actCopy3}", "opacity", '1', { fromValue: '0'}], position: 517, duration: 733, easing: "easeOutBack" },
                { id: "eid1525", tween: [ "style", "${_act_2}", "top", '0px', { fromValue: '-220px'}], position: 0, duration: 500, easing: "easeOutCirc" }            ]
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
                    transform: [[0, 0], [], ['-18']],
                    rect: ['16px', '0px', '20px', '96px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.25)']
                },
                {
                    transform: [[0, 0], [], ['-18']],
                    rect: ['42px', '0px', '6px', '96px', 'auto', 'auto'],
                    id: 'Rectangle4Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.25)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle4Copy}": [
                ["color", "background-color", 'rgba(255,255,255,0.2471)'],
                ["transform", "skewX", '-18deg'],
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '42px'],
                ["style", "width", '6px']
            ],
            "${_Rectangle4}": [
                ["style", "top", '0px'],
                ["transform", "skewX", '-18deg'],
                ["style", "opacity", '0'],
                ["style", "left", '16px'],
                ["color", "background-color", 'rgba(255,255,255,0.25)']
            ],
            "${symbolSelector}": [
                ["style", "height", '96px'],
                ["style", "width", '63px']
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
                { id: "eid1592", tween: [ "style", "${_Rectangle4}", "left", '401px', { fromValue: '16px'}], position: 0, duration: 1000 },
                { id: "eid1591", tween: [ "style", "${_Rectangle4Copy}", "left", '427px', { fromValue: '42px'}], position: 0, duration: 1000 },
                { id: "eid1596", tween: [ "style", "${_Rectangle4}", "opacity", '0.60129310344828', { fromValue: '0'}], position: 0, duration: 333 },
                { id: "eid1598", tween: [ "style", "${_Rectangle4}", "opacity", '0', { fromValue: '0.60129310344828'}], position: 667, duration: 333 },
                { id: "eid1594", tween: [ "style", "${_Rectangle4Copy}", "opacity", '0.60129310344828', { fromValue: '0'}], position: 0, duration: 333 },
                { id: "eid1597", tween: [ "style", "${_Rectangle4Copy}", "opacity", '0', { fromValue: '0.60129310344828'}], position: 667, duration: 333 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1010687340");
