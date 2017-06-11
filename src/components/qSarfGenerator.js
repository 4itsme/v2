var oMod = (function(){
	var publicApi = {};
	var repo = {
		letters: "ءبتثجحخدذرزسشصضطظعغفقكلمنهوي",
		bucks: 	 "AbtvjHxd*rzs$SDTZEgfqklmnhwy", //note: actual encoding for hamza is: X

		family: ["II - تفعيل", "III - فعال", "IV - إفعال", "V - تفعل", "VI - تفاعل", "VII - انفعال", "VIII - افتعال", "IX - افعلال", "X - استفعال"],
		familyValues:  ["2", "3", "4", "5", "6", "7", "8", "9", "10"],
	}
	
	function sarfGenerator(root, formNum, withColor) {
		if(!root || !formNum){ return; }
		formNum = +formNum;
		var firstRoot, secRoot, thirdRoot;
		var temp = root.split('');
		firstRoot = repo.letters.split('')[ repo.bucks.indexOf( temp[0] ) ];
		secRoot   = repo.letters.split('')[ repo.bucks.indexOf( temp[1] ) ];
		thirdRoot = repo.letters.split('')[ repo.bucks.indexOf( temp[2] ) ];
		/*var familyNumArray = document.getElementById("familyNumber");
		var formNum = familyNumArray.options[familyNumArray.selectedIndex].value;
		
		var firstRootArray = document.getElementById("root1");
		var firstRoot = firstRootArray.options[firstRootArray.selectedIndex].value;
		
		var secRootArray = document.getElementById("root2");
		var secRoot = secRootArray.options[secRootArray.selectedIndex].value;
		
		var thirdRootArray = document.getElementById("root3");
		var thirdRoot = thirdRootArray.options[thirdRootArray.selectedIndex].value;*/
		
		if(withColor){
			firstRoot = "<span style=\"color:red\">"+ firstRoot+"</span>";
			secRoot = "<span style=\"color:red\">"+ secRoot+"</span>";
			thirdRoot = "<span style=\"color:red\">"+ thirdRoot+"</span>";
		}
		
		var past = "";
		var present = "";
		var masdr = "";
		var faail = ""
		var pastpassive = "";
		var pastP = "";
		var presentP = "";
		var mafool = "";	
		var tharf = "";
		var command = ""
		var forbid = "";
		var answer = "answer";
		var hasPassive = true;

		if (formNum == 2){ //irregularities: naaqis
		if(isVowel(thirdRoot)){ //naaqis
			  past  = firstRoot + "َ" + secRoot + "َّ" + "ى";
			  present = "يُ" + firstRoot + "َ" + secRoot + "ِّ" + "ي";
			  masdr = "تَ"+ firstRoot +secRoot+"ِيَ"+"ةً";
			  faail = "مُ" + firstRoot + "َ" + secRoot + "ٍّ";
			  
			  pastP  = firstRoot + "ُ" + secRoot + "ِّ"+ "يَ";
			  presentP = "يُ" + firstRoot + "َ" + secRoot + "َّ" + "ى";
			  mafool = "مُ" + firstRoot + "َ" + secRoot +"ًّ" + "ى";
			  tharf = mafool;
			  
			  command = firstRoot + "َ" + secRoot + "ِّ";
			  forbid = " لا  "+"تُ" + firstRoot + "َ" + secRoot + "ِّ";
		  
		  }
		  else {
			  past  = firstRoot + "َ" + secRoot + "َّ" + thirdRoot + "َ";
			  present = "يُ" + firstRoot + "َ" + secRoot + "ِّ" + thirdRoot + "ُ";
			  masdr = "تَ"+ firstRoot +secRoot+"ِي"+thirdRoot+"ًا";
			  faail = "مُ" + firstRoot + "َ" + secRoot + "ِّ" + thirdRoot + "ٌ";
			  
			  pastP  = firstRoot + "ُ" + secRoot + "ِّ"+ thirdRoot + "َ";
			  presentP = "يُ" + firstRoot + "َ" + secRoot + "َّ" + thirdRoot + "ُ";
			  mafool = "مُ" + firstRoot + "َ" + secRoot + "َّ" + thirdRoot + "ٌ";
			  tharf = mafool;
			  
			  command = firstRoot + "َ" + secRoot + "ِّ"+ thirdRoot + "ْ";
			  forbid = " لا  "+"تُ" + firstRoot + "َ" + secRoot + "ِّ" + thirdRoot + "ْ";
		  }
		  
		}
		else if (formNum == 3){//irregs naaqis, mudhaaf
		  var beginMasdr = "";
		  if(firstRoot =="ء"){
			  beginMasdr = "إِيْ";		  
		  } else {
			beginMasdr= firstRoot +"ِ";
		  }
		  
		  if(secRoot==thirdRoot){//mudhaaf
			  past  = firstRoot + "ا" + secRoot + "َّ";
			  present = "يُ" + firstRoot + "ا" + secRoot + "ُّ";
			  
			  masdr = beginMasdr+secRoot+"ا"+thirdRoot+"ًا";
			  masdr = masdr + "  "+ "وَ"+ "  "+ "مُ" + firstRoot + "ا" +secRoot+"َّةً";
			  faail = "مُ" + firstRoot + "ا" + secRoot + "ٌّ";
			  
			  pastP  = firstRoot + "ُ"+"و" + secRoot+"َّ";
			  presentP = "يُ" + firstRoot + "ا" + secRoot + "ُّ";
			  mafool = faail;
			  tharf = mafool;
			  command = firstRoot+ "َا" +secRoot+ "َّ";
			  command = command + "  "+ firstRoot+ "َا" +secRoot+ "ِّ";
			  command = command + "  "+ firstRoot+ "َا" +secRoot+ "ِ" +thirdRoot+ "ْ";
			  
			  forbid = " لا  "+"تُ"+firstRoot+ "َا" +secRoot+ "َّ";
			  forbid = forbid + "  "+ " لا  "+"تُ"+firstRoot+ "َا" +secRoot+ "ِّ";
			  forbid = forbid + "  "+ " لا  "+"تُ"+firstRoot+ "َا" +secRoot+ "ِ" +thirdRoot+"ْ";
			  
		  } else if(isVowel(thirdRoot)){ //naaqis
			  past  = firstRoot + "ا" + secRoot + "َ" + "ى";
			  present = "يُ" + firstRoot + "ا" + secRoot + "ِ" + "ي";
			  
			  masdr = beginMasdr+secRoot+"ا"+"ءً";
			  masdr = masdr + "  "+"وَ" + "  "+ "مُ" + firstRoot + "ا" +secRoot+"َ"+"اةً";
			  faail = "مُ" + firstRoot + "ا" + secRoot + "ٍ";
			  
			  pastP  = firstRoot + "ُ"+"و" + secRoot +"ِ"+ "يَ";
			  presentP = "يُ" + firstRoot + "ا" + secRoot + "َ" +"ى";
			  mafool = "مُ" + firstRoot + "ا" + secRoot + "ًى";
			  tharf = mafool;
			  command = firstRoot + "ا" + secRoot + "ِ";
			  forbid = " لا  "+"تُ"+firstRoot + "ا" + secRoot + "ِ";
		  } else {
			  past  = firstRoot + "ا" + secRoot + "َ" + thirdRoot + "َ";
			  present = "يُ" + firstRoot + "ا" + secRoot + "ِ" + thirdRoot + "ُ";
			  
			  masdr = beginMasdr+secRoot+"ا"+thirdRoot+"ًا";
			  masdr = masdr + "  "+ "وَ" + "  "+ "مُ" + firstRoot + "ا" +secRoot+"َ"+thirdRoot+"َ"+"ةً";
			  faail = "مُ" + firstRoot + "ا" + secRoot + "ِ" + thirdRoot + "ٌ";
			  
			  pastP  = firstRoot + "ُ"+"و" + secRoot +"ِ"+ thirdRoot + "َ";
			  presentP = "يُ" + firstRoot + "ا" + secRoot + "َ" + thirdRoot + "ُ";
			  mafool = "مُ" + firstRoot + "ا" + secRoot + "َ" + thirdRoot + "ٌ";
			  tharf = mafool;
			  command = firstRoot + "ا" + secRoot + "ِ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تُ"+firstRoot + "ا" + secRoot + "ِ" + thirdRoot + "ْ";
		  }
		} 
		else if (formNum == 4){ //irregs mithaal, ajwaf, naaqis, lafeef maqroon(acts like naaqis), mudhaaf
		  var beginPast = "";
		  var beginMasdr = "";
		  var beginCommand = "";
		  
		  if(firstRoot =="ء"){
			  beginPast = "آ";
			  beginMasdr = "إِيْ";
			  beginCommand = "آ";
			  
		  } else {
			beginPast ="أَ"+firstRoot + "ْ";
			beginMasdr= "إِ"+firstRoot +"ْ";
			beginCommand = "أَ"+firstRoot + "ْ";
		  }
		  
		  if(isVowel(thirdRoot)){ //naaqis and lafeef maqroon(acts like naaqis)
			  past  = beginPast + secRoot + "َى";
			  present = "يُ" + firstRoot + "ْ" + secRoot + "ِي";
			  
			  if(isVowel(firstRoot)){
				beginMasdr= "إِي";
			  } 
			  masdr = beginMasdr+secRoot+"ا"+"ءً";
			  
			  faail = "مُ" + firstRoot + "ْ" + secRoot + "ٍ";
			  
			  pastP  = "أُ"+firstRoot + "ْ" + secRoot + "ِ" + "يَ";
			  presentP = "يُ" + firstRoot + "ْ" + secRoot + "َى";
			  mafool = "مُ" + firstRoot + "ْ" + secRoot + "ًى";
			  tharf = mafool;
			  command = beginCommand+ secRoot + "ِ";
			  forbid = " لا  "+"تُ"+firstRoot + "ْ" + secRoot + "ِ";
		  }
		  else if(secRoot==thirdRoot){//mudhaaf
			  past  = "أَ" +firstRoot+"َ"+secRoot + "َّ";
			  present = "يُ" + firstRoot + "ِ" + secRoot + "ُّ";
			  if(isVowel(firstRoot)){
				beginMasdr = "إِي";
			  }
			  masdr = beginMasdr+secRoot+"ا"+thirdRoot+"ًا";
			  faail = "مُ" + firstRoot + "ِ" + secRoot + "ٌّ";
			  
			  pastP  = "أُ"+firstRoot + "ِ"+ secRoot + "َّ";
			  presentP = "يُ" + firstRoot + "َ"+ secRoot + "ُّ";
			  mafool = "مُ" + firstRoot + "َ" + secRoot + "ٌّ";
			  tharf = mafool;
					  
			  command = "أَ" +firstRoot+ "ِ" +secRoot+ "َّ";
			  command = command + "  "+ "أَ" +firstRoot+ "ِ" +secRoot+ "ِّ";
			  command = command + "  "+ "أَ" +firstRoot+ "ْ" +secRoot+ "ِ" +thirdRoot+ "ْ";
			  
			  forbid = " لا  "+"تُ"+firstRoot+ "ِ" +secRoot+ "َّ";
			  forbid = forbid + "  "+" لا  "+"تُ"+firstRoot+ "ِ" +secRoot+ "ِّ";
			  forbid = forbid + "  "+ " لا  "+"تُ"+firstRoot+ "ْ" +secRoot+ "ِ" +thirdRoot+ "ْ";   
			  
		  }
		  else if (isVowel(secRoot)){//ajwaf
			  past  = "أَ" + firstRoot + "َا" + thirdRoot + "َ";
			  present = "يُ" + firstRoot + "ِي" + thirdRoot + "ُ";
			  if(isVowel(firstRoot)){
				beginMasdr = "إِي";
			  }
			  masdr = "إِ"+firstRoot+"َا"+thirdRoot+"َةً";
			  faail = "مُ" + firstRoot + "ِي" + thirdRoot + "ٌ";
			  
			  pastP  = "أُ"+firstRoot + "ِي" + thirdRoot + "َ";
			  presentP = "يُ" + firstRoot + "َا" + thirdRoot + "ُ";
			  mafool = "مُ" + firstRoot + "َا" + thirdRoot + "ٌ";
			  tharf = mafool;
			  command = "أَ"+ firstRoot + "ِ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تُ"+firstRoot + "ِ" + thirdRoot + "ْ";
		 
		  }	  
		  else{ //includes mithaal...masdr changes
			  past  = beginPast + secRoot + "َ" + thirdRoot + "َ";
			  present = "يُ" + firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "ُ";
			  if(isVowel(firstRoot)){
				beginMasdr = "إِي";
			  }
			  masdr = beginMasdr+secRoot+"ا"+thirdRoot+"ًا";
			  faail = "مُ" + firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "ٌ";
			  
			  pastP  = "أُ"+firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "َ";
			  presentP = "يُ" + firstRoot + "ْ" + secRoot + "َ" + thirdRoot + "ُ";
			  mafool = "مُ" + firstRoot + "ْ" + secRoot + "َ" + thirdRoot + "ٌ";
			  tharf = mafool;
			  command = beginCommand+ secRoot + "ِ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تُ"+firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "ْ";
		  }
		}  
		else if (formNum == 5){//irregs naaqis
			if(isVowel(thirdRoot)){
			  past  = "تَ"+firstRoot + "َ"  + secRoot +"َّ"+ "ى";
			  present = "يَتَ"+firstRoot + "َ" + secRoot + "َّ" + "ى";
			  
			  masdr = "تَ"+firstRoot + "َ" + secRoot + "ِّيًا";
			  faail = "مُ" + "تَ"+firstRoot +"َ"+ secRoot + "ٍّ";
			  
			  pastP  = "تُ"+firstRoot + "ُ" + secRoot + "ِّ" + "يَ";
			  presentP = "يُتَ"+firstRoot + "َ"+ secRoot + "َّى";
			  mafool = "مُ" + "تَ"+firstRoot + "َ" + secRoot + "ًّى";
			  tharf = mafool;
			  command = "تَ"+firstRoot + "َ" + secRoot + "َّ";
			  forbid = " لا  "+"تَتَ"+firstRoot + "َ" + secRoot + "َّ";
			} else {
			  past  = "تَ"+firstRoot + "َ"  + secRoot +"َّ"+ thirdRoot + "َ";
			  present = "يَتَ"+firstRoot + "َ" + secRoot + "َّ" + thirdRoot + "ُ";
			  
			  masdr = "تَ"+firstRoot + "َ" + secRoot + "ُّ" + thirdRoot + "ًا";
			  faail = "مُ" + "تَ"+firstRoot +"َ"+ secRoot + "ِّ" + thirdRoot + "ٌ";
			  
			  pastP  = "تُ"+firstRoot + "ُ" + secRoot + "ِّ" + thirdRoot + "َ";
			  presentP = "يُتَ"+firstRoot + "َ"+ secRoot + "َّ" + thirdRoot + "ُ";
			  mafool = "مُ" + "تَ"+firstRoot + "َ" + secRoot + "َّ" + thirdRoot + "ٌ";
			  tharf = mafool;
			  command = "تَ"+firstRoot + "َ" + secRoot + "َّ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تَتَ"+firstRoot + "َ" + secRoot + "َّ" + thirdRoot + "ْ";
			}
		} 
		else if (formNum == 6){//irregs naaqis, mudhaaf
			if(isVowel(thirdRoot)){
			  past  = "تَ"+firstRoot + "َا" + secRoot + "َى";
			  present = "يَتَ" + firstRoot + "َا" + secRoot + "َى";
			  
			  masdr = "تَ"+firstRoot+"َا"+secRoot+"ِ"+"يًا";
			  faail = "مُ" + "تَ" + firstRoot + "َا" + secRoot + "ٍ";
			  
			  pastP  = "تُ"+firstRoot + "ُو"+ secRoot+"ِيَ";
			  presentP = "يُتَ" + firstRoot + "ا" + secRoot + "َى";
			  mafool = "مُ" + "تَ" + firstRoot + "َا" + secRoot + "ًى";
			  tharf = mafool;
			  command = "تَ"+firstRoot+ "َا" +secRoot+ "َ";
			  forbid = " لا  "+"تَتَ"+firstRoot+ "َا" +secRoot+ "َ";
			} else if (secRoot==thirdRoot){ //mudhaf
			  past  = "تَ"+firstRoot + "َا" + secRoot + "َّ";
			  present = "يَتَ" + firstRoot + "َا" + secRoot + "ُّ";
			  
			  masdr = "تَ"+firstRoot+"َا"+secRoot+"ُ"+thirdRoot+"ًا";
			  faail = "مُ" + "تَ" + firstRoot + "َا" + secRoot + "ٌّ";
			  
			  pastP  = "تُ"+firstRoot + "ُ"+"و" + secRoot+"َّ";
			  presentP = "يُتَ" + firstRoot + "ا" + secRoot + "ُّ";
			  mafool = faail;
			  tharf = mafool;
			  command = "تَ"+firstRoot+ "َا" +secRoot+ "َّ";
			  command = command + "  "+ "تَ"+firstRoot+ "َا" +secRoot+ "ِّ";
			  command = command + "  "+ "تَ"+firstRoot+ "َا" +secRoot+ "ِ" +thirdRoot+ "ْ";
			  
			  forbid = " لا  "+"تَتَ"+firstRoot+ "َا" +secRoot+ "َّ";
			  forbid = forbid + "  "+ " لا  "+"تَتَ"+firstRoot+ "َا" +secRoot+ "ِّ";
			  forbid = forbid + "  "+ " لا  "+"تَتَ"+firstRoot+ "َا" +secRoot+ "َ" +thirdRoot+"ْ";
			
			} else {
			  past  = "تَ"+firstRoot + "ا" + secRoot + "َ" + thirdRoot + "َ";
			  present = "يَتَ"+firstRoot + "ا" + secRoot + "َ" + thirdRoot + "ُ";
			  
			  masdr = "تَ"+firstRoot + "ا" + secRoot + "ُ" + thirdRoot + "ًا";
			  faail = "مُ" + "تَ"+firstRoot + "ا" + secRoot + "ِ" + thirdRoot + "ٌ";
			  
			  pastP  = "تُ"+firstRoot + "ُو" + secRoot + "ِ" + thirdRoot + "َ";
			  presentP = "يُتَ"+firstRoot + "ا" + secRoot + "َ" + thirdRoot + "ُ";
			  mafool = "مُ" + "تَ"+firstRoot + "ا" + secRoot + "َ" + thirdRoot + "ٌ";
			  tharf = mafool;
			  command = "تَ"+firstRoot + "ا" + secRoot + "َ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تَتَ"+firstRoot + "ا" + secRoot + "َ" + thirdRoot + "ْ";
		  }
		} 	
		else if (formNum == 7){ //irregs ajwaf, naaqis
		  hasPassive = false;
		  if(isVowel(thirdRoot)){
			  past  = "اِنْ"+firstRoot + "َ" + secRoot + "َى";
			  present = "يَنْ"+firstRoot + "َ" + secRoot + "ِي";
			  
			  masdr = "اِنْ"+firstRoot + "ِ" + secRoot + "ا" + "ءً";
			  faail = "مُنْ" + firstRoot + "َ" + secRoot + "ٍ";
			  
			  tharf = "مُنْ" + firstRoot + "َ" + secRoot + "ًى";
			  
			  command = "اِنْ"+firstRoot + "َ" + secRoot + "ِ";
			  forbid = " لا  "+"تَنْ"+firstRoot + "َ" + secRoot + "ِ";

		  }else if(isVowel(secRoot)){
			  past  = "اِنْ"+firstRoot + "َا" + thirdRoot + "َ";
			  present = "يَنْ"+firstRoot + "َا" + thirdRoot + "ُ";
			  
			  masdr = "اِنْ"+firstRoot + "ِيا" + thirdRoot + "ًا";
			  faail = "مُنْ" + firstRoot + "َا" + thirdRoot + "ٌ";
			  
			  tharf = faail;
			  
			  command = "اِنْ"+firstRoot + "َ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تَنْ"+firstRoot +"َ"+ thirdRoot + "ْ";

		  }  else if (secRoot==thirdRoot){//mudhaaf
			  past  = "اِن"+firstRoot + "َ" + secRoot + "َّ";
			  present = "يَن" + firstRoot + "َ" + secRoot + "ُّ";
			  
			  masdr = "اِنْ"+firstRoot + "ِ" + secRoot + "ا" + thirdRoot + "ًا";
			  faail = "مُن" + firstRoot + "َ" + secRoot + "ٌّ";
			  
			  tharf = faail;
			  command = "اِنْ"+firstRoot+ "َ" +secRoot+ "َّ";
			  command = command + "  "+ "اِنْ"+firstRoot+ "َ" +secRoot+ "ِّ";
			  command = command + "  "+ "اِنْ"+firstRoot+ "َ" +secRoot+ "ِ" +thirdRoot+ "ْ";
			  
			  forbid = " لا  "+"تَن"+firstRoot+ "َ" +secRoot+ "َّ";
			  forbid = forbid + "  "+ " لا  "+"تَن"+firstRoot+ "ََ" +secRoot+ "ِّ";
			  forbid = forbid + "  "+ " لا  "+"تَن"+firstRoot+ "ََ" +secRoot+ "ِ" +thirdRoot+"ْ";
		  } else {
			  past  = "اِنْ"+firstRoot + "َ" + secRoot + "َ" + thirdRoot + "َ";
			  present = "يَنْ"+firstRoot + "َ" + secRoot + "ِ" + thirdRoot + "ُ";
			  
			  masdr = "اِنْ"+firstRoot + "ِ" + secRoot + "ا" + thirdRoot + "ًا";
			  faail = "مُنْ" + firstRoot + "َ" + secRoot + "ِ" + thirdRoot + "ٌ";
			  
			  tharf = "مُنْ" + firstRoot + "َ" + secRoot + "َ" + thirdRoot + "ٌ";
			  
			  command = "اِنْ"+firstRoot + "َ" + secRoot + "ِ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تَنْ"+firstRoot + "َ" + secRoot + "ِ" + thirdRoot + "ْ";
		  }
		}	
		else if (formNum == 8){ //irregs mithaal, ajwaf, naaqis, lafeef mafrooq (merge mithaal and naaqis)
		  if(isVowel(firstRoot)&&isVowel(thirdRoot)){
			  past  = "اِتَّ" + secRoot + "َى";
			  present = "يَتَّ" + secRoot + "ِي";
			  
			  masdr = "اِتِّ" + secRoot + "ا" + "ءً";
			  faail = "مُتَّ"+ secRoot + "ٍ";
			  
			  pastP  = "اُتُّ" + secRoot + "ِ" + "يَ";
			  presentP = "يُتَّ" + secRoot + "َى";
			  
			  mafool = "مُتَّ"+ secRoot + "ًى";
			  tharf = mafool;
			  
			  command = "اِتَّ" + secRoot + "ِ";
			  forbid = " لا  "+"تَتَّ"+ secRoot + "ِ";
		  }else if(isVowel(thirdRoot)){//naaqis and lafeef mafrooq
			  past  = "اِ"+firstRoot + "ْتَ" + secRoot + "َى";
			  present = "يَ"+firstRoot + "ْتَ" + secRoot + "ِي";
			  
			  masdr = "اِ"+firstRoot + "ْتِ" + secRoot + "ا" + "ءً";
			  faail = "مُ"+firstRoot + "ْتَ" + secRoot + "ٍ";
			  
			  pastP  = "اُ"+firstRoot + "ْتُ" + secRoot + "ِ" + "يَ";
			  presentP = "يُ"+firstRoot + "ْتَ" + secRoot + "َى";
			  
			  mafool = "مُ"+firstRoot + "ْتَ" + secRoot + "ًى";
			  tharf = mafool;
			  
			  command = "اِ"+firstRoot + "ْتَ" + secRoot + "ِ";
			  forbid = " لا  "+"تَ"+firstRoot +"ْتَ" + secRoot + "ِ";
			  
		  } else if(isVowel(firstRoot) || firstRoot=="ت" || firstRoot=="ء"){//mithaal
			  past  = "اِ"+"تَّ"+ secRoot + "َ" + thirdRoot + "َ";
			  present = "يَ"+"تَّ"+ secRoot + "ِ" + thirdRoot + "ُ";
			  
			  masdr = "اِ"+"تِّ"+ secRoot + "ا" + thirdRoot + "ًا";
			  faail = "مُ"+"تَّ"+ secRoot + "ِ" + thirdRoot + "ٌ";
			  
			  pastP  = "اُ"+"تُّ"+secRoot + "ِ" + thirdRoot + "َ";
			  presentP = "يُ"+"تَّ"+  secRoot + "َ" + thirdRoot + "ُ";
			  
			  mafool = "مُ"+"تَّ"+  secRoot + "َ" + thirdRoot + "ٌ";
			  tharf = mafool;
			  
			  command = "اِ"+"تَّ"+  secRoot + "ِ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تَتَّ"+  secRoot + "ِ" + thirdRoot + "ْ";
		  } else if(isVowel(secRoot)){ //ajwaf
			  past  = "اِ"+firstRoot + "ْتَا"+ thirdRoot + "َ";
			  present = "يَ"+firstRoot + "ْتَا"+ thirdRoot + "ُ";
			  
			  masdr = "اِ"+firstRoot + "ْتِ" + "يَا"+ thirdRoot + "ًا";
			  faail = "مُ"+firstRoot + "ْتَا"+ thirdRoot + "ٌ";
			  
			  pastP  = "اُ"+firstRoot +"ْتِي"+ thirdRoot + "َ";
			  presentP = "يُ"+firstRoot + "ْتَا"+ thirdRoot + "ُ";
			  
			  mafool = faail;
			  tharf = mafool;
			  
			  command = "اِ"+firstRoot + "ْتَ"+ thirdRoot + "ْ";
			  forbid = " لا  "+"تَ"+firstRoot + "ْتَ"+ thirdRoot + "ْ";
		  } else if(secRoot==thirdRoot){ //mudhaaf
			  past  = "اِ"+firstRoot + "ْتَ" + secRoot + "َّ";
			  present = "يَ"+firstRoot + "ْتَ" + secRoot + "ُّ";
			  
			  masdr = "اِ"+firstRoot + "ْتِ" + secRoot + "ا" + thirdRoot + "ًا";
			  faail = "مُ"+firstRoot + "ْتَ" + secRoot + "ٌّ";
			  
			  pastP  = "اُ"+firstRoot + "ْتُ" + secRoot + "َّ";
			  presentP = "يُ"+firstRoot + "ْتَ" + secRoot + "ُّ";
			  
			  mafool = faail;
			  tharf = mafool;
			  
			  command = "اِ"+firstRoot + "ْتَ" + secRoot + "َّ";
			  command = command + "  "+"اِ"+firstRoot + "ْتَ" + secRoot + "ِّ";
			  command = command + "  "+"اِ"+firstRoot + "ْتَ" + secRoot + "ِ"+thirdRoot+"ْ";
			  forbid = " لا  "+"تَ"+firstRoot +"ْتَ" + secRoot + "َّ";
			  forbid = forbid + "  "+" لا  "+"تَ"+firstRoot +"ْتَ" + secRoot +"ِّ";
			  forbid = forbid + "  "+" لا  "+"تَ"+firstRoot +"ْتَ" + secRoot + "ِ"+thirdRoot+"ْ";
		  } else {
			  past  = "اِ"+firstRoot + "ْتَ" + secRoot + "َ" + thirdRoot + "َ";
			  present = "يَ"+firstRoot + "ْتَ" + secRoot + "ِ" + thirdRoot + "ُ";
			  
			  masdr = "اِ"+firstRoot + "ْتِ" + secRoot + "ا" + thirdRoot + "ًا";
			  faail = "مُ"+firstRoot + "ْتَ" + secRoot + "ِ" + thirdRoot + "ٌ";
			  
			  pastP  = "اُ"+firstRoot + "ْتُ" + secRoot + "ِ" + thirdRoot + "َ";
			  presentP = "يُ"+firstRoot + "ْتَ" + secRoot + "َ" + thirdRoot + "ُ";
			  
			  mafool = "مُ"+firstRoot + "ْتَ" + secRoot + "َ" + thirdRoot + "ٌ";
			  tharf = mafool;
			  
			  command = "اِ"+firstRoot + "ْتَ" + secRoot + "ِ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تَ"+firstRoot +"ْتَ" + secRoot + "ِ" + thirdRoot + "ْ";
		  }
		} 	
		else if (formNum == 9){
		  hasPassive = false;
		  past  = "اِ"+firstRoot + "ْ" + secRoot + "َ" + thirdRoot + "َّ";
		  present = "يَ"+firstRoot + "ْ" + secRoot + "َ" + thirdRoot +"ُّ";
		  
		  masdr = "اِ"+firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "ا"+ thirdRoot +"ًا";
		  faail = "مُ"+firstRoot + "ْ" + secRoot + "َ" + thirdRoot + "ٌّ";
			  
		  tharf = faail;
		  
		  command = "اِ" +firstRoot+ "ْ" +secRoot+ "َ" +thirdRoot+ "َّ";
		  command = command + "  "+ "اِ" +firstRoot+ "ْ" +secRoot+ "َ" +thirdRoot+ "ِّ";
		  command = command + "  "+ "اِ" +firstRoot+ "ْ" +secRoot+ "َ" +thirdRoot+ "ِ"+thirdRoot+ "ْ";
		  
		  forbid = " لا  "+"تَ"+firstRoot+ "ْ" +secRoot+ "َ" +thirdRoot+ "َّ";
		  forbid = forbid + "  "+ " لا  "+"تَ"+firstRoot+ "ْ" +secRoot+ "َ" +thirdRoot+ "ِّ";
		  forbid = forbid + "  "+ " لا  "+"تَ"+firstRoot+ "ْ" +secRoot+ "َ" +thirdRoot+ "ِ"+thirdRoot+ "ْ";
		  
		} 	
		else if (formNum == 10){ //irregs mithaal, ajwaf, naaqis, lafeef maqroon(acts like naaqis), mudhaaf
			if(isVowel(thirdRoot)){//naaqis and lafeef maqroon
			  past  = "اِسْتَ"+firstRoot + "ْ" + secRoot + "َى";
			  present = "يَسْتَ"+firstRoot + "ْ" + secRoot + "ِي";
			  
			  if(isVowel(firstRoot)){
				masdr = "اِستِي"+ secRoot + "َاءً";
			  } else {
				masdr = "اِسْتِ"+firstRoot + "ْ"  + secRoot + "َاءً";
			  }
			  faail = "مُسْتَ"+firstRoot + "ْ" + secRoot + "ٍ";
			  
			  pastP  = "اُسْتُ"+firstRoot + "ْ" + secRoot + "ِ" + "يَ";
			  presentP = "يُسْتَ"+firstRoot + "ْ"  + secRoot + "َى";
			  
			  mafool = "مُسْتَ"+firstRoot + "ْ" + secRoot + "ًى";
			  tharf = mafool;
			  
			  command = "اِسْتَ"+firstRoot + "ْ" + secRoot + "ِ";
			  forbid = " لا  "+"تَسْتَ"+firstRoot + "ْ" + secRoot + "ِ";
				
			} else if(isVowel(secRoot)){//ajwaf
			  past  = "اِسْتَ"+firstRoot + "َا" + thirdRoot + "َ";
			  present = "يَسْتَ"+firstRoot +"ِي"+ thirdRoot + "ُ";
			  
			  masdr = "اِسْتِ"+firstRoot + "َا" + thirdRoot + "َةً";
			  faail = "مُسْتَ"+firstRoot + "ِي" + thirdRoot + "ٌ";
			  
			  pastP  = "اُسْتُ"+firstRoot +"ِي"+thirdRoot + "َ";
			  presentP = "يُسْتَ"+firstRoot + "َا"+ thirdRoot + "ُ";
			  
			  mafool = "مُسْتَ"+firstRoot + "َا" + thirdRoot + "ٌ";
			  tharf = mafool;
			  
			  command = "اِسْتَ"+firstRoot +"ِ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تَسْتَ"+firstRoot + "ِ" + thirdRoot + "ْ";
			} else if(secRoot==thirdRoot){ //mudhaaf
			  past  = "اِسْتَ"+firstRoot + "َ" + secRoot + "َّ";
			  present = "يَسْتَ" + firstRoot + "ِ" + secRoot + "ُّ";
			  
			  masdr = "اِستِ"+firstRoot + "ْ" + secRoot + "ا" + thirdRoot + "ًا";
			  faail = "مُسْتَ" + firstRoot + "ِ" + secRoot + "ٌّ";
			  
			  pastP  = "اُسْتُ"+firstRoot + "ِ" + secRoot + "َّ";
			  presentP = "يُسْتَ" + firstRoot + "َ" + secRoot + "ُّ";
			  
			  masdr = "اِستِ"+firstRoot + "ْ" + secRoot + "ا" + thirdRoot + "ًا";
			  mafool = "مُسْتَ" + firstRoot + "َ" + secRoot + "ٌّ";
			  
			  tharf = mafool;
			  command = "اِسْتَ"+firstRoot+ "ِ" +secRoot+ "َّ";
			  command = command + "  "+ "اِسْتَ"+firstRoot+ "ِ" +secRoot+ "ِّ";
			  command = command + "  "+ "اِسْتَ"+firstRoot+ "ْ" +secRoot+ "ِ" +thirdRoot+ "ْ";
			  
			  forbid = " لا  "+"تَسْتَ"+firstRoot+ "ِ" +secRoot+ "َّ";
			  forbid = forbid + "  "+ " لا  "+"تَسْتَ"+firstRoot+ "ِ"  +secRoot+ "ِّ";
			  forbid = forbid + "  "+ " لا  "+"تَسْتَ"+firstRoot+ "ْ" +secRoot+ "ِ" +thirdRoot+"ْ";
			
			} else {//includes mithaal masdr change
			  past  = "اِسْتَ"+firstRoot + "ْ" + secRoot + "َ" + thirdRoot + "َ";
			  present = "يَسْتَ"+firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "ُ";
			  
			  if(isVowel(firstRoot)){
				masdr = "اِستِي"+ secRoot + "ا" + thirdRoot + "ًا";
			  } else {
				masdr = "اِسْتِ"+firstRoot + "ْ"  + secRoot + "ا" + thirdRoot + "ًا";
			  }
			  faail = "مُسْتَ"+firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "ٌ";
			  
			  pastP  = "اُسْتُ"+firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "َ";
			  presentP = "يُسْتَ"+firstRoot + "ْ"  + secRoot + "َ" + thirdRoot + "ُ";
			  
			  mafool = "مُسْتَ"+firstRoot + "ْ" + secRoot + "َ" + thirdRoot + "ٌ";
			  tharf = mafool;
			  
			  command = "اِسْتَ"+firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "ْ";
			  forbid = " لا  "+"تَسْتَ"+firstRoot + "ْ" + secRoot + "ِ" + thirdRoot + "ْ";
			}
		}
		
		 past  = fixHamzas(past);
		 present = fixHamzas(present);
		 masdr = fixHamzas(masdr);
		 faail = fixHamzas(faail);
		 pastP  = fixHamzas(pastP);
		 presentP = fixHamzas(presentP);
		 mafool = fixHamzas(mafool);
		 tharf = fixHamzas(tharf);
		 command = fixHamzas(command);
		 forbid = fixHamzas(forbid);
		
		answer = past +"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ present+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+masdr+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+faail+"<br>";
		var answerArr = [	[past, present, masdr, faail]
						]
		if (hasPassive){
			answer = answer +pastP +"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ presentP+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+masdr+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+mafool+"<br>";
			answerArr.push( [pastP, presentP, masdr, mafool] );
		} else {
			answer = answer +"no passives<br>";
			answerArr.push(["no passives"]);
		}
		answer = answer +command +"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ forbid+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+tharf;
		answerArr.push([command, forbid, tharf ]);
		
		if(withColor){
			answer = answer +"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=\"sarfGenerator(false)\">Remove Highlight</button>";
		} else {
			answer = answer +"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=\"sarfGenerator(true)\">Highlight Root Letters</button>";
		}
		
		//document.getElementById("demo").innerHTML = answer;
		return {
			 past: past,
			 present: present,
			 masdr: masdr,
			 faail: faail,
			 pastP: pastP,
			 presentP: presentP,
			 mafool: mafool,
			 tharf: tharf,
			 command: command,
			 forbid: forbid,
			 answerArr: answerArr,
			 answer: answer,
		};
	} 

	function fixHamzas(input){
		var input = input.replace("َء", "َأ"); 
		input = input.replace("ُء", "ُؤ"); 
		input = input.replace("ِء", "ِئ");
		return input;
	}

	function isLafeefMafrooq(first, second, third){
		return true;
	}

	function isVowel(input){
		return (input=='ي')||(input=='و');
	}

	publicApi = {
		generate: sarfGenerator,
		lookup: sarfGenerator,
		forms: function(){ return {family: repo.family, familyValues: repo.familyValues }; },
		
		//comment out after API stable
		repo: repo,
	}
	return publicApi;
})();

if ( typeof define === "function" && define.amd ) {
	define( [], function() {
		return oMod;
	});
}else{
	window.sarfGenerator = oMod;
}