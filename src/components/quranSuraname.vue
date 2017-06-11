<template>
	<li class="sura-menu-class1">
		<a class="sura-menu-class2 row" href=# v-on:click.stop.prevent="onClickSura( metadata.value )">
			<div class="col-xs-2 text-muted">{{ metadata.value }}</div>
			<div class="col-xs-7">{{ metadata.english_name }}</div>
			<div class="col-xs-3 text-left sura-menu-class3 arr2">
				<span class="icon-surah">{{ metadata.arabic_name }}</span>
			</div>
			<div class="col-xs-10 col-xs-offset-2 sura-menu-class4">
				<span class="text-uppercase english">{{ metadata.english_meaning }}</span>
			</div>
		</a>
	</li>
</template>

<script>
  export default {
	props: ['metadata'], //ex: { "start": 7, "ayahs": 286, "order": 87, "rukus": 40, "arabic_name": "البقرة", "english_name": "Al-Baqara", "english_meaning": "The Cow", "type": "Medinan", "name": "2. Al-Baqara البقرة", "value": 2 }
	data: function(){
		return {  
			bus: this.bus || (this.$parent && this.$parent.bus),
		};
	},
	methods:{
		onClickSura: function( surano ){
			var bus = this.bus || (this.$parent && this.$parent.bus);
			if(bus) bus.$emit('onClickSura', surano );
		},
	},
  }
</script>