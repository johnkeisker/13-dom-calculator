(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

document.querySelector("#add").addEventListener("click", function () {
  var firstNumber = document.querySelector("#numberOne").value;
  var secondNumber = document.querySelector("#numberTwo").value;
  // add numbers together
  var total = Number(firstNumber) + Number(secondNumber);
  // change answer to be the result
  document.querySelector("#answer").innerHTML = total;
});

document.querySelector("#subtract").addEventListener("click", function () {
  var firstNumber = document.querySelector("#numberOne").value;
  var secondNumber = document.querySelector("#numberTwo").value;
  // add numbers together
  var total = Number(firstNumber) - Number(secondNumber);
  // change answer to be the result
  document.querySelector("#answer").innerHTML = total;
});

document.querySelector("#multiply").addEventListener("click", function () {
  var firstNumber = document.querySelector("#numberOne").value;
  var secondNumber = document.querySelector("#numberTwo").value;
  // add numbers together
  var total = Number(firstNumber) * Number(secondNumber);
  // change answer to be the result
  document.querySelector("#answer").innerHTML = total;
});

document.querySelector("#divide").addEventListener("click", function () {
  var firstNumber = document.querySelector("#numberOne").value;
  var secondNumber = document.querySelector("#numberTwo").value;
  // add numbers together
  var total = Number(firstNumber) / Number(secondNumber);
  // change answer to be the result
  document.querySelector("#answer").innerHTML = total;
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQSxTQUNHLGFBREgsQ0FDaUIsTUFEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixZQUFXO0FBQ3BDLE1BQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FEa0I7QUFFcEMsTUFBSSxlQUFlLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQzs7QUFGaUIsTUFJaEMsUUFBUSxPQUFPLFdBQVAsSUFBc0IsT0FBTyxZQUFQLENBQXRCOztBQUp3QixVQU1wQyxDQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBOEMsS0FBOUMsQ0FOb0M7Q0FBWCxDQUY3Qjs7QUFXQSxTQUNHLGFBREgsQ0FDaUIsV0FEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixZQUFXO0FBQ3BDLE1BQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FEa0I7QUFFcEMsTUFBSSxlQUFlLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQzs7QUFGaUIsTUFJaEMsUUFBUSxPQUFPLFdBQVAsSUFBc0IsT0FBTyxZQUFQLENBQXRCOztBQUp3QixVQU1wQyxDQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBOEMsS0FBOUMsQ0FOb0M7Q0FBWCxDQUY3Qjs7QUFXQSxTQUNHLGFBREgsQ0FDaUIsV0FEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixZQUFXO0FBQ3BDLE1BQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FEa0I7QUFFcEMsTUFBSSxlQUFlLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQzs7QUFGaUIsTUFJaEMsUUFBUSxPQUFPLFdBQVAsSUFBc0IsT0FBTyxZQUFQLENBQXRCOztBQUp3QixVQU1wQyxDQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBOEMsS0FBOUMsQ0FOb0M7Q0FBWCxDQUY3Qjs7QUFXQSxTQUNHLGFBREgsQ0FDaUIsU0FEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixZQUFXO0FBQ3BDLE1BQUksY0FBYyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FEa0I7QUFFcEMsTUFBSSxlQUFlLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQzs7QUFGaUIsTUFJaEMsUUFBUSxPQUFPLFdBQVAsSUFBc0IsT0FBTyxZQUFQLENBQXRCOztBQUp3QixVQU1wQyxDQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBOEMsS0FBOUMsQ0FOb0M7Q0FBWCxDQUY3QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZpcnN0TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJPbmVcIikudmFsdWU7XG4gICAgdmFyIHNlY29uZE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyVHdvXCIpLnZhbHVlO1xuICAgIC8vIGFkZCBudW1iZXJzIHRvZ2V0aGVyXG4gICAgdmFyIHRvdGFsID0gTnVtYmVyKGZpcnN0TnVtYmVyKSArIE51bWJlcihzZWNvbmROdW1iZXIpO1xuICAgIC8vIGNoYW5nZSBhbnN3ZXIgdG8gYmUgdGhlIHJlc3VsdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYW5zd2VyXCIpLmlubmVySFRNTCA9IHRvdGFsO1xuICB9KTtcblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VidHJhY3RcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmlyc3ROdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlck9uZVwiKS52YWx1ZTtcbiAgICB2YXIgc2Vjb25kTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJUd29cIikudmFsdWU7XG4gICAgLy8gYWRkIG51bWJlcnMgdG9nZXRoZXJcbiAgICB2YXIgdG90YWwgPSBOdW1iZXIoZmlyc3ROdW1iZXIpIC0gTnVtYmVyKHNlY29uZE51bWJlcik7XG4gICAgLy8gY2hhbmdlIGFuc3dlciB0byBiZSB0aGUgcmVzdWx0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbnN3ZXJcIikuaW5uZXJIVE1MID0gdG90YWw7XG4gIH0pO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNtdWx0aXBseVwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBmaXJzdE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyT25lXCIpLnZhbHVlO1xuICAgIHZhciBzZWNvbmROdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlclR3b1wiKS52YWx1ZTtcbiAgICAvLyBhZGQgbnVtYmVycyB0b2dldGhlclxuICAgIHZhciB0b3RhbCA9IE51bWJlcihmaXJzdE51bWJlcikgKiBOdW1iZXIoc2Vjb25kTnVtYmVyKTtcbiAgICAvLyBjaGFuZ2UgYW5zd2VyIHRvIGJlIHRoZSByZXN1bHRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fuc3dlclwiKS5pbm5lckhUTUwgPSB0b3RhbDtcbiAgfSk7XG5cbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI2RpdmlkZVwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBmaXJzdE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyT25lXCIpLnZhbHVlO1xuICAgIHZhciBzZWNvbmROdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlclR3b1wiKS52YWx1ZTtcbiAgICAvLyBhZGQgbnVtYmVycyB0b2dldGhlclxuICAgIHZhciB0b3RhbCA9IE51bWJlcihmaXJzdE51bWJlcikgLyBOdW1iZXIoc2Vjb25kTnVtYmVyKTtcbiAgICAvLyBjaGFuZ2UgYW5zd2VyIHRvIGJlIHRoZSByZXN1bHRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fuc3dlclwiKS5pbm5lckhUTUwgPSB0b3RhbDtcbiAgfSk7XG4iXX0=
