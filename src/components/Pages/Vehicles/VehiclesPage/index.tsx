import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from "../../../../services/api";

import isLoadingSVG from '../../../../assets/Loading/Spinner-1s-200px.svg';

import { NavBar } from '../../../../components/NavBar';
import { SideBar } from '../../../../components/SideBar';


import { Vehicle } from './Vehicle';
import { Pilots } from './Pilots';
import { Films } from './Films';

import {
    //Default Styles
    PageContainer,
    //Loading SVG
    IsLoadingImg,
} from '../../../../styles/global';

export interface VehiclesPageDataProps {
    name?: string;
    model?: string;
    manufacturer?: string;
    cost_in_credits?: string;
    lenght?: string;
    max_atmosphering_speed?: string;
    crew?: string;
    passengers?: string;
    cargo_capacity?: string;
    consumables?: string;
    vehicle_class?: string;
    pilots: [] | string;
    films: [] | string;
}

export interface VehiclesPageProps {
    index?: number,
    data: VehiclesPageDataProps
}


export const VehiclesPage = (
    pilots: string,
    films: string,
) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        pilots,
        films,
    })

    const { vehiclesUrl } = useParams()

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (!vehiclesUrl) return
        setLoading(true)
        api
            .get(
                `vehicles/${vehiclesUrl}`
            )
            .then(response => {
                setLoading(false)
                setData(response.data)
            })
    }, []);

    if (!data) {
        return setLoading(true)
    }

    if (loading) {
        return (
            <>
                <IsLoadingImg src={isLoadingSVG} />
            </>
        )
    }

    if (data) {
        return (
            <PageContainer>
                <NavBar toggle={toggle} />
                <SideBar isOpen={isOpen} toggle={toggle} />
                <Vehicle data={data} />
                <Pilots data={data} />
                <Films data={data} />
            </PageContainer>

        )
    }
}