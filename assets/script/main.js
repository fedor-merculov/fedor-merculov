$(document).ready(function(){
    /* Granim script for header background gradient */
    var header = new Granim({
        element: '#headerGranim',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#ff84ff', '#b784ff'],
                    ['#b784ff', '#8490ff'],
                    ['#8490ff','#ff84ff']
                ]
            }
        }
    });

    /* Full page scroll */
    $('#fullpage').fullpage({
});



})