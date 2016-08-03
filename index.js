var windowHeight=$(window).height();
//alert(windowHeight);

var menuBarHeight=$("#menubar").height();
var codeContainerHeight=windowHeight-menuBarHeight;
$("codeContainer").height(codeContainerHeight+"px");
alert(codeContainer);
