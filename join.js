const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event. preventDefault()

    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userpW2 = event.target.phone.value
    let username = event.target.name.value
    let userPhone = event.target.phone.value
    let userTel = event.target.tel.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userNick = event.target.nick.value
})

if(userId.length < 6){
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요")
    return
}

if(userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.")
    return
}