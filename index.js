document.addEventListener('alpine:init', () =>{

    Alpine.data('rank',()=>{
        return{
            init(){

            },
            mainRank: 'Johannesburg CBD',
            ranks: [
                {
                    destination: 'Midrand',
                    limit: 10,
                    queue: 0,
                    taxifare: 25,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    taxiLimit() {
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
                        }

                    }
                },
                {
                    destination: 'Sandton',
                    limit: 10,
                    queue: 0,
                    taxifare: 20,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    taxiLimit() {
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
                        }

                    }
                },
                {
                    destination: 'Rosebank',
                    limit: 10,
                    queue: 0,
                    taxifare: 18,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    taxiLimit() {
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
                        }

                    }
                },
                {
                    destination: 'Pretoria',
                    limit: 10,
                    queue: 0,
                    taxifare: 45,
                    trips: 0,
                    taxis: 5,
                    totalFare() {
                        return Number(this.queue) * Number(this.taxifare)
                    },
                    taxiLimit() {
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
                        }

                    }
                },
            ]
        }
    })
})

$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();