// James Black
// 1308
// ASD



// ========= Every thing needed for home page to work =========
$('#home').on('pageinit', function(){


      

    $(function(){
        //$('#currentChores').empty();
        $.ajax({
            url: 'js/main.json',
            type: 'GET',
            dataType: 'json',
            success: function(response){
                $.each(response, function(key, val) {
                   var choreIds = '<li><a data-key="'+
                       val.id + '" href="#" class="choreList">' + 
                       val.choreName + ' : ' + 
                       val.choreDate + ' </a></li>';

                    $('#currentChores').append(choreIds);
                    $('#currentChores').listview('refresh');
                    
                });
                
               
            }
        });
       });
      
    $(function(){
            
        $.ajax({
            url: 'js/main.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(response){
                console.log('test xml');
              // assume that the XML above is in a string named "xml"
            var data = $.parseXML(xml);

            // wrap the XML in a jQuery object to make it easier to work with
            var items = $( data );
            chores.find("chore").each(function(){
                var item = $(this);
                console.log("Name: ", item.find("name"));
});
            }
           
        });

    });

    //$.localStorage();

});


// ========= Every thing needed for AddItem page to work =========
$('#addItem').on('pageinit', function(e){
   var myForm = $('#itemForm'); 
    $('#saveButton').on('click', function(e){
       $('#itemForm').validate({
        invalidHandler: function(form, validator) {
              
        return false;
        },
        submitHandler: function() {
            var data = myForm.serializeArray();
            storeData(data);
            
        }
        
        });    
    });

	

});

// ========= Every thing needed for info page to work =========
$('#info').on('pageinit', function(){

});

// ========= Every thing needed for unfinishedChore page to work =========
$('#unfinishedChore').on('pageinit', function(){

});



      
        var storeData = function(data, key){
        if (!key) {
                var id = Math.floor(Math.random() * 1000001);
            } else {
                id = key;
            }
            var item = {};
            item.chore = ["Names :", $("#chore").val()];
            item.area = ["Location :", $("#location").val()];
            item.choreDate = ["Completion Date :", $("#finishDate").val()];
            item.notes = ["Notes :", $("#notes").val()];
            localStorage.setItem(id, JSON.stringify(item));
            alert("Chore Saved!");
        
        };
      





