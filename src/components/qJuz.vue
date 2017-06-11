<template>
<span>Juz: 
		  						<select v-model="iJuz" @change="onChange">
		        				<option v-for="j in 30" :value="j">{{j}}</option>
		      				</select>
		             </span>
</template>

<script type="text/javascript">
export default {
		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iJuz: function () {
		  		return this.juz;
		  	}
		  },
		  methods: {
		  	onChange: function($event){ console.log('from child: onchange triggered: ' +$event +' '+$event.target.value); this.$emit('versechange', {juz: $event.target.value });}
		  },
		  props: ['juz'],
}
</script>