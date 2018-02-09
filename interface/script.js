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