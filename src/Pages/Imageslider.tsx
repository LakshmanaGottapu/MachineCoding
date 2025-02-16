import Slider from '../Components/Slider'
function Imageslider() {
    const data = [
        {
            image: 'https://images.fineartamerica.com/images-medium-large-5/9-krishnarjuna-tilak-shetty.jpg',
            description: ''
        },
        {
            image: 'https://images.fineartamerica.com/images/artworkimages/medium/3/sri-krishnarjuna-pamarthi-siva-naga-rao.jpg',
            description: ''
        },
        // {
        //     image: 'https://media.gettyimages.com/id/538132746/photo/painting-made-at-iskcon-mayapura-india-krishna-and-arjuna-on-the-battlefield-of-kuruksetra.jpg?s=612x612&w=gi&k=20&c=8spYYg8dEZbPCYFjD2EYbD3cfMSBRR9z6tzuwC_lcHo=',
        //     description: ''
        // },
        // {
        //     image: 'https://rukminim2.flixcart.com/image/850/1000/kqzj7gw0/sticker/w/b/l/mahabharat-rath-krishna-arjuna-religious-god-wall-sticker-medium-original-imag4vxrysggzdqb.jpeg?q=90&crop=false',
        //     description: ''
        // },
        // {
        //     image: 'https://nectarnuggets.wordpress.com/wp-content/uploads/2021/02/krishnarjuna.jpg',
        //     description: ''
        // },
    ]
    return (<Slider data={data} />)
}

export default Imageslider
