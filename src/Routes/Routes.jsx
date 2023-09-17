import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home/Home";
import New from "../Pages/Home/Home/Buttons/AllBtns/New/New";
import DiningTable from "../Pages/Home/Home/Buttons/AllBtns/DiningTable/DiningTable";
import DiningChair from "../Pages/Home/Home/Buttons/AllBtns/DiningChair/DiningChair";
import ReadingTable from "../Pages/Home/Home/Buttons/AllBtns/ReadingTable/ReadingTable";
import Kitchen from "../Pages/Home/Home/Buttons/AllBtns/Kitchen/Kitchen";
import Chair from "../Pages/Home/Home/Buttons/AllBtns/Chair/Chair";
import BabyTable from "../Pages/Home/Home/Buttons/AllBtns/BabyTable/BabyTable";
import Wardrobe from "../Pages/Home/Home/Buttons/AllBtns/Wardrobe/Wardrobe";
import Door from "../Pages/Home/Home/Buttons/AllBtns/Door/Door";
import Sofa from "../Pages/Home/Home/Buttons/AllBtns/Sofa/Sofa";
import Bed from "../Pages/Home/Home/Buttons/AllBtns/Bed/Bed";
import Login from "../LoginInfo/Login/Login";
import SignUp from "../LoginInfo/SignUp/SignUp";
import PrivateRoute from "../LoginInfo/PrivateRoute/PrivateRoute";
import OrderPage from "../Order/OrderPage/OrderPage";
import DressingTable from "../Pages/Home/Home/Buttons/AllBtns/DressingTable/DressingTable";
import Lamp from "../Pages/Home/Home/Buttons/AllBtns/Lamp/Lamp";
import Living from "../Pages/Home/Home/Buttons/AllBtns/Living/Living";
import Mirror from "../Pages/Home/Home/Buttons/AllBtns/Mirror/Mirror";
import RockingChair from "../Pages/Home/Home/Buttons/AllBtns/RockingChair/RockingChair";
import ShoeTable from "../Pages/Home/Home/Buttons/AllBtns/ShoeTable/ShoeTable";
import SideTable from "../Pages/Home/Home/Buttons/AllBtns/SideTable/SideTable";
import TeaTable from "../Pages/Home/Home/Buttons/AllBtns/TeaTable/TeaTable";
import TvStand from "../Pages/Home/Home/Buttons/AllBtns/TvStand/TvStand";
import Office from "../Pages/Home/Home/Buttons/AllBtns/Office/Office";
import DashBoard from "../LayOut/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import ReserVation from "../Pages/DashBoard/Reservation/ReserVation";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/new",
                element: <New></New>,
            },
            {
                path: "/bookself",
                element: <New></New>,
            },
            {
                path: "/readingTable",
                element: <PrivateRoute><ReadingTable></ReadingTable></PrivateRoute>,
            },
            {
                path: "/rockingChair",
                element: <RockingChair></RockingChair>,
            },
            {
                path: "/shoeTable",
                element: <ShoeTable></ShoeTable>,
            },
            {
                path: "/sideTable",
                element: <SideTable></SideTable>,
            },
            {
                path: "/diningChair",
                element: <DiningChair></DiningChair>,
            },
            {
                path: "/diningTable",
                element: <DiningTable></DiningTable>,
            },
            {
                path: "/kitchen",
                element: <Kitchen></Kitchen>,
            },
            {
                path: "/lamp",
                element: <Lamp></Lamp>,
            },
            {
                path: "/living",
                element: <Living></Living>,
            },
            {
                path: "/mirror",
                element: <Mirror></Mirror>,
            },
            {
                path: "/office",
                element: <Office></Office>,
            },
            {
                path: "/chair",
                element: <Chair></Chair>,
            },
            {
                path: "/BabyTable",
                element: <BabyTable></BabyTable>,
            },
            {
                path: "/wardrobe",
                element: <Wardrobe></Wardrobe>,
            },
            {
                path: "/door",
                element: <Door></Door>,
            },
            {
                path: "/dressingTable",
                element: <DressingTable></DressingTable>,
            },
            {
                path: "/sofa",
                element: <Sofa></Sofa>,
            },
            {
                path: "/teaTrolly",
                element: <TeaTable></TeaTable>,
            },
            {
                path: "/tvStand",
                element: <TvStand></TvStand>,
            },
            {
                path: "/bed",
                element: <Bed></Bed>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },
            {
                path: "/orderPage/:id",
                element: <OrderPage></OrderPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/furniture/${params.id}`)
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children:[
            {
                path: "mycart",
                element: <MyCart></MyCart>,
            },
            {
                path: "userHome",
                element: <UserHome></UserHome>,
            },
            {
                path: "reservation",
                element: <ReserVation></ReserVation>,
            },
        ]
    },
]);