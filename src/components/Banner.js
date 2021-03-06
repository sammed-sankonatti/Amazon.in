
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative" >
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 " />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Dice-Media--MBBS-Web-series---Graphics_1500x600._CB665320173_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/JUNE/PC/2._CB667373073_.jpg" alt="" />
                </div>
                 <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/GW/Event_hero_Teaser_PC_1500X600_eng._CB664069228_.jpg" alt="" />
                </div>
                 <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Heros/D24082897_IN_CEPC_Graphics_3000x12000.5x._CB664256932_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/July/Headset_Days_July/GW/D25641575_WLA_Headset_Days_July_Tall_Hero_1500x600._CB664782644_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Test/IQOO__ad_test_1500-x-600_updated._CB665297553_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/Jun21/D23947948_IN_CEPC_Clearance_store_May21_rush_3000x12000.5x._CB665291878_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_1500x600._CB661592357_.jpg" alt="" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner;
