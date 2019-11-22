import React, { Component } from 'react'
import { Text, View } from 'react-native'

export const AppContext = React.createContext()

class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'try'
        }
    }
    render() {
        return (
            <AppContext.Provider
                value={{
                    getData: this.state.data,
                    setData: (data) => this.setState({ data })
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
const AppContextConsumer = AppContext.Consumer

export default AppProvider
export { AppContextConsumer }