<template>
<span>Page: 
		  						<a class="arrow-link arrow-left" href=# v-on:click.stop.prevent="onChange( -1 );" title="Previous page">◄</a>
		  						<select v-model="iPage" @change="onChange">
		        					<option v-for="p in 604" :value="p">{{p}}</option>
		      					</select>
		      					<a class="arrow-link arrow-right" href=# v-on:click.stop.prevent="onChange( +1 );" title="Next page">►</a>
		             </span>
</template>

<script type="text/javascript">
export default {
		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iPage: function () {
		  		return this.page;
		  	}
		  },
		  methods: {
		  	onChange: function($event){ 
		  		var val = $event && $event.target && $event.target.value ? $event.target.value : (this.iPage + $event);
		  		console.log('from child: onchange triggered: '+ val); 
		  		this.$emit('versechange', {page: val });
		  	}
		  },
		  props: ['page'],
}
</script>