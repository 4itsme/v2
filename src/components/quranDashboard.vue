<template>
  <div>
	<div class="dashboardheader" style="background-image:url(/images/background.jpg);">
		<div class="container">
			<div class="row"><div class="col-md-10 col-md-offset-1 text-center">
				<a class="dashboardIndexHeader" data-metrics-event-name="IndexHeader:Link:Index" href="/">
					<img src="/images/logo_lg_w.png" class="dashboardClass3" alt="logo">
				</a>
				<h4 class="dashboardClass2">THE NOBLE QUR'AN</h4>
				<div class="right-inner-addon searchinput undefined">
					<a :click="onSearch" tabindex="-1">
					<i class="fa fa-search ss-icon ss-search"></i></a>
					<input type="search" v-model="keyword" v-on:keyup.enter="onSearch" placeholder="Search &quot;Noah&quot;">
				</div>
			</div>
		</div>
	 </div>
	</div>
	<div class=container>
	  <div class=row>
	    <div class="col-md-10 col-md-offset-1" >
	    	<div class="dashboardClass4 text-muted">
				SURAHS (CHAPTERS)<BR/><BR/>
			</div>
			<div v-if="suras" class="row suras-menu-row">
			  <div class="col-md-4">
			  	<ul class="list-unstyled" v-for="sura in suras.slice(0, 38)">
					<quran-suraname :metadata="sura"></quran-suraname>
					<BR/>
				</ul>
			  </div>
			  <div class="col-md-4">
			  	<ul class="list-unstyled" v-for="sura in suras.slice(38, 76)">
					<quran-suraname :metadata="sura"></quran-suraname>
					<BR/>
				</ul>
			  </div>
			  <div class="col-md-4">
			  	<ul class="list-unstyled" v-for="sura in suras.slice(76)">
					<quran-suraname :metadata="sura"></quran-suraname>
					<BR/>
				</ul>
			  </div>
			</div>
		</div>
	</div>
	</div>
   </div>
</template>
<script type="text/javascript">
	export default {
			props: ['suras'],
			data: function(){
				return { 
					bus: this.bus || (this.$parent && this.$parent.bus),
					keyword: null 
				};
			},
			methods:{
				onSearch: function(){
					//console.log(JSON.stringify( this.keyword ));
					var bus = this.bus || (this.$parent && this.$parent.bus);
					if(bus) bus.$emit('onSearch', {keyword: this.keyword});
				},
			},

	}
</script>