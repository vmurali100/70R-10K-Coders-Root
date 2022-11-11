var images = ["https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-n-160/pulsar-250-black-360/black-red/00.png",
    "https://imgd.aeplcdn.com/1280x720/n/cw/ec/55973/right-front-three-quarter.jpeg?q=80"];
for (i = 0; i < images.length; i++) {
    var myimage = document.createElement("img");
    myimage.setAttribute("src", images[i]);
    document.body.appendChild(myimage)
}