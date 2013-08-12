// James Black
// 1308
// ASD

// ========================= JSON Object ==========================

var choreObj = [
	{
		id : 12345,
		choreName : "Dishes",
		choreLocation : "Kitchen",
		choreDifficulty	: "Medium",
		choreDate : "08/21/13",
		choreNotes : "Test object 1"
	},
	{
		id	: 23456,
		choreName : "Clean The Shower",
		choreLocation : "Bathroom",
		choreDifficulty : "Medium",
		choreDate : "08/22/13",
		choreNotes : "Test object 2"
	},
	{
		id : 345678,
		choreName : "Make Bed",
		choreLocation : "Bedroom",
		choreDifficulty : "Medium",
		choreDate : "08/23/13",
		choreNotes : "Test object 3"
	},
	{
		id : 456789,
		choreName : "Clothes",
		choreLocation : "Laundry",
		choreDifficulty : "Medium",
		choreDate : "08/24/13",
		choreNotes : "Test object 4"
	},
	{
		id : 567891,
		choreName : "Vaccum",
		choreLocation : "Living Room",
		choreDifficulty : "Medium",
		choreDate : "08/25/13",
		choreNotes : "Test object 5"
	},
	{
		id : 678912,
		choreName : "Grass",
		choreLocation : "Yard",
		choreDifficulty : "Medium",
		choreDate : "08/26/13",
		choreNotes : "Test object 6"
	}
];


$("#home").on("pageinit", function(){

	$('#choreList').on('click', function (){
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
								+ choreObj[i].id + '" href="#" class="choreList">Edit</a>' 
								+ "</li>";
			choreInfo += "<br />";
			$('#currentChores ul').html(choreInfo);

			} 
	});

		$("#currentChores").append(choreIds);
		var choreIds = "";
		var choreHeader = "<li>" + "Current Chores" + "</li>";
		$("#currentChores").html(choreHeader);
		for (i=0; i<choreObj.length; i++) {
			choreIds += '<li><a data-key="' 
					 + choreObj[i].id + '" href="#" class="choreList">' 
					 + choreObj[i].choreName + '</a></li>';

			$("#currentChores ").html(choreIds);
		}

});

$("#addItem").on("pageinit", function(){

});

$("#info").on("pageinit", function(){

});

$("#unfinishedChore").on("pageinit", function(){

});

