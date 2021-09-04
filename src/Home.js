import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className className= 'home' >
            <img  className ='homeImg' src ='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_LPHeader_Gamers_en_US.png' alt =''/>
            <div className = 'homeRow'>
            <Product id={7778}
                    title={'Dell Inspiron 15 3567 Laptop (Core i7 7th Gen/8 GB/1 TB/Windows 10/2 GB) - W5651133'}

                price={200}
                rating={3}
                    img={'https://pngimg.com/uploads/laptop/laptop_PNG101763.png'} />
               <Product id={12}
                    title={'Fresh Apple from Farms China Impoted Big Size (prize is for per 10 KG) - W2122FGF'}
                price={7}
                rating={4}
                    img={'https://pngimg.com/uploads/apple/apple_PNG12490.png'} />    
            </div>
            <div>
            <Product id={12321}
                title={'CyberpowerPC Gamer Xtreme VR Gaming PC, Intel i5-10400F 2.9GHz, GeForce GTX 1660 Super 6GB, 8GB DDR4, 500GB NVMe SSD'}
                price={140}
                rating={4}
                    img={'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7702.png'} />
            </div>
            <div className = 'homeRow'>
            <Product id={12348}
                    title={'Dell Inspiron 15 3567 Laptop (Core i7 7th Gen/8 GB/1 TB/Windows 10/2 GB) - W5651133'}
                price={200}
                rating={3}
                    img={'https://pngimg.com/uploads/laptop/laptop_PNG101763.png'} />
             
                <Product id={432}
                title={'Logitech B100 Corded Mouse – Wired USB Mouse for Computers and laptops, for Right or Left Hand Use, Black'}
                price={10}
                rating={5}
                img={'https://pngimg.com/uploads/computer_mouse/computer_mouse_PNG7672.png'} />
            </div>
            <div className = 'homeRow'>
         
                <Product id={87}
                title={'DIGITEK® (LP E12) Lithium-ion Rechargeable Battery Pack for Canon DSLR Camera | Compatibility - EOS M Series, Rebel Sl1, 100D, Kiss M, Kiss X7 SLRDIGITEK® (LP E12) Lithium-ion Rechargeable Battery Pack'}
                price={22}
                rating={3}
                img={'https://pngimg.com/uploads/battery/battery_PNG11984.png'} />
            </div>
        </div>
    )
}

export default Home

//'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7702.png'
//'https://pngimg.com/uploads/computer_mouse/computer_mouse_PNG7672.png'
//'https://pngimg.com/uploads/apple/apple_PNG12490.png'