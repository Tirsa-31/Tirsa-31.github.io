//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho!! Eres espectacular :)"; messageTime="NOOO, se acabo el tiempo :("; messageError="No te preocupes, la proxima vez lo lograras"; messageErrorG="No te preocupes, la proxima vez lo lograras"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TXVsdGlwbGljYWNpb25lcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var a=["2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2",];
var b=["OQ==","Nw==","Ng==","OQ==","OA==","Nw==","OQ==","OA==","Ng==","Nw==","OA==","OQ==","OA==","Nw==","Ng==","OQ==",];
var c=["36","49","48","27","64","42","63","32","54","28","40","72","56","21","36","81",];
var d=["NA==","Nw==","OA==","Mw==","OA==","Ng==","Nw==","NA==","OQ==","NA==","NQ==","OA==","Nw==","Mw==","Ng==","OQ==",];
var colorSol="#8000FF";var actualState=[];var iOp1=false;var iOp2=false;var iM=false;var iSol=false;var idiOp1=-1;var idiOp2=-1;var idiM=-1;var idiSol=-1;
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#FFFFFF";colorButton="#4782AC";colorBack="#000000";colorSele="#92A262";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
