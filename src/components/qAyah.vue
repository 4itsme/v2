<template>
<span>A: 
	<select v-model="iAyah" @change="onChange">
		<option v-for="a in ayahsCount" :value="a">{{a}}</option>
	</select>
 </span>
 </template>

 <script>
 	export default {
		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iAyah: function () {
		  		return this.ayah;
		  	}
		  },
		  methods: {
		  	onChange: function($event){ console.log('from child: onchange triggered: ' +$event +' '+$event.target.value); this.$emit('versechange', {ayah: $event.target.value });}
		  },
		  props: ['ayah', 'ayahsCount'],
	}
</script>
