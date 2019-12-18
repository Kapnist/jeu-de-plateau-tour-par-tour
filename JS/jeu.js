// on selectionne notre div.................................................................................
const table=document.getElementById('tableau');
const impasseCailloux=document.getElementById("3");
const plateau=table.children[0]; // on selectionne notre plateau

// je définis mes constances.................................................................................
//==================armes==========================
const arme1='<img id="1" class="arme1" src="../HTML/arme1.png">';
const arme2='<img id="2" class="arme2" src="../HTML/arme2.png">';
const arme3='<img id="3" class="arme3" src="../HTML/arme3.png">';
const arme4='<img id="4" class="arme4" src="../HTML/arme4.jpg">';
//================joueurs au lancement du jeu ==========================
const sprite1= '<img id="combat"  class="joueur1" src="../HTML/combat.png">';
const sprite2='<img id="combatt" class="joueur2" src="../HTML/combatt.png">';
//===============joueurs ayant droppé une arme==========================
						//=======joueur1===========
const sprite1Arme1='<img id="combatArme1" class="joueur1" src="../HTML/combatArme1.png">';
const sprite1Arme2='<img id="combatArme2" class="joueur1" src="../HTML/combatArme2.png">';
const sprite1Arme3='<img id="combatArme3" class="joueur1" src="../HTML/combatArme3.png">';
					//=======joueur2===========
const sprite2Arme4='<img id="combat1Arme1" class="joueur2" src="../HTML/combattArme4.png">';
const sprite2Arme2='<img id="combat1Arme2" class="joueur2" src="../HTML/combat1Arme2.png">';
const sprite2Arme3='<img id="combat1Arme3" class="joueur2" src="../HTML/combat1Arme3.png">';
// ============= impasses ou boules de crystale======================
var impasse='<img id="3" class="impasse" src="../HTML/impasse.jpg">';

//..........................................................................................................................
//...................... fonction qui permet de generer les armes et  les impasses..........................................
//..........................................................................................................................


// fonction qui genère mes armes==============================================================	
function armes(minX, maxX, eltBoard){
	var minimum=0;
	var maximum=9;


	function getRandomNumber(minimum, maximum){
		return(Math.floor(Math.random()*(maximum-minimum)+minimum));
	}

	var randomX=getRandomNumber(minX, maxX); // on stocque nos resultats dans des variables
	var randomY=getRandomNumber(minimum, maximum);
	// on verifit que notre case est vide.si c'est le cas, sa longueur est de 0
	 if(plateau.children[randomX].children[randomY].children.length==0){
	 	plateau.children[randomX].children[randomY].innerHTML=eltBoard
	 } else if (plateau.children[randomX].children[randomY].firstChild==impasse) {
	 	plateau.children[randomX].children[randomY].innerHTML=eltBoard;
	 	return true;
	 }else{
	 	plateau.children[randomX].children[randomY].innerHTML=eltBoard;
	 	return true;
	}
}
//====================================génération des armes=========================================
var ar1=armes(1, 7, arme2);
var ar1=armes(1, 7, arme3);
var ar1=armes(1, 7, arme2);
var ar1=armes(1, 7, arme3);

//position y du joueur=============================================================================	
function getRandomNumber(minimum, maximum){ 
	var minimum=0;
	var maximum=8;
	return (Math.floor(Math.random()*(maximum-minimum)+minimum));
}

//=======================function qui me permet de générer mes joueur1 et joueur2==================
function placePlayer(minX, maxX, sprite){ console.log('test');
	var minimum=0;
	var maximum=8;

	var randomX=getRandomNumber(minX, maxX); console.log(randomX); // on stocque notre fonction dans la variable randomX
	var randomY=getRandomNumber(minimum, maximum); console.log(randomY); // on stocque notre fonction dans la variable randomY

	if(plateau.children[randomX].children[randomY].children.length==0){ console.log('test3');
		plateau.children[randomX].children[randomY].innerHTML=sprite;
	}else{
		if(randomX+1<8){
			plateau.children[randomX+1].children[randomY].innerHTML=sprite;
		}else if(randomX-1>=0){
			plateau.children[randomX-1].children[randomY].innerHTML=sprite;
		}
	}
	return[randomX, randomY];
}
let infoPlayer1; // il est important de déclarer mes variable
let infoPlayer2;

infoPlayer1=placePlayer(0, 8, sprite1);// c'est egale à la valeur retournée par placePlayer
infoPlayer2=placePlayer(0, 8, sprite2)



// fonction qui genere mes blocks
function blocks(minX, maxX, cailloux){
	var minimum=0;
	var maximum=9;

	function getRandomNumber(minimum, maximum){
		return(Math.floor(Math.random()*(maximum-minimum)+minimum));
		}

	var randomX=getRandomNumber(minX, maxX); // on stocque nos resultats dans des variables
	var randomY=getRandomNumber(minimum, maximum);
	if (plateau.children[randomX].children[randomY].children.length==0){ // on verifit que notre case est vide.si c'est le cas, sa longueur est de 0
		plateau.children[randomX].children[randomY].innerHTML=cailloux;
		return true;
	}else if (plateau.children[randomX].children[randomY].innerHTML==sprite1) {
		plateau.children[randomX].children[randomY].innerHTML=sprite1
	}else if (plateau.children[randomX].children[randomY].innerHTML==sprite2) {
		plateau.children[randomX].children[randomY].innerHTML=sprite2
	}else if (plateau.children[randomX].children[randomY].innerHTML==arme2) {
		plateau.children[randomX].children[randomY].innerHTML=arme2
	}else{
		return false;
	}
}  
 		//........generation des blocks........
var nbBlock=0
while(nbBlock<12){
	if(blocks(0, 9, impasse)==true){
	nbBlock++	
	}
}
//......................................................................................................18/03/2019
//................................fonction qui permet d'ajouter des class à nos cases.............................
//21/03/19........................................................................................................

		//===========================ajout de class aux cases vides==============================

function ajoutClassCasesvides(){
	for(i=0; i<9; i++){
		for(var j=0; j<9; j++){
			const casesVides=plateau.children[i].children[j]
			if(casesVides.children.length==0){			
				casesVides.classList.add("isAcces");
			}
		}
	}	
}
ajoutClassCasesvides();

function ajoutClassImpasses(){
	for(var i=0; i<9; i++){
		for(var j=0; j<9; j++){
			plateau.children[i].children[i]	
		}	
		if(plateau.children[i].children[i].lastChild==impasse){			
			casesVides.classList.add("classImpasse");
		}
	}
}	
ajoutClassImpasses();

//=================================================================================================================
//==============================================  postion de mes joueurs===========================================
//=================================================================================================================

// commencer par écrire une fonction qui retouve automatiquement la position de mon joueur dans le tableau
function positionJoueur1(){
	for(i=0; i<9; i++){
		for(j=0; j<9; j++){
			if(plateau.children[i].children[j].hasChildNodes()){
				if (plateau.children[i].children[j].firstChild.classList.contains("joueur1")) {
					return[i,j];
				}
			}
		}
	}
	console.log("Test position du joueur1 confirmé");
}
let posXJoueur1;
posXJoueur1=positionJoueur1();

		//========================position du joueur 2===================================
