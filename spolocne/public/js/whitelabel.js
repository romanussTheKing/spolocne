/* JS Whitelabeling script */
frappe.ready(function() {
    // Odstránenie odkazu na "About" (O aplikácii) z Help menu, aby sa nezobrazili verzie frameworku
    setTimeout(() => {
        if ($('.dropdown-help .dropdown-menu').length) {
            $('.dropdown-help .dropdown-menu li a[onclick*="frappe.ui.toolbar.show_about()"]').parent().remove();
        }
        
        // Zmena title na webe, ak náhodou zostalo ERPNext
        if (document.title.includes('ERPNext')) {
            document.title = document.title.replace('ERPNext', 'Informačný Systém');
        }
        if (document.title.includes('Frappe')) {
            document.title = document.title.replace('Frappe', 'Informačný Systém');
        }
    }, 1000); // Mierne oneskorenie, kým sa vygeneruje toolbar
});
