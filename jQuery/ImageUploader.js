//input[name=file] can be targeted by name, type

$(\'input[name=file]\').change(function(){

		$(this).simpleUpload("uploadImageToServer.php?id='.$p->PK->GetValue().'", {

			start: function(file){
				//upload started
				$(\'#filename\').html(file.name);
        		$(\'#progress\').html("");
        		$(\'#id\').html("");
				$(\'#progressBar\').width(0);
      },
      
      allowedExts: ["jpg", "jpeg"],
      maxFileSize: 2000000,     
			progress: function(progress){
				//received progress
				$(\'#progress\').html("Progress: " + Math.round(progress) + "%");
				$(\'#progressBar\').width(progress + "%");
			},
			success: function(data){
				//upload successful
				$(\'#progress\').html("Success select, sending data.<br>Response: " + JSON.stringify(data));
			},
			error: function(error){
				//upload failed
				$(\'#progress\').html("Failure!<br>" + error.name + ": " + error.message);
			}
		});
	});
