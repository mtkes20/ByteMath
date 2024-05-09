import Navbar from "./components/navbar/Navbar";
import BinarySystemContent from "./components/binary-system/BinarySystemContent";


const Root = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1a",
            height: "100vh"
        }}>
            <Navbar/>
            {/*TODO component according to routing*/}
            <BinarySystemContent/>
        </div>
    )
}

export default Root;