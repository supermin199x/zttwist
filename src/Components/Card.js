import React,{useState} from 'react';
import "../Components/Card.css";

const Card = () => {

    const [data, setData] = useState({
        title: '00',
    });

    const setName = () => {
        setData({
            title: 'Machine ALL'
        });
    }


    return (
        <div>
            <div className={'card'}>
                <div className={'card-show-all'}>
                    <p className={'card-h-all'}>
                        <label onLoad={setName}>{data.title}</label>
                    </p>
                    <p className={'card-b'}>
                        <label>หมายเลขเครื่อง : 1</label>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;
