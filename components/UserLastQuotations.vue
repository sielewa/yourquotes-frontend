<template>
    <div class="user_last_quotations">
        <QuotationsContainer :quotations="last_quotations"/>
    </div>
</template>

<script>
    export default{
        name: 'UserLastQuotations',

        props:{
            last_quotations: {}
        }

    }
</script>