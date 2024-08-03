document.addEventListener("DOMContentLoaded", function(event) {
    
    var envelope = document.getElementById('envelope');
    var btn_open = document.getElementById('open');
    var btn_reset = document.getElementById('reset');
    
    envelope.addEventListener('click', function() {
        open();
    });
    btn_open.addEventListener('click', function() {
        open();
    });
    btn_reset.addEventListener('click', function() {
        close();
    });

    function open() {
		envelope.classList.add("open");
        envelope.classList.remove('close')
    }
    function close() {
        envelope.classList.add("close")
        envelope.classList.remove("open");
    }
   
});