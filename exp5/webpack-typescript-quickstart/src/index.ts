console.log("Hi")

const IMAGE_LINKS = [
    "https://www.wired.com/images_blogs/threatlevel/2011/07/aaron_swartz.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fnE1hmEZ39oCKKCdkdCxOQWBLcNRkGQNv7fQgFb1JG1y_odMly9-lZFUUv_CEPITrMQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahGWeaTE3yK301ENIQCSA4rze5t6x3x1m25wiL18X4cgnOGvHTvHI6bcnMhjyfdCmPkI&usqp=CAU"
]

const button = document.getElementById("im-change") as HTMLButtonElement

button.addEventListener("click", () => {
    const image = document.getElementById("im-image") as HTMLImageElement
    const randomIndex = Math.floor(Math.random() * IMAGE_LINKS.length)
    image.src = IMAGE_LINKS[randomIndex]
})
