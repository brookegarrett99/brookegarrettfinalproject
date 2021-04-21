var d;
const key = 'pk.eyJ1IjoiYmdhcnJldHQ5OSIsImEiOiJja20yZDc2bW4xYnU3Mm5vNjNkM3h2MzgxIn0.tkcMys3h41EjoXy6YFcs4w';

const options = {
  lat: 37.774929,
  lng: -122.419418,
  zoom: 12,
  style: 'mapbox://styles/bgarrett99/ckm9ftklo7k5817lfcw8t8vbw',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
  d = select ('.div-block');
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  
}


function draw() {
 clear();
  //noFill();
 strokeWeight(3);
  const zoom = myMap.zoom();
  
  stroke('#216e52'); //good 
  const nyc = myMap.latLngToPixel(40.712776,-74.005974);
  const framing = myMap.latLngToPixel(42.281559,-71.418831);
  const bridge = myMap.latLngToPixel(41.186390,-73.195557);
  
   ellipse(nyc.x,nyc.y,20 * zoom,20 * zoom); 
   ellipse(framing.x,framing.y,30 * zoom,30 * zoom);
   ellipse(bridge.x,bridge.y,25 * zoom,25 * zoom);
  

  stroke('#755a82'); //bad
  const sanfran = myMap.latLngToPixel(37.774929,-122.419418);
  const la = myMap.latLngToPixel(34.052235,-118.243683); 
  const minn = myMap.latLngToPixel(44.977753,-93.265015);
  const sanjose = myMap.latLngToPixel(37.3382,-121.8863); 
  const phil = myMap.latLngToPixel(39.9526,-75.1652);
  const boulder = myMap.latLngToPixel(40.0150,-105.2705); 
  const dc = myMap.latLngToPixel(38.9072,-77.0369); 

  ellipse(sanfran.x,sanfran.y,30 * zoom,30 * zoom); 
  ellipse(la.x,la.y,23 * zoom,23 * zoom);
  ellipse(minn.x,minn.y,28 * zoom,28 * zoom);
  ellipse(sanjose.x,sanjose.y,20 * zoom,20 * zoom);
  ellipse(phil.x,phil.y,25 * zoom,25 * zoom);
  ellipse(boulder.x,boulder.y,25 * zoom,25 * zoom);
  ellipse(dc.x,dc.y,28 * zoom,28 * zoom);


  
  
  
  
 if(dist(sanfran.x,sanfran.y,mouseX,mouseY)< (zoom * 10)/2){
   fill(100,150); 
  }else{
    fill(100,100);
  }
  



//resize canvas when the window is resized...
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});


}