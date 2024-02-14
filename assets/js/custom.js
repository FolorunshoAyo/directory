(function ($) {
  "use strict";

  // $("#loading").fadeOut("slow");

  // ______________ LOADER
  $(window).on("load", function (e) {
    $("#global-loader").fadeOut("slow");
  });

  // ______________Cover Image
  $(".cover-image").each(function () {
    var attr = $(this).attr("data-bs-image-src");
    if (typeof attr !== typeof undefined && attr !== false) {
      $(this).css("background", "url(" + attr + ") center center");
    }
  });

  // ______________Active Class
  $(document).ready(function () {
    $(".horizontalMenu-list li a").each(function () {
      var pageUrl = window.location.href.split(/[?#]/)[0];
      if (this.href == pageUrl) {
        $(this).addClass("active");
        $(this).parent().addClass("active"); // add active to li of the current link
        $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
        $(this).parent().parent().prev().click(); // click the item to make it drop
      }
    });
  });

  // ______________ Back to Top
  $(window).on("scroll", function (e) {
    if ($(this).scrollTop() > 0) {
      $("#back-to-top").fadeIn("slow");
    } else {
      $("#back-to-top").fadeOut("slow");
    }
  });
  $("#back-to-top").on("click", function (e) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      0
    );
    return false;
  });

  //_______________Alphabet Smooth Scroll
  $("button[data-target^='alpha']").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("target")).offset().top,
      },
      0
    );
    return false;
  });

  //_____________Filter Options Activate
  $(".filter-overlapblackbg").on("click", function (e) {
    $(".horizontalMenucontainer").removeClass("filter-group-active");
  });
  $("#filter-btn").on("click", function (e) {
    $(".horizontalMenucontainer").addClass("filter-group-active");
  });

  // ______________Quantity-right-plus
  var quantitiy = 0;
  $(".quantity-right-plus").on("click", function (e) {
    e.preventDefault();
    var quantity = parseInt($("#quantity").val());
    $("#quantity").val(quantity + 1);
  });
  $(".quantity-left-minus").on("click", function (e) {
    e.preventDefault();
    var quantity = parseInt($("#quantity").val());
    if (quantity > 0) {
      $("#quantity").val(quantity - 1);
    }
  });

  // ______________Chart-circle
  if ($(".chart-circle").length) {
    $(".chart-circle").each(function () {
      let $this = $(this);
      $this.circleProgress({
        fill: {
          color: $this.attr("data-color"),
        },
        size: $this.height(),
        startAngle: (-Math.PI / 4) * 2,
        emptyFill: "#f9faff",
        lineCap: "",
      });
    });
  }
  const DIV_CARD = "div.card";

  // ___________TOOLTIP
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // __________POPOVER
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
  // By default, Bootstrap doesn't auto close popover after appearing in the page
  $(document).on("click", function (e) {
    $('[data-bs-toggle="popover"],[data-original-title]').each(function () {
      if (
        !$(this).is(e.target) &&
        $(this).has(e.target).length === 0 &&
        $(".popover").has(e.target).length === 0
      ) {
        (
          ($(this).popover("hide").data("bs.popover") || {}).inState || {}
        ).click = false; // fix for BS 3.3.6
      }
    });
  });

  // ______________Card Remove
  $('[data-bs-toggle="card-remove"]').on("click", function (e) {
    let $card = $(this).closest(DIV_CARD);
    $card.remove();
    e.preventDefault();
    return false;
  });

  // ______________Card Collapse
  $('[data-bs-toggle="card-collapse"]').on("click", function (e) {
    let $card = $(this).closest(DIV_CARD);
    $card.toggleClass("card-collapsed");
    e.preventDefault();
    return false;
  });

  // ______________Card Full Screen
  $('[data-bs-toggle="card-fullscreen"]').on("click", function (e) {
    let $card = $(this).closest(DIV_CARD);
    $card.toggleClass("card-fullscreen").removeClass("card-collapsed");
    e.preventDefault();
    return false;
  });
})(jQuery);

// ______________ Modal
$(document).ready(function () {
  $("#myModal").modal("show");
});

//____________For Iphone
if (navigator.userAgent.match(/like Mac OS X/i)) {
  let header = document.querySelector(".header-main");
  header.classList.add("header-absolute");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > header.offsetY + 60) {
      header.classList.add("header-stick");
    } else {
      header.classList.remove("header-stick");
    }
  });
}

