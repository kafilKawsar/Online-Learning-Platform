
// navber-start -------
document.querySelector("body").setAttribute("class", "");

      document.addEventListener("DOMContentLoaded", function () {
        document
          .getElementById("closeMenuIcon")
          .addEventListener("click", openCloseMenu);
        document
          .getElementById("openMenuIcon")
          .addEventListener("click", openCloseMenu);
        document.querySelector("body").setAttribute("class", "");
      });

      const openMenu = {
        value: false,
      };

      const openCloseMenu = () => {
        openMenu.value = !openMenu.value;
        if (openMenu.value) {
          document.getElementById("mobile-content").classList.toggle("block");
          document.getElementById("mobile-content").classList.toggle("active");
          if (
            document
              .getElementById("mobile-content")
              .classList.contains("active")
          ) {
            document
              .querySelector("body")
              .setAttribute("class", "overflow-hidden");
          } else {
            document.querySelector("body").setAttribute("class", "");
          }
        } else {
          document.getElementById("mobile-content").classList.toggle("block");
          document.getElementById("mobile-content").classList.toggle("active");
          document.querySelector("body").setAttribute("class", "");
        }
      };

      // navber end-------------

      
      










     
      






      
