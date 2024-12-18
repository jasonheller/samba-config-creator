/* Samba-Config-Creator
example:
	[share_name]
		path = /path/to/share
		comment = []

		browseable = {no|yes}
		readonly = {no|yes}
		
		valid users = [@group|username]
		write list = [@group|username]		
*/
let config = [];

// input fields
let share_name = document.getElementById('share_name');
let path = document.getElementById('path');
let comment = document.getElementById('comment');
let valid_users = document.getElementById('valid_users');
let write_list = document.getElementById('write_list');

// output fields
let output = document.getElementById('output_config');

// checkboxes
let checkbox_browseable = document.getElementById('checkbox_browseable');
let checkbox_read_only = document.getElementById('checkbox_read_only');
let checkbox_valid_users = document.getElementById('checkbox_valid_users');
let checkbox_write_list = document.getElementById('checkbox_write_list');

// buttons
let copy = document.getElementById('copy');

function addToConfig(idx, val){
	config[idx] = val
	output.innerHTML = config;
}

copy.addEventListener('click', ()=>{
	navigator.clipboard.writeText(config.toString())
});

share_name.addEventListener('input', ()=>{
	addToConfig(0, "["+share_name.value+"]");
});
path.addEventListener('input', ()=>{
	addToConfig(1, "path = "+path.value);
});
comment.addEventListener('input', ()=>{
	addToConfig(2, "comment = "+comment.value);
});
valid_users.addEventListener('input', ()=>{
	addToConfig(3, "valid users = "+valid_users.value);
});
write_list.addEventListener('input', ()=>{
	addToConfig(4, "write list = "+write_list.value);
});