<template>
  <div class="slideshow-container">
    <div class="slides-tray">
      <transition name="fade">
        <slot></slot>
      </transition>
    </div>
    <a class="btn prev" @click="prevSlide">Prev</a>
    <a class="btn next" @click="nextSlide">Next</a>
    <br>
    Viewing: {{ currentSlide + 1 }} of {{ numberOfSlides }}
    <hr>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        currentSlide: 0,
      };
    },
    computed: {
      numberOfSlides: function() {
        return 5;
      }
    },
    methods: {
      prevSlide: function() {
        if (this.currentSlide <= 0) {
          this.currentSlide = this.numberOfSlides - 1;
        } else {
          this.currentSlide -= 1;
        }
      },
      nextSlide: function() {
        if (this.currentSlide < this.numberOfSlides - 1) {
          this.currentSlide += 1;
        } else {
          this.currentSlide = 0;
        }
      }
    }
  }
</script>