function positionJoueur2(){
	for(i=0; i<9; i++){
		for(j=0; j<9; j++){
			 if (plateau.children[i].children[j].hasChildNodes()) {
					if (plateau.children[i].children[j].firstChild.classList.contains("joueur2")) {
						return[i,j];
					}
			}
		}
	}
	console.log("Test position du joueur2 confirmé");
}
let posXJoueur2;
posXJoueur2=positionJoueur2();

//=====================================ajout de cases cliquables  ==================================================================	
			//===============================position Top================================
function positionSpriteTop(i, j){
	// on crée nos variables posx, posxx, et posxxx dans lesquelles on stocque randomX-1,randomX-2 et randomX-3
	var posx=i-1;
	var posxx=i-2;
	var posxxx=i-3;

			
	if (posx>=0) { // position 1
		if (plateau.children[posx].children[j].innerHTML === sprite1) {
			return false;
		}else if (plateau.children[posx].children[j].innerHTML === sprite2) {
			return false;
		}else if (plateau.children[posx].children[j].innerHTML === impasse) {
			return false;
		}else if ((plateau.children[posx].children[j].innerHTML === arme1)||(plateau.children[posx].children[j].innerHTML === arme2)||(plateau.children[posx].children[j].innerHTML === arme3)||(plateau.children[posx].children[j].innerHTML === arme4)){
			plateau.children[posx].children[j].classList.add("caseCliquable");
		}else if (plateau.children[posx].children[j].children.length == 0){
			plateau.children[posx].children[j].classList.add("caseCliquable");
		}else{
			return false;
		}
	}else{

	}

	if (posxx>=0) { // position 2
		if (plateau.children[posxx].children[j].innerHTML === sprite1) {
			return false;
			if (posxxx<=8) {
				return false;
			}else{
				return false;
			}
		}else if (plateau.children[posxx].children[j].innerHTML === sprite2) {
			return false;
			if (posxxx<=8) {
				return false;
			}else{
				return false;
			}
		}else if (plateau.children[posxx].children[j].innerHTML === impasse) {
			return false;
			if (posxxx<=8) {
				return false;
			}else{
				return false;
			}
			}else if ((plateau.children[posxx].children[j].innerHTML === arme1)||(plateau.children[posxx].children[j].innerHTML === arme2)||(plateau.children[posxx].children[j].innerHTML === arme3)||(plateau.children[posxx].children[j].innerHTML === arme4)){
				plateau.children[posxx].children[j].classList.add("caseCliquable");
			}else if (plateau.children[posxx].children[j].children.length == 0){
				plateau.children[posxx].children[j].classList.add("caseCliquable");
			}else{
				return false;
			}
		}else{

			}

		if (posxxx>=0) { // position 3
			if (plateau.children[posxxx].children[j].innerHTML === sprite1) {
				return false;
			}else if (plateau.children[posxxx].children[j].innerHTML === sprite2) {
				return false;
			}else if (plateau.children[posxxx].children[j].innerHTML === impasse) {
				return false;
			}else if ((plateau.children[posxxx].children[j].innerHTML === arme1)||(plateau.children[posxxx].children[j].innerHTML === arme2)||(plateau.children[posxxx].children[j].innerHTML === arme3)||(plateau.children[posxxx].children[j].innerHTML === arme4)){
				plateau.children[posxxx].children[j].classList.add("caseCliquable");
			}else if (plateau.children[posxxx].children[j].children.length == 0){
				plateau.children[posxxx].children[j].classList.add("caseCliquable");
			}else{
				return false;
			}
	}else{

	}
}
positionSpriteTop(posXJoueur1[0], posXJoueur1[1]);

//========================position bottom========================================================
function positionSpriteBottom(i, j){
	var posx=i+1;
	var posxx=i+2;
	var posxxx=i+3;
	
	if (posx<=8) {// position 1
		if (plateau.children[posx].children[j].innerHTML === sprite1) {
			return false;
		}else if (plateau.children[posx].children[j].innerHTML === sprite2) {
			return false;
		}else if (plateau.children[posx].children[j].innerHTML === impasse) {
			return false;
		}else if ((plateau.children[posx].children[j].innerHTML === arme1)||(plateau.children[posx].children[j].innerHTML === arme2)||(plateau.children[posx].children[j].innerHTML === arme3)||(plateau.children[posx].children[j].innerHTML === arme4)){
			plateau.children[posx].children[j].classList.add("caseCliquable");
		}else if (plateau.children[posx].children[j].children.length == 0){
			plateau.children[posx].children[j].classList.add("caseCliquable");
		}else{
			return false
		}
	}else{

	}

	if (posxx<=8) {// position 2
		if (plateau.children[posxx].children[j].innerHTML === sprite1) {
			return false;
			if (posxxx<=8) {
				return false;
			}else{
				return false;
			}

		}else if (plateau.children[posxx].children[j].innerHTML === sprite2) {
			return false;
			if (posxxx<=0) {
				return false;
			}else{
				return false;
			}
		}else if (plateau.children[posxx].children[j].innerHTML === impasse) {
			return false;
			if (posxxx<=8) {
				return false;
			}else{
				return false;
			}
		}else if ((plateau.children[posxx].children[j].innerHTML === arme1)||(plateau.children[posxx].children[j].innerHTML === arme2)||(plateau.children[posxx].children[j].innerHTML === arme3)||(plateau.children[posxx].children[j].innerHTML === arme4)){
			plateau.children[posxx].children[j].classList.add("caseCliquable");
		}else if (plateau.children[posxx].children[j].children.length == 0){
			plateau.children[posxx].children[j].classList.add("caseCliquable");
		}else{
			return false
		}
	}else{
	
	}

	if (posxxx<=8) {// position 3
		if (plateau.children[posxxx].children[j].innerHTML === sprite1) {
			return false;
		}else if (plateau.children[posxxx].children[j].innerHTML === sprite2) {
			return false;
		}else if (plateau.children[posxxx].children[j].innerHTML === impasse) {
			return false;
		}else if ((plateau.children[posxxx].children[j].innerHTML === arme1)||(plateau.children[posxxx].children[j].innerHTML === arme2)||(plateau.children[posxxx].children[j].innerHTML === arme3)||(plateau.children[posxxx].children[j].innerHTML === arme4)){
			plateau.children[posxxx].children[j].classList.add("caseCliquable");
		}else if (plateau.children[posxxx].children[j].children.length == 0){
			plateau.children[posxxx].children[j].classList.add("caseCliquable");
		}else{
			return false
		}
		}else{

		}
}	
positionSpriteBottom(posXJoueur1[0], posXJoueur1[1]);



		//===================================position Left=========================
