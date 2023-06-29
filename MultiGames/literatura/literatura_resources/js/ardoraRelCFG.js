//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=4;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#102CEF"; colorText="#000000"; colorSele="#9B0CF1";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Lucida Console', Monaco, monospace";
var timeOnMessage=5; messageOk="Bien hecho"; messageTime=""; messageError="Buen intento"; messageErrorG="Buen intento"; messageAttempts="Intentalo otra vez"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="bGl0ZXJhdHVyYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Miguel de Cervantes</p>","<p>Calderón de la Barca</p>","<p>Federico Garcia Lorca</p>","<p>Pablo Picasso</p>","<p>Miguel de Unamuno</p>","<p>Lope de Vega</p>","<p>Francisco de Quevedo</p>","<p>Juan Ramón Jiménez</p>"];
var iL=["<div  align='center'><img alt='' src='literatura_resources/media/miguel.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/pedro.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/federico_garcia_lorca.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/picasso.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/unamuno.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/lope.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/fran.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/juan.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Romancero gitano</p>","<p>El ingenioso Hidalgo Don Quijote de la Mancha</p>","<p>Andanzas y Visiones Españolas</p>","<p>Bombardeo a Guernica</p>","<p>La vida es un sueño el alcalde de Zalamea</p>","<p>Fuenteovejuna</p>","<p>Historia de la vida del Buscón</p>","<p>Platero y yo</p>"]; ansRL=["MQ==","NA==","MA==","Mw==","Mg==","NQ==","Ng==","Nw=="];
var iR=["<div  align='center'><img alt='' src='literatura_resources/media/romancero.png'></div>","<div  align='center'><img alt='' src='literatura_resources/media/donquijote.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/andanzas.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/guernica.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/si.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/fuente.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/buscon.jpg'></div>","<div  align='center'><img alt='' src='literatura_resources/media/platero.jpg'></div>"];
var auR=[3,1,5,4,2,6,7,8];
colorText="#FFFFFF";colorButton="#4782AC";colorBack="#000000";colorSele="#92A262";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
