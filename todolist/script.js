const App = {

    methods: {


        handleInput: function (event) {
            event.preventDefault()
            
            const infos = {
                datatache: this.infos.datatache,
                statut: "créée",
                bool: false,


            };
            this.list.push(infos)
            this.resetFields()
                 },

        resetFields: function () {

            this.infos.datatache = "";
                },

        isoktodisplay: function () {

            if (this.infos.statut == "créée") {
                return true


            } else {
                return false
            }
        },

        modifyTache: function (found) {
            found.bool = true
            console.log("modifyinfos", found)                  
        },

        valid:function(found){
            found.bool = false
        },

        deleteTache: function (look) {
            const index = this.list.indexOf(look)
            this.list.splice(index, 1)
            console.log("indexmodify", index)         
            
        },

        changeTache: function (change) {
               change.statut= "encours" 
               console.log("change", change)    
            
        },
        changeTachefini: function (changefini) {
               changefini.statut= "fini" 
               console.log("change", changefini)    
            
        },
    },

    data() {
        return {
            list: [],
            infos: {
                datatache: ""
            }


        }
    },

    computed: {




    },



}


Vue.createApp(App).mount('#root')
