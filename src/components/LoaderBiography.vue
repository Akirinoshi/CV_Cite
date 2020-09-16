<template >
  <body>
  <div class='door'>
    <div class='face'>
      <div class='right'></div>
    </div>
  </div>
  <div class='door'>
    <div class='face'>
      <div class='right'></div>
    </div>
  </div>
  <div class='door'>
    <div class='face'>
      <div class='right'></div>
    </div>
  </div>
  <div class='door'>
    <div class='face'>
      <div class='right'></div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none">
    <defs>
      <filter id="squiggly-0">
        <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="0"/>
        <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="2" />
      </filter>
      <filter id="squiggly-1">
        <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="1"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
      </filter>
      <filter id="squiggly-2">
        <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="2"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
      </filter>
      <filter id="squiggly-3">
        <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="3"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
      </filter>
      <filter id="squiggly-4">
        <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="4"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
      </filter>
    </defs>
  </svg>
  </body>
</template>

<script>

export default {
  name: "LoaderBiography"
}
</script>

<style scoped lang="scss">

body {
  display: flex;
  width: 100%;
  height: 100vh;
  background: #24252A;
  perspective: 100vw;
  overflow:hidden;
  animation: squiggly-anim 0.4s infinite;
  -webkit-animation: squiggly-anim 0.2s infinite;
  @-webkit-keyframes squiggly-anim {
    0% {
      -webkit-filter: url("#squiggly-0");
      filter: url("#squiggly-0");
    }
    25% {
      -webkit-filter: url("#squiggly-1");
      filter: url("#squiggly-1");
    }
    50% {
      -webkit-filter: url("#squiggly-2");
      filter: url("#squiggly-2");
    }
    75% {
      -webkit-filter: url("#squiggly-3");
      filter: url("#squiggly-3");
    }
    100% {
      -webkit-filter: url("#squiggly-4");
      filter: url("#squiggly-4");
    }
  }

  @keyframes squiggly-anim {
    0% {
      -webkit-filter: url("#squiggly-0");
      filter: url("#squiggly-0");
    }
    25% {
      -webkit-filter: url("#squiggly-1");
      filter: url("#squiggly-1");
    }
    50% {
      -webkit-filter: url("#squiggly-2");
      filter: url("#squiggly-2");
    }
    75% {
      -webkit-filter: url("#squiggly-3");
      filter: url("#squiggly-3");
    }
    100% {
      -webkit-filter: url("#squiggly-4");
      filter: url("#squiggly-4");
    }
  }
  .door {
    position: absolute;
    width: 100px;
    height: 200px;
    left: calc(50% - 50px);
    top: calc(50% - 100px);
    box-shadow: inset 0 -5px 0 0 #24252A, inset 0 0 0 1px #fff, 0 5px 0 0 #24252A,
    0 0 0 100vw #24252A;
    perspective: 500px;
    transform-style: preserve-3d;
    animation: scaling 5s linear infinite;
    transform: translateZ(-1px);
    &:nth-of-type(3) {
      animation-delay: 1.25s;
      .face {
        animation-delay: 1.25s;
      }
    }
    &:nth-of-type(2) {
      animation-delay: 2.5s;
      .face {
        animation-delay: 2.5s;
      }
    }
    &:nth-of-type(1) {
      animation-delay: 3.75s;
      .face {
        animation-delay: 3.75s;
      }
    }
    @for $i from 1 through 6 {
      &:nth-of-type(#{$i}) {
        @keyframes scaling {
          0% {
            transform: translateZ(0vw);
            opacity: 1;
            z-index: 0;
          }
          50% {
            transform: translateZ(100vw);
            opacity: 1;
            z-index: 1;
          }
          95% {
            transform: translateZ(200vw);
            opacity: 1;
            z-index: 2;
          }
          100% {
            transform: translateZ(300vw);
            opacity: 0;
            z-index: 3;
          }
        }
      }
    }
    &:after {
      content: "";
      position: absolute;
      width: 200vw;
      height: 100vw;
      left: -50vw;
      bottom: 5px;
      box-shadow: 0 1px 0 0 #fff;
      z-index: -1;
    }
    .face {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: calc(100% - 4px);
      transform-style: preserve-3d;
      box-shadow: inset 0 0 0 1px #fff;
      background: #24252A;
      transform-origin: left;
      animation: swing 5s ease-in-out infinite;
      &:before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        box-shadow: 0 0 0 1px #fff;
        border-radius: 100%;
        right: 10px;
        top: calc(50% - 5px);
        transform-style: preserve-3d;
        transform: translateZ(6px);
        backface-visibility: hidden;
        background: #24252A;
      }
      &:after {
        content: "";
        position: absolute;
        width: 4px;
        height: 2.5px;
        box-shadow: 0 0 0 1px #fff;
        opacity: 0.75;
        border-radius: 0;
        right: 10px;
        top: calc(50% - 1.25px);
        transform-style: preserve-3d;
        transform: translateZ(2.5px) rotateY(90deg);
        backface-visibility: hidden;
        background: #24252A;
      }
      @keyframes swing {
        15% {
          transform: rotateY(0deg);
        }
        50% {
          transform: rotateY(-125deg) translateZ(-2px);
        }
        75% {
          transform: rotateY(-125deg);
        }
        100% {
          transform: rotateY(-125deg);
        }
      }
      .right {
        position: absolute;
        width: 10%;
        background: #24252A;
        height: 100%;
        top: 0;
        right: -10%;
        transform-origin: left;
        transform: rotateY(90deg);
        box-shadow: inset 0 0 0 1px #fff;
      }
    }
  }
}
</style>