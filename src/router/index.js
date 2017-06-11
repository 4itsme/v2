import Vue from 'vue'
import Router from '../lib/vue-router'

import quranSarf from '../components/quranSarf.vue'
import quranDashboard from '../components/quranDashboard.vue'
import quranSuraname from '../components/quranSuraname.vue'
import qSura from '../components/qSura.vue'
import qAyah from '../components/qAyah.vue'
import qPage from '../components/qPage.vue'
import qJuz from '../components/qJuz.vue'
import qNav from '../components/qNav.vue'
Vue.component('quranSarf', quranSarf);
Vue.component('quranDashboard', quranDashboard);
Vue.component('quranSuraname', quranSuraname);
Vue.component('qSura', qSura);
Vue.component('qAyah', qAyah);
Vue.component('qPage', qPage);
Vue.component('qJuz', qJuz);
Vue.component('qNav', qNav);

var comps = {
//			quranHeader: quranHeader,
			quranNav: qNav,
//			twoPaneView: twoPaneView,
//			quranSuraComp: quranSuraComp,
//			quranPageComp: quranPageComp,
//			quranAyahComp: quranAyahComp,

			quranDashboard: quranDashboard,
//			quranMain: quranMain,
//			quranSearch: quranSearch,
//			quranPage: quranPage,
//			quranAyah: quranAyah,
//			quranWord: quranWord,
			quranSarf: quranSarf,
//			quranGrammar: quranGrammar,
//			quranGrammarConcordance: quranGrammarConcordance,
};

//var vm = vm || {};

Vue.use(Router)

