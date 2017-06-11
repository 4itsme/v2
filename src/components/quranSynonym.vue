<template>
  <div>
	Qur'aan Near-Synonym
	<span class=text-muted>
		( {{id}} )
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
	    	fetchData: function(){
	    		//this.data.id = + new Date();
	    		this.error = /*this.data =*/ null;
	    		this.loading = true;
	    		this.data = null;
	    		var comp = this;

	    		comp.section = comp.id.replace(/\d+/, ''); //returns "b" for b12
				comp.number = +comp.id.replace(/[^\d]+/, ''); //returns 12 for b12
				comp.path = '../data/content/' + comp.section;
				comp.lookup = 'content/' + comp.section +'/' + comp.id + '.html';
				//debugger;
	    		require([ '../data/content/' + comp.section ], function( data ){
//	    			console.log( data );
	    			comp.data = data[ comp.lookup ];
	    			if(!comp.data){
	    				comp.error = "No entry found for " + comp.id + " in section " + comp.section;
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