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
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
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
                id: 'bt_solucion',
                display: 'none',
                type: 'rect',
                rect: ['992px', '696px','auto','auto','auto', 'auto']
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
                id: 'bad1',
                symbolName: 'bad',
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
                id: 'contenido',
                symbolName: 'contenido',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bt_ayuda}": [
                ["style", "left", '1100px'],
                ["style", "top", '696px']
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
                ["style", "cursor", 'pointer'],
                ["style", "border-style", 'none'],
                ["style", "left", '888px'],
                ["style", "width", '35px'],
                ["style", "top", '509px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '1'],
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '1px']
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
                ["style", "left", '626px'],
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
            "${_ok37}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
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
                ["style", "cursor", 'pointer'],
                ["style", "border-style", 'none'],
                ["style", "left", '111px'],
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
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '696px'],
                ["style", "height", '64px'],
                ["style", "left", '1100px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '66px']
            ],
            "${_InputA_5}": [
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
                ["style", "left", '1145px']
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '696px'],
                ["style", "height", '63px'],
                ["style", "left", '992px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '67px']
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
            "${_ok1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
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
            "${_bt_solucion}": [
                ["style", "top", '696px'],
                ["style", "left", '992px'],
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
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '35px'],
                ["style", "top", '509px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '1'],
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(139,139,139,0.50)'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '368px']
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
                { id: "eid1151", tween: [ "style", "${_help_radio}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid497", tween: [ "gradient", "${_box_01}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
                { id: "eid1166", tween: [ "style", "${_bt_solucion}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1161", tween: [ "style", "${_InputA_4}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1154", tween: [ "style", "${_InputB_2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid888", tween: [ "style", "${_ok37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1109", tween: [ "style", "${_bad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1159", tween: [ "style", "${_InputB_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1165", tween: [ "style", "${_brillo_1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1158", tween: [ "style", "${_InputA_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 }            ]
        }
    }
},
"Mayor1": {
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
                    rect: ['35px', '0px', '271px', '115px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle2',
                    stroke: [3, 'rgba(94,94,94,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(5,164,227,1.00)']
                },
                {
                    rect: ['141px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'Text',
                    text: '4',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['87px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'TextCopy',
                    text: '6',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['90px', '104px', '47px', '8px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [3, 'rgb(94, 94, 94)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['194px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'TextCopy2',
                    text: '2',
                    textShadow: ['rgba(255,255,255,0.65)', 0, 0, 25],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["style", "top", '104px'],
                ["style", "height", '8px'],
                ["style", "border-style", 'none'],
                ["style", "left", '-47px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Text}": [
                ["style", "top", '154px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '141px'],
                ["style", "font-size", '100px']
            ],
            "${_TextCopy2}": [
                ["subproperty", "textShadow.blur", '25px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '194px'],
                ["style", "font-size", '100px'],
                ["style", "top", '154px'],
                ["subproperty", "textShadow.color", 'rgba(255,255,255,0.65)'],
                ["subproperty", "textShadow.offsetV", '0px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(5,164,227,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "left", '35px'],
                ["style", "width", '271px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '115px'],
                ["color", "border-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-width", '3px'],
                ["style", "border-style", 'solid']
            ],
            "${_TextCopy}": [
                ["style", "top", '154px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '87px'],
                ["style", "font-size", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '121px'],
                ["style", "width", '359px']
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
                { id: "eid969", tween: [ "style", "${_Text}", "top", '0px', { fromValue: '154px'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid990", tween: [ "style", "${_TextCopy2}", "top", '0px', { fromValue: '154px'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid988", tween: [ "style", "${_TextCopy}", "top", '0px', { fromValue: '154px'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid989", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid973", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid971", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750, easing: "easeOutBack" },
                { id: "eid991", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid1048", tween: [ "style", "${_Rectangle3}", "left", '197px', { fromValue: '-47px'}], position: 1000, duration: 500, easing: "easeOutCirc" }            ]
        }
    }
},
"Menor1": {
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
                    rect: ['47px', '0px', '254px', '115px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle2Copy',
                    stroke: [3, 'rgba(176,71,37,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(237,104,33,1.00)']
                },
                {
                    rect: ['84px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'TextCopy',
                    text: '6',
                    textShadow: ['rgba(255,255,255,0.65)', 0, 0, 0],
                    type: 'text'
                },
                {
                    rect: ['104px', '105px', '51px', '10px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [3, 'rgb(94, 94, 94)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['142px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'TextCopy3',
                    text: '4',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['198px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'TextCopy4',
                    text: '9',
                    textShadow: ['rgba(255,255,255,0.65)', 0, 0, 25],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["subproperty", "textShadow.blur", '25px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '198px'],
                ["style", "font-size", '100px'],
                ["style", "top", '-168px'],
                ["subproperty", "textShadow.color", 'rgba(255,255,255,0.65)'],
                ["subproperty", "textShadow.offsetV", '0px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '-168px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '142px'],
                ["style", "font-size", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '121px'],
                ["style", "width", '359px']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(237,104,33,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '254px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "height", '115px'],
                ["color", "border-color", 'rgba(176,71,37,1.00)'],
                ["style", "left", '47px'],
                ["style", "border-width", '3px']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '-37px'],
                ["style", "width", '51px']
            ],
            "${_TextCopy}": [
                ["subproperty", "textShadow.blur", '0px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '84px'],
                ["style", "font-size", '100px'],
                ["style", "top", '-168px'],
                ["subproperty", "textShadow.color", 'rgba(255,255,255,0.65)'],
                ["subproperty", "textShadow.offsetV", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2045,
            autoPlay: true,
            timeline: [
                { id: "eid1050", tween: [ "style", "${_Rectangle4}", "left", '202px', { fromValue: '-37px'}], position: 1500, duration: 545, easing: "easeOutCirc" },
                { id: "eid977", tween: [ "style", "${_TextCopy}", "top", '0px', { fromValue: '-168px'}], position: 750, duration: 565, easing: "easeOutBack" },
                { id: "eid998", tween: [ "style", "${_TextCopy3}", "top", '0px', { fromValue: '-168px'}], position: 1000, duration: 565, easing: "easeOutBack" },
                { id: "eid975", tween: [ "style", "${_Rectangle2Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid1001", tween: [ "style", "${_TextCopy4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 815, easing: "easeOutBack" },
                { id: "eid979", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 565, easing: "easeOutBack" },
                { id: "eid999", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 815, easing: "easeOutBack" },
                { id: "eid1000", tween: [ "style", "${_TextCopy4}", "top", '0px', { fromValue: '-168px'}], position: 1250, duration: 565, easing: "easeOutBack" }            ]
        }
    }
},
"Symbol_3": {
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
                    rect: ['0px', '47px', '1050px', '294px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    boxShadow: ['', 3, 3, 5, 1, 'rgba(0,0,0,0.30)'],
                    id: 'TextArea_01',
                    stroke: [1, 'rgba(120,120,120,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['0px', '0px', '1052px', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 26, 'rgba(102,102,102,1.00)', 'bold', 'none', 'normal'],
                    id: 'descripcionCopy',
                    text: 'Discútelo con tus compañeros y escriban algunas posibilidades. <br>',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_descripcionCopy}": [
                ["style", "top", '0px'],
                ["style", "width", '1052px'],
                ["color", "color", 'rgba(102,102,102,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-87px'],
                ["style", "font-size", '26px']
            ],
            "${_TextArea_01}": [
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '5px'],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '1050px'],
                ["style", "top", '84px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "height", '294px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.30)'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(120,120,120,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '343px'],
                ["style", "width", '1052px']
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
                { id: "eid981", tween: [ "style", "${_descripcionCopy}", "left", '0px', { fromValue: '-87px'}], position: 1000, duration: 500, easing: "easeOutSine" },
                { id: "eid983", tween: [ "style", "${_descripcionCopy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutSine" },
                { id: "eid987", tween: [ "style", "${_TextArea_01}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutSine" },
                { id: "eid985", tween: [ "style", "${_TextArea_01}", "top", '47px', { fromValue: '84px'}], position: 1250, duration: 500, easing: "easeOutSine" }            ]
        }
    }
},
"Mayor2": {
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
                    rect: ['33px', '0px', '275px', '115px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle2',
                    stroke: [3, 'rgba(94,94,94,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(5,164,227,1.00)']
                },
                {
                    rect: ['146px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'Text',
                    text: '1',
                    textShadow: ['rgba(255,255,255,0.65)', 0, 0, 25],
                    type: 'text'
                },
                {
                    rect: ['86px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'TextCopy',
                    text: '3',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['183px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'TextCopy2',
                    text: '0',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['90px', '106px', '54px', '9px', 'auto', 'auto'],
                    id: 'Rectangle5',
                    stroke: [3, 'rgb(94, 94, 94)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(5,164,227,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '275px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '33px'],
                ["style", "height", '115px'],
                ["color", "border-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-width", '3px'],
                ["style", "opacity", '0']
            ],
            "${_Text}": [
                ["subproperty", "textShadow.blur", '25px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '146px'],
                ["style", "font-size", '100px'],
                ["style", "top", '154px'],
                ["subproperty", "textShadow.color", 'rgba(255,255,255,0.65)'],
                ["subproperty", "textShadow.offsetV", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '121px'],
                ["style", "width", '359px']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '104px'],
                ["style", "left", '-51px'],
                ["style", "width", '54px']
            ],
            "${_TextCopy}": [
                ["style", "top", '154px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '86px'],
                ["style", "font-size", '100px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '154px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '183px'],
                ["style", "font-size", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4750,
            autoPlay: true,
            timeline: [
                { id: "eid991", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 750, easing: "easeOutBack" },
                { id: "eid1054", tween: [ "style", "${_Rectangle5}", "left", '193px', { fromValue: '-51px'}], position: 4250, duration: 500, easing: "easeOutCirc" },
                { id: "eid990", tween: [ "style", "${_TextCopy2}", "top", '0px', { fromValue: '154px'}], position: 4000, duration: 500, easing: "easeOutBack" },
                { id: "eid1079", tween: [ "style", "${_Rectangle5}", "top", '106px', { fromValue: '104px'}], position: 4250, duration: 500, easing: "easeOutCirc" },
                { id: "eid988", tween: [ "style", "${_TextCopy}", "top", '0px', { fromValue: '154px'}], position: 3500, duration: 500, easing: "easeOutBack" },
                { id: "eid973", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 500 },
                { id: "eid971", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750, easing: "easeOutBack" },
                { id: "eid989", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 500, easing: "easeOutBack" },
                { id: "eid969", tween: [ "style", "${_Text}", "top", '0px', { fromValue: '154px'}], position: 3750, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"Menor2": {
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
                    rect: ['47px', '0px', '254px', '115px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'Rectangle2Copy',
                    stroke: [3, 'rgba(176,71,37,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(237,104,33,1.00)']
                },
                {
                    rect: ['98px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'TextCopy',
                    text: '3',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['104px', '105px', '37px', '10px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [3, 'rgb(94, 94, 94)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['158px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'TextCopy3',
                    text: '1',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['202px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 100, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'TextCopy4',
                    text: '4',
                    textShadow: ['rgba(255,255,255,0.65)', 0, 0, 25],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["subproperty", "textShadow.blur", '25px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '202px'],
                ["style", "font-size", '100px'],
                ["style", "top", '-168px'],
                ["subproperty", "textShadow.color", 'rgba(255,255,255,0.65)'],
                ["subproperty", "textShadow.offsetV", '0px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '-168px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '158px'],
                ["style", "font-size", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '121px'],
                ["style", "width", '359px']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(237,104,33,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '254px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '3px'],
                ["style", "height", '115px'],
                ["color", "border-color", 'rgba(176,71,37,1.00)'],
                ["style", "left", '47px'],
                ["style", "opacity", '0']
            ],
            "${_TextCopy}": [
                ["style", "top", '-168px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '98px'],
                ["style", "font-size", '100px']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '-37px'],
                ["style", "width", '37px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid1051", tween: [ "style", "${_Rectangle4}", "left", '205px', { fromValue: '-37px'}], position: 3250, duration: 500, easing: "easeOutCirc" },
                { id: "eid975", tween: [ "style", "${_Rectangle2Copy}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500 },
                { id: "eid1001", tween: [ "style", "${_TextCopy4}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 815, easing: "easeOutBack" },
                { id: "eid999", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 815, easing: "easeOutBack" },
                { id: "eid1000", tween: [ "style", "${_TextCopy4}", "top", '0px', { fromValue: '-168px'}], position: 3000, duration: 565, easing: "easeOutBack" },
                { id: "eid977", tween: [ "style", "${_TextCopy}", "top", '0px', { fromValue: '-168px'}], position: 2500, duration: 565, easing: "easeOutBack" },
                { id: "eid979", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 565, easing: "easeOutBack" },
                { id: "eid998", tween: [ "style", "${_TextCopy3}", "top", '0px', { fromValue: '-168px'}], position: 2750, duration: 565, easing: "easeOutBack" },
                { id: "eid1052", tween: [ "style", "${_Rectangle4}", "width", '52px', { fromValue: '37px'}], position: 3250, duration: 500, easing: "easeOutCirc" }            ]
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
"etiqueta": {
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
                    rect: ['0px', '0px', '1366px', '178px', 'auto', 'auto'],
                    type: 'image',
                    id: 'etiqueta',
                    display: 'none',
                    clip: ['rect(0px 94px 81.6337890625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '178px', 'auto', 'auto'],
                    type: 'image',
                    id: 'etiquetaCopy',
                    display: 'none',
                    clip: ['rect(0px 270px 72px 97px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1366px', '178px', 'auto', 'auto'],
                    type: 'image',
                    id: 'etiquetaCopy2',
                    display: 'block',
                    clip: ['rect(82px 1366px 88px -0.33349609375px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['42px', '92px', '355px', '70px', 'auto', 'auto'],
                    align: 'left',
                    id: 'instruccion',
                    text: 'Haga clic en las respuestas correctas para seleccionarlas.',
                    display: 'none',
                    font: ['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif', 21, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '178px'],
                ["style", "width", '1366px']
            ],
            "${_etiqueta}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,94,81.6337890625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "background-position", [0,50.66650390625], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_instruccion}": [
                ["style", "top", '82px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "width", '355px']
            ],
            "${_etiquetaCopy2}": [
                ["style", "display", 'block'],
                ["style", "top", '0px'],
                ["style", "clip", [82,16.66650390625,88,-0.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_etiquetaCopy}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "clip", [0,270,72,97], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "background-position", [-161.33349609375,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid1348", tween: [ "style", "${_etiquetaCopy2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid1350", tween: [ "style", "${_etiqueta}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,50.66650390625]}], position: 750, duration: 500, easing: "swing" },
                { id: "eid1355", tween: [ "style", "${_instruccion}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid1347", tween: [ "style", "${_etiquetaCopy2}", "clip", [82,482,88,-0.33349600434303284], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [82,16.66650390625,88,-0.33349609375]}], position: 0, duration: 750, easing: "swing" },
                { id: "eid1353", tween: [ "style", "${_etiquetaCopy}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-161.33349609375,0]}], position: 1250, duration: 750, easing: "swing" },
                { id: "eid1351", tween: [ "style", "${_etiquetaCopy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid1357", tween: [ "style", "${_instruccion}", "top", '92px', { fromValue: '82px'}], position: 1250, duration: 750, easing: "swing" },
                { id: "eid1359", tween: [ "style", "${_instruccion}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 750, easing: "swing" },
                { id: "eid1354", tween: [ "style", "${_etiqueta}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "swing" }            ]
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
                    id: 'head_blue',
                    type: 'image',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/act_2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'actCopy3',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(189.6640625px 1366px 572.9296875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'act',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(0px 201.7265625px 189.671875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'actCopy5',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(600.2578125px 718.8046875px 669.4765625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'actCopy6',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(575.96875px 1330.3828125px 695.3984375px 897.203125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'actCopy',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(0px 1048.2890625px 174.6171875px 200px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'actCopy4',
                    rect: ['0px', '0px', '1366px', '768px', 'auto', 'auto'],
                    clip: ['rect(0px 1366px 175.0625px 1062.40625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/act.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
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
            "${_actCopy3}": [
                ["style", "top", '-416px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [189.6640625,1366,572.9296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_actCopy6}": [
                ["style", "top", '0px'],
                ["style", "left", '489px'],
                ["style", "clip", [575.96875,1330.3828125,695.3984375,897.203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_actCopy4}": [
                ["style", "top", '-190px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,1366,175.0625,1062.40625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_actCopy}": [
                ["style", "top", '-184px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,1048.2890625,174.6171875,200], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_head_blue}": [
                ["style", "left", '0px'],
                ["style", "top", '-220px']
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
                { id: "eid1525", tween: [ "style", "${_head_blue}", "top", '0px', { fromValue: '-220px'}], position: 0, duration: 500, easing: "easeOutCirc" },
                { id: "eid1543", tween: [ "style", "${_actCopy5}", "left", '0px', { fromValue: '-786px'}], position: 763, duration: 487, easing: "easeOutCirc" },
                { id: "eid1537", tween: [ "style", "${_actCopy4}", "top", '0px', { fromValue: '-190px'}], position: 250, duration: 474, easing: "easeOutCirc" },
                { id: "eid1559", tween: [ "transform", "${_act}", "scaleY", '1', { fromValue: '0.21186'}], position: 0, duration: 0, easing: "easeOutBack" },
                { id: "eid1539", tween: [ "style", "${_actCopy3}", "top", '0px', { fromValue: '-416px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid1533", tween: [ "style", "${_actCopy}", "top", '0px', { fromValue: '-184px'}], position: 123, duration: 500, easing: "easeOutCirc" },
                { id: "eid1541", tween: [ "style", "${_actCopy3}", "opacity", '1', { fromValue: '0'}], position: 517, duration: 733, easing: "easeOutBack" },
                { id: "eid1545", tween: [ "style", "${_actCopy6}", "left", '0px', { fromValue: '489px'}], position: 0, duration: 500, easing: "easeOutCirc" }            ]
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
                    rect: ['16px', '0px', '20px', '96px', 'auto', 'auto'],
                    transform: [[0, 0], [], ['-18']],
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.25)']
                },
                {
                    rect: ['42px', '0px', '6px', '96px', 'auto', 'auto'],
                    transform: [[0, 0], [], ['-18']],
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
                ["style", "top", '0px'],
                ["transform", "skewX", '-18deg'],
                ["color", "background-color", 'rgba(255,255,255,0.2471)'],
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
