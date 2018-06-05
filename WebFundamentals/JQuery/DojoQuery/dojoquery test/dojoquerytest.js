function $Dojo(htmlElementId) {
    return (function objconstructor(htmlElementId) {
        var self = this;
        var htmlElementObj = document.getElementById(htmlElementId);

        this.click = function(callback) {
            htmlElementObj.addEventListener("click", () => {
                callback();
            });
            return self;
        }
    });
}