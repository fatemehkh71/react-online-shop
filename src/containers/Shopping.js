import React from "react"

import Controls from "../components/Controls/Controls"
import Modal from "../components/UI/Modal/Modal"
import Wrapper from "../hoc/Wrapper"

const prices = {
    product1: 50,
    product2: 60,
    product3: 70,
    product4: 80,
    product5: 90,
}

class Shopping extends React.Component {
    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
            product5: 0,
        },
        totalPrice: 0,
        orders: false
    }

    addProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount + 1

        const prevTotalPrice = this.state.totalPrice
        const updatedTotalPrice = prevTotalPrice + prices[type]

        const updatedProducts = { ...this.state.products }
        updatedProducts[type] = updatedCount

        this.setState({ products: updatedProducts, totalPrice: updatedTotalPrice })
    }

    removeProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount - 1

        const prevTotalPrice = this.state.totalPrice
        const updatedTotalPrice = prevTotalPrice - prices[type]

        const updatedProducts = { ...this.state.products }
        updatedProducts[type] = updatedCount

        this.setState({ products: updatedProducts, totalPrice: updatedTotalPrice })
    }

    orderHandler = () => {
        this.setState({ orders: true })
    }

    closeModalHandler = () => {
        this.setState({ orders: false })
    }

    render() {
        return (
            <Wrapper>
                <Controls 
                    products={this.state.products} 
                    price={this.state.totalPrice}
                    addProduct={this.addProductHandler}
                    removeProduct={this.removeProductHandler}
                    order={this.orderHandler}
                />
                <Modal
                    products={this.state.products}
                    show={this.state.orders}
                    price={this.state.totalPrice}
                    closeModal={this.closeModalHandler}
                />
            </Wrapper>
        )
    }
}

export default Shopping