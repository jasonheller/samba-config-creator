/* Samba-Config-Creator
example:
	[share_name]
		path = /path/to/share
		comment = []

		browseable = {no|yes}
		readonly = {no|yes}
		
		valid users = [@group|username]
		write list = [@group|username]		

		create mask = []
		force create mode  = []
		directory mask = []
		force directory mode = []
*/
let config = [];

// input fields
let output = document.getElementById('output_config');

let share_name = document.getElementById('share_name');

// checkboxes
let checkbox_browseable = document.getElementById('checkbox_browseable');

share_name.addEventListener('input', ()=>{
	config[0] = "["+share_name.value+"]";
	output.innerHTML = config;
});
