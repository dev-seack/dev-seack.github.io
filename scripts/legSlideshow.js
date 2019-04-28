if (typeof jQuery.when.all === 'undefined') {
    jQuery.when.all = function (deferreds) {
        return $.Deferred(function (def) {
            $.when.apply(jQuery, deferreds).then(
                function () {
                    def.resolveWith(this, [Array.prototype.slice.call(arguments)]);
                },
                function () {
                    def.rejectWith(this, [Array.prototype.slice.call(arguments)]);
                });
        });
    }
}

(function($) {

    $.fn.legSlideshow = function( options ) {
        var settings = $.extend({
            slides: []
        }, options);

        function legSlideshow(elem) {
            var _this = {
                _elem: elem,
                currentIndex: 0
            }

            var isSliding = false;

            _this.selectSlide = function(index) {
                if (isSliding) return;
                
                var promises = [];
                isSliding = true;
                if (index >= 0 && Array.isArray(settings.slides) && index < settings.slides.length) {
                    var slide = settings.slides[index];
                    $.each( slide, function( key, value ) {
                        if (key === 'background') {
                            $(_this._elem).find('[data-slideshow-background]').addBack('[data-slideshow-background]').css({'background-image': 'url(' + value + ')'});
                        } else {
                            var _placeholder = $(_this._elem).find("[data-slideshow-placeholder='" + key + "']");
                            _placeholder.append('<span class="absolute-overlay">' + value + '</span>');

                            var delay = _placeholder.data('slideshowAnimDelay');

                            let defer = $.Deferred();
                            promises.push(defer);

                            _placeholder.children().eq(0).delay(0).fadeTo(400, 0, 'swing');
                            _placeholder.children().eq(1).delay(delay + 100).fadeTo(500, 1, 'swing', function() {
                                _placeholder.children().eq(1).remove();
                                _placeholder.children().eq(0).text(value);
                                _placeholder.children().eq(0).css({opacity:1});
                                defer.resolve();
                            });
                        }
                    });
                }
                $.when.all(promises).then(function(){
                    isSliding = false;
                });
            }

            _this.next = function() {
                if (isSliding) return;

                _this.currentIndex++;
                if (_this.currentIndex > settings.slides.length - 1) {
                    _this.currentIndex = 0;
                }
                _this.selectSlide(_this.currentIndex);
            }

            _this.prev = function() {
                if (isSliding) return;
                
                _this.currentIndex--;
                if (_this.currentIndex < 0) {
                    _this.currentIndex = settings.slides.length - 1;
                }
                _this.selectSlide(_this.currentIndex);
            }

            //events
            $(_this._elem).find('[data-slideshow-next').click(_this.next);
            $(_this._elem).find('[data-slideshow-prev').click(_this.prev);

            // load all images nao
            $.each( settings.slides, function( key, value ) {
                if (typeof value.background == 'string') {
                    document.createElement('img').src = value.background;
                }
            });

            //init
            _this.selectSlide(0);
        }

        return this.each( function() {
            legSlideshow(this);
        });
    }

}(jQuery));

$('.legSlideshow').legSlideshow({
    slides: [
        { position: '01', background: '/assets/wir/coreValue/background1.jpg', title: 'Unsere Werte', description: 'Gute Arbeit ensteht aus Überzeugung.'},
        { position: '02', background: '/assets/wir/coreValue/background2.jpg', title: 'Unsere Werte2', description: 'Gute Arbeit ensteht aus Überzeugung.2'},
        { position: '03', background: '/assets/wir/coreValue/background3.jpg', title: 'Unsere Werte3', description: 'Gute Arbeit ensteht aus Überzeugung.3'}
    ]
});