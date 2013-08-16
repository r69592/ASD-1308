// James Black
// 1308
// ASD


// ========= Every thing needed for home page to work =========
$('#home').on('pageinit', function(){

<<<<<<< HEAD
        
        var choreIds = "";
        
        for (i=0; i<choreObj.length; i++) {
            choreIds += '<li><a data-key="'+ 
                     choreObj[i].id + '" href="#" class="choreList">' + 
                     choreObj[i].choreName + ' : ' + 
                     choreObj[i].choreDate + ' </a></li>';
        }    
        $('#currentChores').append(choreIds);
                    
        $('#currentChores').listview('refresh');
        
       $('.choreList').on('click', function() {
        var myDiplayId = $('.choreList');
        for (i=0; i<myDiplayId.length; i++){
            console.log(myDiplayId);
           $('a[data-key^=').appendTo("#recorderrors ul");
        }
            
       });
       

      
    /*
    $('.choreList').on('click', function (){
        $('#currentChores').append('<ul>');
        
        var choreInfo = "";
        
        for (i=0; i<choreObj.length; i++) {

            choreInfo += "<li>" + "Name:" + ' ' 
                                + choreObj[i].choreName + ' ' 
                                + "Location:" + ' ' 
                                + choreObj[i].choreLocation + ' ' 
                                + "Difficulty:" + ' ' 
                                + choreObj[i].choreDifficulty + ' ' 
                                + "Date:" + ' ' 
                                + choreObj[i].choreDate + ' ' 
                                + "Notes:"  + ' ' 
                                + choreObj[i].choreNotes + ' ' 
                                + '<a data-key="' 
                                + choreObj[i].id + '"<a href="#" class="choreList">Edit</a>' 
                                + "</li>";
            choreInfo += "<br />";
            $('#currentChores ul').html(choreInfo);
            
=======

      

    $(function(){
        //$('#currentChores').empty();
        $.ajax({
            url: 'js/main.json',
            type: 'GET',
            dataType: 'json',
            success: function(response){
                $.each(response, function(key, val) {
                    choreIds = '<li><a data-key="'+
                    val.id + '" href="#" class="choreList">' + 
                    val.choreName + ' : ' + 
                    val.choreDate + ' </a></li>';

                    $('#currentChores').append(choreIds);
                    $('#currentChores').listview('refresh');
                    
                });
                
               
>>>>>>> gh-pages
            }
        })
       });
      
        $(function(){
            console.log('XML start working');
        $.ajax({
            url: 'js/main.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(response){
                console.log('This is working');
                $(response).find('chores chore').each(function(){
                 
                
                

                    var id   = $(this).find('id').text(),
                        name = $(this).find('name').text(),
                        date = $(this).find('date').text();

                        choreIds = '<li><a data-key="'+
                    id + '" href="#" class="choreList">' + 
                    name + ' : ' + 
                    date + ' </a></li>';

                    $('#currentChoresXml').append(choreIds);
                    $('#currentChoresXml').listview('refresh');
                    console.log(currentChoresXml);

                });
                
              
            }
        })
       });

<<<<<<< HEAD
// ========= Every thing needed for AddItem page to work =========
$('#addItem').on('pageinit', function(e){
        e.preventDefault();
       $('#saveButton').on('click', function(e){
           $('#itemForm').validate({
            invalidHandler: function(form, validator) {
              
            var html = "";
            for (var key in validator.submitted) {
                var label = $('label[for^="'+ key +'"]').not('[generated]');
                    
                var legend = label.closest('fieldset').find('.ui-controlgroup-label');
                console.log(legend);
                var fieldName = legend.length ? legend.text() : label.text();
                console.log(fieldName);
                html += "<li>"+ fieldName +"</li>";
            }
            $("#recorderrors ul").html(html);
            console.log(html);
            },
            submitHandler: function() {
            var data = myForm.serializeArray();
            storeData(data);
            console.log(data);
        }

    });

            //e.preventDefault();
            //var myFormValidate = $('form').submit().validate;
            //console.log(myFormValidate);
            //return false;
       });
		/*var myForm = $('#itemForm'),
        recordErrors = $("#recorderrorslink");

        $('#saveButton').validate({
=======

});


// ========= Every thing needed for AddItem page to work =========
$('#addItem').on('pageinit', function(e){
   var myForm = $('#itemForm'); 
    $('#saveButton').on('click', function(e){
       $('#itemForm').validate({
>>>>>>> gh-pages
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
      





