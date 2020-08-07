/*
 jQuery spaceBalls v.1.1 | (c) 2013 Develevation - Updated 2019
 Written by Jeff Sturgis 
 Special Thanks to Daniel Puhe @spielzeugz for being awesome with HTML5
 This Page inspired this plugin: http://spielzeugz.de/html5/liquid-particles.html
*/
(function($) {

    $.fn.spaceBalls = function(options) {

        var settings = $.extend({
            num_balls: 600,
            background: "rgba(16,13,60,0.95)",
            ball_speed: 0.96,
            ball_color: "random",
            composition: "lighter",
            startPos: {
                clientX: 0,
                clientY: 0
            }
        }, options);
        return this.each(function() {
            var $main = $(this);

            $main.css('position', 'relative');
            var D = 2 * Math.PI,
                f = $main.width(),
                p = $main.height(),
                z = settings.num_balls,
                B = settings.ball_speed,
                A = [],
                o, e, n, m, q, r, x, y, u, v, w;

            var mpos;
            $main.prepend('<div style="position: absolute; top: 0%; left: 0%; width: 1px;	height: 1px; overflow: visible;"><canvas class="mainCanvas"></canvas></div>');
            var max_height = $main.height();
            var max_width = $main.width();
            $main.find("*").each(function() {
                max_height = Math.max($(this).height(), max_height);
                max_width = Math.max($(this).width(), max_width);
            });
            $main.find('.mainCanvas').each(function() {
                $o = $(this);
                if ($o[0].getContext) {

                    m = document.getElementById("outer");
                    m = $o.parent().parent().get(0);
                    console.log(m);
                    mpos = {
                        top: settings.startPos.clientX,
                        left: settings.startPos.clientY
                    };

                    n = $o.parent().get(0);

                    e = $o[0].getContext("2d");

                    for (var d = z; d--;) {
                        var l = new H;
                        l.x = settings.startPos.clientX;
                        l.y = settings.startPos.clientY;
                        l.a = 34 * Math.cos(d) * Math.random();
                        l.b = 34 * Math.sin(d) * Math.random();
                        A[d] = l
                    }
                    q = u = settings.startPos.clientX;
                    r = v = settings.startPos.clientY;
                    $main.on('mousedown', F);
                    $main.on('mouseup', G);
                    $main.on('mousemove', E);
                    //$main.on('touchstart', F);
                    // $main.on('touchend', G);
                    // $main.on('touchmove', E);  
                    setInterval(C, 33, $main, max_width, max_height);
                    w = !0;
                }
            });


            $main.find('.mainCanvas').attr('width', max_width);
            $main.find('.mainCanvas').attr('height', max_height);
            $main.find('.mainCanvas').attr('max-width', max_width);
            $main.find('.mainCanvas').attr('max-height', max_height);

            $(window).resize(function() {
                $main.find('.mainCanvas').attr('width', max_width);
                $main.find('.mainCanvas').attr('height', max_height);
                f = $main.width();
                p = $main.height();
            });

            function C(elem, mwidth, mheight) {

                e.globalCompositeOperation = "source-over";
                e.fillStyle = settings.background;

                f = mwidth;
                p = mheight;
                e.fillRect(0, 0, f, p);
                // e.globalCompositeOperation=settings.composition;
                x = q - u;
                y = r - v;
                u = q;
                v = r;
                //window.console.log(q + " " + u);
                for (var d = 0.86 * f, l = 0.125 * f, m = 0.5 * f, t = Math.random, n = Math.abs, o = z; o--;) {
                    var h = A[o],
                        i = h.x,
                        j = h.y,
                        a = h.a,
                        b = h.b,
                        c = i - q,
                        k = j - r,
                        g = Math.sqrt(c * c + k * k) || 0.001,
                        c = c / g,
                        k = k / g;
                    if (w && g < m) var s = 14 * (1 - g / m),
                        a = a + (c * s + 0.5 - t()),
                        b = b + (k * s + 0.5 - t());
                    g < d && (s = 0.0014 * (1 - g / d) * f, a -= c * s, b -= k * s);
                    g < l && (c = 2.6E-4 * (1 - g / l) * f, a += x * c, b += y * c);
                    a *= B;
                    b *= B;
                    c = n(a);
                    k = n(b);
                    g = 0.5 * (c + k);
                    0.1 > c && (a *= 3 * t());
                    0.1 > k && (b *= 3 * t());
                    c = 0.45 * g;
                    c = Math.max(Math.min(c, 180.5), 0.4);
                    i += a;
                    j += b;
                    i > f ? (i = f, a *= -1) : 0 > i && (i = 0, a *= -1);
                    j > p ? (j = p, b *= -1) : 0 > j && (j = 0, b *= -1);
                    h.a = a;
                    h.b = b;
                    h.x = i;
                    h.y = j;
                    e.fillStyle = h.color;
                    e.beginPath();
                    e.arc(i, j, c, 0, D, !0);
                    e.closePath();
                    e.fill();
                }
            }

            function E(d) {

                d = d ? d : window.event;

                //  q=d.clientX-m.offsetLeft-n.offsetLeft;

                //  q=d.clientX-mpos.left + $(document).scrollLeft();
                q = d.clientX - 0 + $(document).scrollLeft();
                //  r=d.clientY-m.offsetTop-n.offsetTop
                r = d.clientY - 0 - n.offsetTop;
                //  r = d.clientY - mpos.top + $(document).scrollTop();
                r = d.clientY - 0 + $(document).scrollTop();

            }

            function F() {

                return w = !1
            }

            function G() {

                setTimeout(function() {
                    w = !1;

                }, 3000);
                w = !0;
                return !1
                throw "Parameter is not a number!";;
            }

            function H() {
                if (settings.ball_colors.length) {
                    var rand = Math.floor((Math.random() * settings.ball_colors.length));
                    this.color = settings.ball_colors[rand];
                } else if (settings.ball_color == "random") {
                    this.color = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
                } else {
                    this.color = settings.ball_color;
                }

                this.b = this.a = this.x = this.y = 0;
                this.size = 1
            }

            function thisHeight() {
                return $(this).height();
            }
        });
    };

}(jQuery));
(function() {})();