// Map functionality
function loadGMap(e, t) {
  var a = document.getElementsByTagName("script");
  for (i = 0; i < a.length; i++)
    if (a[i].src.match(/maps.googleapis.com/)) return void window[e]();
  var o = document.createElement("script");
  (o.type = "text/javascript"),
    (o.async = !0),
    (o.defer = !0),
    (o.src =
      "https://maps.googleapis.com/maps/api/js?key=" + t + "&callback=" + e);
  t = document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(o, t);
}
var total_nav_width,
  marker,
  myLatlng,
  initMap,
  mapslidertop,
  map,
  initMapList,
  composeHtml,
  initMapListMobile,
  addthis_config,
  count,
  map_styles = [
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          hue: "#a1ced1",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f77776",
        },
        {
          lightness: 0,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8aead",
        },
        {
          lightness: 0,
        },
      ],
    },
    {
      featureType: "water",
      stylers: [
        {
          color: "#a7e2ef",
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

function COverlay(e, t, a) {
  (this.no_ = t),
    (this.latlng_ = e),
    (this.map_ = a),
    (this.div_ = null),
    this.setMap(a);
}

(map = null),
  (initMapList = function (e) {
    var a = new google.maps.InfoWindow({
      pixelOffset: new google.maps.Size(0, -45),
    });
    google.maps.event.addListener(a, "closeclick", function () {
      a.close();
    }),
      void 0 === e && (e = "companiesmap");
    var t = {
      zoom: $("#companiesmap").data("map-zoom"),
      center: new google.maps.LatLng(
        $("#companiesmap").data("map-ltd"),
        $("#companiesmap").data("map-lng")
      ),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: !1,
      fullscreenControl: !1,
      streetViewControl: !1,
      backgroundColor: "#F2F2F2",
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.TOP_LEFT,
      },
      styles: map_styles,
    };
    ((map = new google.maps.Map(document.getElementById(e), t)).markers =
      new Array()),
      (COverlay.prototype = new google.maps.OverlayView()),
      (COverlay.prototype.onAdd = function () {
        var e = this,
          t = document.createElement("div");
        (t.className = "gmap_marker"),
          (t.innerHTML = "<u>" + (this.no_ + 1) + "</u>"),
          (this.div_ = t),
          google.maps.event.addDomListener(t, "click", function () {
            map.setCenter(e.latlng_),
              a.setContent(composeHtml(e.no_)),
              a.setPosition(e.latlng_),
              a.open(map);
          }),
          this.getPanes().overlayMouseTarget.appendChild(t);
      }),
      (COverlay.prototype.draw = function () {
        var e = this.getProjection().fromLatLngToDivPixel(this.latlng_),
          t = this.div_;
        e &&
          ((t.style.left = e.x - 18 + "px"), (t.style.top = e.y - 44 + "px"));
      }),
      (COverlay.prototype.onRemove = function () {
        this.setMap(null),
          this.div_.parentNode.removeChild(this.div_),
          (this.div_ = null);
      }),
      (count = 1);
    $(".mapmarker").each(function (e, t) {
      0 == e &&
        (map.setCenter(
          new google.maps.LatLng($(this).data("ltd"), $(this).data("lng"))
        ),
        map.setZoom($("#companiesmap").data("map-zoom")));
      if (
        count <= Number($("#companiesmap").data("map-companies-count-per-page"))
      ) {
        e = new COverlay(
          new google.maps.LatLng($(this).data("ltd"), $(this).data("lng")),
          e,
          map
        );
        map.markers.push(e);
        count++;
      }
      $(this).click(function () {
        map.markers[Number($(this).data("key"))].div_.click();
        $(".horizontalMenucontainer").addClass("off-canvas-active");
      });
    });
  }),
  (composeHtml = function (e) {
    return `
	<div class="axg-img">
		<h4>${$("#company-" + e + " .business-title").html()}</h4>
		<img
			src="${$("#company-" + e + " .business-image").attr("src")}"
			alt="img"
			class="w-150 h100 mb-3 mt-2"
		/>
		<div>${$("#company-" + e + " .business-timings").html()}</div>
		<h6 class="text-dark font-weight-normal mb-3 item-card2-desc">
			${$("#company-" + e + " .business-contact").html()}
		</h6>
		<a href="${$("#company-" + e + " .business-direction").attr(
      "href"
    )}" class="btn btn-sm btn-secondary btn-pill">
			Get Directions
		</a>
	</div>`;
  });

//___________Companies map activate
$("#companiesmap").removeClass("gm_slider"),
  loadGMap("initMapList", $("#companiesmap").data("map-key"));

//_____________Filter Options Activate
$(".off-canvas-overlayblackbg").on("click", function (e) {
  $(".horizontalMenucontainer").removeClass("off-canvas-active");
});

//_____________FIlter search function
$(document).ready(function () {
  $("[data-filter]").each(function () {
    var el = $(this);
    var targetCategoryGroups = $(`#${$(this).data("filter-list")} .category-group-container`);

    el.on("keyup", function () {
      var searchText = el.val().toLowerCase();

      targetCategoryGroups.each(function (index) {
        const searchTitle = $(this).find("h6");
        const searchLabels = $(this).find("label");

        searchLabels.each(function () {
          const labelText = $(this).text().toLowerCase();
          if (labelText.includes(searchText)) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });

        const invisibleLabelsCount = searchLabels.filter(function() {
          return $(this).css('display') === 'none';
        });

        // Hide titles if no labels under the category are visible
        if(invisibleLabelsCount.length === Number($(this).data("category-count"))){
          searchTitle.css({ display: 'none'});
        }else{
          searchTitle.css({ display: 'block'});
        }
      });
    });
  });
});