var suras = [{"start":0,"ayahs":7,"order":5,"rukus":1,"arabic_name":"الفاتحة","english_name":"Al-Faatiha","english_meaning":"The Opening","type":"Meccan","name":"1. Al-Faatiha  الفاتحة","value":1},{"start":7,"ayahs":286,"order":87,"rukus":40,"arabic_name":"البقرة","english_name":"Al-Baqara","english_meaning":"The Cow","type":"Medinan","name":"2. Al-Baqara  البقرة","value":2},{"start":293,"ayahs":200,"order":89,"rukus":20,"arabic_name":"آل عمران","english_name":"Aal-i-Imraan","english_meaning":"The Family of Imraan","type":"Medinan","name":"3. Aal-i-Imraan  آل عمران","value":3},{"start":493,"ayahs":176,"order":92,"rukus":24,"arabic_name":"النساء","english_name":"An-Nisaa","english_meaning":"The Women","type":"Medinan","name":"4. An-Nisaa  النساء","value":4},{"start":669,"ayahs":120,"order":112,"rukus":16,"arabic_name":"المائدة","english_name":"Al-Maaida","english_meaning":"The Table","type":"Medinan","name":"5. Al-Maaida  المائدة","value":5},{"start":789,"ayahs":165,"order":55,"rukus":20,"arabic_name":"الأنعام","english_name":"Al-An'aam","english_meaning":"The Cattle","type":"Meccan","name":"6. Al-An'aam  الأنعام","value":6},{"start":954,"ayahs":206,"order":39,"rukus":24,"arabic_name":"الأعراف","english_name":"Al-A'raaf","english_meaning":"The Heights","type":"Meccan","name":"7. Al-A'raaf  الأعراف","value":7},{"start":1160,"ayahs":75,"order":88,"rukus":10,"arabic_name":"الأنفال","english_name":"Al-Anfaal","english_meaning":"The Spoils of War","type":"Medinan","name":"8. Al-Anfaal  الأنفال","value":8},{"start":1235,"ayahs":129,"order":113,"rukus":16,"arabic_name":"التوبة","english_name":"At-Tawba","english_meaning":"The Repentance","type":"Medinan","name":"9. At-Tawba  التوبة","value":9},{"start":1364,"ayahs":109,"order":51,"rukus":11,"arabic_name":"يونس","english_name":"Yunus","english_meaning":"Jonas","type":"Meccan","name":"10. Yunus  يونس","value":10},{"start":1473,"ayahs":123,"order":52,"rukus":10,"arabic_name":"هود","english_name":"Hud","english_meaning":"Hud","type":"Meccan","name":"11. Hud  هود","value":11},{"start":1596,"ayahs":111,"order":53,"rukus":12,"arabic_name":"يوسف","english_name":"Yusuf","english_meaning":"Joseph","type":"Meccan","name":"12. Yusuf  يوسف","value":12},{"start":1707,"ayahs":43,"order":96,"rukus":6,"arabic_name":"الرعد","english_name":"Ar-Ra'd","english_meaning":"The Thunder","type":"Medinan","name":"13. Ar-Ra'd  الرعد","value":13},{"start":1750,"ayahs":52,"order":72,"rukus":7,"arabic_name":"ابراهيم","english_name":"Ibrahim","english_meaning":"Abraham","type":"Meccan","name":"14. Ibrahim  ابراهيم","value":14},{"start":1802,"ayahs":99,"order":54,"rukus":6,"arabic_name":"الحجر","english_name":"Al-Hijr","english_meaning":"The Rock","type":"Meccan","name":"15. Al-Hijr  الحجر","value":15},{"start":1901,"ayahs":128,"order":70,"rukus":16,"arabic_name":"النحل","english_name":"An-Nahl","english_meaning":"The Bee","type":"Meccan","name":"16. An-Nahl  النحل","value":16},{"start":2029,"ayahs":111,"order":50,"rukus":12,"arabic_name":"الإسراء","english_name":"Al-Israa","english_meaning":"The Night Journey","type":"Meccan","name":"17. Al-Israa  الإسراء","value":17},{"start":2140,"ayahs":110,"order":69,"rukus":12,"arabic_name":"الكهف","english_name":"Al-Kahf","english_meaning":"The Cave","type":"Meccan","name":"18. Al-Kahf  الكهف","value":18},{"start":2250,"ayahs":98,"order":44,"rukus":6,"arabic_name":"مريم","english_name":"Maryam","english_meaning":"Mary","type":"Meccan","name":"19. Maryam  مريم","value":19},{"start":2348,"ayahs":135,"order":45,"rukus":8,"arabic_name":"طه","english_name":"Taa-Haa","english_meaning":"Taa-Haa","type":"Meccan","name":"20. Taa-Haa  طه","value":20},{"start":2483,"ayahs":112,"order":73,"rukus":7,"arabic_name":"الأنبياء","english_name":"Al-Anbiyaa","english_meaning":"The Prophets","type":"Meccan","name":"21. Al-Anbiyaa  الأنبياء","value":21},{"start":2595,"ayahs":78,"order":103,"rukus":10,"arabic_name":"الحج","english_name":"Al-Hajj","english_meaning":"The Pilgrimage","type":"Medinan","name":"22. Al-Hajj  الحج","value":22},{"start":2673,"ayahs":118,"order":74,"rukus":6,"arabic_name":"المؤمنون","english_name":"Al-Muminoon","english_meaning":"The Believers","type":"Meccan","name":"23. Al-Muminoon  المؤمنون","value":23},{"start":2791,"ayahs":64,"order":102,"rukus":9,"arabic_name":"النور","english_name":"An-Noor","english_meaning":"The Light","type":"Medinan","name":"24. An-Noor  النور","value":24},{"start":2855,"ayahs":77,"order":42,"rukus":6,"arabic_name":"الفرقان","english_name":"Al-Furqaan","english_meaning":"The Criterion","type":"Meccan","name":"25. Al-Furqaan  الفرقان","value":25},{"start":2932,"ayahs":227,"order":47,"rukus":11,"arabic_name":"الشعراء","english_name":"Ash-Shu'araa","english_meaning":"The Poets","type":"Meccan","name":"26. Ash-Shu'araa  الشعراء","value":26},{"start":3159,"ayahs":93,"order":48,"rukus":7,"arabic_name":"النمل","english_name":"An-Naml","english_meaning":"The Ant","type":"Meccan","name":"27. An-Naml  النمل","value":27},{"start":3252,"ayahs":88,"order":49,"rukus":8,"arabic_name":"القصص","english_name":"Al-Qasas","english_meaning":"The Stories","type":"Meccan","name":"28. Al-Qasas  القصص","value":28},{"start":3340,"ayahs":69,"order":85,"rukus":7,"arabic_name":"العنكبوت","english_name":"Al-Ankaboot","english_meaning":"The Spider","type":"Meccan","name":"29. Al-Ankaboot  العنكبوت","value":29},{"start":3409,"ayahs":60,"order":84,"rukus":6,"arabic_name":"الروم","english_name":"Ar-Room","english_meaning":"The Romans","type":"Meccan","name":"30. Ar-Room  الروم","value":30},{"start":3469,"ayahs":34,"order":57,"rukus":3,"arabic_name":"لقمان","english_name":"Luqman","english_meaning":"Luqman","type":"Meccan","name":"31. Luqman  لقمان","value":31},{"start":3503,"ayahs":30,"order":75,"rukus":3,"arabic_name":"السجدة","english_name":"As-Sajda","english_meaning":"The Prostration","type":"Meccan","name":"32. As-Sajda  السجدة","value":32},{"start":3533,"ayahs":73,"order":90,"rukus":9,"arabic_name":"الأحزاب","english_name":"Al-Ahzaab","english_meaning":"The Clans","type":"Medinan","name":"33. Al-Ahzaab  الأحزاب","value":33},{"start":3606,"ayahs":54,"order":58,"rukus":6,"arabic_name":"سبإ","english_name":"Saba","english_meaning":"Sheba","type":"Meccan","name":"34. Saba  سبإ","value":34},{"start":3660,"ayahs":45,"order":43,"rukus":5,"arabic_name":"فاطر","english_name":"Faatir","english_meaning":"The Originator","type":"Meccan","name":"35. Faatir  فاطر","value":35},{"start":3705,"ayahs":83,"order":41,"rukus":5,"arabic_name":"يس","english_name":"Yaseen","english_meaning":"Yaseen","type":"Meccan","name":"36. Yaseen  يس","value":36},{"start":3788,"ayahs":182,"order":56,"rukus":5,"arabic_name":"الصافات","english_name":"As-Saaffaat","english_meaning":"Those drawn up in Ranks","type":"Meccan","name":"37. As-Saaffaat  الصافات","value":37},{"start":3970,"ayahs":88,"order":38,"rukus":5,"arabic_name":"ص","english_name":"Saad","english_meaning":"The letter Saad","type":"Meccan","name":"38. Saad  ص","value":38},{"start":4058,"ayahs":75,"order":59,"rukus":8,"arabic_name":"الزمر","english_name":"Az-Zumar","english_meaning":"The Groups","type":"Meccan","name":"39. Az-Zumar  الزمر","value":39},{"start":4133,"ayahs":85,"order":60,"rukus":9,"arabic_name":"غافر","english_name":"Al-Ghaafir","english_meaning":"The Forgiver","type":"Meccan","name":"40. Al-Ghaafir  غافر","value":40},{"start":4218,"ayahs":54,"order":61,"rukus":6,"arabic_name":"فصلت","english_name":"Fussilat","english_meaning":"Explained in detail","type":"Meccan","name":"41. Fussilat  فصلت","value":41},{"start":4272,"ayahs":53,"order":62,"rukus":5,"arabic_name":"الشورى","english_name":"Ash-Shura","english_meaning":"Consultation","type":"Meccan","name":"42. Ash-Shura  الشورى","value":42},{"start":4325,"ayahs":89,"order":63,"rukus":7,"arabic_name":"الزخرف","english_name":"Az-Zukhruf","english_meaning":"Ornaments of gold","type":"Meccan","name":"43. Az-Zukhruf  الزخرف","value":43},{"start":4414,"ayahs":59,"order":64,"rukus":3,"arabic_name":"الدخان","english_name":"Ad-Dukhaan","english_meaning":"The Smoke","type":"Meccan","name":"44. Ad-Dukhaan  الدخان","value":44},{"start":4473,"ayahs":37,"order":65,"rukus":4,"arabic_name":"الجاثية","english_name":"Al-Jaathiya","english_meaning":"Crouching","type":"Meccan","name":"45. Al-Jaathiya  الجاثية","value":45},{"start":4510,"ayahs":35,"order":66,"rukus":4,"arabic_name":"الأحقاف","english_name":"Al-Ahqaf","english_meaning":"The Dunes","type":"Meccan","name":"46. Al-Ahqaf  الأحقاف","value":46},{"start":4545,"ayahs":38,"order":95,"rukus":4,"arabic_name":"محمد","english_name":"Muhammad","english_meaning":"Muhammad","type":"Medinan","name":"47. Muhammad  محمد","value":47},{"start":4583,"ayahs":29,"order":111,"rukus":4,"arabic_name":"الفتح","english_name":"Al-Fath","english_meaning":"The Victory","type":"Medinan","name":"48. Al-Fath  الفتح","value":48},{"start":4612,"ayahs":18,"order":106,"rukus":2,"arabic_name":"الحجرات","english_name":"Al-Hujuraat","english_meaning":"The Inner Apartments","type":"Medinan","name":"49. Al-Hujuraat  الحجرات","value":49},{"start":4630,"ayahs":45,"order":34,"rukus":3,"arabic_name":"ق","english_name":"Qaaf","english_meaning":"The letter Qaaf","type":"Meccan","name":"50. Qaaf  ق","value":50},{"start":4675,"ayahs":60,"order":67,"rukus":3,"arabic_name":"الذاريات","english_name":"Adh-Dhaariyat","english_meaning":"The Winnowing Winds","type":"Meccan","name":"51. Adh-Dhaariyat  الذاريات","value":51},{"start":4735,"ayahs":49,"order":76,"rukus":2,"arabic_name":"الطور","english_name":"At-Tur","english_meaning":"The Mount","type":"Meccan","name":"52. At-Tur  الطور","value":52},{"start":4784,"ayahs":62,"order":23,"rukus":3,"arabic_name":"النجم","english_name":"An-Najm","english_meaning":"The Star","type":"Meccan","name":"53. An-Najm  النجم","value":53},{"start":4846,"ayahs":55,"order":37,"rukus":3,"arabic_name":"القمر","english_name":"Al-Qamar","english_meaning":"The Moon","type":"Meccan","name":"54. Al-Qamar  القمر","value":54},{"start":4901,"ayahs":78,"order":97,"rukus":3,"arabic_name":"الرحمن","english_name":"Ar-Rahmaan","english_meaning":"The Beneficent","type":"Medinan","name":"55. Ar-Rahmaan  الرحمن","value":55},{"start":4979,"ayahs":96,"order":46,"rukus":3,"arabic_name":"الواقعة","english_name":"Al-Waaqia","english_meaning":"The Inevitable","type":"Meccan","name":"56. Al-Waaqia  الواقعة","value":56},{"start":5075,"ayahs":29,"order":94,"rukus":4,"arabic_name":"الحديد","english_name":"Al-Hadid","english_meaning":"The Iron","type":"Medinan","name":"57. Al-Hadid  الحديد","value":57},{"start":5104,"ayahs":22,"order":105,"rukus":3,"arabic_name":"المجادلة","english_name":"Al-Mujaadila","english_meaning":"The Pleading Woman","type":"Medinan","name":"58. Al-Mujaadila  المجادلة","value":58},{"start":5126,"ayahs":24,"order":101,"rukus":3,"arabic_name":"الحشر","english_name":"Al-Hashr","english_meaning":"The Exile","type":"Medinan","name":"59. Al-Hashr  الحشر","value":59},{"start":5150,"ayahs":13,"order":91,"rukus":2,"arabic_name":"الممتحنة","english_name":"Al-Mumtahana","english_meaning":"She that is to be examined","type":"Medinan","name":"60. Al-Mumtahana  الممتحنة","value":60},{"start":5163,"ayahs":14,"order":109,"rukus":2,"arabic_name":"الصف","english_name":"As-Saff","english_meaning":"The Ranks","type":"Medinan","name":"61. As-Saff  الصف","value":61},{"start":5177,"ayahs":11,"order":110,"rukus":2,"arabic_name":"الجمعة","english_name":"Al-Jumu'a","english_meaning":"Friday","type":"Medinan","name":"62. Al-Jumu'a  الجمعة","value":62},{"start":5188,"ayahs":11,"order":104,"rukus":2,"arabic_name":"المنافقون","english_name":"Al-Munaafiqoon","english_meaning":"The Hypocrites","type":"Medinan","name":"63. Al-Munaafiqoon  المنافقون","value":63},{"start":5199,"ayahs":18,"order":108,"rukus":2,"arabic_name":"التغابن","english_name":"At-Taghaabun","english_meaning":"Mutual Disillusion","type":"Medinan","name":"64. At-Taghaabun  التغابن","value":64},{"start":5217,"ayahs":12,"order":99,"rukus":2,"arabic_name":"الطلاق","english_name":"At-Talaaq","english_meaning":"Divorce","type":"Medinan","name":"65. At-Talaaq  الطلاق","value":65},{"start":5229,"ayahs":12,"order":107,"rukus":2,"arabic_name":"التحريم","english_name":"At-Tahrim","english_meaning":"The Prohibition","type":"Medinan","name":"66. At-Tahrim  التحريم","value":66},{"start":5241,"ayahs":30,"order":77,"rukus":2,"arabic_name":"الملك","english_name":"Al-Mulk","english_meaning":"The Sovereignty","type":"Meccan","name":"67. Al-Mulk  الملك","value":67},{"start":5271,"ayahs":52,"order":2,"rukus":2,"arabic_name":"القلم","english_name":"Al-Qalam","english_meaning":"The Pen","type":"Meccan","name":"68. Al-Qalam  القلم","value":68},{"start":5323,"ayahs":52,"order":78,"rukus":2,"arabic_name":"الحاقة","english_name":"Al-Haaqqa","english_meaning":"The Reality","type":"Meccan","name":"69. Al-Haaqqa  الحاقة","value":69},{"start":5375,"ayahs":44,"order":79,"rukus":2,"arabic_name":"المعارج","english_name":"Al-Ma'aarij","english_meaning":"The Ascending Stairways","type":"Meccan","name":"70. Al-Ma'aarij  المعارج","value":70},{"start":5419,"ayahs":28,"order":71,"rukus":2,"arabic_name":"نوح","english_name":"Nooh","english_meaning":"Noah","type":"Meccan","name":"71. Nooh  نوح","value":71},{"start":5447,"ayahs":28,"order":40,"rukus":2,"arabic_name":"الجن","english_name":"Al-Jinn","english_meaning":"The Jinn","type":"Meccan","name":"72. Al-Jinn  الجن","value":72},{"start":5475,"ayahs":20,"order":3,"rukus":2,"arabic_name":"المزمل","english_name":"Al-Muzzammil","english_meaning":"The Enshrouded One","type":"Meccan","name":"73. Al-Muzzammil  المزمل","value":73},{"start":5495,"ayahs":56,"order":4,"rukus":2,"arabic_name":"المدثر","english_name":"Al-Muddaththir","english_meaning":"The Cloaked One","type":"Meccan","name":"74. Al-Muddaththir  المدثر","value":74},{"start":5551,"ayahs":40,"order":31,"rukus":2,"arabic_name":"القيامة","english_name":"Al-Qiyaama","english_meaning":"The Resurrection","type":"Meccan","name":"75. Al-Qiyaama  القيامة","value":75},{"start":5591,"ayahs":31,"order":98,"rukus":2,"arabic_name":"الانسان","english_name":"Al-Insaan","english_meaning":"Man","type":"Medinan","name":"76. Al-Insaan  الانسان","value":76},{"start":5622,"ayahs":50,"order":33,"rukus":2,"arabic_name":"المرسلات","english_name":"Al-Mursalaat","english_meaning":"The Emissaries","type":"Meccan","name":"77. Al-Mursalaat  المرسلات","value":77},{"start":5672,"ayahs":40,"order":80,"rukus":2,"arabic_name":"النبإ","english_name":"An-Naba","english_meaning":"The Announcement","type":"Meccan","name":"78. An-Naba  النبإ","value":78},{"start":5712,"ayahs":46,"order":81,"rukus":2,"arabic_name":"النازعات","english_name":"An-Naazi'aat","english_meaning":"Those who drag forth","type":"Meccan","name":"79. An-Naazi'aat  النازعات","value":79},{"start":5758,"ayahs":42,"order":24,"rukus":1,"arabic_name":"عبس","english_name":"Abasa","english_meaning":"He frowned","type":"Meccan","name":"80. Abasa  عبس","value":80},{"start":5800,"ayahs":29,"order":7,"rukus":1,"arabic_name":"التكوير","english_name":"At-Takwir","english_meaning":"The Overthrowing","type":"Meccan","name":"81. At-Takwir  التكوير","value":81},{"start":5829,"ayahs":19,"order":82,"rukus":1,"arabic_name":"الإنفطار","english_name":"Al-Infitaar","english_meaning":"The Cleaving","type":"Meccan","name":"82. Al-Infitaar  الإنفطار","value":82},{"start":5848,"ayahs":36,"order":86,"rukus":1,"arabic_name":"المطففين","english_name":"Al-Mutaffifin","english_meaning":"Defrauding","type":"Meccan","name":"83. Al-Mutaffifin  المطففين","value":83},{"start":5884,"ayahs":25,"order":83,"rukus":1,"arabic_name":"الإنشقاق","english_name":"Al-Inshiqaaq","english_meaning":"The Splitting Open","type":"Meccan","name":"84. Al-Inshiqaaq  الإنشقاق","value":84},{"start":5909,"ayahs":22,"order":27,"rukus":1,"arabic_name":"البروج","english_name":"Al-Burooj","english_meaning":"The Constellations","type":"Meccan","name":"85. Al-Burooj  البروج","value":85},{"start":5931,"ayahs":17,"order":36,"rukus":1,"arabic_name":"الطارق","english_name":"At-Taariq","english_meaning":"The Morning Star","type":"Meccan","name":"86. At-Taariq  الطارق","value":86},{"start":5948,"ayahs":19,"order":8,"rukus":1,"arabic_name":"الأعلى","english_name":"Al-A'laa","english_meaning":"The Most High","type":"Meccan","name":"87. Al-A'laa  الأعلى","value":87},{"start":5967,"ayahs":26,"order":68,"rukus":1,"arabic_name":"الغاشية","english_name":"Al-Ghaashiya","english_meaning":"The Overwhelming","type":"Meccan","name":"88. Al-Ghaashiya  الغاشية","value":88},{"start":5993,"ayahs":30,"order":10,"rukus":1,"arabic_name":"الفجر","english_name":"Al-Fajr","english_meaning":"The Dawn","type":"Meccan","name":"89. Al-Fajr  الفجر","value":89},{"start":6023,"ayahs":20,"order":35,"rukus":1,"arabic_name":"البلد","english_name":"Al-Balad","english_meaning":"The City","type":"Meccan","name":"90. Al-Balad  البلد","value":90},{"start":6043,"ayahs":15,"order":26,"rukus":1,"arabic_name":"الشمس","english_name":"Ash-Shams","english_meaning":"The Sun","type":"Meccan","name":"91. Ash-Shams  الشمس","value":91},{"start":6058,"ayahs":21,"order":9,"rukus":1,"arabic_name":"الليل","english_name":"Al-Lail","english_meaning":"The Night","type":"Meccan","name":"92. Al-Lail  الليل","value":92},{"start":6079,"ayahs":11,"order":11,"rukus":1,"arabic_name":"الضحى","english_name":"Ad-Dhuhaa","english_meaning":"The Morning Hours","type":"Meccan","name":"93. Ad-Dhuhaa  الضحى","value":93},{"start":6090,"ayahs":8,"order":12,"rukus":1,"arabic_name":"الشرح","english_name":"Ash-Sharh","english_meaning":"The Consolation","type":"Meccan","name":"94. Ash-Sharh  الشرح","value":94},{"start":6098,"ayahs":8,"order":28,"rukus":1,"arabic_name":"التين","english_name":"At-Tin","english_meaning":"The Fig","type":"Meccan","name":"95. At-Tin  التين","value":95},{"start":6106,"ayahs":19,"order":1,"rukus":1,"arabic_name":"العلق","english_name":"Al-Alaq","english_meaning":"The Clot","type":"Meccan","name":"96. Al-Alaq  العلق","value":96},{"start":6125,"ayahs":5,"order":25,"rukus":1,"arabic_name":"القدر","english_name":"Al-Qadr","english_meaning":"The Power, Fate","type":"Meccan","name":"97. Al-Qadr  القدر","value":97},{"start":6130,"ayahs":8,"order":100,"rukus":1,"arabic_name":"البينة","english_name":"Al-Bayyina","english_meaning":"The Evidence","type":"Medinan","name":"98. Al-Bayyina  البينة","value":98},{"start":6138,"ayahs":8,"order":93,"rukus":1,"arabic_name":"الزلزلة","english_name":"Az-Zalzala","english_meaning":"The Earthquake","type":"Medinan","name":"99. Az-Zalzala  الزلزلة","value":99},{"start":6146,"ayahs":11,"order":14,"rukus":1,"arabic_name":"العاديات","english_name":"Al-Aadiyaat","english_meaning":"The Chargers","type":"Meccan","name":"100. Al-Aadiyaat  العاديات","value":100},{"start":6157,"ayahs":11,"order":30,"rukus":1,"arabic_name":"القارعة","english_name":"Al-Qaari'a","english_meaning":"The Calamity","type":"Meccan","name":"101. Al-Qaari'a  القارعة","value":101},{"start":6168,"ayahs":8,"order":16,"rukus":1,"arabic_name":"التكاثر","english_name":"At-Takaathur","english_meaning":"Competition","type":"Meccan","name":"102. At-Takaathur  التكاثر","value":102},{"start":6176,"ayahs":3,"order":13,"rukus":1,"arabic_name":"العصر","english_name":"Al-Asr","english_meaning":"The Declining Day, Epoch","type":"Meccan","name":"103. Al-Asr  العصر","value":103},{"start":6179,"ayahs":9,"order":32,"rukus":1,"arabic_name":"الهمزة","english_name":"Al-Humaza","english_meaning":"The Traducer","type":"Meccan","name":"104. Al-Humaza  الهمزة","value":104},{"start":6188,"ayahs":5,"order":19,"rukus":1,"arabic_name":"الفيل","english_name":"Al-Fil","english_meaning":"The Elephant","type":"Meccan","name":"105. Al-Fil  الفيل","value":105},{"start":6193,"ayahs":4,"order":29,"rukus":1,"arabic_name":"قريش","english_name":"Quraish","english_meaning":"Quraysh","type":"Meccan","name":"106. Quraish  قريش","value":106},{"start":6197,"ayahs":7,"order":17,"rukus":1,"arabic_name":"الماعون","english_name":"Al-Maa'un","english_meaning":"Almsgiving","type":"Meccan","name":"107. Al-Maa'un  الماعون","value":107},{"start":6204,"ayahs":3,"order":15,"rukus":1,"arabic_name":"الكوثر","english_name":"Al-Kawthar","english_meaning":"Abundance","type":"Meccan","name":"108. Al-Kawthar  الكوثر","value":108},{"start":6207,"ayahs":6,"order":18,"rukus":1,"arabic_name":"الكافرون","english_name":"Al-Kaafiroon","english_meaning":"The Disbelievers","type":"Meccan","name":"109. Al-Kaafiroon  الكافرون","value":109},{"start":6213,"ayahs":3,"order":114,"rukus":1,"arabic_name":"النصر","english_name":"An-Nasr","english_meaning":"Divine Support","type":"Medinan","name":"110. An-Nasr  النصر","value":110},{"start":6216,"ayahs":5,"order":6,"rukus":1,"arabic_name":"المسد","english_name":"Al-Masad","english_meaning":"The Palm Fibre","type":"Meccan","name":"111. Al-Masad  المسد","value":111},{"start":6221,"ayahs":4,"order":22,"rukus":1,"arabic_name":"الإخلاص","english_name":"Al-Ikhlaas","english_meaning":"Sincerity","type":"Meccan","name":"112. Al-Ikhlaas  الإخلاص","value":112},{"start":6225,"ayahs":5,"order":20,"rukus":1,"arabic_name":"الفلق","english_name":"Al-Falaq","english_meaning":"The Dawn","type":"Meccan","name":"113. Al-Falaq  الفلق","value":113},{"start":6230,"ayahs":6,"order":21,"rukus":1,"arabic_name":"الناس","english_name":"An-Naas","english_meaning":"Mankind","type":"Meccan","name":"114. An-Naas  الناس","value":114}];

