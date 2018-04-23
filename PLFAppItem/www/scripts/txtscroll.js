
const vm = new Vue({
    el: ".vueBox",
    data: {
        animate: false,
        marqueeList: [
            {
                txt: '第一段文字',
                amount: '10'
            },
            {
                txt: '第二段文字',
                amount: '20'
            },
            {
                txt: '第三段文字',
                amount: '30'
            }
        ]
    },
    created: function () {
        setInterval(this.showMarquee, 2000)
    },
    methods: {
        showMarquee: function () {
            this.animate = true;
            setTimeout(() => {
                this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate = false;
            }, 500)
        },
    }
});