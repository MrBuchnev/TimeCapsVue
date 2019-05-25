import FlickitySlider from 'vue-flickity';
import FlickityFade from 'flickity-fade';

// eslint-disable-next-line
var flickityFade = new FlickityFade( '.carousel', {
  fade: true,
});

export default {
    components: {
        FlickitySlider,
    },

    data() {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: true,
                pageDots: true,
                wrapAround: false,
                draggable: false,
                fade: true,
                arrowShape: {
                    x0: 35,
                    x1: 60, y1: 30,
                    x2: 65, y2: 30,
                    x3: 40
                }
            },
            cells: [
                {
                    src: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/12/2016/05/AP_Portrait_Landscapes_Stu_Meech-16.jpg',
                    step: '1',
                    text: 'This is the instructions for step 1. This is the instructions for step 1. This is the instructions for step 1.'
                },
                {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dBfw2XG2sJnjDCg__d_MKe-jfeHD6Nuu3Ui8SyBEllsrsL3c',
                    step: '2',
                    text: 'This is the instructions for step 2. This is the instructions for step 2. This is the instructions for step 2.'
                },
                {
                    src: 'https://gtphotographs.files.wordpress.com/2013/05/lakeside-morning-portrait-w.jpg',
                    step: '3',
                    text: 'This is the instructions for step 3. This is the instructions for step 3. This is the instructions for step 3.'
                },
                {
                    src: 'https://i.pinimg.com/originals/b5/41/8d/b5418dcc2ab6efa7fe51d8bffd385343.jpg',
                    step: '4',
                    text: 'This is the instructions for step 4. This is the instructions for step 4. This is the instructions for step 4.'
                },
                {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dBfw2XG2sJnjDCg__d_MKe-jfeHD6Nuu3Ui8SyBEllsrsL3c',
                    step: '5',
                    text: 'This is the instructions for step 5. This is the instructions for step 5. This is the instructions for step 5.'
                },
                {
                    src: 'https://lukecaseyphotography.files.wordpress.com/2014/01/portrait-landscape.jpg',
                    step: '6',
                    text: 'This is the instructions for step 6. This is the instructions for step 6. This is the instructions for step 6.'
                }
            ],
        }
    },
};
