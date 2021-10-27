<template>

  <div class="o-block-hero">
    <div class="container">
      <div class="row">
        <h1>{{ title }}</h1>
      </div>
    </div>

  </div>
</template>


<script>

export default {
  data () {
    return {
      title: 'HazeGifted',
      description: '',

    }
  }

}

</script>



<style lang="scss" scoped>

// IMPORTS ++++++++++++++++++++++++++++++++++++++++++++++++

@import ".base/index";

// END: IMPORTS +++++++++++++++++++++++++++++++++++++++++++

// BLOCK STYLE ++++++++++++++++++++++++++++++++++++++++++++
.o-block-hero {

  // A.1. GLOBAL STYLE ------------------------------------

  // A.1. END ---------------------------------------------

  // B. MEDIA QUERIES -------------------------------------

  // B.1. GRACEFUL DEGRADATION -------------


  // B.1. END ------------------------------

  // B.2. PROGRESSIVE ENHANCEMENT ----------
  // 768px up
  @media ($sm-up) {  }

  // 991px up
  @media ($md-up) {  }

  // 1200px up
  @media ($lg-up) {  }

  // 1440px up
  @media ($xlg-up) {  }

  // B.2. END ------------------------------

  // B. END -----------------------------------------------

}
// END: BLOCK STYLE +++++++++++++++++++++++++++++++++++++++

</style>

