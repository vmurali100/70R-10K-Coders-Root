// $('h1').html("Hay Hi")

$(document).ready(()=>{
    $('p').on('click',()=>{
        $('p').wrap('<div></div>')
    })
})