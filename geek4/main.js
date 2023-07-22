const btn = document.querySelector(".btn")

btn.addEventListener('click', () => {
    const  xhr = new XMLHttpRequest()
    xhr.open("GET", "peoples.json")
    xhr.setRequestHeader("Content-type", "application/js")
    xhr.send()
    xhr.addEventListener('load', () => {
        console.log(xhr.response)

    })

})


