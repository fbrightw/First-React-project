function login(request, response) {
    //need to check if there is data in bd, if not write corresponding answer

    return response.send("login happened")
}

module.exports = {login}