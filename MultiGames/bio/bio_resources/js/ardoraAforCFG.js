//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=3;
var score=0; scoreMax=6; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFE1E1"; colorButton="#FEF8C7"; colorText="#000000"; colorSele="#B5CAF2";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="! LO LOGRASTEEES ¡"; messageTime=""; messageError="sigue intentando :("; messageErrorG="sigue intentando :("; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Ymlv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q0hBUkxFUyBEQVJXSU4=","Q0VMVUxBIFBST0NBUklPVEE=","Q0VMVUxBIEVVQ0FSSU9UQQ==","RU5aSU1BUw==","Q0lDTE8gREUgQ0FMVklO","UEFMRU9OVE9MT0dJQQ==","","","",""];imaW=["0_charles_darwin.jpg","0_celula_procariota.jpg","0_no.png","0_ENZIMAS.PNG","0_calvin.png","0_leon.jpg","","","",""];queW=["Planteaba la teoría de la evolución biológica de selección natural","Organismos unicelulares","Se caracterizan por presentar siempre un citoplasma","Son proteínas complejas que producen un cambio químico específico","Ruta metabólica que utilizan los organismos autótrofos","Rastro de la existencia animal o vegetal en el pasado","","","",""];var wordsL=[14,17,16,7,15,13,"","","",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="bio_resources/media/"; textBNext="";
colorText="#FFFFFF";colorButton="#4782AC";colorBack="#000000";colorSele="#92A262";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
