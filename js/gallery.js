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

const modalDesc = [
  "The trees get covered with snow on a peak winter day.",
  "The park is hard to maintain on snowy days and the leaves turn brown and dull.",
  "The snow takes over the bridge. It look beautiful but wear correct shoes!",
  "You can go hiking on these trails if you have the right equipment. Contact our center to give you a checklist!",
  "You can visit the shops to have fun Christmas shopping with and for your friends and family. We keep all kinds of candies and goodies",
  "Our cabins are equipped with everything you need on a cold winter night. You can enjoy these views as you make yourself comfortable in our cabins",
  "It’s not always cloudy and the sun does shine here! When you walk in the park, your view of the trees will remain unmatched!",
  "This breathtaking view of the lake can be seen from your cabin. It is frozen over but the receptionist will give you a list of do’s and don’ts",
  "Along with some hiking trails, we have our streets that get cleaned up regularly for you to enjoy your drives",
  "Your kids can enjoy at the playhouse made just for some winter activities. It has something to do for adults as well as kids!",
];

function imagesGallery() {
  var count = 0;
  for (var i = 0; i <= 4; i++) {
    var ul = document.getElementById("gallery");
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    for (var j = 1; j <= 2; j++) {
      var column = document.createElement("div");
      column.setAttribute("class", "column imageBox");

      var imageCount = count + 1;
      var img = document.createElement("img");
      img.src = "imagesWeek4/" + imageCount + ".jpeg";
      img.setAttribute("class", "photo");

      var figCaption = document.createElement("figcaption");
      figCaption.innerHTML = captionArray[count];

      var middleDiv = document.createElement("div");
      middleDiv.setAttribute("id", imageCount);
      middleDiv.setAttribute("class", "middle");
      middleDiv.setAttribute("onclick", "openModal(" + count + ")");

      var textDiv = document.createElement("div");
      textDiv.setAttribute("id", "text");
      textDiv.innerHTML = descriptionArray[count];
      count = count + 1;
      middleDiv.appendChild(textDiv);
      column.appendChild(img);
      column.appendChild(figCaption);
      column.appendChild(middleDiv);
      row.appendChild(column);

      // //   var openDesc = "<div id='desc' onClick = 'showInfo(";
      //   var openDescClose = ")'>";
      //   var closeDesc = "</div>";
    }

    ul.appendChild(row);
  }
}
imagesGallery();

var closeInfoText = "Click here to close";
var closeInfo = document.getElementById("closeInfo");
closeInfo.addEventListener("click", hideInfo);

function hideInfo() {
  document.getElementById("modal").style.visibility = "hidden";
}

function openModal(param) {
  document.getElementById("modal").style.visibility = "visible";
  document.getElementById("headingModal").innerHTML = captionArray[param];
  document.getElementById("bodyModal").innerHTML = modalDesc[param];
  document.getElementById("closeInfo").innerHTML = closeInfoText;
}

