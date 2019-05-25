import FlickitySlider from 'vue-flickity';

export default {
    components: {
        FlickitySlider,
    },

    data() {
        return {
            flickityOptions: {
                initialIndex: 3,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                draggable: false,
                cellAlign: 'left',
                autoPlay: 2000,
            },
            images: [
                {
                    src: 'https://static.intercomassets.com/avatars/1492983/square_128/Aryna_Photo-1541866398.jpg?1541866398',
                },
                {
                    src: 'https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1',
                },
                {
                    src: 'https://www.structurabodytherapies.com/wp-content/uploads/2018/08/Profile-Interview-Photo-Sara-f.jpg',
                },
                {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdj7teTVovviYQuAJpZEhVfRpAaKx66PZece4utzIYel1qhB2',
                },
                {
                    src: 'https://www.elitsinglar.se/sites/www.elitsinglar.se/files/dejtingsidor_tips1.jpg',
                },
                {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYty8eIlpnMeJ744ysQXfbp8ctzVf7SkjG1Z4syDLzuX0OxXep',
                },
            ],
        }
    },
};
