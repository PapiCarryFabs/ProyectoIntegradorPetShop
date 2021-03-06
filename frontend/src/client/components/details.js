import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./button";

export default class details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="caja">
              <div className="container py-5">
                {/*title*/}
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
                {/*end title*/}
                {/*Product info*/}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  {/*Product text*/}
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Compañia: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4>
                      <strong>
                        Precio: <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Más información:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to="/shop">
                        <ButtonContainer>Regresar a la tienda</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "Añadir al carrito"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
