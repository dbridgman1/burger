$(document).ready(function() {
    $('.burger_id').on('click', function() {
        var id = $(this).attr('value');
        console.log(id);
        fetch(`/api/burgers/${id}`, {
            method:'PUT',
            headers: {
                Aceept: 'application/json',
                'Content-Type': 'apllication/json'
            },
        }).then((response) => {
            if (response.ok) {
                console.log(`Burger route hit`);
            } else {
                console.log('Response failed')
            }
        })
    })
})