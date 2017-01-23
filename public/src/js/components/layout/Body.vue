<template>

  <div class="col-xs-12">

    <div class="row">
      <div class="col-xs-12 col-md-6">
        <h5>
          Vue.js
        </h5>
        <h6>
          A starter for any <ch-link url="http://www.vuejs.org">Vue.js project</ch-link>. Components are pre-built. 
        </h6>
        <h5>
          Gulp.js
        </h5>
        <h6>
          <ch-link url="http://gulpjs.com/">Gulp</ch-link> preprocesses and watches files for changes.
        </h6>
      </div>
      <div class="col-xs-12 col-md-6">
        <pre>
          <code>
            npm install  
          </code>
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-6">
        <h5>
          Hologram (Installed Separately)
        </h5>
        <h6>
          <ch-link url="https://trulia.github.io/hologram/">Hologram</ch-link> builds out style guide based on comments with in <ch-link url="http://sass-lang.com/">SASS</ch-link> files.
        </h6>
      </div>
      <div class="col-xs-12 col-md-6">
        <pre>
          <code>
            gem install hologram
          </code>
        </pre>  
      </div>
    </div>

    <h5>
      Style Guide
    </h5>
    <h6>
      Project is currently under development...
    </h6>
    <ch-link 
      url="style-guide/docs/index.html"
      button-bool="true">
      Take Me There &nbsp;&#10095;
    </ch-link>

    <hr>

    <h3 id="typography">
      Typography
    </h3>
    <h1>Juicy steaks marinated in BBQ sauce.</h1>
    <h2>Juicy steaks marinated in BBQ sauce.</h2>
    <h3>Juicy steaks marinated in BBQ sauce.</h3>
    <h4>Juicy steaks marinated in BBQ sauce.</h4>
    <h5>Juicy steaks marinated in BBQ sauce.</h5>
    <h6>Juicy steaks marinated in BBQ sauce.</h6>

    <hr>

    <div class="row">
      <div class="col-xs-12 col-md-6">
        <h3 id="links">
          Links
        </h3>
        <ch-link 
          url="http://www.vuejs.org/">
          I'm a link to Vue.js
        </ch-link>
        <br><br>
        <ch-link 
          url="http://www.vuejs.org/"
          button-bool="true">
          I'm a link to Vue.js
        </ch-link>
        <br>
        <ch-link 
          url="http://www.vuejs.org/"
          button-bool="true"
          class="btn-red">
          I'm a link to Vue.js
        </ch-link>        
      </div>
      <div class="col-xs-12 col-md-6">
        <h3 id="buttons">
          Buttons
        </h3>
        <ch-button 
          v-for="color in ['btn-green', 'btn-yellow', 'btn-orange', 'btn-red','btn-purple', 'btn-blue']"
          :class="color">
          {{color}}
        </ch-button>
      </div>
    </div>

    <hr>
    
    <h3 id="cards">
      Cards
    </h3>
    <div class="row">
      <div class="col-xs-12 col-sm-4" v-for="i in 3">
        <ch-card
          card-img-url="http://fillmurray.com/g/800/400"
          card-title="I'm the title"
          card-content="Content added to card.">
        </ch-card>
      </div>
    </div>

    <hr>
    
    <h3 id="tabs">
      Tabs
    </h3>
    <ch-tabs>
      <ul class="tab-tray">
        <li
          :class="{active: tab === 1}" 
          @click="tab = 1">
          <a>
            Tab 1
          </a>
        </li>
        <li 
          :class="{active: tab === 2}" 
          @click="tab = 2">
          <a>
            Tab 2
          </a>
        </li>
        <li 
          :class="{active: tab === 3}" 
          @click="tab = 3">
          <a>
            Tab 3
          </a>
        </li>
      </ul>
      <div class="tab-content" :class="{ active: tab === 1}">
        <h5>Tab Content Title 1</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius itaque molestias quas voluptatum minima, quis aliquam pariatur aspernatur maxime numquam, deserunt porro. Inventore beatae quos autem atque ab ad expedita!
        </p>
      </div>
      <div class="tab-content" :class="{ active: tab === 2}">
        <h5>Tab Content Title 2</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident obcaecati, quas! A, unde amet laborum at illum, alias odit incidunt quam eius quod cum itaque consectetur! Culpa, doloribus, fugit! Officia!
        </p>
      </div>
      <div class="tab-content" :class="{ active: tab === 3}">
        <h5>Tab Content Title 3</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quasi, minima nemo! Repellat fugiat rem ullam, vero unde soluta consequatur eaque praesentium asperiores, amet ipsum consequuntur molestias non alias voluptatum!
        </p>
      </div>
    </ch-tabs>

    <hr>
    
    <h3 id="lists">
      Lists
    </h3>
    <div class="row">
      <div class="col-xs-12 col-sm-4" v-for="i in 3">
        <ul class="list">
          <li class="list-item" v-for="item in ['Apple','Bananas','Carrots','Dates']">{{item}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        tab: 1
      }
    }
  };
</script>