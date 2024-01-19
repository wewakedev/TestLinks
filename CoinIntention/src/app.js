// Mobile toggle icon

    const toggleIcon = document.querySelector('.navSearch button.toggleMenu');
    toggleIcon.addEventListener('click',function(){
        document.querySelector('.mobileNav').classList.toggle('show');
        document.body.style.overflow="hidden";
    })

	const closebtn = document.querySelector('button.closeMenu');
	closebtn.addEventListener('click', () => {
		if (document.querySelector('.mobileNav').classList.contains('show')) {
			document.querySelector('.mobileNav').classList.remove('show');
		}
	});
