"use strict";var render=function(e){e.empty();var n=$('<section class="components"></section>');null==state.screen?n.append(UserRegister(function(n){return render(e)})):n.append(state.screen(function(n){return render(e)})),e.append(n)},state={screen:null};$(function(e){var n=$("#root");render(n)});