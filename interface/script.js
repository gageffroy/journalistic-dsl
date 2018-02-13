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

var compile = document.getElementById('compile');

compile.addEventListener('click', function() {
	var delta = quill.getContents();
	var l = quill.getLength();
	quill.setContents(delta);
	console.log(delta);
});