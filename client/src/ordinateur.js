
// import Axios from 'axios'
import compteur from './components/compteur.vue'

export default {

  components: {
    compteur
  },

  props: {
    ord: {
      default: function () {
        return {}
      }

    },
    date: {
      default: function () {
        return []
      }

    },
    clients: {
      default: function () {
        return []
      }
    }
  },

  data() {
    return {
      attributions: [],
      horraires: []
    }
  },

  created() {
    this.initialize()
  },

  methods: {

    initialize() {

      for (let i = 0; i < this.ord.Attributions.length; i++) {
        this.attributions[this.ord.Attributions[i].horraire] =
        {
            'id': this.ord.Attributions[i].id,
            'nom': this.ord.Attributions[i].Client.nom,
            'prenom': this.ord.Attributions[i].Client.prenom
        }
      }

      this.displayHorraire()
    },

    displayHorraire() {
      this.horraires = []
      for (var i = 8; i <= 18; i++) {
        if (this.attributions[i] !== undefined) {
          this.horraires.push(this.attributions[i])
        } else {
          this.horraires.push(i)
        }
      }
    },

    updateAtt(att) {

      this.ord.Attributions.push(att)

      this.attributions[att.horraire] = {
        id: att.id,
        nom: att.client.nom,
        prenom: att.client.prenom
      }



      this.displayHorraire()
    }

  }
}
