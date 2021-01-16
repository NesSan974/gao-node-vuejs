
// import modalAddOrd from './components/modalAddOrd.vue'

import Axios from 'axios'

export default {

  data () {
    return {
      dialog: false,
      ordiNom: ''
    }
  },

  created () {

    // console.log('Component modalAddOrd created.')

  },

  methods: {

    addOrdinateur () {
      Axios
        .post('http://localhost:8080/api/ordinateurs/add', {
          newOrd: this.ordiNom
        })
        .then(({data}) => {
          // console.log(data.nom)
          this.$emit('update', data)
        })
    }
  }
}
