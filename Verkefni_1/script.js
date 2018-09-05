gleraugu = Snap(220, 200);
munnur = Snap (220, 220);
var path1 = munnur.path("M10,100 c10,200 200,100 200,10");
munnur.attr({
    fill: "none",
    stroke: "#000",
    strokeWidth: 6
});
var path = gleraugu.path("M10,10 c60,200 100,5 100,10 c60,200 100,5 100,10z");
function glerauguAnimation(){
	setTimeout(function(){
		path.animate({ d: "M10,10 c60,10 100,5 100,10 c60,10 100,5 100,10z" }, 1000, mina.bounce);},1500);

	setTimeout(function(){
		path.animate({ d: "M10,10 c60,200 100,5 100,10 c60,200 100,5 100,10z" }, 1000, mina.bounce);},4000);
}

glerauguAnimation();