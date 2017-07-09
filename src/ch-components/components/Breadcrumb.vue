<template>
    <nav class="breadcrumb">
        <ul>
            <li v-for="crumb in crumbList">
                <a>
                    {{ crumb }}
                </a>
            </li>
        </ul>
    </nav>
</template>