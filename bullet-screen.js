/**
 * Created by huaha on 2017/4/14.
 */
(function($){
    $.bulletScreen={
        timers:[],
        add:function(odiv,container){
            odiv.css({
                position:'absolute',
                fontSize:'20px',
                display:'block',
                whiteSpace:'nowrap'
            });
            var r = Math.floor(Math.random() * 254);
            var g = Math.floor(Math.random() * 254);
            var b = Math.floor(Math.random() * 254);
            odiv.css({
                color: "rgb(" + r + "," + g + "," + b + ")",
                top: (Math.floor(Math.random() * container.height())-24) + "px",
                width:odiv.width(),
                right: 0
            })
        },
        send:function(val,container){
            var odiv = $("<div class='bullet'></div>");
            odiv.html(val);
            container.append(odiv);
            this.add(odiv,container);
            this.move(odiv,container);

        },
        move:function(odiv,container){
            var i = 0;
            var timer = setInterval(function() {
                odiv.css({
                    right: (i += 1) + "px"
                });
                if ((odiv.offset().left + odiv.width()) < container.offset().left) {
                    odiv.remove()
                    clearInterval(timer)
                }
            }, 10);
            this.timers.push(timer);
        },
        clear:function(container){
            for (var i = 0; i < this.timers.length; i++) {
                clearInterval(this.timers[i])
            }
            container.find('.bullet').remove();
        }
    }
})(jQuery);