var windowHeight=$(window).height();
//alert(windowHeight);

var menuBarHeight=$("#menuBar").height();
var codeContainerHeight=windowHeight-menuBarHeight;
$("codeContainer").height(codeContainerHeight+"px");
