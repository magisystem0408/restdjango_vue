<template>
  <div>
    <v-container>
      <h1>JOB OFFER</h1>
      <div v-for="job in jobs" :key="job.pk">
        <h2>
          <RouterLink
           :to="{name:'Job',params:{id:job.id}}"
           class="job-link"
          >
        <p>
        会社名：{{ job.company_name }}
        </p>

          </RouterLink>

        </h2>
        <p>仕事名：{{ job.job_title }}</p>
      </div>
    </v-container>
  </div>
</template>

<script>

import {apiService} from "@/common/api.service.js";

export default {
  name: 'Home',
  data() {
    return {
      jobs: []
    }
  },
  methods: {
    getJobs() {
      console.log("呼び出された")
      let endpoint = '/api/jobs/'
      apiService(endpoint).then(data => {
        console.log(data)
        this.jobs.push(...data)
      }).catch(e => {
        console.log(e)
      })
    },
  },
    created() {
    this.getJobs()
      document.title ='Job Board'
  }
}
</script>

<style scoped>
  .job-link:hover{
    color: #41B883;
  }

</style>
