
import Product from './Product';

function ProductFeed( {products} ) {
    return (
        <div className=" grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto" >
            { products.slice(0,4).map(( { id, title, price, description, category, image } ) =>(
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )) }

        <img className="md:col-span-full" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" alt="banner-middle" />

        <div className="md:col-span-2" >
        { products.slice(4,5).map(( { id, title, price, description, category, image } ) =>(
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )) }
        </div>       

             { products.slice(5,11).map(( { id, title, price, description, category, image } ) =>(
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )) }

             <img className="md:col-span-full" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" alt="banner-middle" />

                <div className="md:col-span-2" >
        { products.slice(11,12).map(( { id, title, price, description, category, image } ) =>(
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )) }
        </div>   
        <div className="md:col-span-2" >
        { products.slice(12,14).map(( { id, title, price, description, category, image } ) =>(
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )) }
        </div>   

            { products.slice(14,products.length).map(( { id, title, price, description, category, image } ) =>(
                <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )) }

        </div>
    )
}

export default ProductFeed;
