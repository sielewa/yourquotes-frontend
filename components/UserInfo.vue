<template>
    <div class="user_info_container">
        <div class="username_container">
            <span class="username">{{ username }}</span>
        </div>
        <div class="user_stat">
            <span class="stats">
                Quotations: {{ quotations_count }}
            </span>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'UserInfo',

        props:{
            username:{
                type: String
            },
            quotations_count:{
                type: Number
            }
        },
    }
</script>

<style lang="scss">

    .user_info_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;

        & > .username_container {

            & > .username {
                font-size: 7rem;
            }
            
        }

        & > .user_stat {
            
            & > .stats {
                font-size: 3rem;
            }
        }
    }

</style>