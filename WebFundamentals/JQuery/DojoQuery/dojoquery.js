function $Dojo(htmlElementId) {

    return (function dojoObjConstructor(htmlElementId) {
        var self = this;
        var htmlElementObj = document.getElementById(htmlElementId);

        this.click = function(callback) {
            htmlElementObj.addEventListener("click", () => {
                callback();
            });
            return self;
        };
        this.hover = function(callbackIn, callbackOut) {
            htmlElementObj.addEventListener("mouseover", () => {
                callbackIn();
            });
            htmlElementObj.addEventListener("mouseleave", () => {
                callbackOut();
            });
            return self;
        }
        return self;
    })(htmlElementId);
}