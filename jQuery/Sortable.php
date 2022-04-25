<form name="frmQA" method="POST" action="URL TO GET AND SAVE ORDER OF THE IMAGES"/>
	<input type="hidden" name="row_order" id="row_order" />
    <script>
		$( function() {$( "#sortable" ).sortable();} );
		
		function saveOrder() {
			var selectedOrder = new Array();
			$('ul#sortable li').each(function() {
				selectedOrder.push($(this).attr("id"));
			});
			document.getElementById("row_order").value = selectedOrder;			
  		}
	</script>
    <ul id="sortable">		
		<?php        	
    foreach($rows AS $row) { 			
        ?>  
        <li id=<?php echo $row->id;?> class="listImageContainer">                       
                <img src="img url <?php echo $row->standard;?>" class="itemImage">                    
        </li>
        <?php 
        }	
        ?>
    <ul>
    <input class="btnSaveOrder" type="submit" name="submit" value="Save Order" onClick="saveOrder();" />
	</form>
