<template>
	<span v-if="suras && suras.length > 0">
	    <select v-model="iSura" @change="onChange">
	      <option v-for="s in suras" :value="s.value">
		    {{ s.name }}
	      </option>
	    </select>
	  </span>
	<span v-else>S: 
		<select v-model="iSura" @change="onChange">
			<option v-for="s in 114" :value="s">{{s}}</option>
		</select>
 	</span>
 </template>

 <script type="text/javascript">
 	export default {
		  data: function(){
		  	return{ }; // isura: this.sura };
		  },
		  computed: {
		  	iSura: function () {
		  		return this.sura;
		  	}
		  },
		  methods: {
		  	onChange: function($event){ 
		  		console.log('from child: onchange triggered: ' +$event +' '+$event.target.value); 
		  		this.$emit('versechange', {sura: $event.target.value });
		  	}
		  },
		  props: ['sura', 'suras'],
	}
</script>