function positionSpriteLeft(i, j){
	// on crée nos variables posx, posxx, et posxxx dans lesquelles on stocque randomX-1,randomX-2 et randomX-3
	var posy=j-1;
	var posyy=j-2;
	var posyyy=j-3;

	if (posy>=0) { // on pose cette condition pour eviter les cas de "undefined"
		if (plateau.children[i].children[posy].innerHTML === sprite1) {
			return false;
		}else if (plateau.children[i].children[posy].innerHTML === sprite2) {
			return false;
		}else if (plateau.children[i].children[posy].innerHTML === impasse) {
			return false;
		}else if ((plateau.children[i].children[posy].innerHTML === arme1)||(plateau.children[i].children[posy].innerHTML === arme2)||(plateau.children[i].children[posy].innerHTML === arme3)||(plateau.children[i].children[posy].innerHTML === arme4)){
			plateau.children[i].children[posy].classList.add("caseCliquable");
		}else if (plateau.children[i].children[posy].children.length == 0){
			plateau.children[i].children[posy].classList.add("caseCliquable");
		}else{
			return false
		}
	}else{
		return false;
	}

	if (posyy>=0) { // on pose cette condition pour eviter les cas de "undefined"
		if (plateau.children[i].children[posyy].innerHTML === sprite1) {
			return false;
			if (posyyy>=0) {
				return false;
			}else{
				return false;
			}
		}else if (plateau.children[i].children[posyy].innerHTML === sprite2) {
			return false;
			if (posyyy>=0) { // il est très important de poser cette autre condition
				return false;
			}else{
				return false;
			}
		}else if (plateau.children[i].children[posyy].innerHTML === impasse) {
			return false;
			if (posyyy>=0) { // il est très important de poser cette autre condition
				return false;
			}else{
				return false;
			}
		}else if ((plateau.children[i].children[posyy].innerHTML === arme1)||(plateau.children[i].children[posyy].innerHTML === arme2)||(plateau.children[i].children[posyy].innerHTML === arme3)||(plateau.children[i].children[posyy].innerHTML === arme4)){
			plateau.children[i].children[posyy].classList.add("caseCliquable");
			}else if (plateau.children[i].children[posyy].children.length == 0){
				plateau.children[i].children[posyy].classList.add("caseCliquable");
			}else{
				return false;
			}
	}else{
		""
	}

	if (posyyy>=0) {
		if (plateau.children[i].children[posyyy].innerHTML === sprite1) {
			return false;
		}else if (plateau.children[i].children[posyyy].innerHTML === sprite2) {
			return false;
		}else if (plateau.children[i].children[posyyy].innerHTML === impasse) {
			return false;
		}else if ((plateau.children[i].children[posyyy].innerHTML === arme1)||(plateau.children[i].children[posyyy].innerHTML === arme2)||(plateau.children[i].children[posyyy].innerHTML === arme3)||(plateau.children[i].children[posyyy].innerHTML === arme4)){
			plateau.children[i].children[posyyy].classList.add("caseCliquable");
		}else if (plateau.children[i].children[posyyy].children.length == 0){
			plateau.children[i].children[posyyy].classList.add("caseCliquable");
		}else{
			return false;
		}
	}else{
				
	}
}
positionSpriteLeft(posXJoueur1[0], posXJoueur1[1]);


//===================================position Left=========================
function positionSpriteRigth(i, j){
	// on crée nos variables posx, posxx, et posxxx dans lesquelles on stocque randomX-1,randomX-2 et randomX-3
	var posy=j+1;
	var posyy=j+2;
	var posyyy=j+3;
	
	if (posy<=8) {
		if (plateau.children[i].children[posy].innerHTML === sprite1) {
			return false;
		}else if (plateau.children[i].children[posy].innerHTML === sprite2) {
			return false;
		}else if (plateau.children[i].children[posy].innerHTML === impasse) {
			return false;
		}else if ((plateau.children[i].children[posy].innerHTML === arme1)||(plateau.children[i].children[posy].innerHTML === arme2)||(plateau.children[i].children[posy].innerHTML === arme3)||(plateau.children[i].children[posy].innerHTML === arme4)){
			plateau.children[i].children[posy].classList.add("caseCliquable");
		}else if (plateau.children[i].children[posy].children.length == 0){
			plateau.children[i].children[posy].classList.add("caseCliquable");
		}else{
			return false
		}
	}else{
		return false;
	}

	if (posyy<=8) { 
		if (plateau.children[i].children[posyy].innerHTML === sprite1) {
			return false;
			if (posyyy<=8) {
				return false;
			}else{
				return false;
			}
		}else if (plateau.children[i].children[posyy].innerHTML === sprite2) {
			return false;
			if (posyyy<=8) {
				return false;
				}else{
					return false;
				}
		}else if (plateau.children[i].children[posyy].innerHTML === impasse) {
			return false;
			if (posyyy<=8) {
				return false;
				}else{
					return false;
				}
		}else if ((plateau.children[i].children[posyy].innerHTML === arme1)||(plateau.children[i].children[posyy].innerHTML === arme2)||(plateau.children[i].children[posyy].innerHTML === arme3)||(plateau.children[i].children[posyy].innerHTML === arme4)){
			plateau.children[i].children[posyy].classList.add("caseCliquable");
		}else if (plateau.children[i].children[posyy].children.length == 0){
			plateau.children[i].children[posyy].classList.add("caseCliquable");
		}else{
			return false;
		}
	}else{
		""
	}

	if (posyyy<=8) {
		if (plateau.children[i].children[posyyy].innerHTML === sprite1) {
			return false;
		}else if (plateau.children[i].children[posyyy].innerHTML === sprite2) {
			return false;
		}else if (plateau.children[i].children[posyyy].innerHTML === impasse) {
			return false;
		}else if ((plateau.children[i].children[posyyy].innerHTML === arme1)||(plateau.children[i].children[posyyy].innerHTML === arme2)||(plateau.children[i].children[posyyy].innerHTML === arme3)||(plateau.children[i].children[posyyy].innerHTML === arme4)){
			plateau.children[i].children[posyyy].classList.add("caseCliquable");
		}else if (plateau.children[i].children[posyyy].children.length == 0){
			plateau.children[i].children[posyyy].classList.add("caseCliquable");
		}else{
			return false;
		}
	}else{
			
	}
}
positionSpriteRigth(posXJoueur1[0], posXJoueur1[1]);


//================================ fonction qui supprime les cases cliquables =============================
function suprimeCasesCliquable(){
	for(var a=0; a<9; a++){
		for(var c=0; c<9; c++){
			if (plateau.children[a].children[c].classList.contains("caseCliquable")) {
				plateau.children[a].children[c].classList.remove("caseCliquable");	// on supprime les cases de deplacement possible à notre joueur 1
			}
		}
	}
}


//================================ declaration de variable utiles=============================
		//============== variables du joueur 2 ===================================
var recapNomArmeJoueur1=document.getElementById("armeJoueur1");
var recapSanteJoueur1=document.getElementById("SanteJoueur1");
var recapDegatArmeJoueur1=document.getElementById("degatArmeJoueur1");
var recapPointDeVieJoueur1=document.getElementById("pointDeVieJoueur1");
var PositionAttaqueJoueur1=document.getElementById("attaqueJoueur1");
var PositionDefenseJoueur1=document.getElementById("defenseJoueur1");

		//============== variables du joueur 2 ====================================
var recapNomArmeJoueur2=document.getElementById("armeJoueur2");
var recapSanteJoueur2=document.getElementById("santeJoueur2");
var recapDegatArmeJoueur2=document.getElementById("degatArmeJoueur2");
var recapPointDeVieJoueur2=document.getElementById("pointDeVieJoueur2");
var PositionAttaqueJoueur2=document.getElementById("attaqueJoueur2");
var PositionDefenseJoueur2=document.getElementById("defenseJoueur2");	
var x=$(".caseCliquable");
//===========selection de cases cliquables=================================
function deplacement1(){
	for(var nbCc=0; nbCc<x.length; nbCc++){ // nbCc= nombre de cases cliquables
		x[nbCc].addEventListener("click", eventPlayer1);
	}
}
deplacement1();

