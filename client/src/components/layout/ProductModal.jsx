// product name
// categories, subcategories
// description

function ProductCard() {
    return (
        <div className="productCard">
            <div className="productCard_body">
                <img src=""/>
                <h2 className="productCard_name"></h2>
                <p className="productCard_description"></p>
            </div>
            <button className="viewModal_btn"></button>
            <button className="viewPage_btn"></button>
        </div>
    );
};

// fetch w axios product data and what nots
// where fetches go
// set state
// get products
// useEffect
// only once per component