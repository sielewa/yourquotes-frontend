<template>
    <div class="quotation_container">
        <div class="quotation_text">
            <span class="quo"> {{ text }}</span>
        </div>
        <button v-if="isAuthor" type="button" class="btn btn-danger" @click="deleteQuote">Delete</button>
        <div class="container_bottom">
            <span class="author"> Author: {{ author }} </span>
            <div class="date_container">
                <span class="date"> Created: {{ date }} | {{ time }} </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Quotation',

    props: {
        isAuthor: {
            type: Boolean
        },
        text: {
            type: String
        },
        author: {
            type: String
        },
        date: {
            type: String
        },
        time: {
            type: String
        },
        quoteId: {
            type: Number | String
        }
    },

    methods: {
        async deleteQuote() {
            try{
                const payload = this.quoteId
                console.log(payload)
                await this.$store.dispatch('quotation/deleteQuote', payload)
                window.location.reload()
            } catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss">
    .quotation_container{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin: 10px 10px;
        background-color: $secondary;
        width: 300px;
        height: 100px;

        & > .quotation_text{
            width: 100%;
            margin: 0 auto;
        }

        & > .container_bottom{
            display: flex;
            justify-content: space-between;

        }

    }
</style>