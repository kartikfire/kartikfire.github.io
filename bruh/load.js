const frame = document.createElement("iframe");
frame.style = "border: none";
frame.width = "560";
frame.height = "315";
frame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1";
frame.frameBorder = "0";
frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

document.getElementById("thing").appendChild(frame);
