<template>
    <div class="container">
        <UserInfo :username="username" :quotations_count="quotations_count"/>
        <UserLastQuotations :last_quotations="last_quotations"/>
    </div>
</template>

<script> 
    export default{
        name: 'UserContainer',

        props:{
            username: {
                type: String
            },
            quotations_count:{
                type: Number
            },
            last_quotations: {}
        }

    }
</script>