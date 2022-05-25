document.addEventListener('alpine:init', () => {

    Alpine.data('rank', function () {
        return {
            open: this.$persist(false),
            init() {
            },
            mainRank: 'Joburg CBD',
            show: false,
            input1: "",
            input2: "",
            ranks: [
                {
                    destination: 'Brixton',
                    queue: 0,
                    limit: 10,
                    total: 0,
                    taxifare: 20,
                    trips: 0,
                    taxis: 5,
                },
                {
                    destination: 'Midrand',
                    limit: 10,
                    queue: 0,
                    total: 0,
                    taxifare: 25,
                    trips: 0,
                    taxis: 5,

                },
                {
                    mainRank: 'Joburg CBD',
                    destination: 'Sandton',
                    limit: 10,
                    queue: 0,
                    total: 0,
                    taxifare: 20,
                    trips: 0,
                    taxis: 5,
                }
            ],
        
            totalFare(destination) {
                return Number(destination.queue) * Number(destination.taxifare)
            },

            addToQueue(destination) {
                console.log(destination.queue);
                destination.queue++
                if (destination.queue >= destination.limit) {
                    alert('Taxi is Full and Ready to Leave')
                }
            },
            leaveQueue(destination) {
                if (destination.queue >= 1) {
                    destination.queue--
                } else {
                    alert('Invalid-Action')
                }
            },
            leave(destination) {

                if (destination.queue < destination.limit) {
                    alert('Add More Passengers')
                } else {
                    destination.trips++
                    destination.taxis--
                     destination.queue = 0,

                    destination.total = (destination.limit * destination.taxifare) * destination.trips

                }

            },
            grandTotal() {
                let total = 0

                for (let index = 0; index < this.ranks.length; index++) {
                    const element = this.ranks[index];
                    total += this.totalFare(element)
                }
                return total
            }

        }

    })
})
