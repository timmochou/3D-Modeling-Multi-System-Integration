"use document"
var url = encodeURI(encodeURI("http://172.31.0.149:8080/webroot/decision/view/duchamp?viewlet=d002.fvs&P_SYSTYPE='+P_SYSTYPE+'"));
//窗體
var $iframe = $("<iframe id='inp' name='inp' width='100%' height='100%' scrolling='yes' frameborder='0'>");
//將窗體的src屬性設定為範本路徑
$iframe.attr("src", url);
//窗體的屬性
var o = {
    //title: "對話框",    //標題
    destroyOnClose:true,   // 是否在關閉對話框的時候將對話框從dom中移除
    width: 1920,         //寬度
    height: 1080,        //高度
    //closable:true,    //是否顯示關閉按鈕，預設true
    //confirm:false,     //是否新增應答取消按鈕,預設false
    //draggable:true   //是否可拖動，預設true
};
//彈出窗體
FR.showDialog(o.title, o.width, o.height, $iframe, o);

// 设置窗体大小
$(".fr-core-panel-body.fr-core-panel-body-border.fr-core-window-body").css({
    "position":"absolute",
    "left":"0px",
    "top": "0px", // 设置父元素为相对定位，以便绝对定位子元素
    "width": "100%", // 确保容器宽度为100%
    "height": "100%" // 确保容器高度为100%
});

$(".fr-core-window.ui-state-enabled.ui-draggable").css({
    "position":"absolute",
    "left":"0px",
    "top": "0px" // 设置父元素为相对定位，以便绝对定位子元素
});

var scaleFactor = 1; // 缩放比例，1 表示原始大小

function scaleIframe() {
    var iframeWidth = $(".fr-core-panel-body.fr-core-panel-body-border.fr-core-window-body").width(); // iframe 宽度等于容器宽度
    var iframeHeight = $(".fr-core-panel-body.fr-core-panel-body-border.fr-core-window-body").height(); // iframe 高度等于容器高度
    
    $("iframe#inp").css({
        "width": iframeWidth + "px", // 设置iframe宽度
        "height": iframeHeight + "px" // 设置iframe高度
    });
}

// 在加载完 iframe 内容后调整大小
$("iframe#inp").on("load", function() {
    scaleIframe();
});

// 窗体大小变化时重新调整大小
$(window).resize(function() {
    scaleIframe();
});


// $(".fr-core-panel-header-inner, .fr-core-panel-header.fr-core-panel-style-blue.fr-core-window-header.ui-draggable-handle").css({
//     "display": "none"
// });


var closeButton = $("<div class='close-button'>&times;</div>");

// 设置叉叉按钮样式
closeButton.css({
    "position": "absolute", // 绝对定位
    "top": "5px", // 距离父元素顶部的距离
    "right": "5px", // 距离父元素右侧的距离
    "cursor": "pointer", // 鼠标指针样式
    "font-size": "24px", // 字体大小
    "color": "#fff", // 文字颜色
    "background-color": "#3C3C3C", // 背景颜色
    "border-radius": "30px", // 圆形按钮
    "display": "none" // 初始状态隐藏按钮
});

// 将叉叉按钮添加到窗体中
$(".fr-core-panel-body.fr-core-panel-body-border.fr-core-window-body").append(closeButton);



// 添加鼠标悬停事件处理程序
$(".fr-core-panel-body.fr-core-panel-body-border.fr-core-window-body").on("mouseenter", function() {
    closeButton.css("display", "block"); // 鼠标进入时显示按钮
});

// 添加鼠标离开事件处理程序
$(".fr-core-panel-body.fr-core-panel-body-border.fr-core-window-body").on("mouseleave", function() {
    closeButton.css("display", "none"); // 鼠标离开时隐藏按钮
});


// 添加点击事件处理程序
closeButton.click(function() {
    FR.closeDialog();

});

