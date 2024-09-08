import { Box} from "@mui/material"
import Header from "./Header"
import { Outlet } from "react-router-dom"



function AppLayout() {

    return (
      <>
        <Box>
            <Header/>
            <Box sx={{minHeight:"80vh",paddingX : {xs : 0.5 , sm : 2 , py : 2},  pt : 2}}>
                <Outlet/>
            </Box>

        </Box>
        </>
    )
}

export default AppLayout