function eventPlayer1(){ // création de notre function eventPlayer1
	var posXJoueur1=positionJoueur1(); // function qui permet de retrouver automatiquement mon joueur1
	var posXJoueur2=positionJoueur2(); // function qui permet de retrouver automatiquement mon joueur1
	var p1ContientArme1=plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].firstChild.classList.contains("joueur1Arme1");
	var p1ContientArme2=plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].firstChild.classList.contains("joueur1Arme2");
	var p1ContientArme3=plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].firstChild.classList.contains("joueur1Arme3");
	var p1ContientArme4=plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].firstChild.classList.contains("joueur1");
	
	var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/2007.mp3');
	audio.play();
	//  kapnist se ballade avec l'arme 4
	if ((p1ContientArme4)&&(!p1ContientArme2)&&(!p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML=="")){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML="";
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].classList.add("isAcces"); // on ajoute la classe isAcces à notre case
		this.classList.remove('isAcces');
		this.innerHTML=sprite1;
		this.firstChild.classList.add("joueur1");	
		$(".j1").attr("src","combat.png");				
		console.log("Kapnist se ballade sur le Plateau avce son arme d'origine");
	
		// kapnist se ballade avec l'arme 2( la hache de guerre)
	}else if ((p1ContientArme4)&&(p1ContientArme2)&&(!p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML=="")){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML="";
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].classList.add("isAcces"); // on ajoute la classe isAcces à notre case
		this.classList.remove('isAcces')
		this.innerHTML=sprite1;
		this.firstChild.classList.add("joueur1Arme2");
		$(".j1").attr("src","combatArme2.png");
		recapDegatArmeJoueur1.innerHTML="20";	
		recapNomArmeJoueur1.innerHTML="Hâche de guerre";	
		recapNomArmeJoueur1.style.background='red';							
		console.log("Kapnist se ballade sur le Plateau avec la hache de guerre");
	
		// kapnist se ballade avec l'arme 3(le Bouclier de Zelda)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML=="")){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML="";
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].classList.add("isAcces"); // on ajoute la classe isAcces à notre case
		this.classList.remove('isAcces')
		this.innerHTML=sprite1;
		this.firstChild.classList.add("joueur1Arme3");
		$(".j1").attr("src","combat.png");
		recapDegatArmeJoueur1.innerHTML="15";	
		recapNomArmeJoueur1.innerHTML="Bouclier de Zelda";
		recapNomArmeJoueur1.style.background='orange';				
		console.log("Kapnist se ballade sur le Plateau avec le bouclier de zelda");
	
			// kapnist se ballade avec l'arme 1 de Genius(Sabre Magique)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(!p1ContientArme3)&&(p1ContientArme1)&&(this.innerHTML=="")){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML='';
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].classList.add("isAcces"); // on ajoute la classe isAcces à notre case
		this.classList.remove('isAcces')
		this.innerHTML=sprite1;
		this.firstChild.classList.add("joueur1Arme1");
		$(".j1").attr("src","combatArme1.png");
		recapDegatArmeJoueur1.innerHTML="10";	
		recapNomArmeJoueur1.innerHTML="Sabre Magique";
		recapNomArmeJoueur1.style.background='';								
		console.log("Kapnist se ballade sur le Plateau avec le sabre magique");
	
		// si Kapnist se saisi de la hache de guerre( arme2)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(!p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme2)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme4;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme2");
		$(".j1").attr("src","combatArme2.png");
		recapDegatArmeJoueur1.innerHTML="20";
		recapNomArmeJoueur1.innerHTML="Hâche de guerre";	
		recapNomArmeJoueur1.style.background='red';			
		console.log("kapnist se saisi de la hache de guerre, fait gaffe Genius!");
		// si Kapnist se saisi du bouclier de zelda(arme3)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(!p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme3)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme4;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme3");
		$(".j1").attr("src","combatArme3.png");
		recapDegatArmeJoueur1.innerHTML="15";	
		recapNomArmeJoueur1.innerHTML="Bouclier de Zelda";	
		recapNomArmeJoueur1.style.background='orange';			
		console.log("kapnist se saisi du bouclier de zelda. fait gaffe Genius cà peut faire très très mal !");
		// si Kapnist se saisi du sabre Magique (arme1)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(!p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme1)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme4;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme1");
		$(".j1").attr("src","combatArme1.png");
		recapDegatArmeJoueur1.innerHTML="10";	
		recapNomArmeJoueur1.innerHTML="Sabre Magique";	
		recapNomArmeJoueur1.style.background='';			
		console.log(" HaHaHa kapnist pensait faire une bonne affaire en se saisissant du sabre Magique de Genius! fait quand même gaffe Genius il peut mieux s'en servir que toi !");
		// Kapnist change la Hache de Guerre contre l'arme 1(sabre Magique)
	}else if ((p1ContientArme4)&&(p1ContientArme2)&&(!p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme1)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme2;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme1");
		$(".j1").attr("src","combatArme1.png");
		recapDegatArmeJoueur1.innerHTML="10";	
		recapNomArmeJoueur1.innerHTML="Sabre Magique";	
		recapNomArmeJoueur1.style.background=''	;	
		console.log(" Bonne nouvelle ! Kapnist à abandonné la hache de Guerre au profit du sabre Magique");
		// Kapnist change la Hache de Guerre contre une autre Hache de guerre(arme2)
	}else if ((p1ContientArme4)&&(p1ContientArme2)&&(!p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme2)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme2;
		this.innerHTML=sprite1;
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme2");
		$(".j1").attr("src","combatArme2.png");
		recapDegatArmeJoueur1.innerHTML="20";
		recapNomArmeJoueur1.innerHTML="Hache de Guerre";	
		recapNomArmeJoueur1.style.background='red';			
		console.log(" kapnist change la hache de guerre contre une autre toute neuve");		
		// Kapnist change la Hache de Guerre contre l'arme3(le Bouclier de Zelda)
	}else if ((p1ContientArme4)&&(p1ContientArme2)&&(!p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme3)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme2;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme3");
		$(".j1").attr("src","combatArme3.png");
		recapDegatArmeJoueur1.innerHTML="15";	
		recapNomArmeJoueur1.innerHTML="Bouclier de Zelda";	
		recapNomArmeJoueur1.style.background='orange';		
		console.log(" Kapnist ne se sent pas trop à l'aise avec la hache de guerre ! il préfère se saisir du bouclier de Zelda");	
		// Kapnist change la Hache de Guerre contre l'arme son arme d'origine( sabre Egyptien arme4)
	}else if ((p1ContientArme4)&&(p1ContientArme2)&&(!p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme4)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme2;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme4");
		$(".j1").attr("src","combat.png");
		recapDegatArmeJoueur1.innerHTML="10";	
		recapNomArmeJoueur1.innerHTML="sabre Egyptien";	
		recapNomArmeJoueur1.style.background='';			
		console.log(" Kapnist ne se sent pas trop à l'aise avec la hache de guerre ! il préfère son sabre Egyptien");		
		// Kapnist change le bouclier de Zelda contre l'arme 1(sabre Magique)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme1)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme3;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme1");
		$(".j1").attr("src","combatArme1.png");
		recapDegatArmeJoueur1.innerHTML="10";
		recapNomArmeJoueur1.innerHTML="Sabre Magique";	
		recapNomArmeJoueur1.style.background='';			
		console.log(" Bonne nouvelle ! Kapnist à abandonné le bouclier de Zelda au profit du sabre Magique");
		// Kapnist change le bouclier de Zelda contre l'arme2(la Hâche de guerre)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme2)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme3;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme2");
		$(".j1").attr("src","combatArme2.png");
		recapDegatArmeJoueur1.innerHTML="20";
		recapNomArmeJoueur1.innerHTML="Hache de guerre";	
		recapNomArmeJoueur1.style.background='red';			
		console.log(" Attention Kapnist veut monter en puissance. Il s'est saisi de la hache de guerre !");
		// Kapnist change le bouclier de Zelda contre un autre bouclié de zelda( arme3)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme3)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme3;
		this.innerHTML=sprite1;
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme3");
		$(".j1").attr("src","combatArme3.png");
		recapDegatArmeJoueur1.innerHTML="15";
		recapNomArmeJoueur1.innerHTML="bouclier de Zelda";	
		recapNomArmeJoueur1.style.background='orange'	;		
		console.log(" kapnist change son bouclier de Zelda contre un autre bouclier de Zelda !");
		// Kapnist change le bouclier de Zelda contre l'arme son arme d'origine( sabre Egyptien arme4)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(p1ContientArme3)&&(!p1ContientArme1)&&(this.innerHTML==arme4)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme3;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme4");
		$(".j1").attr("src","combat.png")
		recapDegatArmeJoueur1.innerHTML="10";
		recapNomArmeJoueur1.innerHTML="sabre Egyptien";
		recapNomArmeJoueur1.style.background='';
		console.log(" Kapnist ne se sent pas trop à l'aise avec le bouclier de Zelda ! il préfère son sabre Egyptien");
		// Kapnist change le sabre magique  contre l'arme 2(la hache de guerre)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(!p1ContientArme3)&&(p1ContientArme1)&&(this.innerHTML==arme2)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme1;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme2");
		$(".j1").attr("src","combatArme2.png");
		recapDegatArmeJoueur1.innerHTML="20";
		recapNomArmeJoueur1.innerHTML="Hâche de Guerre"	;
		recapNomArmeJoueur1.style.background='red';			
		console.log(" Attention ! Kapnist trouve l'arme de Genius trop nul et se saisi de la hache de guerre");
		// Kapnist change le Sabre Magique  contre l'arme3(le bouclier de zelda)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(!p1ContientArme3)&&(p1ContientArme1)&&(this.innerHTML==arme3)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme1;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme3");
		$(".j1").attr("src","combatArme3.png");
		recapDegatArmeJoueur1.innerHTML="15";	
		recapNomArmeJoueur1.innerHTML="Bouclier de Zelda";	
		recapNomArmeJoueur1.style.background='orange';		
		console.log(" Attention Kapnist trouve que le Sabre de Genius n'a rien de magique et se saisi du bouclier de Zelda !");
		// Kapnist change le sabre Magique de genius  contre l'arme son arme d'origine( sabre Egyptien arme4)
	}else if ((p1ContientArme4)&&(!p1ContientArme2)&&(!p1ContientArme3)&&(p1ContientArme1)&&(this.innerHTML==arme4)){
		plateau.children[posXJoueur1[0]].children[posXJoueur1[1]].innerHTML=arme1;
		this.innerHTML=sprite1;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur1");	
		this.firstChild.classList.add("joueur1Arme4");
		$(".j1").attr("src","combat.png");
		recapDegatArmeJoueur1.innerHTML="10";	
		recapNomArmeJoueur1.innerHTML="sabre Egyptien";	
		recapNomArmeJoueur1.style.background='';
		console.log(" Kapnist trouve le Sabre Magique de Genius trop nul ! il préfère de loin son sabre Egyptien");
	}else{
		alert("Veillez cliquer sur une case jaune s'il vous plait");
	}

	// suppression de l'evenement click eventPlayer1
	for(var w=0; w<9; w++){
		for(var z=0; z<9; z++){
				plateau.children[w].children[z].removeEventListener("click", eventPlayer1) ;	// on enlève l'evenement click du joueur 1.======
		}
	}
	suprimeCasesCliquable() // function qui vien par la suite supprimer nos cases cliquables
	
	// on resélectionne les cases clicquables par le joueur 2 ========================================================================
	positionSpriteTop(posXJoueur2[0], posXJoueur2[1]);  
	positionSpriteLeft(posXJoueur2[0], posXJoueur2[1]);
	positionSpriteRigth(posXJoueur2[0], posXJoueur2[1]);
	positionSpriteBottom(posXJoueur2[0], posXJoueur2[1]);

	// on fait appel à notre fuction figth! pour verifier s'il n'y a pas possibilité d'engager un combat
	figth() ; 


	// si notre fonction figth n'est pas vérifiée on ajoute l'evenement click de eventPlayer2
	for(var nbCasesCliquable=0; nbCasesCliquable<$(".caseCliquable").length; nbCasesCliquable++){
		$(".caseCliquable")[nbCasesCliquable].addEventListener("click", eventPlayer2);
	}		

		
}


