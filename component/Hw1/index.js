import { useState } from "react";

const Hw1 = () => {

    const [products, setProducts] = useState([{ name: 'A', code: 'a111', price: '1$' }]);

    return (
        <div>
            <div>
                {products.map((item) => {
                    return (
                        <div>
                            <div>Ten: {item.name}</div>
                            <div>Code: {item.code}</div>
                            <div>Gia: {item.price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Hw1;