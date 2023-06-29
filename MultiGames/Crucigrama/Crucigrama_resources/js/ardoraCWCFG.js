//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="Bien hecho"; messageTime="Se acabo"; messageError="nah ha"; messageErrorG="nah ha"; messageAttempts="Perdiste"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["TQ==","RQ==","Tg==","RA==","RQ==","TA==","RQ==","SQ==","Vg==","","","","","",""],["Tw==","","","SQ==","","","","Tw==","","","","","","",""],["Uw==","","","Uw==","","SA==","VQ==","Tg==","RA==","","","","","",""],["RQ==","","","UA==","","","","","","","","","","",""],["TA==","","UA==","RQ==","Ug==","SQ==","Tw==","RA==","Tw==","Uw==","","","","",""],["RQ==","","","Ug==","","","","","","","","","","",""],["WQ==","","","Uw==","Tw==","TA==","VQ==","VA==","Tw==","","","","","",""],["","","","SQ==","","","","","","","","","","",""],["","","","Tw==","","","","","","","","","","",""],["","","","Tg==","Tw==","Og==","TQ==","RQ==","VA==","QQ==","TA==","RQ==","Uw==","",""],["","","","RQ==","","","Tw==","","","","","","","",""],["","","","Uw==","","","TA==","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""]];
var x1=[1,1,4,4,7,8,3,7,4,6];
var y1=[1,1,1,10,10,1,5,10,7,3];
var x2=[9,1,4,5,13,8,10,7,9,9];
var y2=[1,7,12,10,10,3,5,12,7,3];
var imaCW=["","","","","","","","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["formuló la ley periódica de los elementos químicos.","demuestra que la tabla periódica debe ordenarse por el número atómico","Las partículas distribuidas de un material se dispersan en una fase continua de otro material","son elementos químicos que no son buenos conductores de la corriente eléctrica y el calor.","son elementos químicos que no son buenos conductores de la corriente eléctrica y el calor.","es un átomo o una molécula que ha perdido o ganado uno o más electrones y lleva una carga eléctrica neta.","Se ordenan de forma horizontal en la tabla periodica","es la unidad con que se mide la cantidad de sustancia, ​​​ una de las siete magnitudes físicas fundamentales del Sistema Internacional de Unidades.","Sustancia que está disuelta en otra.","es un principio empírico de 13 reglas formulado​ en 1927 por el físico alemán Friedrich Hund"];
var altCW=["","","","","","","","","",""];
var colNum=15;
var rowNum=15;
colorText="#FFFFFF";colorButton="#4782AC";colorBack="#000000";colorSele="#92A262";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
