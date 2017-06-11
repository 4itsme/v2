<template>
  <div>
	Qur'aan Near-Synonym
	<span class=text-muted>
		( {{id}} )
	</span>
	<div v-html='data'>
	</div>
	<div class=text-muted>
		{{data}}
	</div>
  </div>
</template>


<script>
	export default {
		props: ['id'],

		data: function(){
			return {
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
	    		require(['../data/content/b'], function( b ){
	    			console.log(b);
	    			comp.data = b[ 'content/b/b1.html' ];
	    		})
	    	},
	    },

	}
</script>