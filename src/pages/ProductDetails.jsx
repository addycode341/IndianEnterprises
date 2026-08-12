import { motion } from "framer-motion";

import {
MessageCircle,
CheckCircle,
ArrowLeft,
Sparkles,
ShieldCheck,
Clock,
Package
} from "lucide-react";

import {
Link,
useParams
} from "react-router-dom";


function ProductDetails(){


const {id}=useParams();



const products=[



// ================= PRINTING =================


{
id:"answer-sheet",
name:"Customized School Answer Sheets",
category:"Printing Services",
image:"/images/answer sheet.png",

description:
"Custom printed school answer sheets with school logo, barcode, serial numbering and high-quality paper.",

details:[
"Premium paper quality",
"Custom design available",
"Bulk orders accepted",
"Fast delivery"
]

},



{
id:"catalogue",
name:"Customized Catalogue Printing",
category:"Printing Services",
image:"/images/catalogue.png",

description:
"Premium product catalogues with glossy or matte finish for businesses and brands.",

details:[
"Premium paper quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},



{
id:"brochure",
name:"Brochure Printing",
category:"Printing Services",
image:"/images/brochure.png",

description:
"Professional brochure printing for marketing and business promotion.",

details:[
"Premium paper quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},



{
id:"tri-folder",
name:"Tri-Fold Brochure",
category:"Printing Services",
image:"/images/tri-folder.png",

description:
"Premium tri-fold brochures designed for restaurants, companies and promotional campaigns.",

details:[
"Premium paper quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},



{
id:"price-list",
name:"Customized Price List",
category:"Printing Services",
image:"/images/pric-list.png",

description:
"Elegant and easy-to-read customized price lists for restaurants, salons and retail stores.",

details:[
"Premium paper quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},



{
id:"tshirt-printing",
name:"Customized T-Shirts",
category:"Printing Services",
image:"/images/printing t-shirt.jpeg",

description:
"High-quality custom T-shirt printing for schools, companies, events and promotional branding.",

details:[
"Premium fabric quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},



{
    id: "cap-printing",
name:"Customized Caps",
category:"Printing Services",
image:"/images/printing t-shirtcap.jpeg",

description:
"Premium logo printed caps for businesses, teams, schools and promotional events.",

details:[
"Premium fabric quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},



{
id: "pen-printing",
name:"Customized Pens",
category:"Printing Services",
image:"/images/pen2.jpeg",

description:
"Corporate branded pens with custom logo printing for giveaways and marketing.",

details:[
"Premium material quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},


{
id:"cup-printing",
name:"Customized Mugs & Cups",
category:"Printing Services",
image:"/images/cup.jpeg",

description:
"Personalized ceramic mugs and cups with company logo, photos or custom designs.",

details:[
"Premium ceramic quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]
},

{
    id:"premium-visiting-card",
    name:"Premium Visiting Cards",
    category:"Printing Services",
    image:"/images/cards.jpeg",

    description:
    "Luxury visiting cards with Gold Foiling, Spot UV, Thermal Lamination, matte or glossy finish for a premium business impression.",  

    details:[

"Premium card material",
"Creative designs",
"Multiple finishes available",
"Fast delivery"
]

},
{
id:"carry-bag",
name:"Customized Carry Bags & Cloth Bags",
category:"Printing Services",
image:"/images/carry-bag.jpeg"
}
,


// ================= OFFICE =================


// ================= OFFICE =================

{
  id: "customized-office-files",
  name: "Customized Office Files",
  category: "Office Stationery",
  image: "/images/customize-files.jpg",

  description:
    "Professional office files customized with company name, logo and branding for corporate requirements.",

  details: [
    "Premium quality material",
    "Company logo and name customization",
    "Professional corporate designs",
    "Durable and long-lasting quality",
    "Multiple sizes available",
    "Bulk orders accepted"
  ]

},

{
  id: "plastic-folders",
  name: "Plastic Folders",
  category: "Office Stationery",
  image: "/images/Plastic folder .jpeg",

  description:
    "Durable plastic folders for safe document storage and professional office use.",

  details: [
    "Durable plastic material",
    "Lightweight and easy to carry",
    "Protects documents from dust and damage",
    "Multiple sizes available",
    "Custom branding available",
    "Bulk orders accepted"
  ]

},

{
  id: "jute-folders",
  name: "Jute Folders",
  category: "Office Stationery",
  image: "/images/jute photo .jpeg",

  description:
    "Premium eco-friendly jute folders with customized designs for businesses and corporate gifting.",

  details: [
    "Premium jute material",
    "Eco-friendly and reusable",
    "Custom logo and branding",
    "Professional natural appearance",
    "Ideal for corporate gifting",
    "Bulk orders accepted"
  ]

},

{
  id: "paper-folders",
  name: "Paper Folders",
  category: "Office Stationery",
  image: "/images/Paper folder.jpeg",

  description:
    "Quality paper folders for offices, institutions and daily document management.",

  details: [
    "Quality paper material",
    "Custom printing available",
    "Company logo and branding",
    "Lightweight and easy to handle",
    "Multiple sizes available",
    "Cost-effective solution"
  ]

},

{
  id: "packing-boxes",
  name: "Packing Boxes",
  category: "Office Stationery",
  image: "/images/Packing-box.jpeg",

  description:
    "Durable packing boxes for office and business use, available in various sizes and designs.",

  details: [
    "Strong and durable construction",
    "Multiple sizes available",
    "Custom dimensions available",
    "Logo and branding customization",
    "Suitable for product packaging",
    "Bulk orders accepted"
  ]

},
// ================= SCHOOL =================


{
id:"school-notebooks",
name:"School Notebooks",
category:"School Stationery",
image:"/images/school-stationery.jpeg",

description:
"Quality notebooks designed for students and schools.",

details:[
"Premium pages",
"Different sizes available",
"School bulk supply",
"Custom printing available"
]

},



{
id:"pastel-sheet",
name:"Pastel Sheet",
category:"School Stationery",
image:"/images/Pastel sheet .jpeg",

description:
"High quality pastel sheets for school projects and art activities.",

details:[
"Vibrant colors",
"Durable material",
"Bulk supply available",
"Custom sizes possible"
]

},



{
id:"art-craft-material",
name:"Art & Craft Materials",
category:"School Stationery",
image:"/images/school-stationery.jpg",

description:
"Complete art and craft supplies for schools and students.",

details:[
"Creative products",
"Project materials",
"Premium quality",
"Bulk orders accepted"
]

},



{
id:"colors",
name:"Colors",
category:"School Stationery",
image:"/images/Color.jpeg",

description:
"Complete range of colors and art materials for students, artists and creative activities.",

details:[
"Vibrant colors",
"Premium quality",
"Art supplies",
"Bulk supply available"
]

},



{
id:"all-school-stationery",
name:"All Types Of School Stationery",
category:"School Stationery",
image:"/images/School-stationary .jpeg",

description:
"Complete school stationery solutions including notebooks, pens, pencils, files and daily student essentials.",

details:[
"Premium quality stationery",
"Notebooks and writing materials",
"Art & craft products available",
"Bulk orders accepted"
]

},





// ================= LEATHER =================



{
id:"leather-office-files",
name:"Leather Office Files",
category:"Leather Products",
image:"/images/Leather files .jpeg",

description:
"Premium leather office files designed for corporate professionals.",

details:[
"Premium leather material",
"Professional finishing",
"Custom branding available",
"Long lasting quality"
]

},



{
id:"executive-leather-bags",
name:"Executive Leather Bags",
category:"Leather Products",
image:"/images/Leather Bag.jpeg",

description:
"Stylish executive leather bags with premium finishing.",

details:[
"Premium leather",
"Strong durability",
"Corporate design",
"Custom orders available"
]

},



{
id:"leather-wallets",
name:"Leather Wallets",
category:"Leather Products",
image:"/images/leather.jpg",

description:
"Elegant leather wallets with professional luxury look.",

details:[
"Quality leather",
"Luxury design",
"Durable material",
"Bulk availability"
]

},



{
id:"card-holders",
name:"Leather Card Holders",
category:"Leather Products",
image:"/images/leather.jpg",

description:
"Premium business card holders for corporate professionals.",

details:[
"Premium finishing",
"Compact design",
"Professional style",
"Custom options"
]

},



{
id:"rexine-products",
name:"Rexine Products",
category:"Leather Products",
image:"/images/rexine1.jpeg",

description:
"High quality rexine products with customized solutions.",

details:[
"Quality material",
"Custom designs",
"Professional finishing",
"Bulk orders"
]

},



{
id:"customized-leather-items",
name:"Customized Leather Items",
category:"Leather Products",
image:"/images/customized-leather.jpg",

description:
"Custom designed leather products according to business needs.",

details:[
"Custom manufacturing",
"Premium quality",
"Unique designs",
"Bulk supply"
]

}



];





// ================= PRODUCT FIND =================


// URL id safe check

let product = products.find(
(item)=>
item.id.toLowerCase().trim() === id?.toLowerCase().trim()
);



// Default details safety

if(product){

product={
...product,
details:
product.details ||
[
"Premium Quality",
"Custom Design Available",
"Bulk Orders Accepted",
"Fast Delivery"
]
};

}





// ================= FEATURES =================


const features=[


{
icon:<ShieldCheck/>,
title:"Premium Quality",
desc:"High quality material and professional finishing."
},


{
icon:<Sparkles/>,
title:"Modern Design",
desc:"Creative solutions with premium appearance."
},


{
icon:<Clock/>,
title:"Fast Delivery",
desc:"Quick processing for business requirements."
},


{
icon:<Package/>,
title:"Bulk Orders",
desc:"Special solutions for large quantity orders."
}


];





// ================= NOT FOUND =================


if(!product){

return(

<div

className="
bg-black
min-h-screen
text-white
flex
items-center
justify-center
text-4xl
"

>

Product Not Found

</div>

)

} 
return(

<section

className="
bg-black
min-h-screen
text-white
pt-32
pb-24
"

>


<div

className="
max-w-7xl
mx-auto
px-6
"

>


{/* BACK BUTTON */}

<Link

to="/indian-enterprises"

className="
inline-flex
items-center
gap-2
text-yellow-500
mb-10
hover:text-yellow-400
transition
"

>

<ArrowLeft size={18}/>

Back

</Link>





<div

className="
grid
lg:grid-cols-2
gap-12
items-center
"

>




{/* PRODUCT IMAGE */}


<motion.div

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.6
}}

>


<div

className="
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
"

>


<img

src={product.image}

alt={product.name}

className="
w-full
h-[500px]
object-cover
"

 />

</div>


</motion.div>







{/* PRODUCT CONTENT */}



<motion.div


initial={{
opacity:0,
x:40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.6
}}


>



<p

className="
text-yellow-500
uppercase
tracking-[4px]
font-semibold
"

>

{product.category}

</p>




<h1

className="
text-4xl
md:text-6xl
font-bold
mt-4
"

>

{product.name}

</h1>





<p

className="
text-gray-400
text-lg
mt-6
leading-relaxed
"

>

{product.description}

</p>







<h2

className="
text-2xl
font-bold
mt-10
mb-5
"

>

Product Features

</h2>





<div

className="
space-y-4
"

>


{

product.details.map((item,index)=>(


<div

key={index}

className="
flex
items-center
gap-3
text-gray-300
"

>


<CheckCircle

size={20}

className="
text-yellow-500
"

/>


{item}


</div>


))

}


</div>







{/* WHATSAPP BUTTON */}



<a


href="https://wa.me/919999999999"


target="_blank"


rel="noreferrer"


className="
mt-10
inline-flex
items-center
gap-3
bg-yellow-500
text-black
px-8
py-4
rounded-full
font-bold
hover:scale-105
transition
"

>


<MessageCircle/>


Get Quote On WhatsApp


</a>





</motion.div>



</div>









{/* FEATURES CARDS */}



<div

className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-5
mt-20
"

>


{

features.map((item,index)=>(


<div

key={index}

className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
hover:border-yellow-500/50
transition
"

>


<div

className="
text-yellow-500
mb-4
"

>

{item.icon}

</div>



<h3

className="
font-bold
text-lg
"

>

{item.title}

</h3>




<p

className="
text-gray-400
text-sm
mt-2
"

>

{item.desc}

</p>



</div>


))


}



</div>





</div>


</section>


)


}


export default ProductDetails;