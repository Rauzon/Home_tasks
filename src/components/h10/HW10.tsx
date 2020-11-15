import React from "react";
import {CustomButton} from "../common/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {CircularProgress} from "@material-ui/core";
import {loadingAC} from "./bll/loadingReducer";

export function HW10() {

    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {isLoading
                ? (
                    <div style={{padding: '10px'}}>
                        <CircularProgress/>
                    </div>
                ) : (
                    <div>
                        <CustomButton onClick={setLoading} value={"set loading..."}></CustomButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}
