import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";

it ("Should load header with a log in button" , () => {
    render(
    <Provider store={AppStore}>
        <Header/>
    </Provider>

);

})