<template>
  <div class="quote_container">
    <div class="top_container">
        <div class="author_container">
            <span> <NuxtLink :to="`/users/${author}`"> {{ author }} </NuxtLink> </span>
        </div>
        <div class="del">
            <font-awesome-icon v-if="isAuthor" icon="x" @click="deleteQuote"/>
        </div>
    </div>
    <div class="quotation_text">
        <span> "{{ text }}" </span>
    </div>
    <div class="date_container">
        <span> {{ time }} | {{ date }} </span>
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
    .quote_container {
        display: flex;
        flex-direction: column;
        margin: 20px 10px;
        max-width: 700px;
        min-width: 700px;
        min-height: 120px;

        & > .top_container {
            display: flex;
            justify-content: space-between;

            & > .author_container {
                font-size: 2.5rem;
                padding-bottom: 5px;
                padding-left: 20px;

                & > span a{
                    color: black;
                    text-decoration: none;
                    display: inline-block;
                    position: relative;

                    &:after {    
                        background: none repeat scroll 0 0 transparent;
                        bottom: 0;
                        content: "";
                        display: block;
                        height: 2px;
                        left: 50%;
                        position: absolute;
                        background: black;
                        transition: width 0.3s ease 0s, left 0.3s ease 0s;
                        width: 0;
                    }

                    &:hover:after { 
                    width: 100%; 
                    left: 0; 
                    }
                }

                    
            }

            & > .del {
                padding-top: 10px;
                padding-right: 10px;
                & > svg { 
                    font-size: 2.5rem;
                    color: red;
                    background: none;
                }
                & :hover{
                    color: #961B1B;
                    cursor: pointer;
                }
            }
        }

        & > .quotation_text {
            background-color: $secondary;
            font-family: 'Dancing Script', cursive;
            width: 100%;
            padding: 10px;
            font-size: 4rem;
            text-align: center;
            border-radius: 30px;
        }

        & > .date_container{
            font-size: 1.5rem;
            display: flex;
            justify-content: right;
            padding-top: 5px;
            padding-right: 20px;
        }

        @media (max-width: $screen-md) {
            min-width: 550px;

            .top_container > .author_container {
                font-size: 2rem;
            }

            .top_container > .del > svg { 
                font-size: 2rem;
            }

            .quotation_text {
                font-size: 3rem;
            }

            .date_container {
                font-size: 1.3rem;
            }
        }

        @media (max-width: $screen-sm) {
            min-width: 300px;

            .quotation_text {
                font-size: 2.5rem;
            }

            .top_container > .author_container {
                font-size: 1.5rem;
            }

            .top_container > .del > svg { 
                font-size: 1.5rem;
            }

            .date_container {
                font-size: 1.1rem;
            }
        }

    }
</style>