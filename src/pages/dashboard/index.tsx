import { useSelector } from "react-redux";

const Index = () => {

    const products = useSelector((state: any) => state.product);
    console.log("PRODUCTS: ", products);
    

    return (<div>Dashboard</div>);
}

export default Index;