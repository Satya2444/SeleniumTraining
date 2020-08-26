let usr = {
 name: 'Satya',
 Occ: 'SE',
 teach: function(){
  console.log(this.name+' is teaching');
 }
 console.log(usr);
 console.log(usr['Occ']);
 console.log(usr.name);
 
 for(const key in usr){
  console.log(key+":"+usr[key]);
 }
 
 usr.teach();
  
