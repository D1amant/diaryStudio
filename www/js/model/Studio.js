app.factory("Studio", function ($cordovaSQLite) {

   var _insertStudio = function (data){
      var validate =  true;
      try{
        for (i in data) 
        {
          console.log(createStringByArray( data[i].collaborator));
          var query = "INSERT INTO studio (id , name , descriptio, address , phone ,img, collaborator , created_ad ,status) VALUES  (?,?, ?, ?, ?, ? , ?, ? , ?);";
          var values = [data[i].id ,data[i].name, data[i].description, data[i].address, data[i].phone , data[i].img , createStringByArray(data[i].collaborator) ,"date('now')" , '1'];
          $cordovaSQLite.execute(db, query, values);
        
        } 
       }catch(error)
       {
        console.log(error);
          validate =  false;
       }  
       
       return validate;
    
    };

   var _selectStudio = function (id){       
        var query = "SELECT * FROM studio";
        if(id != null)
        {
          var values = [id];
          query = query+" WHERE id = ?";
        }else
        {
          var values = null;
        }
        console.log(query);
          var result =   $cordovaSQLite.execute(db, query, values);
          return result;
    };

var createStringByArray = function (array) {
    var output = '';
    angular.forEach(array, function (object) {
        angular.forEach(object, function (value, key) {
            
            output += value + ',';
        });
    });
    return output;
};

	return {
		add: _insertStudio,
		getStudio: _selectStudio
	};
});