<template>
    <nav class="breadcrumb">
        <ul>
            <li v-for="crumb in crumbList">
                <a :href="crumb.link">
                    {{ crumb.title }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    
export default {
    props: ['crumbList']
}

</script>