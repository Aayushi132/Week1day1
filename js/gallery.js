function imagesGallery() {
  const captionArray = [
    "SNOWY DAY",
    "PARK SNOW",
    "SNOW COVERED BRIDGE",
    "WINTER TRAIL",
    "CHRISTMAS STORE",
    "CABIN VIEW",
    "SHINING TREES",
    "CABIN LAKE",
    "STREET VIEW",
    "KIDS ADVENTURE",
  ];
  const descriptionArray = [
    "A snowy day in December",
    "Dried plants in the park",
    "Walk on the snow-covered bridge",
    "All Christmas sweets under one roof",
    "Scenic ocean views",
    "Live in our snow covered cabins",
    "A view of the top from the bottom",
    "A gorgeous look at the snowy lake",
    "A wonderful drive near the woods",
    "A fun place for kids to enjoy the season",
  ];
  var count = 0;
  for (var i = 0; i <= 4; i++) {
    var ul = document.getElementById("gallery");
    var row = document.createElement("photo");
    row.setAttribute("class", "row");
    for (var j = 1; j <= 2; j++) {
      var column = document.createElement("photo");
      column.setAttribute("class", "column imageBox");
      var imageCount = count + 1;
      var img = document.createElement("img");
      img.src = "imagesWeek4/" + imageCount + ".jpeg";
      img.setAttribute("class", "photo");
      var figCaption = document.createElement("figcaption");
      figCaption.innerHTML = captionArray[count];
      var middleDiv = document.createElement("div");
      middleDiv.setAttribute("class", "middle");
      var textDiv = document.createElement("div");
      textDiv.setAttribute("class", "text");
      textDiv.innerHTML = descriptionArray[count];
      count = count + 1;
      middleDiv.appendChild(textDiv);
      column.appendChild(img);
      column.appendChild(figCaption);
      column.appendChild(middleDiv);
      row.appendChild(column);
    }
    ul.appendChild(row);
  }
}
imagesGallery();

