const hele = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) =>{
	entries.forEach((entry) => {
		console.log(entry)
		if(entry.isIntersecting){
			entry.target.classList.add('show');
		}
	});
});

hele.forEach((el) => observer.observe(el));