import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";


function GalleryDetails(){


const {category}=useParams();


useEffect(()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

},[]);



const galleries={


leather:[

{
title:"Executive Leather Bags",

images:[
"/images/Leather Bag.jpeg"
]

},


{
title:"Rexine Products",

images:[

"/images/rexine1.jpeg",
"/images/rexin2.jpeg",
"/images/rexine3.jpeg",
"/images/rexine4.jpeg",
"/images/rexine5.jpeg"

],

videos:[

"/videos/rexinevideo1.mp4",
"/videos/rexinevideo2.mp4",
"/videos/rexinevideo3.mp4",
"/videos/rexinevideo4.mp4"

]

},


{
title:"Leather Office Files",

images:[

"/images/Leather files .jpeg",
"/images/Leather files 2.jpeg",
"/images/Leather files3.jpeg"

]

}

],



printing:[

{
title:"Premium Visiting Cards",

images:[

"/images/visiting-card.jpg",
"/images/visiting-card2.jpg",
"/images/visiting-card3.jpg"

]

},


{
title:"UV Printing",

images:[

"/images/uv-printing.jpg",
"/images/uv-printing2.jpg"

]

}

],



school:[

{
title:"School Stationery",

images:[

"/images/School sationary .jpeg",
"/images/School sationary 2.jpeg",
"/images/School sationary3.jpeg",
"/images/School sationary4.jpeg",
"/images/School-stationary .jpeg",
"/images/Pastel sheet .jpeg",
"/images/Pastel sheet2.jpeg",
"/images/Pastel sheet3.jpeg",
"/images/Pastel sheet4.jpeg",
"/images/Pastel sheet5.jpeg",
"/images/Pastel sheet6.jpeg",
"/images/Color.jpeg",
"/images/Color 2.jpeg",
"/images/Color3.jpeg",
"/images/Color4.jpeg",
"/images/Color5.jpeg",
"/images/Color6.jpeg",
"/images/Color7.jpeg",
"/images/Color8.jpeg",
"/images/Color9.jpeg",
"/images/Color10.jpeg",
"/images/Color11.jpeg",
"/images/Color12.jpeg",
"/images/Color13.jpeg",
"/images/Color14.jpeg",
"/images/Color15.jpeg"

]

}

],



office:[

{
title:"Office Stationery",

images:[

"/images/office sattionary .jpeg",
"/images/Plastic folder .jpeg",
"/images/jute photo .jpeg",
"/images/Jute 2.jpeg",
"/images/Jute3.jpeg",
"/images/Jute4.jpeg",
"/images/Jute5.jpeg",
"/images/Paper folder.jpeg",
"/images/Paper folder2.jpeg",
"/images/Paper folder3.jpeg",
"/images/Packing-box.jpeg"

]

}

]


};



const products=galleries[category] || [];


const [preview,setPreview]=useState(null);
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




<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

className="
text-center
mb-16
"

>


<p

className="
text-yellow-500
uppercase
tracking-[5px]
font-semibold
"

>

Our Collection

</p>



<h1

className="
text-4xl
md:text-6xl
font-bold
mt-5
"

>

{category}

<span className="
text-yellow-500
">

 Gallery

</span>


</h1>


<p

className="
text-gray-400
mt-5
max-w-2xl
mx-auto
"

>

Premium quality products with creative designs and professional finishing.

</p>



</motion.div>





{

products.length===0 &&

(

<div

className="
text-center
text-gray-400
text-xl
"

>

No Gallery Found

</div>

)

}





<div

className="
space-y-20
"

>


{

products.map((product,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5
}}

>



<h2

className="
text-3xl
font-bold
mb-8
text-yellow-500
"

>

{product.title}

</h2>





<div

className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
"

>





{/* IMAGES */}


{

product.images?.map((img,i)=>(


<motion.div


key={i}


whileHover={{
y:-8
}}


onClick={()=>setPreview({

type:"image",
src:img

})}


className="
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
cursor-pointer
"

>



<img

src={img}

alt={product.title}

className="
w-full
h-[320px]
object-cover
hover:scale-110
transition
duration-700
"

/>




<div

className="
p-4
bg-black/50
"

>


<h3

className="
font-semibold
"

>

{product.title}

</h3>


</div>



</motion.div>


))

}







{/* VIDEOS */}



{

product.videos?.map((video,i)=>(


<div


key={i}


onClick={()=>setPreview({

type:"video",
src:video

})}


className="
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
cursor-pointer
"

>


<video

className="
w-full
h-[320px]
object-cover
"

controls

>


<source

src={video}

type="video/mp4"

/>


</video>




<div

className="
p-4
bg-black/50
"

>

<h3

className="
font-semibold
"

>

{product.title}

</h3>


</div>



</div>


))

}



</div>


</motion.div>


))

}



</div>




{/* IMAGE / VIDEO PREVIEW MODAL */}


{

preview &&

(

<div

className="
fixed
inset-0
z-[100]
bg-black/90
flex
items-center
justify-center
p-6
"

onClick={()=>setPreview(null)}

>


<button

className="
absolute
top-8
right-8
text-white
text-5xl
"

onClick={()=>setPreview(null)}

>

×

</button>




{

preview.type==="image"

?

(

<img

src={preview.src}

alt="Preview"

className="
max-h-[90vh]
max-w-[95vw]
rounded-3xl
object-contain
border
border-white/20
"

onClick={(e)=>e.stopPropagation()}

/>

)


:

(

<video

controls

autoPlay

className="
max-h-[90vh]
max-w-[95vw]
rounded-3xl
border
border-white/20
"

onClick={(e)=>e.stopPropagation()}

>


<source

src={preview.src}

type="video/mp4"

/>


</video>


)


}



</div>


)


}





</div>


</section>


)


}


export default GalleryDetails;