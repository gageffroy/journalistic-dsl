// Initialization of the editor
var quill = new Quill('#editor', {
	  modules: {
		toolbar: [
		  [{ header: [1, 2, false] }],
		  ['bold', 'italic', 'underline'],
		  ['image']
		]
	  },
	  theme: 'snow'
});

// Actions to execute when using the commands added to the context menu
var compile = document.getElementById('compile');
compile.addEventListener('click', function() {
	var delta = quill.getContents();
	var l = quill.getLength();
	quill.setContents(delta);
	console.log(delta);
});