export default new Router({
	  mode: (/*location.origin === "http://localhost:8080" ||*/ location.origin.indexOf('surge.sh') != -1) ? 'history' : null,

	  routes: [
	  	{
	  		path: '/',
	  		component: comps.quranDashboard,
	  		props: (route) => ({ suras: suras }),
	  	},
	  ],

	  ignoreRoutes: [
	  	{
	  		path: '/page/:pageno(\\d+)',
	  		component: comps.quranPageComp, //quranPage,
	  		props: ($route) => ({ page: +$route.params.pageno, showTrans: true, showTranslit: true, showWord2Word: true, XayahsListFromPage: /*(vm.verseNo = +($route.params.pageno) ) &&*/ vm.data.ayahsListFromPage }),
	  	},
	  	{
	  		path: '/search/:keyword',
	  		component: comps.quranSearch,
	  		props: ($route) => ({ keyword: $route.params.keyword }),
	  	},
	  	{
	  		path: '/search',
	  		component: comps.quranSearch,
	  		props: ($route) => ({ keyword: $route.query.keyword }),
	  	},
	  	{
	  		path: '/sarf',
	  		component: comps.quranSarf,
	  		props: (route) => ({ root: route.query.root, form: route.query.form }),
	  	},
	  	{
	  		path: '/related',
	  		component: comps.quranGrammarConcordance,
	  		props: (route) => ({ root: route.query.root, lem: route.query.lem }),
	  	},
	  	{
	  		path: '/related/:root(.{3})',  //regex chars to ecape: /^(.|\'|\^|\~|\[|\*|\$|\@|\+){3}$/.test('*h$')
	  		component: comps.quranGrammarConcordance,
	  		props: (route) => ({ root: route.params.root }),
	  	},
	  	{
	  		path: '/related/:lem',  // /^(.|\'|\^|\~|\[|\*|\$|\@|\+){3}$/.test('*h$')
	  		component: comps.quranGrammarConcordance,
	  		props: (route) => ({ lem: route.params.lem }),
	  	},
	  	//(.|\\\'|\\\^|\\\~|\\\[|\\\*|\\\$|\\\@|\\\+)
	  	{
	  		path: '/:sura(\\d+)', //only if all numbers. see ref: https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js
	  		component: comps.quranSuraComp,
	  		props: ($route) => ({ sura: +$route.params.sura, showTrans: true, showTranslit: true, showWord2Word: true, ayahsListFromPage: /*(vm.verseNo = +($route.params.pageno) ) &&*/ vm.data.ayahsListFromPage }),
	  	},
	  	{
	  		path: '/:sura(\\d+)/:ayah(\\d+)',
	  		component: comps.quranAyahComp,
	  		props: (route) => ({ sura: route.params.sura, ayah: route.params.ayah, showTrans: true, showTranslit: true, showWord2Word: true, }),
	  	},
	  	{
	  		path: '/:sura(\\d+)/:ayah(\\d+)/:word(\\d+)',
	  		component: comps.quranGrammar,
	  		props: (route) => ({ sura: route.params.sura, ayah: route.params.ayah, word: route.params.word }),
	  	},
	  	{
	  		path: '/default',
	  		component: comps.twoPaneView,
	  		props: ($route) => ({ data: vm.data, ayahsListFromPage: vm.data.ayahsListFromPage, isLoading: vm.isLoading,  }),
	  	},
	  	/*{
	  		path: '/:id', 
	  		component: comps.quranMain,
	  		props:{
	  			ayahsListFromPage: vm.data.ayahsListFromPage,
				showTrans: vm.showTrans, //:show-translit="showTranslit" :show-corpus="showCorpus" :hide-ar="!showAr"
				//show-asbab="showAsbab" :show-synonyms="showSynonyms"
				//current-page-asbab="currentPageAsbab"
				//current-page-synonyms="currentPageSynonyms"
				//w2w-en="w2wEn"
				//w2w-corpus="w2wCorpus"
	  		}
	  	},*/
	  	{
	  		path: '*', //catch all
	  		component: comps.quranDashboard,
	  		props: (route) => ({ suras: vm.suras }),
	  	},

	  ],
	/*routes: [
    {
      path: '/',
      name: 'quranDashboard',
      component: quranDashboard
    }
  ]*/
})