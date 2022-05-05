function openInvoiceById(iid){
    if (iid != Number.NaN){
        let w = window.open("SomeUrl.aspx?id=" + iid + "&t=" + uncache(), "_blank", "directories=no,height=700,width=700,location=no,menubar=no,titlebar=no,toolbar=no");
        let $w = $(w.document.body);
    }
}
