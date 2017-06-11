<template>
					<div xclass="well">
							<H4>Sarf Sagheer (for enhanced verbs)</H4>
							<div v-if='loading'>Loading...</div>
							<div class=well v-else>
								<div class="row">
								  <div class="col-md-3"><span class=arr2>{{data.faail}}</span> <BR/><span class="label label-info">Faail</span><BR/><span class=text-muted> (Active Participle)</span></div>
								  <div class="col-md-3"><span class=arr2>{{data.masdr}}</span> <BR/><span class="label label-info">Masdr</span><BR/><span class=text-muted> (Verbal Noun)</span></div>
								  <div class="col-md-3"><span class=arr2>{{data.present}}</span> <BR/><span class="label label-info">Fi'l mudari'</span><BR/><span class=text-muted> (Present, Future)</span></div>
								  <div class="col-md-3"><span class=arr2>{{data.past}}</span> <BR/><span class="label label-info">Fi'l maDiy</span><BR/><span class=text-muted> (Past)</span></div>
								</div>
									<BR/>
								<div class="row">
								  <div class="col-md-3"><span class=arr2>{{data.mafool}}</span> <BR/><span class="label label-info">Maf'ool</span><BR/><span class=text-muted> (Passive Participle)</span></div>
								  <div class="col-md-3"><span class=arr2>{{data.masdr}}</span> <BR/><span class="label label-info">Masdr</span><BR/><span class=text-muted> (Verbal Noun)</span></div>
								  <div class="col-md-3"><span class=arr2>{{data.presentP}}</span> <BR/><span class="label label-info">Majhool Fi'l mudari'</span><BR/><span class=text-muted> (Passive Present, Future)</span></div>
								  <div class="col-md-3"><span class=arr2>{{data.pastP}}</span> <BR/><span class="label label-info">Majhool Fi'l maDiy</span><BR/><span class=text-muted> (Passive Past)</span></div>
								</div>
									<BR/>
								<div class="row">
								  <div class="col-md-3"></div>
								  <div class="col-md-3"><span class=arr2>{{data.tharf}}</span> <BR/><span class="label label-info">Tharf</span><BR/><span class=text-muted>(Time/Location Adverb)</span></div>
								  <div class="col-md-3"><span class=arr2>{{data.forbid}}</span> <BR/><span class="label label-info">Nahi</span><BR/><span class=text-muted> (Forbid)</span></div>
								  <div class="col-md-3"><span class=arr2>{{data.command}}</span> <BR/><span class="label label-info">Amr</span><BR/><span class=text-muted> (Command)</span></div>
								</div>
							</div>
							<BR/>
						</div>
</template>
<script>
import qSarfGenerator from  './qSarfGenerator.js'
export default{
			props: ['root', 'form'],
			data: function(){
				return {
					loading: false,
					data: null,
					error: null,
				};
			},
			created: function() {
			    // fetch the data when the view is created and the data is
			    // already being observed
			    this.fetchData()
		    },
		    watch: {
		    	//root: function(){ debugger; this.fetchData(); },
		    	//form: function(){ debugger; this.fetchData(); },
		    	$route: function(to, from) {
			      // react to route changes...
			      this.fetchData();
			    },
		    },
		    methods: {
		    	fetchData: function(){
		    		this.error = this.data = null;
		    		this.loading = true;
		    		var root = this.root, form = this.form, 
		    			comp = this; //save a reference
		    		//require(['qSarfGenerator'], function(qSarfGenerator){
		    			comp.data = qSarfGenerator.lookup(root, form);
		    			comp.loading = false;
		    			comp.error = null;
		    		//});//TODO: add error handling code here
		    	},
		    },
}
</script>