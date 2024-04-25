import Navbar from "./components/navbar/Navbar";


const Root = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1a",
            height: "100vh"
        }}>
            <Navbar/>
        </div>
    )
}

export default Root;