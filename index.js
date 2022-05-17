document.addEventListener('alpine:init', () =>{

    Alpine.data('rank',function(){
        return{
            open: this.$persist(false),
            init(){
            },

      fields: [],
      addNewField() {
          this.fields.push({
            //   txt1: '',
            //   txt2: ''
           });
        },
        removeField(index) {
            this.fields.splice(index, 1);
          },
            mainRank: 'Joburg CBD',
            queue: 0,
            limit: 10,
            total: 0,
            taxifare: 20,
            trips: 0,
            taxis: 5,
            totalFare() {
                return Number(this.queue) * Number(this.taxifare)
            },
            addToQueue() {
                this.queue++
                if (this.queue >= this.limit) {
                    alert('Taxi is Full and Ready to Leave')
                }
            },
            leaveQueue() {
                if (this.queue >= 1) {
                    this.queue--
                } else {
                    alert('Invalid-Action')
                }
            },
            leave() {

                if (this.queue < this.limit ) {
                    alert('Add More Passengers')
                } else {
                    this.trips++
                    this.taxis--
                    this.queue -= this.limit
                    this.total = (this.limit * this.taxifare) * this.trips
                    
                }

            },
            ranks: [
                {
                    destination: 'Midrand',
                    limit: 10,
                    queue: 0,
                    total: 0,
                    taxifare: 25,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    addToQueue() {
                        this.queue++
                        if (this.queue >= this.limit) {
                            alert('Taxi is Full and Ready to Leave')
                        }
                    },
                    leaveQueue() {
                        if (this.queue >= 1) {
                            this.queue--
                        } else {
                            alert('Invalid-Action')
                        }
                    },
                    leave() {

                        if (this.queue < this.limit ) {
                            alert('Add More Passengers')
                        } else {
                            this.trips++
                            this.taxis--
                            this.queue -= this.limit
                            this.total = (this.limit * this.taxifare) * this.trips
                            
                        }

                    }
                },
                {
                    destination: 'Sandton',
                    limit: 10,
                    queue: 0,
                    total: 0,
                    taxifare: 20,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    addToQueue() {
                        this.queue++
                        if (this.queue >= this.limit) {
                            alert('Taxi is Full and Ready to Leave')
                        }
                    },
                    leaveQueue() {
                        if (this.queue >= 1) {
                            this.queue--
                        } else {
                            alert('Invalid-Action')
                        }
                    },
                    leave() {

                        if (this.queue < this.limit ) {
                            alert('Add More Passengers')
                        } else {
                            this.trips++
                            this.taxis--
                            this.queue -= this.limit
                            this.total = (this.limit * this.taxifare) * this.trips
                        }

                    }
                },
                {
                    destination: 'Rosebank',
                    limit: 10,
                    queue: 0,
                    total: 0,
                    taxifare: 18,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    addToQueue() {
                        this.queue++
                        if (this.queue >= this.limit) {
                            alert('Taxi is Full and Ready to Leave')
                        }
                    },
                    leaveQueue() {
                        if (this.queue >= 1) {
                            this.queue--
                        } else {
                            alert('Invalid-Action')
                        }
                    },
                    leave() {

                        if (this.queue < this.limit ) {
                            alert('Add More Passengers')
                        } else {
                            this.trips++
                            this.taxis--
                            this.queue -= this.limit
                            this.total = (this.limit * this.taxifare) * this.trips
                        }

                    }
                },
                {
                    destination: 'Pretoria',
                    limit: 10,
                    queue: 0,
                    total: 0,
                    taxifare: 45,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    addToQueue() {
                        this.queue++
                        if (this.queue >= this.limit) {
                            alert('Taxi is Full and Ready to Leave')
                        }
                    },
                    leaveQueue() {
                        if (this.queue >= 1) {
                            this.queue--
                        } else {
                            alert('Invalid-Action')
                        }
                    },
                    leave() {

                        if (this.queue < this.limit ) {
                            alert('Add More Passengers')
                            console.log(this.totalFare())
                        } else {
                            this.trips++
                            this.taxis--
                            this.queue -= this.limit
                            this.total = (this.limit * this.taxifare) * this.trips
                        }

                    }
                },
                {
                    destination: 'Soweto',
                    limit: 10,
                    queue: 0,
                    total: 0,
                    taxifare: 20,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    addToQueue() {
                        this.queue++
                        if (this.queue >= this.limit) {
                            alert('Taxi is Full and Ready to Leave')
                        }
                    },
                    leaveQueue() {
                        if (this.queue >= 1) {
                            this.queue--
                        } else {
                            alert('Invalid-Action')
                        }
                    },
                    leave() {

                        if (this.queue < this.limit ) {
                            alert('Add More Passengers')
                        } else {
                            this.trips++
                            this.taxis--
                            this.queue -= this.limit
                            this.total = (this.limit * this.taxifare) * this.trips
                        }

                    }
                },
                {
                    destination: 'Roodeport',
                    limit: 10,
                    queue: 0,
                    total: 0,
                    taxifare: 18,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    addToQueue() {
                        this.queue++
                        if (this.queue >= this.limit) {
                            alert('Taxi is Full and Ready to Leave')
                        }
                    },
                    leaveQueue() {
                        if (this.queue >= 1) {
                            this.queue--
                        } else {
                            alert('Invalid-Action')
                        }
                    },
                    leave() {

                        if (this.queue < this.limit ) {
                            alert('Add More Passengers')
                            
                        } else {
                            this.trips++
                            this.taxis--
                            this.queue -=  this.limit
                            this.total = (this.limit * this.taxifare) * this.trips
                            
                        }

                    }
                },
            ]

        }

        
    })
})
