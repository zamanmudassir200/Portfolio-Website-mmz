document.getElementById("icon").addEventListener("click", function (event) {
  let navbarIcons = document.querySelector(".showItems");
  if (navbarIcons.style.display === "block") {
    navbarIcons.style.display = "none";
  } else {
    navbarIcons.style.display = "block";
  }
  event.stopPropagation(); // Prevent the click event from propagating to the document body
});

document.body.addEventListener("click", function (event) {
  let navbarIcons = document.querySelector(".showItems");
  let icon = document.getElementById("icon");
  // Check if the click target is not the hamburger icon or the navbar icons themselves
  if (event.target !== icon && !navbarIcons.contains(event.target)) {
    navbarIcons.style.display = "none"; // Hide the navbar icons
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // You can add your form submission logic here, such as sending an email or storing data

    // Clear the form fields after submission (optional)
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
