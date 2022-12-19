// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-Extra/sw.js", {
    scope: "/ICS2O-Unit6-04-Extra/",
  })
}

function start() {
  const params = new URLSearchParams(document.location.search)
  const fahrenheit = params.get("f")

  document.getElementById("fahrenheit").innerHTML =
    "The temperature in fahrenheit is: " + fahrenheit + "℉."

  const celsius = ((fahrenheit - 32) * 5) / 9
  document.getElementById("celsius").innerHTML =
    "The temperature in celsius is: " + celsius.toFixed(2) + "℃."
}
