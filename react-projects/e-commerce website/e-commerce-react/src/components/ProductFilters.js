import React from "react";
import "../styles/ProductFilters.css";
import CollectionsFilter from "./productFilters/CollectionsFilter";
import ColorFilter from "./productFilters/ColorFilter";
import PriceFilter from "./productFilters/PriceFilter";
import ProductTypeFilter from "./productFilters/ProductTypeFilter";
import SizeFilter from "./productFilters/SizeFilter";
import TagsFilter from "./productFilters/TagsFilter";
import VendorFilter from "./productFilters/VendorFilter";

const ProductFilters = () => {
  return (
    <div className="filters__container">
      <div className="collection__filter">
        <div className="filter__title">
          <h4>Collections</h4>
        </div>
        <form className="filters__names">
          <CollectionsFilter
            forId={"women's"}
            filterName={"Women's"}
            id={() => Math.random() * 20000}
          />
          <CollectionsFilter
            forId={"mens"}
            filterName={"Mens"}
            id={() => Math.random() * 20000}
          />
          <CollectionsFilter
            forId={"Trending"}
            filterName={"Trending"}
            id={() => Math.random() * 20000}
          />
          <CollectionsFilter
            forId={"Best Seller"}
            filterName={"Best Seller"}
            id={() => Math.random() * 20000}
          />
        </form>
      </div>
      <div className="product__filter">
        <div className="filter__title">
          <h4>Product Type</h4>
        </div>
        <form className="filters__names">
          <ProductTypeFilter
            forId={"dress"}
            filterName={"Dress"}
            id={() => Math.random() * 20000}
          />
          <ProductTypeFilter
            forId={"jeans"}
            filterName={"Jeans"}
            id={() => Math.random() * 20000}
          />
          <ProductTypeFilter
            forId={"polo"}
            filterName={"Polo"}
            id={() => Math.random() * 20000}
          />
          <ProductTypeFilter
            forId={"shirt"}
            filterName={"Shirt"}
            id={() => Math.random() * 20000}
          />
          <ProductTypeFilter
            forId={"shoes"}
            filterName={"Shoes"}
            id={() => Math.random() * 20000}
          />
          <ProductTypeFilter
            forId={"sunglasses"}
            filterName={"Sunglasses"}
            id={() => Math.random() * 20000}
          />
          <ProductTypeFilter
            forId={"sweater"}
            filterName={"Sweater"}
            id={() => Math.random() * 20000}
          />
        </form>
      </div>
      <div className="color__filter">
        <div className="filter__title">
          <h4>Color</h4>
        </div>
        <form className="filter__colors">
          <ColorFilter background={"FFB300"} id={() => Math.random() * 20000} />
          <ColorFilter background={"FE5625"} id={() => Math.random() * 20000} />
          <ColorFilter background={"FF0057"} id={() => Math.random() * 20000} />
          <ColorFilter background={"00C2FF"} id={() => Math.random() * 20000} />
          <ColorFilter background={"00FF80"} id={() => Math.random() * 20000} />
          <ColorFilter background={"9A00FF"} id={() => Math.random() * 20000} />
          <ColorFilter background={"2583FE"} id={() => Math.random() * 20000} />
        </form>
      </div>
      <div className="size__filter">
        <div className="filter__title">
          <h4>Size</h4>
        </div>
        <form className="filter__sizes">
          <SizeFilter size={"S"} id={() => Math.random() * 20000} />
          <SizeFilter size={"M"} id={() => Math.random() * 20000} />
          <SizeFilter size={"L"} id={() => Math.random() * 20000} />
        </form>
      </div>
      <div className="price__filter">
        <div className="filter__title">
          <h4>Price</h4>
        </div>
        <form className="filters__names">
          <PriceFilter
            forId={"minimum size"}
            price={"$10-100"}
            id={() => Math.random() * 20000}
          />
          <PriceFilter
            forId={"mid size"}
            price={"$300-400"}
            id={() => Math.random() * 20000}
          />
          <PriceFilter
            forId={"maximum size"}
            price={"$400-500"}
            id={() => Math.random() * 20000}
          />
        </form>
      </div>
      <div className="vendor__filter">
        <div className="filter__title">
          <h4>Vendor</h4>
        </div>
        <form className="filters__names">
          <VendorFilter
            forId={"gap"}
            filterName={"Gap"}
            id={() => Math.random() * 20000}
          />
          <VendorFilter
            forId={"guess"}
            filterName={"Guess"}
            id={() => Math.random() * 20000}
          />
          <VendorFilter
            forId={"lacoste"}
            filterName={"Lacoste"}
            id={() => Math.random() * 20000}
          />
          <VendorFilter
            forId={"levi's"}
            filterName={"Levi's"}
            id={() => Math.random() * 20000}
          />
          <VendorFilter
            forId={"poloVendor"}
            filterName={"Polo"}
            id={() => Math.random() * 20000}
          />
          <VendorFilter
            forId={"zara"}
            filterName={"Zara"}
            id={() => Math.random() * 20000}
          />
        </form>
      </div>
      <div className="Tags__filter">
        <div className="filter__title">
          <h4>Tags</h4>
        </div>
        <div className="filter__tags">
          <TagsFilter tagName={"Vintage"} id={() => Math.random() * 20000} />
          <TagsFilter tagName={"Awesome"} id={() => Math.random() * 20000} />
          <TagsFilter tagName={"Summer"} id={() => Math.random() * 20000} />
          <TagsFilter tagName={"Beachwear"} id={() => Math.random() * 20000} />
          <TagsFilter tagName={"Sunglasses"} id={() => Math.random() * 20000} />
          <TagsFilter tagName={"Winter"} id={() => Math.random() * 20000} />
          <TagsFilter tagName={"Shorts"} id={() => Math.random() * 20000} />
          <TagsFilter tagName={"Cool"} id={() => Math.random() * 20000} />
          <TagsFilter tagName={"Nice"} id={() => Math.random() * 20000} />
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
