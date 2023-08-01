const Links = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

const llGreenColor = "#495E57";
const llYellowColor = "#F4CE14";
const llDarkYellow = "#d6b614";
const llOrangeColor = "#EE9972";
const llLightOrange = "#FBDAB6";
const llLightBlack = "#333333";
const llGrey = "#EDEFEE";

const specialItemMenu = [
    {title : "Greek Salad", description : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price : "$12.99", image : "images/greek salad.jpg"},
    {
        title : "Bruchetta", description : "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price : "$5.99", image : "images/bruchetta.svg"
    },
    {
        title : "Lemon Dessert", description : "This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined.",
        price : "$5.00", image : "images/lemon dessert.jpg"
    }
];

const testimonialList = [
    {rating : 5, name : "Milhouse Van Houten", image : "https://randomuser.me/api/portraits/men/59.jpg", reviewDesc : "I have tried a few software of this kind and restaurant is the best by far!"},
    {rating : 3, name : "Molly Enderson", image : "https://randomuser.me/api/portraits/women/90.jpg", reviewDesc : "Restaurant makes me more productive and gets the job done in a fraction of the time. I'm glad I found restaurant."},
    {rating : 4, name : "J. Daniels", image : "https://randomuser.me/api/portraits/men/92.jpg", reviewDesc : "Would definitely recommend restaurant and will definitely be ordering again."},
    {rating : 4.5, name : "Whisky Husky", image : "https://randomuser.me/api/portraits/women/31.jpg", reviewDesc : "With restaurant, we have finally accomplished things that have been waiting forever to get done."}
];

export {Links, llGreenColor, llYellowColor, specialItemMenu, llOrangeColor, llLightOrange, llLightBlack, testimonialList, llDarkYellow, llGrey};