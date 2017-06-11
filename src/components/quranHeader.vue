<template>
  <div>
	<div class=row>
		<div class="col-md-3 col-md-offset-4">
			<H4 class=lead>Qur'aan Viewer</H4>
		</div>
		<HR/>
	</div>

 	  <div v-if="isLoading" class=row>
 	  	<div class="col-md-3 col-md-offset-4">
		  	<BR/><BR/><BR/><BR/><BR/>
			<!-- <i class="fa-li fa fa-spinner fa-pulse"></i>Loading... -->
			<i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
			<span class="sr-only">Loading...</span>
		</div>
	   </div>

  </div>
</template>
<script type="text/javascript">
	export default {
		props: ['isLoading'],
	}	
</script>

