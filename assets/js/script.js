$(() => {
    $('.card').css({'opacity': '0'})
    $('.card').hide()

    $('.login-container button').click(() => {
        $('.login-container button').text('')
        
        setTimeout(() => {
            $('.login-container button').css({'width': '0'})
        },50)
        
        setTimeout(() => {
            $('.login-container button').css({'margin-top' : '0.5vw','height': '0', 'opacity': '0'})
        }, 100)

        setTimeout(() => {
            $('.login-button').html(`
                <div class="loader">
                    <div class="scanner">
                        <h1>Loading...</h1>
                    </div>
                </div>
            `)
        }, 500)

        setTimeout(() => {
            $('.card').show()
            $('#login').css({'opacity': '0'})
        }, 10000)

        setTimeout(() => {
            $('.card').css({'opacity': '1'})
        }, 11000)


        $('#github').click(() => {
            window.open('https://github.com/Jaareet')
        })

        $('#discord').click(() => {
            window.open('https://discord.com/users/710608592100917420')
        })

        $('#discordCommunity').click(() => {
            window.open('https://discord.gg/jaareet')
        })
    })
})