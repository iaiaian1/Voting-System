frappe.ready(function() {
	// bind events here

	console.log(frappe.get_doc("Voters", "VOTER-00001"))
	// frappe.call({
    //     method: "frappe.client.get",
    //     args: {
    //         doctype: "Voters",
    //         voters_email: "jake@servio.ph",
    //     },
    //     callback(r) {
    //         if(r.message) {
    //         	let voter = r.message;
    //             console.log(voter);
	// 			// frappe.web_form.fields_dict.voter.set_data([voter.name])
    //         }
    //     }
    // });

})