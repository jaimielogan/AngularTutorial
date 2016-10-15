// kebab filter
app.filter('kebab', function(){
 return function(input){
   return input.toString().replace(/_/g , "-");
 };
});
