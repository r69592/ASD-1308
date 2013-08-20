// James Black
// 1308
// ASD


// ========= Every thing needed for home page to work =========
$('#home').on('pageinit', function(){

    // ======== JSON Ajax call ========
    $(function(){
        
        $.ajax({
            url: 'js/main.json',
            type: 'GET',
            dataType: 'json',
            success: function(response){
                $.each(response, function(key, val) {
                   var choreIds = '<li><a data-key="'+
                       val.id + '" href="#" class="choreList">' + 
                       val.choreName + ' : ' + val.choreLocation + '<br/>' + 
                       val.choreDate + ' </a></li>';

                    $('#currentChores').append(choreIds);
                    $('#currentChores').listview('refresh');
                    
                });
                
               
            }
        });
    });

    // ======= XML Ajax call =======  
    $(function(){
            
        $.ajax({
            url: 'js/main.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(response){
                $(response).find('chores').find('chore').each(function(){

                var id = $(this).find('id').text(),
                name = $(this).find('name').text(),
                location = $(this).find('location').text(),
                date = $(this).find('date').text();

                var choreIds = '<li><a data-key="'+
                  id + '" href="#" class="choreList">' + 
                  name + ' : ' + location + '<br/>' +
                  date + ' </a></li>';

                  $('#currentChoresXml').append(choreIds);
                  $('#currentChoresXml').listview('refresh');
              });
            }           
        });
    }); 

    // ========= Display data =========
    $(function(e){
        
        if (localStorage.length === 0) {
                alert("Storage is Empty.");
               
        } else {
            $(localStorage.length).each(function(i){
                
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var obj = JSON.parse(value);
                //var myKey = obj.key[i];   
                var myId = obj.chore[1];
                var date = obj.choreDate[1];

                var choreIds = '<li><a data-key="'+
                    key + '" href="#" class="choreList">' + 
                    myId + ' :       <br/>' +
                    date + ' </a></li>';
                
                $('#currentChoresLocalStorage').append(choreIds);
                $('#currentChoresLocalStorage').listview('refresh'); 
            });        
        }
    });

    // ======= Display / edit ======
    $('a.choreList.ui-link-inherit').on('click', function(event) {
        console.log("a is working");
        $('#recorderrors').dialog({
        autoOpen: true,
        title : title,
        resizable : false,
        buttons : {
            'CANCEL' : {
                text : messages.Cancel,
                click : function(){$(this).dialog('close')}
            },
            'OK' : {
                text : messages.Ok,
                click : okButtonCallback
            }
        }
    });
        event.preventDefault();
    });




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
      





