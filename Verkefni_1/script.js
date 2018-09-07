//Búa til svg og gera path fyrir þau með Snap.js
//Búa til sólgelraugu með path
gleraugu = Snap(220, 200);
var path = gleraugu.path("M10,10 c60,200 100,5 100,10 c60,200 100,5 100,10z");
//Búa til munn með path
munnur = Snap (220, 220);
var path1 = munnur.path("M10,100 c10,200 200,100 200,10");
//Búa til tvö augu með path
auga1 = Snap(220, 220);
var path_auga1 = auga1.path("M50,60 C50,40 80,40 80,60 M50,60 C50,80 80,80 80,60");
auga2 = Snap(220, 220);
var path_auga2 = auga2.path("M150,60 C150,40 180,40 180,60 M150,60 C150,80 180,80 180,60");
//breyta munn svo hann sé ekki fyltur 
munnur.attr({
    fill: "none",
    stroke: "#000",
    strokeWidth: 6
});
//Animation
function Animation(){
	//Láta sólgleraugin fara upp
	setTimeout(function(){
		path.animate({ d: "M10,10 c60,10 100,5 100,10 c60,10 100,5 100,10z" }, 1000);},1000);
	//Látað augað Blikka
	//Augað dregst saman 
	setTimeout(function(){
		path_auga1.animate({ d: "M50,60 C50,70 80,70 80,60 M50,60 C50,70 80,70 80,60" }, 1000);},1500);
	//Augað fer aftur í upprunnalega stellingu
	setTimeout(function(){
		path_auga1.animate({ d: "M50,60 C50,40 80,40 80,60 M50,60 C50,80 80,80 80,60" }, 1000);},2500);
	//Sólgleraugun fara afutr í upprunalega stellingu
	setTimeout(function(){
		path.animate({ d: "M10,10 c60,200 100,5 100,10 c60,200 100,5 100,10z" }, 1000, mina.bounce);},3500);
}
setInterval(Animation ,20000);
