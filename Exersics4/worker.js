const counter = () => {
    const date = new Date()
    postMessage(date)
    setTimeout(counter,1000)
}

counter()