function eventPlayer2(){
	var posXJoueur1=positionJoueur1(); // function qui permet de retrouver automatiquement mon joueur1
	var posXJoueur2=positionJoueur2(); // function qui permet de retrouver automatiquement mon joueur1
	// si notre joueur 2 ne possède aucune arme et veut se déplacer dans une case vide
	var p2ContientArme1=plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].firstChild.classList.contains("joueur2");
	var p2ContientArme2=plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].firstChild.classList.contains("joueur2Arme2");
	var p2ContientArme3=plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].firstChild.classList.contains("joueur2Arme3");
	var p2ContientArme4=plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].firstChild.classList.contains("joueur2Arme4");
	
	var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/2007.mp3');
	audio.play();

	//  Genius se ballade avec l'arme 1 et ne possède ni l'arme 2, 3, 4
	  if ((p2ContientArme1)&&(!p2ContientArme2)&&(!p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML=="")){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML="";
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].classList.add("isAcces"); // on ajoute la classe isAcces à notre case
		this.classList.remove('isAcces');
		this.innerHTML=sprite2;
		this.firstChild.classList.add("joueur2");
		$(".j2").attr("src","combatt.png");					
		console.log("Genius se ballade sur le Plateau avce son arme d'origine");
	
		// Genius se ballade avec l'arme 2( la hache de guerre)
	}else if ((p2ContientArme1)&&(p2ContientArme2)&&(!p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML=="")){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML="";
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].classList.add("isAcces"); // on ajoute la classe isAcces à notre case
		this.classList.remove('isAcces')
		this.innerHTML=sprite2;
		this.firstChild.classList.add("joueur2Arme2");
		$(".j2").attr("src","combat1Arme2.png")	;
		recapDegatArmeJoueur2.innerHTML="20";	
		recapNomArmeJoueur2.innerHTML="Hâche de guerre"	;
		recapNomArmeJoueur2.style.background='red';							
		console.log("Genius se ballade sur le Plateau avec la hache de guerre");
	
		// Genius se ballade avec l'arme 3(le Bouclier de Zelda)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML=="")){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML="";
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].classList.add("isAcces"); // on ajoute la classe isAcces à notre case
		this.classList.remove('isAcces')
		this.innerHTML=sprite2;
		this.firstChild.classList.add("joueur2Arme3");
		$(".j2").attr("src","combat1Arme3.png");	
		recapDegatArmeJoueur2.innerHTML="15";	
		recapNomArmeJoueur2.innerHTML="Bouclier de Zelda";	
		recapNomArmeJoueur2.style.background='orange';				
		console.log("Genius se ballade sur le Plateau avec le bouclier de zelda");
	
			// Genius se ballade avec l'arme 4 (Sabre Egyptien)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(!p2ContientArme3)&&(p2ContientArme4)&&(this.innerHTML=="")){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML="";
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].classList.add("isAcces"); // on ajoute la classe isAcces à notre case
		this.classList.remove('isAcces');
		this.innerHTML=sprite2;
		this.firstChild.classList.add("joueur2Arme4");
		$(".j2").attr("src","combattArme4.png")	;
		recapDegatArmeJoueur2.innerHTML="10";	
		recapNomArmeJoueur2.innerHTML="Sabre Egyptien";
		recapNomArmeJoueur2.style.background='';								
		console.log("Genius se ballade sur le Plateau avec le sabre magique");
	
		//  Genius se saisi de la hache de guerre( arme2)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(!p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme2)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme1;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme2");
		$(".j2").attr("src","combat1Arme2.png");	
		recapDegatArmeJoueur2.innerHTML="20";	
		recapNomArmeJoueur2.innerHTML="Hâche de guerre";	
		recapNomArmeJoueur2.style.background='red';			
		console.log(" Attention Genius s'est saisi de la hâche de guerre. fait gaffe Kapnist");
		//  Genius se saisi du bouclier de zelda(arme3)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(!p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme3)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme1;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme3");
		$(".j2").attr("src","combat1Arme3.png");	
		recapDegatArmeJoueur2.innerHTML="15";	
		recapNomArmeJoueur2.innerHTML="Bouclier de Zelda";	
		recapNomArmeJoueur2.style.background='orange';			
		console.log(" Attention ! Genius s'est saisi du Bouclier de Zelda. fait gaffe Kapnist cà peut faire très très mal !");
		//  Genius se saisi du sabre Magique (arme4)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(!p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme4)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme1;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme4");
		$(".j2").attr("src","combattArme4.png")	;
		recapDegatArmeJoueur2.innerHTML="10";	
		recapNomArmeJoueur2.innerHTML="Sabre Egyptien";	
		recapNomArmeJoueur2.style.background=''	;		
		console.log(" HaHaHa Genius pensait faire une bonne affaire en se saisissant du sabre Egyptien de Kapnist! Fait quand même gaffe Kapnist il peut mieux s'en servir que toi !");
		
		// Genius change la Hache de Guerre contre l'arme 1(sabre Magique)
	}else if ((p2ContientArme1)&&(p2ContientArme2)&&(!p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme1)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme2;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme1");
		$(".j2").attr("src","combatt.png");
		recapDegatArmeJoueur2.innerHTML="10";	
		recapNomArmeJoueur2.innerHTML="Sabre Magique";	
		recapNomArmeJoueur2.style.background=''	;		
		console.log(" Bonne nouvelle ! Genius à abandonné la hache de Guerre au profit du sabre Magique");
		
		// Genius change la Hache de Guerre contre la hache de guerre (arme 2)
	}else if ((p2ContientArme1)&&(p2ContientArme2)&&(!p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme2)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme2;
		this.innerHTML=sprite2;
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme2");
		$(".j2").attr("src","combat1Arme2.png")	;
		recapDegatArmeJoueur2.innerHTML="20";	
		recapNomArmeJoueur2.innerHTML="Hache de guerre"	;
		recapNomArmeJoueur2.style.background='red';			
		console.log("Genius change sa hache de guerre contre une autre toute neuve");
		
		// Genius change la Hache de Guerre contre l'arme3(le Bouclier de Zelda)
	}else if ((p2ContientArme1)&&(p2ContientArme2)&&(!p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme3)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme2;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme3");
		$(".j2").attr("src","combat1Arme3.png");	
		recapDegatArmeJoueur2.innerHTML="15";
		recapNomArmeJoueur2.innerHTML="Bouclier de Zelda";	
		recapNomArmeJoueur2.style.background='orange';		
		console.log(" Genius ne se sent pas trop à l'aise avec la hache de guerre ! il préfère se saisir du bouclier de Zelda");
		// Genius change la Hache de Guerre contre l'arme son arme d'origine( sabre Egyptien arme4)
	}else if ((p2ContientArme1)&&(p2ContientArme2)&&(!p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme4)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme2;
		this.innerHTML=sprite2;
			var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme4");
		$(".j2").attr("src","combattArme4.png")	;
		recapDegatArmeJoueur2.innerHTML="10";	
		recapNomArmeJoueur2.innerHTML="sabre Egyptien";	
		recapNomArmeJoueur2.style.background='';
		console.log(" Genius ne se sent pas trop à l'aise avec la hache de guerre ! il essaile  sabre Egyptien");
		// Genius change le Bouclier de Zelda contre l'arme 1(sabre Magique)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme1)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme3;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.innerHTML=sprite2;
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme1");
		$(".j2").attr("src","combatt.png");	
		recapDegatArmeJoueur2.innerHTML="10";	
		recapNomArmeJoueur2.innerHTML="Sabre Magique";	
		recapNomArmeJoueur2.style.background='';	
		console.log(" Bonne nouvelle ! Kapnist à abandonné le bouclier de Zelda et préfère son Sabre Magique");
		// Genius change le bouclier de Zelda contre l'arme2(la Hâche de guerre)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme2)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme3;
		this.innerHTML=sprite2;
		this.firstChild.classList.add("joueur2");	
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2Arme2");
		$(".j2").attr("src","combat1Arme2.png");
		recapDegatArmeJoueur2.innerHTML="20";	
		recapNomArmeJoueur2.innerHTML="Hache de guerre"	;
		recapNomArmeJoueur2.style.background='red';			
		console.log(" Attention Genius veut monter en puissance. Il s'est saisi de la hache de guerre !");
		// Genius change le bouclier de Zelda contre un autre bouclier tout noeuf(arme3)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme3)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme3;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme3");
		$(".j2").attr("src","combat1Arme3.png");
		recapDegatArmeJoueur2.innerHTML="15";	
		recapNomArmeJoueur2.innerHTML="Bouclier de Zelda";	
		recapNomArmeJoueur2.style.background='orange';			
		console.log(" Genius change son ancien bouclier contre un autre tout noeuf !");
		// Genius change le bouclier de Zelda contre l'arme son arme d'origine( sabre Egyptien arme4)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme4)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme3;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme4");
		$(".j2").attr("src","combattArme4.png");
		recapDegatArmeJoueur2.innerHTML="10";	
		recapNomArmeJoueur2.innerHTML="sabre Egyptien";
		recapNomArmeJoueur2.style.background='';			
		console.log(" Genius ne se sent pas trop à l'aise avec le bouclier de Zelda ! Il essaie le Sabre Egyptien de Kapnist");
		// Genius change le Bouclier de zelda contre le sabre Egtptien(arme 4)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(p2ContientArme3)&&(!p2ContientArme4)&&(this.innerHTML==arme4)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme3;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme4");
		$(".j2").attr("src","combattArme4.png");
		recapDegatArmeJoueur2.innerHTML="10";
		recapNomArmeJoueur2.innerHTML="sabre Egyptien";
		recapNomArmeJoueur2.style.background=''			
		console.log(" Genius ne se sent pas trop à l'aise avec le bouclier de Zelda ! Il essaie le Sabre Egyptien de Kapnist");
		
		// Genius change le sabre Egyptien  contre l'arme 2(la hache de guerre)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(!p2ContientArme3)&&(p2ContientArme4)&&(this.innerHTML==arme2)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme4;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme2");
		$(".j2").attr("src","combat1Arme2.png")	
		recapDegatArmeJoueur2.innerHTML="20"	
		recapNomArmeJoueur2.innerHTML="Hâche de Guerre"	
		recapNomArmeJoueur2.style.background='red'			
		console.log(" Attention ! Genius trouve qu'il est temps de monter en puissance! Il se saisi de la hache de guerre");
		// Genius change le Sabre Egyptien contre l'arme3(le bouclier de zelda)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(!p2ContientArme3)&&(p2ContientArme4)&&(this.innerHTML==arme3)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme4;
		this.innerHTML=sprite2;
		var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/305.mp3');
			audio.play();
		this.firstChild.classList.add("joueur2");	
		this.firstChild.classList.add("joueur2Arme3");
		$(".j2").attr("src","combat1Arme3.png")	
		recapDegatArmeJoueur2.innerHTML="15"	
		recapNomArmeJoueur2.innerHTML="Bouclier de Zelda"	
		recapNomArmeJoueur2.style.background='orange'			
		console.log(" Attention Genius abandonne son sabre magique et se saisi du bouclier de Zelda !");
		// Genius change le sabre Egyptien de kapnist  contre l'arme son arme d'origine( sabre Magique arme1)
	}else if ((p2ContientArme1)&&(!p2ContientArme2)&&(!p2ContientArme3)&&(p2ContientArme4)&&(this.innerHTML==arme1)){
		plateau.children[posXJoueur2[0]].children[posXJoueur2[1]].innerHTML=arme4;
		this.innerHTML=sprite2;
		this.firstChild.classList.add("joueur2");	
		$(".j2").attr("src","combatt.png")	
		recapDegatArmeJoueur2.innerHTML="10"	
		recapNomArmeJoueur2.innerHTML="Sabre Magique"	
		recapNomArmeJoueur2.style.background=''			
		console.log(" Genius décide  de changer son Sabre Magique contre le Sabre Egyptien de Kapnist");
	}else{
		alert("Veillez cliquer sur une case jaune s'il vous plait")
	}
	// on supprime notre evenement  click de eventPlayer2
	for(var A=0; A<9; A++){
		for(var B=0; B<9; B++){
				plateau.children[A].children[B].removeEventListener("click", eventPlayer2) ;	// on enlève l'evenement click du joueur 1.======
		}
	}
	suprimeCasesCliquable(); // on suprime à nouveau les cases cliquables
	
	// on resélectionne les cases clicquables par le joueur 1 ========================================================================
	positionSpriteTop(posXJoueur1[0], posXJoueur1[1]);  
	positionSpriteLeft(posXJoueur1[0], posXJoueur1[1]);
	positionSpriteRigth(posXJoueur1[0], posXJoueur1[1]);
	positionSpriteBottom(posXJoueur1[0], posXJoueur1[1]);

	figth() ; // on fait appel à notre fuction figth!	
	// en fin,  si notre fonction fight n,est pas vérifiée, on rajoute notre eévénement "click" sur les cases cliquable du joueur 1 ================================================
	
	for(var nbCasesCliquable=0; nbCasesCliquable<$(".caseCliquable").length; nbCasesCliquable++){
		$(".caseCliquable")[nbCasesCliquable].addEventListener("click", eventPlayer1);

	}	
	
}


