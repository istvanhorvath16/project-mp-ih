import React, { Suspense } from 'react';
import Title from '../title/Title';
import CardList from '../cardList/CardList';
import SkeletonLoader from '../skeletonLoader/SkeletonLoader';
import { hobbies } from './../../@fake-db/db/hobbies-db';
import withCustomScroll from '../../hoc/withCustomScroll';
import './HobbiesSide.scss';

const Card = React.lazy(() => import('../card/Card'));

class HobbiesSide extends React.Component{

    state = {
        hobbies
    }

    render(){
        return(
            <>
                <Title>Hobbies</Title>
                <CardList>
                    {
                        this.state.hobbies.map(item => (
                            <Suspense key={item.id} fallback={<SkeletonLoader />}>
                                <Card {...item} />
                            </Suspense>
                        ))
                    }
                </CardList>
            </>
        );
    }
}

export default withCustomScroll(HobbiesSide);