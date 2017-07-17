<template>
    <div class="navbar-container">
        <nav class="nav">
            <div class="nav-left">
                <router-link to="/" class="nav-item">
                    <span class="icon">
                        <i class="fa fa-home"></i>
                    </span>
                </router-link>
            </div>
            <div class="nav-center">
            </div>
            <span class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div class="nav-right nav-menu">
                <router-link to="/about" class="nav-item">
                    About
                </router-link>
                <router-link to="/bag" class="nav-item">
                    Bag
                </router-link>
                <div class="nav-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <a class="button" href="http://www.github.com/setholito/charcoal">
                                <span class="icon">
                                    <i class="fa fa-github"></i>
                                </span>
                                <span>Fork</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script></script>

<style lang="scss"></style>