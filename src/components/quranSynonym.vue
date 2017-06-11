<template>
  <div>
	Qur'aan Near-Synonym
	<span class=text-muted>
		<a class="arrow-link arrow-left" href=# v-on:click.stop.prevent="onChange( -1 );" title="Previous">◄</a>
		(
		{{section}}
		<select v-model="number" @change="onChange">
			<option v-for="p in topicsCount" :value="p">{{p}}</option>
		</select>
		)
		<!--( {{id}} )-->
		<a class="arrow-link arrow-right" href=# v-on:click.stop.prevent="onChange( +1 );" title="Next">►</a>
	</span>
	<HR/><BR/>

	<div v-if="loading">
		Loading...
	</div>
	<div v-else-if="error">
		ERROR:<BR/> {{ error }}
	</div>
	<div v-else v-html='data'>
	</div>
<!-- 	<div class=text-muted>
		{{data}}
	</div> -->
  </div>
</template>


<script>
	export default {
		props: ['id'],

		data: function(){
			return {
				error: null,
				loading: null,
				data: null,
				topicsCount: null,
				section: null,
				number: null,
				key: null,
			};
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
	    	onChange: function(diff){
	    		location.hash = location.hash.replace(/\d+/, this.number + diff)
	    	},

	    	fetchData: function(){
	    		//this.data.id = + new Date();
	    		this.error = /*this.data =*/ null;
	    		this.loading = true;
	    		this.data = null;
	    		var comp = this;

	    		comp.section = comp.id.replace(/\d+/, ''); //returns "b" for b12
				comp.number = +comp.id.replace(/[^\d]+/, ''); //returns 12 for b12
				comp.path = '../data/content/' + comp.section;
				comp.key = 'content/' + comp.section +'/' + comp.id + '.html';
				//debugger;
	    		require([ '../data/content/' + comp.section ], function( data ){
//	    			console.log( data );
					comp.topicsCount = Object.keys( data ).length;
	    			comp.data = data[ comp.key ];
	    			if(!comp.data){
	    				comp.error = "No entry found for " + comp.id + " in section " + comp.section;
	    			}else{
	    				var fnGrabHtmlBody = function(htmlText){
							var tmp;
							var regexGrabHtmlBody = /(<body[^\>]*>|<\/body>)/ig;
							return (tmp = htmlText.split(regexGrabHtmlBody)) && tmp && tmp.length >= 2 ? tmp[2] : tmp;
						}

	    				//post processing to make pretty
	    				var arabicRegex = /([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD])+/g;  //from: https://stackoverflow.com/questions/11323596/regular-expression-for-arabic-language
	    								// /[^\u0000-\u007F]+/g  //match any non ascii
	    								// /[\u0600-\u06FF]+/g;
	    				comp.data = comp.data.replace(/font-size:11pt;margin:0;font-family:&quot;Arial&quot;;padding:0/g, '') // style="text-align:right;color:#000000;direction:ltr;font-size:11pt;margin:0;font-family:&quot;Arial&quot;;padding:0"
	    									 //.replace(/ style="font-size:16pt"/g, '')
	    									 .replace(/font-size:\d+pt/g, '') //font-size:16pt
	    									 .replace(/background-color:#f4f4f4;/g, '');
	    				comp.data = fnGrabHtmlBody( comp.data )
	    								.replace(/&#(\d+);/g, function(match, match2) { //first replace Html entities like '&#1740;&#1614;&#1575;&#1620;&#1614;&#1587;&#1614;'
	    									return String.fromCharCode(+match2);
	    								 })
	    								.replace(arabicRegex, function(match){ //wrap arabic text in classname
											return '<span class=arr2 style=color:yellowgreen>' + match + '</span>';
										 });

	    			}
	    			comp.loading = false;
	    		},
	    		function(error){
	    			comp.error = (error && error.message) ? error.message : error;
	    			comp.loading = false;
	    		})
	    	},
	    },

	}
</script>