function figth(){ 
	//=================en fonction de la position du joueur 1==========================
			// si le joueur 1 est en haut du joueur 2
	if (positionJoueur1()[0]-1>=0) {
		if ((positionJoueur1()[0]-1==positionJoueur2()[0])&&(positionJoueur1()[1]==positionJoueur2()[1])) {
			var audio = new Audio('http://s1download-universal-soundbank.com/wav/12476.wav');
			audio.play();
			alert("figth!!!!!!!!!!!")
			console.log("figth!!!!!!!!!!!!!!!!!!!!!!!!")
			suprimeCasesCliquable()
			combat();
		}
	}
			// si le joueur 1 est en dessous du joueur 2
	if (positionJoueur1()[0]+1<=8) {
		if ((positionJoueur1()[0]+1==positionJoueur2()[0])&&(positionJoueur1()[1]==positionJoueur2()[1])) {
			var audio = new Audio('http://s1download-universal-soundbank.com/wav/12476.wav');
			audio.play();
			alert("figth!!!!!!!!!!!")
			console.log("figth!!!!!!!!!!!!!!!!!!!!!!!!")
			suprimeCasesCliquable()
			combat();
		}
	}
			// si le joueur 1 est à gauche du joueur 2
	if (positionJoueur1()[1]-1>=0) {
		if ((positionJoueur1()[0]==positionJoueur2()[0])&&(positionJoueur1()[1]-1==positionJoueur2()[1])) {
			var audio = new Audio('http://s1download-universal-soundbank.com/wav/12476.wav');
			audio.play();
			alert("figth!!!!!!!!!!");
			console.log("figth!!!!!!!!!!!!!!!!!!!!!!!!");
			suprimeCasesCliquable()
			combat();
		}
	}
			// si le joueur 1 est à droite du joueur 2
	if (positionJoueur1()[1]+1<=8) {
		if ((positionJoueur1()[0]==positionJoueur2()[0])&&(positionJoueur1()[1]+1==positionJoueur2()[1])) {
			var audio = new Audio('http://s1download-universal-soundbank.com/wav/12476.wav');
			audio.play();
			alert("figth!!!!!!!!!!!");
			console.log("figth!!!!!!!!!!!!!!!!!!!!!!!!")
			suprimeCasesCliquable()
			combat();
		}
	}	

				
	// ici on n'oublira pas de faire appel à notre function attaque !
		console.log("function combat déclanchée")
}
var recapDegatArmeJoueur1=document.getElementById("degatArmeJoueur1");
var recapPointDeVieJoueur1=document.getElementById("pointDeVieJoueur1");
var PositionDefenseJoueur1=document.getElementById("defenseJoueur1");
var recapDegatArmeJoueur2=document.getElementById("degatArmeJoueur2");
var recapPointDeVieJoueur2=document.getElementById("pointDeVieJoueur2");
var PositionDefenseJoueur2=document.getElementById("defenseJoueur2");



