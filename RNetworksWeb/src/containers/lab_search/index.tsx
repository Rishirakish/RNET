import React from "react";
import { connect } from "react-redux";
import IAppState from "../../stores/common/state";


class LabSearch extends React.Component<any,any> {
    
    render() {
        return (
            <>
            fjdksfjk
            </>
        )
    }
}


export function mapStateToProps(state: IAppState) {
    console.log(state);
    //initErrorMessage(state.authState);
  }
  
  export function mapDispatchToProps(dispatch: any) {
    return {
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LabSearch);