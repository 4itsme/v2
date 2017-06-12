<template>
	<div>Qur'aan Search results for: {{ keyword }}
							<div v-if="loading"><BR/>
								<div v-if="loading || (searchResults && searchResults.searching)">
								  	<i class="fa fa-spinner fa-pulse"></i>Searching...
								</div>
							</div>
<div class=well>
		  <div Xclass=searchResults v-if="searchResults && Object.keys(searchResults).length > 1">
			  <!--<HR/>Search results: <BR/>-->
			  {{searchResults.matchesCount}} matches found searching for: {{searchResults.keyword}}<BR/><BR/>

			  <!-- <div v-for="(matches, key, index) in searchResults"> -->
			  <div v-for="result in searchResults.results">
			  	{{ result.matches.length }} matches found searching for: {{ result.keyword }} in: {{result.category}} category:

				<div class=searchResults v-if="result.matches && result.matches.length" style="overflow:scroll; max-height:200px; white-space: nowrap;" :dir="result.category.indexOf( 'Arabic' ) != -1 ? 'rtl' : 'ltr'">
					<div v-for="match in result.matches">
						<!-- {{match}} -->
						<A href=# v-on:click.stop.prevent='goSearchResult(match, result);' v-bind:title='match.verse'>
							{{ match.split('|')[0] }}:{{ match.split('|')[1] }}
						</A>
						{{ result.category.indexOf( 'Arabic' ) != -1 ? qUtil.EnToAr( match.split('|')[2] ) : match.split('|')[2] }}
					</div>
				</div>
			  </div>
			  <HR/>
		  </div>
		  <div v-else>Search results shown here when available</div>
		  <h6><small><span v-cloak v-if=message class=text-muted>
		  	{{message}}
		  </span></small></h6>
		</div>
		<div id="mount" v-if="showAyah">
			<quran-ayah-comp :sura="sura" :ayah="ayah" :showTrans="true" :showTranslit="true" :key="+sura*1000 + +ayah*1000" />
		</div>
		<div class=text-muted v-if="!loading">
			{{searchResults}} <BR/><BR/> {{data}}
		</div>
   </div>
</template>

<script>
	export default {
			props: [ 'keyword', ],
			data: function(){
				return {
					error: null,
					loading: false,
					data: null,
					message: null,
					searchResults: null,
					qUtil: {},
					sura: null,
					ayah: null,
					showAyah: null,
				}
			},
			created: function() {
			    // fetch the data when the view is created and the data is
			    // already being observed
			    this.fetchData()
		    },
		    watch: {
		    	$route: function(to, from) {
			      // react to route changes...
			      this.fetchData();
			    },
		    },
		    methods: {
		    	fetchData: function(){
		    		//this.data.id = + new Date();
		    		this.error = /*this.data =*/ null;
		    		this.loading = true;
		    		this.data = null;
		    		var comp = this, startTime = new Date(), endTime;
	    			require(['Q', 'qUtil', 'qSearch', 'underscore'], function(Q, qUtil, qSearch, _){
	    				qSearch.searchAsync( comp.keyword ).then(function(results){
	    					comp.qUtil = qUtil;
	    					comp.data = results;
	    					comp.loading = false;
	    					comp.error = null;
							comp.searchResults = results || {};
							comp.searchResults.searching = false;
							endTime = new moment(); //console.log((vm.message += ((endTime = new moment()) +' results received') ) );
							if(!(endTime - startTime))debugger;
							comp.message = 'Search time: ' + endTime.diff(startTime, 'seconds') + ' seconds. (' + (endTime - startTime) + ' ms.) ';//moment(startTime).fromNow() + ' ' + vm.message;
							setTimeout(function(){
								var hilites = [];
								hilites.push( comp.searchResults.keyword );
								//hilites.push( qUtil.BuckToBare(vm.searchResults.keyword) );
								hilites.push( qUtil.EnToAr( comp.searchResults.keyword ) ); //TODO: conditionally do this
								hilites.push( qUtil.EnToAr( qUtil.BuckToBare(comp.searchResults.keyword) ) ); //TODO: conditionally do this

								//clear out old keywords and set new ones.
								$('.searchResults').unmark({ "done": function(){
																		$('.searchResults').mark( hilites );
															 }
								});
							}, 200);
	    				});//TODO: add error handling
	    			});
		    	},
		    	goSearchResult: function(match, result){
		    		console.log(match, result);
		    		var tmp = match.split('|');
		    		this.sura = tmp && tmp.length > 1 && +tmp[0];
		    		this.ayah = tmp && tmp.length > 1 && +tmp[1];
		    		this.showAyah = true;

		   //  		const quranAyahCompCtor = Vue.extend( quranAyahComp );
					// const vm = new quranAyahCompCtor({
					//   propsData: {
					//     sura: 5,
					//     ayah: 6,
					//   }
					// }).$mount('#mount');

					// const Hello = {
					//   props: ['text'],
					//   template: '<div>{{ text }}</div>',
					// };

					// // create component constructor
					// const HelloCtor = Vue.extend(Hello);
					// const vm = new HelloCtor({
					//   propsData: {
					//     text: 'HI :)'
					//   }
					// }).$mount('#mount');
		    	},
		    }
	}
</script>