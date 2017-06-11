<template>
<div>
	<div v-cloak class=row>
       	 <div class=col-md-3>
	         <button v-on:click="ayahchange(-1)">&lt;</button>
	         <q-sura :sura="data.sura" :suras="suras" @versechange="versechange"></q-sura>
	         <q-ayah :ayah="data.ayah" :ayahs-count="data.ayahsCount" @versechange="versechange"><</q-ayah>
	         <button v-on:click="ayahchange(+1)">&gt;</button>
	      </div>

	      <div class=col-md-4>
	         <q-page :page="data.page" @versechange="versechange"><</q-page>
	         <q-juz :juz="data.juz" @versechange="versechange"><</q-juz>
	         <span v-if=false>
		         &nbsp;verse: <input v-model="verse" style=width:60px type=number min="1" max="6236">
		     </span>
		   </div>

		   <div class=col-md-2>
           <!-- Search: -->
			<div class="input-group">
		      <input v-model="keyword" v-on:keyup.enter="go" type="text" class="form-control" placeholder=\'Search for "Noah"...\'>
		      <span class="input-group-btn">
		        <button v-on:click="go" class="btn btn-default" type="button">Go</button>
		      </span>
		    </div><!-- /input-group -->
			  <!-- <input v-model="keyword" v-on:keyup.enter="go" placeholder=\'Search "Noah"\' type=text />
			  <button v-on:click="go">Go</button> -->
			</div>

			<div class=col-md-3>
			  Options: 
			  <input type=checkbox v-model="showTrans" click="showTrans = !showTrans" title="show translation" />Translation
			  <input type=checkbox v-model="showTranslit" click="showTranslit = !showTranslit" title="show transliteration" />Transliteration
			  <input type=checkbox v-model="showAsbab" click="showAsbab = !showAsbab; tab = \'asbab\';" title="show Asbab (Sababun Nuzul)" />Asbab
			  <input type=checkbox v-model="showSynonyms" click="showSynonyms = !showSynonyms; tab = \'synonyms\';" title="show transliteration" />Synonyms
			  <!-- <input type=checkbox v-model="showCorpus" click="showCorpus = !showCorpus" title="show transliteration" />Grammar -->
		 	</div>
		 </div>
    	 <HR/>
					   </div>
</template>

<script>
export default {
			props: ['data', 'keyword', 'suras', 'showTrans', 'showTranslit', 'showAsbab', 'showSynonyms', 'showCorpus'],
			data: function(){
				return{

				};
			},
			methods: {
				go: function(){

				},
				versechange: function(){

				},
				ayahchange: function(){

				},

			},
}
</script>