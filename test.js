function onLoad() {

   if(g_form.isNewRecord()){
	var call = g_form.getReference('u_caller',getCallerValues);

	function getCallerValues(call){
g_form.setValue('u_email',call.email);
g_form.setValue('u_location',call.location);
g_form.setValue('u_department',call.department);

	}
   }
}