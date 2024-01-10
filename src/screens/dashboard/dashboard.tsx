import React from "react";
import { Container} from "../../components";
import messages from "../../messages";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";



const Dashboard = () => {

    return (
        <Container
            heading={messages?.dashboard?.heading}
        >
        </Container>
    )
}

export default Dashboard;