// James Black
// 1308
// ASD



	// ========= Every thing needed for home page to work =========
	$('#home').on('pageinit', function(){
	
	    // ======== JSON Ajax call ========
	    $(function(){
	        
	        $.ajax({
	            url: "_view/asdprojects",
	            dataType: "json",
	            success: function(data){
	            	
	                $.each(data.rows, function(index, chore) {
	                console.log(data);
	                var choreId = chore.value.id;
	                var choreName = chore.value.choreName;
	                var choreLocation = chore.value.choreLocation;
	                var choreDate = chore.value.choreDate;
	                
	                   var choreIds = '<li><a data-key="'+
	                       choreId + '" href="#" class="choreList">' + 
	                       choreLocation + '<br/>' + choreName + ' : ' + 
	                       choreDate + ' </a></li>';
						
	                    $('#currentChores').append(choreIds);
	                    
	                    
	                });
	                $('#currentChores').listview('refresh');
	               
	            }
	        });
	    });
	 
	/*
	    // ========= Display data =========
	    $(function(e){
	        
	        if (localStorage.length === 0) {
	                console.log("Storage is Empty.");
	               
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
	*/
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
	
	        var deleteItem = function (){
	        var ask = confirm("Are you sure you want to delete this chore?");
	        if (ask) {
	            localStorage.removeItem(this.key);
	            alert("Chore was deleted");
	            location.reload();
	        } else {
	            alert("Chore was NOT deleted.");
	        }       
	        };
        
        
