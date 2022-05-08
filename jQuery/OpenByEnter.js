//on keyboard enter
$("#invoiceNumber").keyup(function(e) {
    if (e.keyCode == 13) {
        openInvoiceById($(this).val());
    }
});

//on button click
$("#openInvoice").click(function() {
    openInvoiceById($("#invoiceNumber").val());
});
