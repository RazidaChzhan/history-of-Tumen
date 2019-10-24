var custom_values = [1944, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2019];

$(".js-range-slider").ionRangeSlider({
    type: "double",
          grid: true,
          grid_num:75,
          min: 1944,
          max: 2019,        
          skin: "big",
          step: 1,
          prettiy: false,
          values: custom_values
  });