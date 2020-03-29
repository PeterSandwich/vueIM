<template>
    <div class="bt_lod_container">
        <div class="bt_loading wave">
        连 接 中 ...
        </div>
        <div class="loader">
                <ul class="hexagon-container">
                    <li class="hexagon hex_1"></li>
                    <li class="hexagon hex_2"></li>
                    <li class="hexagon hex_3"></li>
                    <li class="hexagon hex_4"></li>
                    <li class="hexagon hex_5"></li>
                    <li class="hexagon hex_6"></li>
                    <li class="hexagon hex_7"></li>
                </ul>
                 
            </div>
             
    </div>
</template>

<script>
export default {
    name: 'butif_loading'
}
</script>
<style>
.bt_lod_container{
    background: #141414;
  width: 100%;
  height: 100%;
}


.bt_loading {
  text-transform: uppercase;
  font-family: 'Cabin Condensed', sans-serif;
  font-weight: bold;
  font-size: 80pt;
  text-align: center;
  height: 120px;
  line-height: 110px;
  vertical-align: bottom;
  position: absolute;
  left: 0;
  right: 0;
  top: 300px;
  bottom: 0;
  display: block;
}



.ff {
  position: absolute;
  font-size: 12pt;
  top: -20px;
  color: white;
  line-height: 12pt;
}



@keyframes wave-animation {
  0% {
    background-position: 0 bottom;
  }
  100% {
    background-position: 200px bottom;
  }
}
@keyframes loading-animation {
  0% {
    background-size: 200px 160px;
  }
  100% {
    background-size: 200px 0px;
  }
}
.wave {
  background-image: url("https://images.unsplash.com/flagged/photo-1563248101-a975e9a18cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
  background-image: url("https://images.unsplash.com/photo-1530219280008-3d9e73af37b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
  -moz-background-clip: text;
  -o-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0px 0px rgba(255, 255, 255, 0.06);
  animation: wave-animation 1.5s infinite linear, loading-animation 6s infinite linear alternate;
  background-size: 200px 100px;
  background-repeat: repeat-x;
  opacity: 1;
}

.wave-2 {
  -moz-background-clip: initial;
  -o-background-clip: initial;
  -webkit-background-clip: initial;
  background-clip: initial;
  display: inline-block;
}




.loader {
  position: fixed;
  top: 20%;
  left: 10%;
  width: 160px;
  height: 160px;
  margin: -80px 0px 0px -80px;
  background-color: #141414;
  border-radius: 50%;
  border: 2px solid #424242;
}
.h_lod_container_text{
    width: 100%;
    position: fixed;
    top: 52%;
    font-size: 18px;
    color: rgb(218, 216, 216);
}
.loader:before {
  content: '';
  width: 160px;
  height: 160px;
  display: block;
  position: absolute;
  border: 2px solid rgb(236, 236, 233);
  border-radius: 50%;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  clip: rect(0px, 35px, 35px, 0px);
  z-index: 10;
  animation: rotate infinite;
  animation-duration: 3s;
  animation-timing-function: linear;
}
.loader:after {
  content: '';
  width: 160px;
  height: 160px;
  display: block;
  position: absolute;
  border: 2px solid #c1bebb;
  border-radius: 50%;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  clip: rect(0px, 164px, 150px, 0px);
  z-index: 9;
  animation: rotate2 3s linear infinite;
}

.hexagon-container {
  position: relative;
  top: 33px;
  left: 41px;
  border-radius: 50%;
}

.hexagon {
  position: absolute;
  width: 40px;
  height: 23px;
  background-color: #556C82;
  list-style:none;
}
.hexagon:before {
  content: "";
  position: absolute;
  top: -11px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 11.5px solid #556C82;
}
.hexagon:after {
  content: "";
  position: absolute;
  top: 23px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 11.5px solid #556C82;
}

.hexagon.hex_1 {
  top: 0px;
  left: 0px;
  animation: Animasearch 3s ease-in-out infinite;
  animation-delay: 0.2142857143s;
}

.hexagon.hex_2 {
  top: 0px;
  left: 42px;
  animation: Animasearch 3s ease-in-out infinite;
  animation-delay: 0.4285714286s;
}

.hexagon.hex_3 {
  top: 36px;
  left: 63px;
  animation: Animasearch 3s ease-in-out infinite;
  animation-delay: 0.6428571429s;
}

.hexagon.hex_4 {
  top: 72px;
  left: 42px;
  animation: Animasearch 3s ease-in-out infinite;
  animation-delay: 0.8571428571s;
}

.hexagon.hex_5 {
  top: 72px;
  left: 0px;
  animation: Animasearch 3s ease-in-out infinite;
  animation-delay: 1.0714285714s;
}

.hexagon.hex_6 {
  top: 36px;
  left: -21px;
  animation: Animasearch 3s ease-in-out infinite;
  animation-delay: 1.2857142857s;
}

.hexagon.hex_7 {
  top: 36px;
  left: 21px;
  animation: Animasearch 3s ease-in-out infinite;
  animation-delay: 1.5s;
}

@keyframes Animasearch {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  15%,
  50% {
    transform: scale(0.5);
    opacity: 0;
  }
  65% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
    clip: rect(0px, 35px, 35px, 0px);
  }
  50% {
    clip: rect(0px, 40px, 40px, 0px);
  }
  100% {
    transform: rotate(360deg);
    clip: rect(0px, 35px, 35px, 0px);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotate(0deg);
    clip: rect(0px, 164px, 150px, 0px);
  }
  50% {
    clip: rect(0px, 164px, 0px, 0px);
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
    clip: rect(0px, 164px, 150px, 0px);
  }
}
@keyframes rotate3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>