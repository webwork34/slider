window.onload = function () {


    
    let img_small = document.querySelectorAll('.img_small');
    let full_size = document.querySelector('.full_size');
    let img_full  = document.querySelectorAll('.img_full');
    let cont      = document.querySelector('.cont');
    let btn_prev  = document.getElementById('prev');
    let btn_next  = document.getElementById('next');
    let j = 0;


    for (let k = 0; k < img_small.length; k++) {
    	img_small[k].addEventListener('click', show);
    	img_full[k].style.width = 0;
    	img_full[k].style.height = 0;

    	function show(){

        	full_size.style.display = 'block';
        	cont.style.display = 'none';

        	img_full[k].style.opacity = 1;
        	img_full[k].style.width = 'auto';
    		img_full[k].style.height = 'auto';

            let width = $('.img_full').eq( $(this).index() ).width();
            let height = $('.img_full').eq( $(this).index() ).height();

            $('button').width(width/2);
            $('button').height(height);

        	j = k;
    	}
    }

  	for (var i = 0; i < img_full.length; i++) {
    	img_full[i].addEventListener('click', none);
    }

  	full_size.addEventListener('click', hide);
  	btn_prev.addEventListener('click', prev);
  	btn_next.addEventListener('click', next);

    function hide(){
    	full_size.style.display = 'none';
    	cont.style.display = 'flex';
    	img_full[j].style.opacity = 0;
    	
    	img_full[j].style.width = 0;
    	img_full[j].style.height = 0;
    }

    function none(event){
    	event.stopPropagation();
    }

    function prev(event){
    	event.stopPropagation();
    	img_full[j].style.opacity = 0;
    	img_full[j].style.width = 0;
    	img_full[j].style.height = 0;
		j--;
		if (j < 0){
			j = img_full.length - 1;
		}
		img_full[j].style.opacity = 1;
		img_full[j].style.width = 'auto';
    	img_full[j].style.height = 'auto';

        let width = $('.img_full').eq(j).width();
        let height = $('.img_full').eq(j).height();

        $('button').width(width/2);
        $('button').height(height);
    }

    function next(event){
    	event.stopPropagation();
    	img_full[j].style.opacity = 0;
    	img_full[j].style.width = 0;
    	img_full[j].style.height = 0;
		j++;
		if (j > img_full.length - 1){
			j = 0;
		}
		img_full[j].style.opacity = 1;
		img_full[j].style.width = 'auto';
    	img_full[j].style.height = 'auto';

        let width = $('.img_full').eq(j).width();
        let height = $('.img_full').eq(j).height();

        $('button').width(width/2);
        $('button').height(height);

    }
}