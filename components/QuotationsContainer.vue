<template>
    <div class="content">
        <Quotation 
            id="quotation"
            v-for="quotation in quotationsData"
            :key="quotation.id"
            :text="quotation.text"
            :author="quotation.username"
            :date="quotation.date"
            :time="quotation.time"
            :isAuthor="quotation.isAuthor"
            :quoteId="quotation.id"
        />
    </div>
</template>

<script>
export default {
    name: "QuotationsContainer",
    props: {
        quotations: {}
    },
    
    data: () => ({
        quotationsData: null
    }),

    created(){
        this.quotationsData = this.quotations
        for (const quotation of this.quotationsData){
            let dateComponents = quotation.created_at.split('T')
            let date = dateComponents[0]
            let time = dateComponents[1].split('.')[0]
            quotation.date = date
            quotation.time = time
            quotation.isAuthor = false

            if (quotation.username === this.$store.getters['users/getUser']){
                quotation.isAuthor = true
            }
        }  
    }
}
</script>


<style lang="scss" scoped>

.content{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>