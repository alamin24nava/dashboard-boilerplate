// nav bar show & hidden
$(document).ready(function() {
    $('#toggler').click(function() {
        $(".prifix-sidenav-wrap").addClass("aside-hide");
        $(".prifix-page-content, .prifix-header-template").addClass("prifix-full-screen-expanded");
    })
});


// nav Link active
const activeLink = document.querySelectorAll('.sidenav-link')

function navActiveLink() {
    if (activeLink) {
        activeLink.forEach(i => i.classList.remove('sidenav-link-active'))
        this.classList.add('sidenav-link-active')
    }
}
activeLink.forEach(i => i.addEventListener('click', navActiveLink));
// theme input select options
$('.theme-select-input').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('theme-select-hidden'); 
    $this.wrap('<div class="theme-select-wrap"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});