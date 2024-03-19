const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
    const classeCSS = container.className;
    const color = window.getComputedStyle(container).color;
    const backgroundColor = window.getComputedStyle(container).backgroundColor;
    const Height = window.getComputedStyle(container).height;
    const Width = window.getComputedStyle(container).width;
    const display = window.getComputedStyle(container).getPropertyValue('display')

    alert(
        "Class: " + classeCSS + "\n" +
        "Background color : " + backgroundColor + "\n" +
        "Color : " + color + "\n" +
        "Height : " + Height + "\n" +
        "Width : " + Width + "\n" +
        "Display : " + display + "\n" +
        "Font : " + window.getComputedStyle(container).font
    );


});