function combat(){

	function getRandomInt(max,min) { // function qui détermine qui commence la partie
	  return (Math.random(max-min));
	}
	if(getRandomInt(1, 0)<=0.2){ // si getRandomInt est inférieur à 0.2 alors c'est le joueur 1 qui commmence la partie si non c'est le joueur 2

		PositionAttaqueJoueur1.style.backgroundColor="#E0FF33"
		PositionDefenseJoueur1.style.backgroundColor="#E0FF33"
		PositionAttaqueJoueur1.addEventListener("click", attaque1);
		PositionDefenseJoueur1 .addEventListener("click", defense1);
	}else{

		PositionAttaqueJoueur2.style.backgroundColor="#E0FF33"
		PositionDefenseJoueur2.style.backgroundColor="#E0FF33"
		PositionAttaqueJoueur2.addEventListener("click", attaque2);
		PositionDefenseJoueur2 .addEventListener("click", defense2);
	}


	var recatPateauJoueur1=document.getElementById('joueur1');// déclaration de variables
	var recatPateauJoueur2=document.getElementById('joueur2');

	//================================fonction attaque 2==============================
	function attaque1(){		
		recapPointDeVieJoueur2.textContent=recapPointDeVieJoueur2.textContent-recapDegatArmeJoueur1.textContent;
		PositionAttaqueJoueur1.style.backgroundColor="";
		PositionDefenseJoueur1.style.backgroundColor="";
		PositionDefenseJoueur1.removeEventListener("click", defense1);
		PositionAttaqueJoueur1.removeEventListener("click", attaque1);
		
		if (recapPointDeVieJoueur2.textContent>0) {//===============condition qui permet de continuer le jeu et de déclarer le vainqueur=========
			PositionAttaqueJoueur2.style.backgroundColor="#E0FF33";
			PositionAttaqueJoueur2.addEventListener("click", attaque2);
			PositionDefenseJoueur2.style.backgroundColor="#E0FF33";
			PositionDefenseJoueur2 .addEventListener("click", defense2);

		}else if (recapPointDeVieJoueur2.textContent<=0){
			recatPateauJoueur1.innerHTML="";
			recatPateauJoueur2.innerHTML="";
			recatPateauJoueur1.classList.add("joueur1Winner");
			recatPateauJoueur2.classList.add("joueur2Ko");
			var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/12455.mp3');
			audio.play(); 
			alert("Game over! The winner is Kapnist!")		// on suprime tout nos evenemets
		}
		
	}
				//================================fonction attaque 1 ==============================

	function attaque2(){
		recapPointDeVieJoueur1.textContent=recapPointDeVieJoueur1.textContent-recapDegatArmeJoueur2.textContent;
		PositionAttaqueJoueur2.style.backgroundColor="";  // on suprime le background du bouton attaque 2
		PositionAttaqueJoueur2.removeEventListener("click", attaque2); // on suprime l'evenement click 2  
		PositionDefenseJoueur2.style.backgroundColor=""; // on suprime le background du bouton defense
		PositionDefenseJoueur2 .removeEventListener("click", defense2); // on suprime l'evenemnt click defense
		
		if (recapPointDeVieJoueur1.textContent>0) { //===============condition qui permet de continuer le jeu et de déclarer le vainqueur=========
			PositionDefenseJoueur1.style.backgroundColor="#E0FF33";
			PositionDefenseJoueur1.addEventListener("click", defense1);
			PositionAttaqueJoueur1.style.backgroundColor="#E0FF33";
			PositionAttaqueJoueur1.addEventListener("click", attaque1);

		}else if (recapPointDeVieJoueur1.textContent<=0) {
			recatPateauJoueur1.innerHTML="";
			recatPateauJoueur2.innerHTML="";
			var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/12455.mp3');
			audio.play(); 
			recatPateauJoueur2.classList.add("joueur2Winner");
			recatPateauJoueur1.classList.add("joueur1Ko");
			alert("Game over! The winner is Genius!")
		}
	}

	//========================== fonction defense 1=====================
		function defense1(){
				
		recapPointDeVieJoueur2.textContent=recapPointDeVieJoueur2.textContent-recapDegatArmeJoueur1.textContent*0.5;
		PositionAttaqueJoueur1.style.backgroundColor="";
		PositionAttaqueJoueur1.removeEventListener("click", attaque1);
		PositionDefenseJoueur1.style.backgroundColor="";
		PositionDefenseJoueur1.removeEventListener("click", defense1);
		
		if (recapPointDeVieJoueur2.textContent>0) {//===============condition qui permet de continuer le jeu et de déclarer le vainqueur=========
			PositionDefenseJoueur2.style.backgroundColor="#E0FF33";
			PositionAttaqueJoueur2.style.backgroundColor="#E0FF33";
			PositionAttaqueJoueur2.addEventListener("click", attaque2);
			PositionDefenseJoueur2.addEventListener("click", defense2);
		}else if (recapPointDeVieJoueur2.textContent<=0){
			recatPateauJoueur1.innerHTML="";
			recatPateauJoueur2.innerHTML="";
			var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/12455.mp3');
			audio.play();
			recatPateauJoueur1.classList.add("joueur1Winner");
			recatPateauJoueur2.classList.add("joueur2Ko");
			alert("Game over! The winner is Kapnist!")
		}
	}
				//================================fonction defense 2 ==============================

	function defense2(){
			
		recapPointDeVieJoueur1.textContent=recapPointDeVieJoueur1.textContent-recapDegatArmeJoueur2.textContent*0.5;
		PositionDefenseJoueur2.style.backgroundColor="";
		PositionAttaqueJoueur2.style.backgroundColor="";
		PositionAttaqueJoueur2.removeEventListener("click", attaque2);
		PositionDefenseJoueur2.removeEventListener("click", defense2);
		
		if (recapPointDeVieJoueur1.textContent>0) { //===============condition qui permet de continuer le jeu et de déclarer le vainqueur=========
			PositionDefenseJoueur1.style.backgroundColor="#E0FF33";
			PositionDefenseJoueur1.addEventListener("click", defense1);
			PositionAttaqueJoueur1.style.backgroundColor="#E0FF33";
			PositionAttaqueJoueur1.addEventListener("click", attaque1);
		}else if (recapPointDeVieJoueur1.textContent<=0){
			recatPateauJoueur1.innerHTML="";
			recatPateauJoueur2.innerHTML="";
			var audio = new Audio('http://s1download-universal-soundbank.com/mp3/sounds/12455.mp3');
			audio.play();
			recatPateauJoueur2.classList.add("joueur2Winner");
			recatPateauJoueur1.classList.add("joueur1Ko");
			alert("Game over! The winner is Genius!");
		}
	
	
	}
	
}

// function qui rafraichit ma page
$('.reloadGame').click(function(){// on ajoute un evenement de type click à notre bouton reloardGame
	window.location.reload()
}); 


 // function qui anime le background de la div qui permet de redemarer le jeu
function GifColor(){
var couleur=[ "red", "green", "blue", "yellow", "violet", "orange", "grey", "brown", "pink", "purple", "aqua", "beige", "chocolate", "coral", "crimson", "cyan", "fuchsia" ,"gold", "indigo", "lime", "magenta", "maroon", "navy", "olive", "plum", "salmon", "silver", "tan"]
var randomCouleur=couleur[Math.floor(Math.random()*(couleur.length-1))];
$(".reloadGame").css("backgroundColor",randomCouleur);
console.log(randomCouleur)
	setTimeout("GifColor()", 1000);
}
GifColor();

