// var steps = $(".step");
// console.dir(steps);

// setTimeout(function() {
//   steps.each(function(index) {
//     var _t = $(this);
//     setTimeout(function() {
//       _t.addClass('done');
//     }, 1250*index*1.5);
//   });
// }, 500);


// ===================================
$('#first').show();
	$('#second').hide();
	$('#third').hide();
  $('span').click(function(){ 
    if ($(this).hasClass('first')){
        $('#nprogress-bar').val('0');
        $(this).nextAll().removeClass('border-change');  
        //$('.percent').html("0% Complete"); 
		$('#first').show();
		$('#second').hide();
	    $('#third').hide();
       }else if ($(this).hasClass('second')){
        $(this).nextAll().removeClass('border-change');  
        $('#nprogress-bar').val('34');
        $(this).prevAll().addClass('border-change');  
        $(this).addClass('border-change');
         //$('.percent').html("33% Complete");
		 $('#second').show();
		 $('#first').hide(); 
			$('#third').hide();
       }else if ($(this).hasClass('third')){
        $(this).nextAll().removeClass('border-change');  
        $('#nprogress-bar').val('67');
        $(this).prevAll().addClass('border-change'); 
        $(this).addClass('border-change');
        //$('.percent').html("66% Complete");
		 $('#second').hide();
	     $('#first').hide();
		  $('#third').show();
       } else{
        $('#nprogress-bar').val('100');
         $(this).addClass('border-change');
        $(this).prevAll().addClass('border-change');
         //$('.percent').html("100% Complete");
		 $('#third').hide();
		 $('#first').hide();
       }
  });





//   ======================




var progressBar = document.querySelector('.progress-bar');
var sections = document.querySelectorAll('section');
var windowHeight = window.innerHeight;

function updateProgressBar() {
  var totalHeight = document.documentElement.scrollHeight - windowHeight;
  var progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progress + '%';
}

function checkSectionInView() {
  var scrollPosition = window.pageYOffset;
  
  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', function() {
  updateProgressBar();
  checkSectionInView();
});
