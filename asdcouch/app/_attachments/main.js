// James Black
// 1308
// ASD

	        var storeData = function(data, key){
	        if (!key) {
	                var id = Math.floor(Math.random() * 10000001);
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

	// ========= Every thing needed for home page to work =========
	$(document).on('pageinit', '#home' , function(){
	
		/*$.couch.db('asdproject').allDesignDocs({
			success: function(data) {
				console.log(data);
					
	                $.each(data.rows, function(index, chore) {
	                
	                var choreId = chore.value._id;
	                var choreName = chore.value.choreName;
	                var choreLocation = chore.value.choreLocation;
	                var choreDate = chore.value.choreDate;
	                
	                   var choreIds = '<li><a id="'+
	                       choreName + '" href="#" class="choreList">' + 
	                       choreLocation + '<br/>' + choreName + ' : ' + 
	                       choreDate + ' </a></li>';
						
	                    $('#currentChores').append(choreIds);
	                    
	                    
	                });
	                $('#currentChores').listview('refresh');
	               
	            
			},
			error: function(status) {
				console.log(status);
			}

		});
		*/
	    // ======== JSON Ajax call ========
	    $(function(){
	        $.ajax({
	            url: "_view/asdprojects",
	            
	            dataType: "json",
	            success: function(data){
	            	
	                $.each(data.rows, function(index, chore) {
	                
	                var choreId = chore.value._id;
	                var choreName = chore.value.choreName;
	                var choreLocation = chore.value.choreLocation;
	                var choreDate = chore.value.choreDate;
	                
	                   var choreIds = '<li><a id="'+
	                       choreName + '" href="#" class="choreList">' + 
	                       choreLocation + ': ' + choreName + ' : ' + 
	                       choreDate + ' </a></li>';
						
	                    $('#currentChores').append(choreIds);
	                    
	                    
	                });
	                $('#currentChores').listview('refresh');
	               
	            }
	        });
	         
	    });
	   
	
	});
	
	
	// ========= Every thing needed for AddItem page to work =========
	$(document).on('pageinit', '#addItem' , function(e){
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
	$(document).on('pageinit', '#info',  function(){
	
	});
	
	// ========= Every thing needed for unfinishedChore page to work =========
	$(document).on('pageinit', '#recorderrors', function(event){
	console.log($(this));
	});
	
	
	
	      

        
        
