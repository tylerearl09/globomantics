import Banner from "./banner";
import HouseList from "./houseList"
const App = ()=> {
    const jsx = <div>Hi</div>
    return (
        <>
            {jsx}
            <Banner>
                <div>Providing Houses all over the World</div>
            </Banner>
            <HouseList/>
        </>
    )
};

export default App;