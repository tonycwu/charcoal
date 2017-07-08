<template>
    <nav class="nav">
        <div class="nav-left">
            <router-link to="/" class="nav-item">
                <i class="fa fa-home"></i>
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
</template>