<template>
  <div>
    <v-container>
      <h2 class="mb-5">{{job.company_name}}</h2>
      <p>{{job.job_title}}</p>
      <p>{{job.job_company_email}}</p>

    </v-container>
  </div>
</template>

<script>
import {apiService} from "@/common/api.service";

export default {
  name: "Job",
  props:{
    id:{
      type:Number,
      required:true
    }
  },
  data(){
    return{
      job:{}
    }
  },
  methods:{
    setPageTitle(title){
      document.title =title
    },
    getJobData(){
      let endpoint =`/api/jobs/${this.id}`;
      console.log(endpoint)
      apiService(endpoint).then(data =>{
        this.job =data;
        this.setPageTitle(data.company_name)
      })
    }
  },
  created() {
    this.getJobData()
  }

}
</script>

<style scoped>

</style>