//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=20;
var successes=0; successesMax=20; attempts=0; attemptsMax=4;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=1;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FF88FF"; colorText="#000000"; colorSele="#6CFF92";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Courier New', Courier, mono";
var fActi="";
var fEnun="'Courier New', Courier, mono";
var timeOnMessage=2; messageOk="¡LO HAS LOGRADO!"; messageTime="Vuelve a intentarlo :D"; messageError="PERDISTE :("; messageAttempts=""; isShowMessage=false;
var urlOk="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F749427194235209809%2F&psig=AOvVaw0wz4yzpClYwPaiLYbpaJ4B&ust=1687627472191000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLiBtrL02f8CFQAAAAAdAAAAABAE"; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#D964D9"; borderTime="#D964D9";borderError="#D964D9"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]]; var imaSel=0; texSel=0;
var original="lengua_resources/media/original.jpg";
var board=[["lengua_resources/media/cGllY2UxXzE=.jpg","lengua_resources/media/cGllY2UyXzE=.jpg","lengua_resources/media/cGllY2UzXzE=.jpg","lengua_resources/media/cGllY2U0XzE=.jpg","lengua_resources/media/cGllY2U1XzE=.jpg"],["lengua_resources/media/cGllY2UxXzI=.jpg","lengua_resources/media/cGllY2UyXzI=.jpg","lengua_resources/media/cGllY2UzXzI=.jpg","lengua_resources/media/cGllY2U0XzI=.jpg","lengua_resources/media/cGllY2U1XzI=.jpg"],["lengua_resources/media/cGllY2UxXzM=.jpg","lengua_resources/media/cGllY2UyXzM=.jpg","lengua_resources/media/cGllY2UzXzM=.jpg","lengua_resources/media/cGllY2U0XzM=.jpg","lengua_resources/media/cGllY2U1XzM=.jpg"],["lengua_resources/media/cGllY2UxXzQ=.jpg","lengua_resources/media/cGllY2UyXzQ=.jpg","lengua_resources/media/cGllY2UzXzQ=.jpg","lengua_resources/media/cGllY2U0XzQ=.jpg","lengua_resources/media/cGllY2U1XzQ=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="bGVuZ3Vh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#FFFFFF";colorButton="#4782AC";colorBack="#000000";colorSele="#92A262";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
