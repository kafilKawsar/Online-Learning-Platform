//============= include-html ====================
// $(function () {
//   $("+[include-html]").each(function () {
//     var t = $(this).attr("include-html"),
//       u = this.id;
//     jQuery.ajax({
//       url: t,
//       success: function (t) {
//         $("#" + u).html(t)
//       },
//       error: function (n, c, i) {
//         var s = n.status + ": " + n.statusText;
//         $("#" + u).html(t + "-" + s)
//       }
//     })
//   })
// });


document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll("[include-html]");
    elements.forEach(function (element) {
      var url = element.getAttribute("include-html");
      var id = element.id;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.getElementById(id).innerHTML = xhr.responseText;
          } else {
            var statusText = xhr.status + ": " + xhr.statusText;
            document.getElementById(id).innerHTML = url + " - " + statusText;
          }
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    });
  });
  



  